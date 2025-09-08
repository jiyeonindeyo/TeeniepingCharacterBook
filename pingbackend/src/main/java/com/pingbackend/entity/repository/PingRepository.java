package com.pingbackend.entity.repository;

import com.pingbackend.entity.Ping;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PingRepository extends CrudRepository<Ping, Long> {
    List<Ping> findBySeason(Integer season);
}
