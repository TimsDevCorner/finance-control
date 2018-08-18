package com.wundenberg.transactions.repository;

import com.wundenberg.transactions.etity.Transaction;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class TransactionList {
    private TransactionRepository repository;

    public TransactionList (TransactionRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/transactionlist")
    public Collection<Transaction> transactionList() {
        return new ArrayList<>(repository.findAll());
    }
}
