package com.sharan;

public class Monitor {
    private String model;
    private String manufacterer;
    private int size;
    private Resolution nativeResolution;

    public Monitor(String model, String manufacterer, int size, Resolution nativeResolution) {
        this.model = model;
        this.manufacterer = manufacterer;
        this.size = size;
        this.nativeResolution = nativeResolution;
    }

    public String getModel() {
        return model;
    }

    public String getManufacterer() {
        return manufacterer;
    }

    public int getSize() {
        return size;
    }

    public Resolution getNativeResolution() {
        return nativeResolution;
    }

    public void drawPixelAt(int x, int y, String color){
        System.out.println("Drawing pixel at ("+x+","+y+") in color "+color+"." );
    }
}
