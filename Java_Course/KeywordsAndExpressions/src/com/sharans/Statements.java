package com.sharans;

public class Statements {
    public static void main(String[] args) {
        //Statements, Whitespace, and indenting
        boolean gameOver = true;
        int score = 5001;
        int levelC = 5;
        int bonus = 100;
        int finals = calculateScore(gameOver,score,levelC,bonus);
//        calculateScore(true,2852,9,300);
        int position = calculateHighScorePosition(1499);
        displayHighScorePosition("Sharan",position);

        position = calculateHighScorePosition(70);
        displayHighScorePosition("Jahnvi",position);

        position = calculateHighScorePosition(256);
        displayHighScorePosition("Anu",position);

        position = calculateHighScorePosition(900);
        displayHighScorePosition("Sajiv",position);
        System.out.println("Score is now "+finals);
    }
    public static int calculateScore(boolean gameOver, int score, int levelC, int bonus) {
        if (gameOver) {
            int finalscore = score + (levelC * bonus);
            finalscore += 2000;
            return finalscore;
        }
        return -1;
    }
    public static void displayHighScorePosition(String name, int position){
        System.out.println(name + " got in the "+position+" position");
    }
    public static int calculateHighScorePosition(int score){
        if(score >= 1000){
            return 1;
        }else if(score >= 500 && score < 1000){
            return 2;
        }else if(score >= 100 && score < 500){
            return 3;
        }else{
            return 4;
        }
    }
}
