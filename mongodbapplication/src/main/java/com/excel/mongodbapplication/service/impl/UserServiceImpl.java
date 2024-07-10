package com.excel.mongodbapplication.service.impl;

import com.excel.mongodbapplication.dto.UserDto;
import com.excel.mongodbapplication.model.User;
import com.excel.mongodbapplication.repository.UserRepo;
import com.excel.mongodbapplication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    @Override
    public String saveUserInfo(UserDto dto) throws RuntimeException{
        if(!userRepo.findByEmail(dto.getEmail()).isPresent()) {
            User build = User.builder()
                    .id(dto.getId())
                    .email(dto.getEmail())
                    .name(dto.getName())
                    .password(dto.getPassword())
                    .build();
            User userInfo = userRepo.save(build);
            userInfo.getEmail();
            return "add user";
        }
        throw new RuntimeException("User not added");
    }

    @Override
    public String loginUser(UserDto dto) {
        Optional<User> userOptional = userRepo.findByEmail(dto.getEmail());
        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            if (dto.getPassword() != null && dto.getPassword().equals(existingUser.getPassword())) {
                return "Login Success";
            } else {
                throw new RuntimeException("Incorrect password");
            }
        } else {
            throw new RuntimeException("User not found");
        }
    }
}
