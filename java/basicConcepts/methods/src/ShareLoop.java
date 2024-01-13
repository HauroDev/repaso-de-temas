class ShareLoop {
  private int shareY;
  private static int shareZ = 0;
  public static final String f = "Loop is Done";

  public int getShareY() {
    return shareY;
  }

  public void setShareY(int y) {
    shareY = y;
  }

  public int shareZ() {
    shareZ++;
    return shareZ;
  }

  void shareLoop(int x, int z) {
    System.out.println("Ex 3 Instance variable are now passed, not created before a the Loop");

    System.out.println("Ex 3 Value of private int x is " + x);
    System.out.println("Ex 3 Value of private static int z is " + z);

    while (x < 4) {
      System.out.println("Ex 3 Running a loop");
      System.out.println("Ex 3 Value of x is " + x);

      x = x + 1;
    }

    System.out.println("Ex 3 This is where values are returned, if any, after the Loop");
    System.out.println("Ex 3 Value of private int x is now " + x);
  }
}