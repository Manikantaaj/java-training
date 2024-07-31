package com.excel.bank.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
@Builder
public class Bank {

    @Id
    private Integer id;
    private String bankName;
    private String bankBranch;
    private Long ifscCode;
    private String address;
}
