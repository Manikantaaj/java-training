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

    public UserDto getUserById(int id) {
        UserRepo repo = new UserRepo();
        User user = repo.getUserId(id);
        if (user != null) {
            UserDto dto = new UserDto();
            dto.setId(user.getId());
            dto.setName(user.getName());
            dto.setEmail(user.getEmail());
            dto.setPassword(user.getPassword());
            return dto;
        } else {
            return null;
        }
    }
}
