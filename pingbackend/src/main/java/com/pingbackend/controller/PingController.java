package com.pingbackend.controller;

import com.pingbackend.dto.PingDto;
import com.pingbackend.service.PingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PingController {

    private final PingService pingService;

    @GetMapping("/pings")
    public List<PingDto> getPings() {
        return pingService.findAll();
    }

    @PostMapping("/pings")
    public PingDto addPing(@RequestBody PingDto pingDto,
                           BindingResult bindingResult, Model model,
                           @RequestParam("pingImgFile") List<MultipartFile> pingImgFileList) {

        if (bindingResult.hasErrors()) {
            return pingService.addPing(pingDto);

        }
        if(pingImgFileList.get(0).isEmpty()) {
            model.addAttribute("errorMessage", "첫번째 상품 이미지는 필수 입력값입니다.");
            return pingService.addPing(pingDto);
        }
        try{
            pingService.savePing(pingDto, pingImgFileList);
        }catch (Exception e){
            model.addAttribute( "errorMassage", "상품 등록중 에러가 발생했습니다.");
            return pingService.addPing(pingDto);
        }


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

    @GetMapping("/season/{season}")
    public List<PingDto> getPingsBySeason(@PathVariable Integer season) {
        return pingService.findBySeason(season);
    }
}
