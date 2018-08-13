package com.wundenberg.transactions.etity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @GeneratedValue
    @Id
    private long accountID;

    private String name;
    private String description;
    private double balance;

    private String Iban;
    private String Bic;

}
