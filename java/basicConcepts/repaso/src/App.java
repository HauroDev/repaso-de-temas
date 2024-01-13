import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.StringJoiner;
import java.util.StringTokenizer;
import java.util.regex.Pattern;

public class App {
    public static void main(String[] args) throws Exception {

        /*
         * Person p = new Person("John", "Doe", 30, "passport", "123456");
         * System.out.println(p.getFullName());
         * System.out.println(p.getAge());
         * System.out.println(p.getDocumentation());
         * System.out.println(p.toString());
         */

        String nombre = "SuperDuperFrakilistigoaligoso";

        System.out.println(nombre);

        char[] arrayOfName = nombre.toCharArray();
        System.out.print("{");
        for (int i = 0; i < arrayOfName.length; i++) {

            System.out.print("\"" + arrayOfName[i] + "\"");

            if (i < arrayOfName.length - 1) {
                System.out.print(", ");
            }

        }
        System.out.println('}');

        String strarray = Arrays.toString(arrayOfName);

        System.out.println(strarray);

        StringJoiner sb = new StringJoiner("", "\'", "\'");

        for (int i = 0; i < arrayOfName.length; i++) {

            sb.add(arrayOfName[i] + "");
        }

        System.out.println(sb);

        StringTokenizer st = new StringTokenizer("papepipopu", "p");
        String[] strArray = new String[st.countTokens()];

        int i = 0;
        while (st.hasMoreTokens()) {
            strArray[i] = st.nextToken();
            i++;
        }

        System.out.println(Arrays.toString(strArray));


        String str = "papepipopu";

        String regex = "[p]";
        Pattern path = Pattern.compile(regex);
        String[] strarray1 = path.split(str);
        
        System.out.println(Arrays.toString(strarray1));
    }
}
