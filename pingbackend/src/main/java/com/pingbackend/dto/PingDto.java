package com.pingbackend.dto;

import com.pingbackend.entity.Ping;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

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

    @NotNull
    private String image;

}
