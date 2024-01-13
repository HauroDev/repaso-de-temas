package com.util;

public class Person {
  private String name;

  public Person(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public static void main(String[] args) {
    com.util.Person hero = new com.util.Person("James Bond");
    System.out.println(hero.getName());

    Person villan = new Person("Ernst Stavro Blofeld");
    System.out.println(villan.getName());
  }
}
