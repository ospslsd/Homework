class Cat extends Animal {
  private static int count;

  @Override
  void run(int distance) {
      if (distance <= 200) {
          System.out.println("Кот пробежал " + distance + " м");
      } else {
          System.out.println("Кот не может пробежать такую дистанцию");
      }
  }

  @Override
  void swim(int distance) {
      System.out.println("Кот не умеет плавать");
  }

  static int getCount() {
      return count;
  }

  Cat() {
      count++;
  }
}