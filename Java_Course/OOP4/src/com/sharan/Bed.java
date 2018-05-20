package com.sharan;

public class Bed {
    private String style;
    private int pillows;
    private int heights;
    private int quilt;
    private int sheets;

    public Bed(String style, int pillows, int heights, int quilt, int sheets) {
        this.style = style;
        this.pillows = pillows;
        this.heights = heights;
        this.quilt = quilt;
        this.sheets = sheets;
    }

    public String getStyle() {
        return style;
    }

    public int getPillows() {
        return pillows;
    }

    public int getHeights() {
        return heights;
    }

    public int getQuilt() {
        return quilt;
    }

    public int getSheets() {
        return sheets;
    }

    public void make(){
        System.out.println("Bed has been made.");
    }
}
