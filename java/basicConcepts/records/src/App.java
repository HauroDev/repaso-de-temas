public class App {
    public static void main(String[] args) throws Exception {
        CarPojo car = new CarPojo(2020, "Toyota", "Camry");

        System.out.println(car.toString());

        CarRecord carRecord = new CarRecord(2020, "Toyota", "Camry");
        
        System.out.println(carRecord.year());
        System.out.println(carRecord.make());
        System.out.println(carRecord.model());

        System.out.println(carRecord.toString());

    }
}
