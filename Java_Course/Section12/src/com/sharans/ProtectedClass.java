package com.sharans;

public class ProtectedClass {
    private static final double PI = 3.14159265358979323846;
    private final boolean encrypted = true;
    private final long key = 1234234231234234l;

    private ProtectedClass() {
    }

    private final long encryptPassword(long password){
        return password ^ key;
    }
}
