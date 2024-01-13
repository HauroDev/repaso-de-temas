public class App {

  public static void main(String[] args) {
    ShareLoop s1 = new ShareLoop();
    ShareLoop s2 = new ShareLoop();

    s1.setShareY(1);
    s1.shareLoop(s1.getShareY(), s1.shareZ());

    s2.setShareY(2);
    s2.shareLoop(s2.getShareY(), s2.shareZ());

    System.out.println("Ex 3 Value of public final (constant) f is: " + s2.f);

  }

}
