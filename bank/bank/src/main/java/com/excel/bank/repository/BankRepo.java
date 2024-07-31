package com.excel.bank.repository;

import com.excel.bank.model.Bank;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface BankRepo extends MongoRepository<Bank, Integer> {
    Optional<Bank> findByBankBranch(String bankBranch);

    Optional<Bank> findById(Long id);

    Optional<Bank> findByBankNameAndBankBranch(String bankName, String bankBranch);
}
