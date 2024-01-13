
class Person {

  private String documentNumber;
  private String typeOfDocument;
  private String firstName;
  private String lastName;
  private int age;

  public Person(String firstName, String lastName, int age, String typeOfDocument, String documentNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.typeOfDocument = typeOfDocument;
    this.documentNumber = documentNumber;
  }

  public String getFullName() {
    return this.firstName + " " + this.lastName;
  }

  public int getAge() {
    return this.age;
  }

  public String getDocumentation() {
    return this.typeOfDocument + ": " + this.documentNumber;
  }

  @Override 
  public String toString() {
    return this.getFullName() + ", " + this.getAge() + ", " + this.getDocumentation();
  }

}