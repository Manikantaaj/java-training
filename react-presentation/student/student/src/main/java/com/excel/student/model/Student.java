package com.excel.student.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Student {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private Long mobileNo;
}
