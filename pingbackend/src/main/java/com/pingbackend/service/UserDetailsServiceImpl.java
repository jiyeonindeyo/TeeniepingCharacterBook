package com.pingbackend.service;
import com.pingbackend.dto.PingUserDto;
import com.pingbackend.entity.PingUser;
import com.pingbackend.entity.repository.PingUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService{

    private final PingUserRepository pingUserRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<PingUser> user = pingUserRepository.findByUserName(userName);

        UserDetails userDetails = null;

        if(user.isPresent()) {
            PingUser pingUser = user.get();
            userDetails = User.withUsername(userName)
                              .password(pingUser.getPassword())
                              .build();
        }else {
            throw new UsernameNotFoundException("User not found");
        }
        return userDetails;
    }


    public void saveMember(PingUserDto pingUserDto) {
        validateDuplicateMember(pingUserDto);
        PingUser pingUser = PingUser.builder()
                                    .userName(pingUserDto.getUserName())
                                    .password(pingUserDto.getPassword())
                                    .build();
        pingUserRepository.save(pingUser);
    }

    private void validateDuplicateMember(PingUserDto pingUserDto) {
        Optional<PingUser> foundMember = pingUserRepository.findByUserName(pingUserDto.getUserName());
        if (foundMember.isPresent()) {
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }

}
