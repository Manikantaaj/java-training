package com.excel.bank.service;

import com.excel.bank.dto.BankDto;

import java.util.List;

public interface BankService {
    String saveBank(BankDto dto);

    BankDto fetchBank(BankDto dto);

    String updateBank(BankDto dto);

    List<BankDto> getAllBank();

    String deleteBankById(Long id);
}
