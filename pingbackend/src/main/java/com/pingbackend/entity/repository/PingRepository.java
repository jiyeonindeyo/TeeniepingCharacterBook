package com.pingbackend.entity.repository;

import com.pingbackend.entity.Ping;
import org.springframework.data.repository.CrudRepository;

public interface PingRepository extends CrudRepository<Ping, Long> {
}
