package com.sharans;

import java.util.HashMap;
import java.util.Map;

public class Maps {
    public static void main(String[] args) {
        Map<String, String> languages = new HashMap<>();
        languages.put("Java","A compiled high-level object-oriented language");
        languages.put("Python","An high level programming language");
        languages.put("Javascript","A high level programming language related to java");
        languages.put("Typescript", "Javascript that scales. Language with types");
        languages.put("Ruby","A language");
        System.out.println(languages.get("Java"));
        if (languages.containsKey("Javascript")){
            System.out.println("Java is already in map");
        }
        languages.putIfAbsent("Python","I took a course about python");
        System.out.println("Map: " + languages);
        languages.remove("Ruby");
        System.out.println("Map: " + languages);
    }
}
