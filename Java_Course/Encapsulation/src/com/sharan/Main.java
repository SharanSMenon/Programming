package com.sharan;

public class Main {

    public static void main(String[] args) {
        /*
Non-encapsulation
Player player = new Player();
player.fullName = "Bob";
player.health = 20;
player.weapon = "AK-47";

int damage = 10;
player.loseHealth(damage);
System.out.println("Remaining health: "+player.healthRemaining());
player.loseHealth(-11);
*/
        EnhancedPlayer player2 = new EnhancedPlayer("Bob", 250, "AR-15");
        System.out.println("Initial health: " + player2.getHealth());
        player2.loseHealth(10);
        System.out.println("Remaining health: " + player2.getHealth());
    }
}
