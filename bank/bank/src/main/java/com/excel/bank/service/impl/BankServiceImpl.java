package com.excel.bank.service.impl;

import com.excel.bank.dto.BankDto;
import com.excel.bank.model.Bank;
import com.excel.bank.repository.BankRepo;
import com.excel.bank.service.BankService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BankServiceImpl implements BankService {

    private final BankRepo bankRepo;

    @Override
    public String saveBank(BankDto dto) {
        Optional<Bank> optionalBank = bankRepo.findById(dto.getId());
        if (!optionalBank.isPresent()){
            Bank bankBuild = Bank.builder()
                    .id(dto.getId())
                    .bankName(dto.getBankName())
                    .bankBranch(dto.getBankBranch())
                    .address(dto.getAddress())
                    .ifscCode(dto.getIfscCode())
                    .build();
            Bank bankInfo = bankRepo.save(bankBuild);
            bankInfo.getId();
            return "bank details added";
        }
        throw new RuntimeException("bank details not added");
    }

    @Override
    public BankDto fetchBank(BankDto dto) {
        Optional<Bank> optionalBank = bankRepo.findByBankBranch(dto.getBankBranch());
        if (optionalBank.isPresent()) {
            Bank bank = optionalBank.get();
            return BankDto.builder()
                    .id(bank.getId())
                    .bankName(bank.getBankName())
                    .bankBranch(bank.getBankBranch())
                    .address(bank.getAddress())
                    .ifscCode(bank.getIfscCode())
                    .build();
        } else {
            throw new RuntimeException("Bank not found for Id");
        }
    }

    @Override
    public String updateBank(BankDto dto) {
        Optional<Bank> optionalBank = bankRepo.findById(dto.getId());
        if (optionalBank.isPresent()){
            Bank bank = optionalBank.get();
            bank.setBankName(dto.getBankName());
            bank.setBankBranch(dto.getBankBranch());
            bank.setAddress(dto.getAddress());
            bank.setIfscCode(dto.getIfscCode());
            bankRepo.save(bank);
            return "update successful";
        }else{
            throw new RuntimeException("bank details not updated");
        }
    }

    @Override
    public List<BankDto> getAllBank() {
        List<Bank> bank = bankRepo.findAll();
        List<BankDto> bankDtos = bank.stream()
                .map(bankinfo -> BankDto.builder()
                        .id(bankinfo.getId())
                        .bankName(bankinfo.getBankName())
                        .bankBranch(bankinfo.getBankBranch())
                        .address(bankinfo.getAddress())
                        .ifscCode(bankinfo.getIfscCode())
                        .build())
                .collect(Collectors.toList());
        return bankDtos;
    }

    @Override
    public String deleteBankById(Long id) {
        Optional<Bank> optionalBank = bankRepo.findById(id);
        if (optionalBank.isPresent()) {
            Bank bank = optionalBank.get();
            bankRepo.delete(bank);
            return "Bank detail deleted successfully";
        } else {
            throw new RuntimeException("Bank details not found for deletion");
        }
    }
}
