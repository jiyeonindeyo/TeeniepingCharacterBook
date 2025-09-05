package com.pingbackend.service;

import com.pingbackend.dto.PingDto;
import com.pingbackend.entity.Ping;
import com.pingbackend.entity.repository.PingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PingService {
    
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
}
