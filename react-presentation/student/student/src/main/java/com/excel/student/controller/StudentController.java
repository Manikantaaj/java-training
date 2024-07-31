package com.excel.student.controller;

import com.excel.student.dto.StudentDto;
import com.excel.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StudentController {

    private final StudentService studentService;

    @PostMapping("/student")
    public ResponseEntity<String> postStudent(@RequestBody StudentDto dto){
        String studentDetails = studentService.postStudent(dto);
        return ResponseEntity.status(HttpStatus.OK).body(studentDetails);
    }
}
