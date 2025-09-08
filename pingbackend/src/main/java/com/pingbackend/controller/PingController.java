package com.pingbackend.controller;

import com.pingbackend.dto.PingDto;
import com.pingbackend.service.PingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PingController {

    private final PingService pingService;

    @GetMapping("/pings")
    public List<PingDto> getPings() {
        return pingService.findAll();
    }

    @PostMapping("/pings")
    public PingDto addPing(@RequestPart(name = "ping") PingDto pingDto,
                           @RequestPart(name = "file") MultipartFile file) {
        PingDto savedDto = null;
        try{
            savedDto = pingService.addPing(pingDto, file);
        }catch (Exception e){
            e.printStackTrace();
        }
        return savedDto;
    }

    @PutMapping("/pings")
    public PingDto updateCar(@RequestBody PingDto pingDto) {
        return pingService.updatePing(pingDto);
    }

    @DeleteMapping("/pings/{pingId}")
    public Long deleteCar(@PathVariable Long pingId) {
        return pingService.deletePing(pingId);
    }

    @GetMapping("/season/{season}")
    public List<PingDto> getPingsBySeason(@PathVariable Integer season) {
        return pingService.findBySeason(season);
    }
}
