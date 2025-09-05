package com.pingbackend.dto;

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
}
