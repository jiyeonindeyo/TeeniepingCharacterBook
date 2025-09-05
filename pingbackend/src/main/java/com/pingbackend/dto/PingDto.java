package com.pingbackend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PingDto {

    private Long id;
    private String name;
    private Integer season;
    private String tool;
    private String skill;

}
