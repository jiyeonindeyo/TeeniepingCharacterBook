package com.pingbackend.service;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
@Service
public class JwtService {

    //서버와 클아이언트가 주고 받는 토큰은 ==> HTTP Header내 authorization 해더 값에 저장이 됨
    //예 authorization Bearer + 토큰값
    static final String PREFIX = "Bearer ";
    static final Long EXPIRATION_TIME = 24*60*60*1000L;//하루짜리 시간*분*초*밀리초
    static final Key SIGNING_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // username(ID)를 받아서 JWT 생성
    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SIGNING_KEY)
                .compact();
    }

    // JWT를 받아서 username(ID)를 반환
    public String parseToken(HttpServletRequest request) {
        // 요청 헤더에서 Authorization 헤더값을 가져옴
        // 예) header = Bearer <토큰값>
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header != null && header.startsWith(PREFIX)) {
            JwtParser parser = Jwts.parserBuilder()
                    .setSigningKey(SIGNING_KEY)
                    .build();
            String username = parser.parseClaimsJws(header.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
            if (username != null) {
                return username;
            }
        }
        return null;
    }
}
