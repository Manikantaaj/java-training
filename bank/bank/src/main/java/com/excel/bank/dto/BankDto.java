package com.excel.bank.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BankDto {

    private Integer id;
    private String bankName;
    private String bankBranch;
    private Long ifscCode;
    private String address;
}
