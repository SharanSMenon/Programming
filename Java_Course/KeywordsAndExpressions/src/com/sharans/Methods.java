package com.sharans;

public class Methods {
    public static void main(String[] args) {
        //Methods
        //Overloaded methods
        int newScore = calculateScore("Sharan",500);
        System.out.println("New score: "+newScore);
        calculateScore(394);
        calculateScore();
    }
    // Both are two different methods
    public static int calculateScore(String name, int score){
        //Original method;
        System.out.println(name + " scored "+score+" points.");
        return score*1000;
    }
    public static int calculateScore(int score){
        System.out.println("Unnamed player scored "+score+" points.");
        //Considered as a different method
        return score*1000;
    }
    public static int calculateScore(){
        System.out.println("No player name, no player score");
        //Nothing to return
        return 0;
    }
}
