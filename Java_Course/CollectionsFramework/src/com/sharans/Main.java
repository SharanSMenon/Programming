package com.sharans;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        Theater theater = new Theater("Sharan Theater", 5, 6);
//        theater.getSeats();
        List<Theater.Seat> seatCopy = new ArrayList<>(theater.seats);
        printList(seatCopy);
        theater.reserveSeat("A01");
        seatCopy.get(0).reserve();
        Collections.shuffle(seatCopy);
        Theater.Seat minseat = Collections.min(seatCopy);
        theater.reserveSeat("A01");
        System.out.println("Miniumum seat number is " + minseat.getSeatNumber());
        List<Object> newList = new ArrayList<>(theater.seats.size());
        Collections.copy(newList, theater.seats);
    }

    public static void printList(List<Theater.Seat> list){
        for(Theater.Seat seat: list){
            System.out.println(" " + seat.getSeatNumber());
        }
        System.out.println();
        System.out.println("==========================================");
    }
}
