package com.pingbackend.service;

import com.pingbackend.dto.PingDto;
import com.pingbackend.dto.PingImgDto;
import com.pingbackend.entity.Ping;
import com.pingbackend.entity.PingImg;
import com.pingbackend.entity.repository.PingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PingService {

    private final PingImgService pingImgService;
    private final PingRepository pingRepository;

    public List<PingDto> findAll() {
        List<PingDto> pings = new ArrayList<>();

        for(Ping ping : pingRepository.findAll()){
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

    public PingDto addPing(PingDto pingDto) {
        Ping ping = Ping.builder()
                        .name(pingDto.getName())
                        .season(pingDto.getSeason())
                        .tool(pingDto.getTool())
                        .skill(pingDto.getSkill())
                        .build();
        Ping savedPing = pingRepository.save(ping);
        pingDto.setId(savedPing.getId());
        return pingDto;
    }

    public PingDto updatePing(PingDto pingDto) {
        Ping ping = pingRepository.findById(pingDto.getId())
                                  .orElseThrow(EntityNotFoundException::new);
        ping.updatePing(pingDto);
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
            if(i ==0 ){
                pingImg.setRepImgYn("Y");
            }else {
                pingImg.setRepImgYn("N");
            }

            pingImgService.savePingImg(pingImg, pingImgFileList.get(i));
        }
        return ping.getId();
    }

}
