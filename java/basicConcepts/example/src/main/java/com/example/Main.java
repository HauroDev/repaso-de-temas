package com.example;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("key", "value");

        System.out.println(map.get("key"));

        map.remove("key");

        System.out.println(map.get("key"));


    }
}