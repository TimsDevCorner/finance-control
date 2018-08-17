package com.wundenberg.transactions.config;


import com.wundenberg.transactions.etity.Account;
import com.wundenberg.transactions.etity.Source;
import com.wundenberg.transactions.etity.Transaction;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RestIdConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration){
        configuration.exposeIdsFor(Account.class);
        configuration.exposeIdsFor(Transaction.class);
        configuration.exposeIdsFor(Source.class);
    }
}
