import java.util.Objects;

public final class CarPojo {
  private int year;
  private String make;
  private String model;

  public CarPojo(int year, String make, String model) {
    this.year = year;
    this.make = make;
    this.model = model;
  }

  public int getYear() {
    return year;
  }

  public String getMake() {
    return make;
  }

  public String getModel() {
    return model;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    CarPojo carPojo = (CarPojo) o;
    return year == carPojo.year && Objects.equals(make, carPojo.make) && Objects.equals(model, carPojo.model);
  }

  @Override
  public int hashCode() {
    return Objects.hash(year, make, model);
  }

  @Override
  public String toString() {
    return "carPojo{" +
        "year=" + year +
        ", make='" + make + '\'' +
        ", model='" + model + '\'' +
        '}';
  }
}
