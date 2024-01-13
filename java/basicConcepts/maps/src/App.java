import java.util.HashMap;
import java.util.Map;

public class App {
    public static void main(String[] args) throws Exception {
        Map<Integer, String> dictionary = new HashMap<>();

        dictionary.put(1, "one");
        dictionary.put(2, "two");
        dictionary.put(3, "three");
        dictionary.put(4, "four");
        dictionary.put(5, "five");
        dictionary.put(6, "six");
        dictionary.put(7, "seven");
        dictionary.put(8, "eight");
        dictionary.put(9, "nine");
        dictionary.put(11, "eleven");
        dictionary.put(12, "twelve");


        System.out.println(dictionary.get(10));
        System.out.println(dictionary);

        dictionary.keySet().forEach(System.out::println);
        dictionary.values().forEach(System.out::println);

    }
}
