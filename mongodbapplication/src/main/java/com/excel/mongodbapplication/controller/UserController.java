package com.excel.mongodbapplication.controller;

import com.excel.mongodbapplication.dto.UserDto;
import com.excel.mongodbapplication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    @PostMapping("/adduser")
    public ResponseEntity<String> saveUserInfo(@RequestBody UserDto dto){
        String userId = userService.saveUserInfo(dto);
        return ResponseEntity.status(HttpStatus.OK).body(userId);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDto dto) {
        try {
            String login = userService.loginUser(dto);
            return ResponseEntity.ok(login);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
