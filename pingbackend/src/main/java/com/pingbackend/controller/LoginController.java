package com.pingbackend.controller;

import com.pingbackend.dto.AccountCredentials;
import com.pingbackend.dto.PingUserDto;
import com.pingbackend.entity.PingUser;
import com.pingbackend.service.JwtService;
import com.pingbackend.service.UserDetailsServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class LoginController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsServiceImpl;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AccountCredentials credentials) {
        //1. 유저의 id/pw를 기반으로  usernamepasswordAuthenticationToken 생성
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                credentials.getUserName(), credentials.getPassword());
        //2. 생성된 usernamepasswordAuthenticationToken을 authenticationManager을 호출
        //3. authenticationManager는 궁극적으로 UserDetailsService의 loadUserByUsername을 호출
        //4. 조회된 유저 정보(userDetail)와 usernamepasswordAuthenticationToken을 비교해 인증 처리
        Authentication authentication = authenticationManager.authenticate(token);
        //5. 최종 반환된 authentication(인증된 유저 정보)를 비잔으로 jwt token 발급
        String jwtToken = jwtService.generateToken(authentication.getName());
        //6. controller는 응답해더(authentication)에 <JWT TOKEN VALUE> 형태로 응답
        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + jwtToken)
                .build();
    }

    @PostMapping("/signUp")
    public void signUp(@RequestBody PingUserDto pingUserDto) {
        userDetailsServiceImpl.saveMember(pingUserDto);
    }
}
