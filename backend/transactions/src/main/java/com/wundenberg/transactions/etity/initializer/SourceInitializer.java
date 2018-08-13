package com.wundenberg.transactions.etity.initializer;

import com.wundenberg.transactions.etity.Source;
import com.wundenberg.transactions.repository.SourceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class SourceInitializer implements CommandLineRunner {
    private final SourceRepository sourceRepository;

    public SourceInitializer(SourceRepository sourceRepository) {
        this.sourceRepository = sourceRepository;
    }

    @Override
    public void run(String... args) {
        Stream.of("Mobile Phone", "Car Insurance", "Cigarettes", "Others")
                .forEach(source -> sourceRepository.save(new Source(0, source)));

        sourceRepository.findAll().forEach(System.out::println);
    }
}
