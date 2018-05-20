package com.sharans;

public interface ITelephone {
    void powerOn();
    void dial(int phone);
    void answer();
    boolean callPhone(int phoneNumber);
    boolean isRinging();
}
