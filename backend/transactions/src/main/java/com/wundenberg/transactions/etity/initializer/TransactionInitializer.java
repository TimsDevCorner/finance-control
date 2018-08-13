package com.wundenberg.transactions.etity.initializer;

import com.wundenberg.transactions.etity.Transaction;
import com.wundenberg.transactions.repository.TransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class TransactionInitializer implements CommandLineRunner {
    private final TransactionRepository transactionRepository;

    public TransactionInitializer(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public void run(String... args) {
        Stream.of(100, 50, 200, 150)
                .forEach(transaction -> transactionRepository.save(new Transaction(0, 0, 1, 6, transaction)));

        transactionRepository.findAll().forEach(System.out::println);
    }
}
