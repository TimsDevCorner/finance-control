package com.wundenberg.transactions.repository;

import com.wundenberg.transactions.etity.Source;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;

@RestController
public class SourceList {
    private SourceRepository repository;

    public SourceList (SourceRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/sourcelist")
    public Collection<Source> transactionList() {
        return new ArrayList<>(repository.findAll());
    }
}
