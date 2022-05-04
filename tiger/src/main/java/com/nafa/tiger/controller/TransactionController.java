package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Transactions;
import com.nafa.tiger.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @PostMapping("/transaction/add")
    public String transactionAdd(@RequestBody Transactions transactions){
        return transactionService.add(transactions);

    }
    @GetMapping("/getAll/transaction")
    public Collection<Transactions> getAllTransaction(){
        return transactionService.getAll();
    }
}
