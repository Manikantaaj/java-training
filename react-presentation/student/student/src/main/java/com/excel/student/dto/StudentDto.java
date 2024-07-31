package com.excel.student.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentDto {

    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private Long mobileNo;
}
