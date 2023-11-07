abstract class Birds extends Animal {
  @Override
  void run(int distance) {
      System.out.println("Птицы не бегают");
  }

  @Override
  void swim(int distance) {
      System.out.println("Птицы не плавают");
  }

  abstract void flightAltitude();

}