package com.wundenberg.transactions.etity.initializer;

import com.wundenberg.transactions.etity.Account;
import com.wundenberg.transactions.repository.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AccountInitializer implements CommandLineRunner {
    private final AccountRepository accountRepository;

    public AccountInitializer(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public void run(String... args) {
        accountRepository.save(new Account(0, "daily", "My account for daily trades", 5124.54, "DE021345562", "GENODM1FOR"));
        accountRepository.save(new Account(0, "savings", "My Savings", 24145.42, "DE021345568", "GENODM1FOR"));

        accountRepository.findAll().forEach(System.out::println);
    }
}
