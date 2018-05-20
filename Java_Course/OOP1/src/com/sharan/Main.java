package com.sharan;

//import static java.lang.System.*;

public class Main {
    public static void main(String[] args) {
        Car bugatti = new Car();
        Car lamborghini = new Car();
//        System.out.println(bugatti.price);
        bugatti.setModel("Veyron");
        System.out.println("Bugatti model is "+bugatti.getModel());
        Account test = new Account("1",50d,"Test","sharansajivmenon@gmail.com","443-315-7862");
        test.deposit(51d);
        test.withdraw(100d);
        System.out.println("Balance is now "+test.getBalance());
        Account t2 = new Account("Sharan","sharan@email.com","443-215-7862");
        System.out.println("Balance for t2: "+t2.getBalance());
        VipCustomer c1 = new VipCustomer("Sharan",1_000_000,"sharansajivmenon#gmail.com");
        System.out.println("Credit limit for C1: "+c1.getCreditLimit());
        VipCustomer c2 = new VipCustomer("Sharan",1_000_000);
        System.out.println("C2 email: "+c2.getEmail());
        VipCustomer c3 = new VipCustomer();
        System.out.println("Name for C3: "+c3.getName());
    }
}
