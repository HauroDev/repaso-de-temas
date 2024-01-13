package com.model;

public class Person {
  private String name;

  public Person(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public static void main(String[] args) {
    com.model.Person hero = new com.model.Person("Tony Stark");
    System.out.println(hero.getName());

    Person villan = new Person("The Mandarin");
    System.out.println(villan.getName());
  }
}
