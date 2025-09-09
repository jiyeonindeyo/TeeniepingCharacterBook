package com.pingbackend.service;

import com.pingbackend.dto.PingDto;
import com.pingbackend.dto.PingImgDto;
import com.pingbackend.entity.Ping;
import com.pingbackend.entity.PingImg;
import com.pingbackend.entity.repository.PingImgRepository;
import com.pingbackend.entity.repository.PingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PingService {

    private final PingImgService pingImgService;
    private final PingRepository pingRepository;
    private final PingImgRepository pingImgRepository;
    private final FileService fileService;

    public List<PingDto> findAll() {
        List<PingDto> pings = new ArrayList<>();

        for(Ping ping : pingRepository.findAll()){
            PingImg pingImg = pingImgRepository.findByPingId(ping.getId()).orElse(null);
            PingDto.PingDtoBuilder pingDtobuilder = PingDto.builder()
                                                            .id(ping.getId())
                                                            .name(ping.getName())
                                                            .season(ping.getSeason())
                                                            .tool(ping.getTool())
                                                            .skill(ping.getSkill());
            if(pingImg != null){
                pingDtobuilder.image(pingImg.getImgUrl());
            }
            pings.add(pingDtobuilder.build());
        }
        return pings;
    }

    public List<PingDto> findBySeason(Integer season) {

        List<PingDto> pings = new ArrayList<>();

        for (Ping ping : pingRepository.findBySeason(season)){
            PingDto pingDto = PingDto.builder()
                    .id(ping.getId())
                    .name(ping.getName())
                    .season(ping.getSeason())
                    .tool(ping.getTool())
                    .skill(ping.getSkill())
                    .build();
            pings.add(pingDto);
        }
        return pings;

    }

    public PingDto addPing(PingDto pingDto, MultipartFile file) throws Exception {
        Ping ping = Ping.builder()
                        .name(pingDto.getName())
                        .season(pingDto.getSeason())
                        .tool(pingDto.getTool())
                        .skill(pingDto.getSkill())
                        .build();
        Ping savedPing = pingRepository.save(ping);

        PingImg pingImg = new PingImg();
        pingImg.setPing(ping);
        pingImgService.savePingImg(ping, pingImg, file);
        pingDto.setId(savedPing.getId());
        return pingDto;
    }

//    public PingDto updatePing(PingDto pingDto, MultipartFile file) throws Exception {
//        Ping ping = pingRepository.findById(pingDto.getId())
//                                  .orElseThrow(EntityNotFoundException::new);
//        ping.updatePing(pingDto);
//        pingImgService.updatePingImg(pingDto.getId(), file);
//        return pingDto;
//    }
    public PingDto updatePing(PingDto pingDto, MultipartFile file) throws Exception {
        Ping ping = pingRepository.findById(pingDto.getId())
                                  .orElseThrow(EntityNotFoundException::new);
        ping.updatePing(pingDto);
        pingImgService.updatePingImg(ping, file);
        return pingDto;
    }

    public Long deletePing(Long pingId) {
        pingRepository.deleteById(pingId);
        return pingId;
    }

    public Long savePing(PingImgDto pingImgDto, List<MultipartFile> pingImgFileList) throws Exception {

        Ping ping = pingImgDto.createPing();
        pingRepository.save(ping);

        for(int i = 0; i < pingImgFileList.size(); i++){
            //ItemImg 엔티티 생성
            //ItemImg 엔티티의 item 필드에 먼저 저장된 item을 set
            PingImg pingImg = new PingImg();
            pingImg.setPing(ping);

            pingImgService.savePingImg(ping, pingImg, pingImgFileList.get(i));
        }
        return ping.getId();
    }

}
