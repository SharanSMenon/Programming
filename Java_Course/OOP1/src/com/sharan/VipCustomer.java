package com.sharan;

public class VipCustomer {
    private String name;
    private double creditLimit;
    private String email;
    public VipCustomer(){
        this("Default name",50000,"default@email.com");
    }
    public VipCustomer(String name, double creditLimit, String email) {
        this.name = name;
        this.creditLimit = creditLimit;
        this.email = email;
    }
    public VipCustomer(String name, double creditLimit) {
        this("Default name",50000,"unkwown@email.com");
    }
    public String getName() {
        return name;
    }

    public double getCreditLimit() {
        return creditLimit;
    }

    public String getEmail() {
        return email;
    }


}
