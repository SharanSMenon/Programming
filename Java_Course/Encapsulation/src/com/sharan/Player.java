package com.sharan;

// Class without encapsulation
public class Player {
    public String fullName;
    public int health;
    public String weapon;

    public void loseHealth(int damage) {
        if (damage > 0) {
            this.health -= damage;
            if (this.health <= 0) {
                System.out.println(this.fullName + " died.");
            }
        } else {
            System.out.println("Invalid amount for damage.");
        }
    }

    public int healthRemaining() {
        return this.health;
    }
}
