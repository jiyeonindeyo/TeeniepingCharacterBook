package com.pingbackend.dto;

import com.pingbackend.entity.Ping;
import com.pingbackend.entity.PingImg;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Getter
@Setter
public class PingImgDto {

    private Long id;
    private String imgName;
    private String oriImgName;
    private String imgUrl;

    private static ModelMapper modelMapper = new ModelMapper();

    public static  PingImgDto of(PingImg pingImg) {

        return modelMapper.map(pingImg, PingImgDto.class);

    }

    // Entity to Dto Mapper
    public static PingImg of(PingImgDto pingImgDto) {
        return modelMapper.map(pingImgDto, PingImg.class);
    }

    //  Dto to Entity Mapper
    public Ping createPing() {
        return modelMapper.map(this, Ping.class);
    }
}
