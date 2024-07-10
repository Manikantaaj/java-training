package com.excel.mongodbapplication.service;

import com.excel.mongodbapplication.dto.UserDto;

public interface UserService {

    String saveUserInfo(UserDto dto);

    String loginUser(UserDto dto);
}
