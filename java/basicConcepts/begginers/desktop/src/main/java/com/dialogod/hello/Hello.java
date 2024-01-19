package com.dialogod.hello;

public class Hello {

  public String hello(String subject) {
    return "Hello " + subject;
  }

  public static void main(String[] args) {
    Hello message = new Hello();
    System.out.println(message.hello("Fred"));
  }

}
