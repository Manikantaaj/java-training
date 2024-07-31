package com.excel.bank.controller;

import com.excel.bank.dto.BankDto;
import com.excel.bank.service.BankService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class BankController {

    private final BankService bankService;

    @PostMapping("/bank")
    public ResponseEntity<String> saveBank(@RequestBody BankDto dto){
        String postBank = bankService.saveBank(dto);
        return ResponseEntity.status(HttpStatus.OK).body(postBank);
    }

    @GetMapping("/fetch")
    public ResponseEntity<BankDto> fetchBank(@RequestBody BankDto dto){
        BankDto getBank = bankService.fetchBank(dto);
        return ResponseEntity.status(HttpStatus.OK).body(getBank);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateBank(@RequestBody BankDto dto){
        String putBank = bankService.updateBank(dto);
        return ResponseEntity.status(HttpStatus.OK).body(putBank);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBank(@PathVariable Long id) {
        String deleteBankInfo = bankService.deleteBankById(id);
        return ResponseEntity.status(HttpStatus.OK).body(deleteBankInfo);
    }

    @GetMapping("/fetchall")
    public List<BankDto> getAllBank(){
        return bankService.getAllBank();
    }
}