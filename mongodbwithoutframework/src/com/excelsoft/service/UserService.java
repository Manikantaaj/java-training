package com.excelsoft.service;

import com.excelsoft.dto.UserDto;
import com.excelsoft.model.User;
import com.excelsoft.repository.UserRepo;

public class UserService {
    public UserDto insertUser(UserDto dto){
        User user = new User();
        user.setId(dto.getId());
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());

        UserRepo repo = new UserRepo();
        repo.saveUser(user);
        return dto;
    }
}
