package com.pingbackend.entity.repository;

import com.pingbackend.entity.PingUser;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PingUserRepository extends CrudRepository<PingUser, Long> {
    Optional<PingUser> findByUserName(String username);
}
