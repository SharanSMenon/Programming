package com.sharan;

public class EnhancedPlayer {
    private String fullName;
    private int health = 100;
    private String weapon;

    public EnhancedPlayer(String name, int health, String weapon) {
        this.fullName = name;
        if (health > 0 && health <= 200) {
            this.health = health;
        }
        this.weapon = weapon;
    }

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

    public String getFullName() {
        return fullName;
    }

    public int getHealth() {
        return health;
    }

    public String getWeapon() {
        return weapon;
    }
}
