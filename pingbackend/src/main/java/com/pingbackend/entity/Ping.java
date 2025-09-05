package com.pingbackend.entity;

import com.pingbackend.dto.PingDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ping")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ping {

    @Id
    @Column(name="ping_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
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
