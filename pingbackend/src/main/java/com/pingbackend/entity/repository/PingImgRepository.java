package com.pingbackend.entity.repository;

import com.pingbackend.entity.PingImg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PingImgRepository extends JpaRepository<PingImg, Long> {

    /*
    FK인 item_id로 ItemImg를 조회하는게 목적
    SELECT *
    FORM item_img
    WHERE item_id=?
    ORDER BY item_id ASC
     */
    PingImg findByPingIdOrderByIdAsc(Long pingId);

    PingImg findByPingId(Long pingId);

}