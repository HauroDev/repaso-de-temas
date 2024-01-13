public class App {
    public static void main(String[] args) throws Exception {
        boolean x = true || false;
        boolean y = false && true;

        System.out.println(!x);
        System.out.println(!y);

        int value = 110;

        if (value > 13) {
            System.out.println("value es mayor a 10");
        } else if (value == 10) {
            System.out.println("value es 10");
        } else {
            System.out.println("value es menor a 10");
        }
        // retorna directamente el valor que corresponde
        System.out.println(switch (value) {
            case 10, 12, 11 -> 5;
            default -> 1;
        });

        // realiza una sentencia por cada valor
        switch (value) {
            case 10, 12, 11 -> System.out.println(5);
            case 13 -> System.out.println(6);
            case 14 -> System.out.println(7);
            default -> System.out.println(1);
        }

        // el clásico switch
        switch (value) {
            case 10, 11, 12:
                System.out.println(value);
                break;
            case 13:
                System.out.println(5);
                break;
            case 14:
                System.out.println(6);
                break;
            default:
                System.out.println(1);
                break;
        }
    }
}
