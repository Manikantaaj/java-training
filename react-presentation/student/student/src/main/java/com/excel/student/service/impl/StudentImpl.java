package com.excel.student.service.impl;

import com.excel.student.StudentApplication;
import com.excel.student.dto.StudentDto;
import com.excel.student.model.Student;
import com.excel.student.repository.StudentRepo;
import com.excel.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentImpl implements StudentService {

    private final StudentRepo studentRepo;

    @Override
    public String postStudent(StudentDto dto) {
        Optional<Student> optionalStudent = studentRepo.findByEmail(dto.getEmail());
        if(!optionalStudent.isPresent()){
            Student build = Student.builder()
                    .id(dto.getId())
                    .email(dto.getEmail())
                    .firstName(dto.getFirstName())
                    .lastName(dto.getLastName())
                    .address(dto.getAddress())
                    .mobileNo(dto.getMobileNo())
                    .build();
            Student studentInfo = studentRepo.save(build);
            studentInfo.getEmail();
            return "Student details added";
        }
        throw new RuntimeException("student details not added");
    }
}
