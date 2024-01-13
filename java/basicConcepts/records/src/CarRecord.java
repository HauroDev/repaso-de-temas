import java.io.Serializable;
import java.util.Objects;

public record CarRecord(int year, String make, String model) implements Serializable {

  public CarRecord {
    Objects.requireNonNull(year);
    Objects.requireNonNull(make);
    Objects.requireNonNull(model);
  }
  @Override
  public String toString() {
    return this.getClass().getSimpleName() + " = {" +
        "year=" + year +
        ", make='" + make + '\'' +
        ", model='" + model + '\'' +
        '}';
  }
}
