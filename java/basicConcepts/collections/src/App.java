import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class App {
    public void listExample() {
        List<String> listNames = new ArrayList<>();

        listNames.add("one");
        listNames.add("one");
        listNames.add("two");
        listNames.add("three");
        listNames.add(4, "four");

        System.out.println(listNames.size());
        System.out.println(listNames);

        listNames.forEach(System.out::println);

        listNames.remove("one");

        System.out.println(listNames.size());
        System.out.println(listNames);
    }

    public void setExample() {
        Set<String> setNames = new HashSet<>();

        setNames.add("one");
        setNames.add("one");
        setNames.add("two");
        setNames.add("three");
        setNames.add("four");

        System.out.println(setNames.size());
        System.out.println(setNames);

        setNames.forEach(System.out::println);

        setNames.remove("one");

        System.out.println(setNames.size());
        System.out.println(setNames);
    }

    public static void main(String[] args) throws Exception {
        
        App app = new App();

        System.out.println("List example");
        app.listExample();

        System.out.println("Set example");
        app.setExample();
    }
}
