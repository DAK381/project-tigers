package com.nafa.tiger.service;

import com.nafa.tiger.entity.Transactions;
import com.nafa.tiger.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Transactional
public class TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    public String add(Transactions transactions) {
        transactionRepository.save(transactions);
        return "Transaction added";
    }

    public Collection<Transactions> getAll() {
        return transactionRepository.findAll();
    }
}
