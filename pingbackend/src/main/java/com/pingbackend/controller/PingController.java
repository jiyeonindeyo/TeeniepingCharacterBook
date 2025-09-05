package com.pingbackend.controller;

import com.pingbackend.dto.PingDto;
import com.pingbackend.service.PingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
    public PingDto addPing(@RequestBody PingDto pingDto) {
        return pingService.addPing(pingDto);
    }

    @PutMapping("/pings")
    public PingDto updateCar(@RequestBody PingDto pingDto) {
        return pingService.updatePing(pingDto);
    }

    @DeleteMapping("/pings/{pingId}")
    public Long deleteCar(@PathVariable Long pingId) {
        return pingService.deletePing(pingId);
    }
}
