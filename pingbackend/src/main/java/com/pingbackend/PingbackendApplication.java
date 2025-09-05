package com.pingbackend;

import com.pingbackend.entity.Ping;
import com.pingbackend.entity.repository.PingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
@RequiredArgsConstructor
public class PingbackendApplication implements CommandLineRunner {

	private final PingRepository pingRepository;

	public static void main(String[] args) {
		SpringApplication.run(PingbackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		pingRepository.save(Ping.builder()
								.name("예주핑")
								.season(1)
								.tool("아이패드")
								.skill("메롱")
								.build());
		pingRepository.save(Ping.builder()
								.name("지연핑")
								.season(2)
								.tool("아이폰")
								.skill("비밀")
								.build());
		for (Ping ping : pingRepository.findAll()) {
			log.info("pingName: {}, skill: {}", ping.getName(), ping.getSkill());
		}

//		//username : user, password: user
//		appUserRepository.save(AppUser.builder()
//				.username("user")
//				.password("user")
//				.role("USER")
//				.build());
//
//		//username : admin, password: admin
//		appUserRepository.save(AppUser.builder()
//				.username("admin")
//				.password("admin")
//				.role("ADMIN")
//				.build());

	}
}
