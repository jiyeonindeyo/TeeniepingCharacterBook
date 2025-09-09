package com.pingbackend.entity;

import com.pingbackend.dto.PingDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;


@Entity
@Table(name = "ping")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Validated
public class Ping {

    @Id
    @Column(name="ping_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Min(value = 1, message = "최소 1개 이상 담아주세요.")
    private Integer season;
    private String tool;
    private String skill;


    public void updatePing(PingDto pingDto) {
        this.name = pingDto.getName();
        this.season = pingDto.getSeason();
        this.tool = pingDto.getTool();
        this.skill = pingDto.getSkill();
    }
}
