package com.sharan;

public class Account {
    public String id;
    public double balance;
    public String name;
    public String email;
    public String phone;
    public Account(String id, double balance, String name, String email, String phone) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.email = email;
        this.phone = phone;
    }

    public Account(String name, String email, String phone) {
        this("999",300,name,email,phone);
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    //Constructors can be overloaded.
    public double getBalance() {
        return this.balance;
    }
    //Email
    public String getEmail() {
        return email;
    }
    //Name
    public String getName() {
        return name;
    }
    //PN
    public String getPhone() {
        return phone;
    }
    public void deposit(double amount){
        this.balance += amount;
        System.out.println("Successful deposited $"+amount);
    }
    public void withdraw(double amount){
        if (amount < this.balance){
            this.balance -= amount;
            System.out.println("Successful withdrew $"+amount);
        }else{
            System.out.println("Not enough balance");
        }
    }
}
