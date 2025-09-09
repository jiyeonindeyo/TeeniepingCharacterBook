package com.pingbackend.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PingUserDto {

    private Long id;

    private String userName;

    private String password;

}
