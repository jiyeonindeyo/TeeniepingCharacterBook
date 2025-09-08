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
    private String repImgYn;

    private static ModelMapper modelMapper = new ModelMapper();

    public static  PingImgDto of(PingImg pingImg) {

        return modelMapper.map(pingImg, PingImgDto.class);

    }

    // Entity to Dto Mapper
    public static PingDto of(Ping item) {
        return modelMapper.map(item, PingDto.class);
    }

    //  Dto to Entity Mapper
    public Ping createPing() {
        return modelMapper.map(this, Ping.class);
    }
}
