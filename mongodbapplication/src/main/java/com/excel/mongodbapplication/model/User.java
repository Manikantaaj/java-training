package com.excel.mongodbapplication.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
@Builder
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
}
