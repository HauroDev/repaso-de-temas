import java.math.BigDecimal;

public class App {
    public static void main(String[] args) throws Exception {
        byte byteValue = 2;
        short shortValue = 128;
        int intValue = Integer.MAX_VALUE;
        long longValue = 2134839849843982893L;

        System.out.println("byte = 2 => " + byteValue);
        System.out.println("short = 128 => " + shortValue);
        System.out.println("int = 2147483647 => " + intValue);
        System.out.println("long = 2134839849843982893L => " + longValue);

        float floatValue = 2.4F;
        double doubleValue = 2.4;

        System.out.println("float = 2.4F => " + floatValue);
        System.out.println("double = 2.4 => " + doubleValue);

        double d2 = 0.9;
        double d3 = 0.3;
        double d4 = d2 - d3;

        System.out.println("0.9 - 0.3 = " + d4);

        BigDecimal myBigDecimal1 = BigDecimal.valueOf(d2);
        BigDecimal myBigDecimal2 = BigDecimal.valueOf(d3);
        BigDecimal myBigDecimal3 = myBigDecimal1.subtract(myBigDecimal2);

        System.out.println("0.9 - 0.3 = " + myBigDecimal3 + " (BigDecimal)");

    }
}
