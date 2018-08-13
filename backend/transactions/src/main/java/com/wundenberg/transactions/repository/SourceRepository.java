package com.wundenberg.transactions.repository;

import com.wundenberg.transactions.etity.Source;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SourceRepository extends JpaRepository<Source, Long> {
}
