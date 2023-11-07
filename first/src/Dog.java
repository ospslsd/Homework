class Dog extends Animal {
  private static int count;

  @Override
  void run(int distance) {
      if (distance <= 500) {
          System.out.println("Собака пробежала " + distance + " м");
      } else {
          System.out.println("Собака не может пробежать такую дистанцию");
      }
  }

  @Override
  void swim(int distance) {
      if (distance <= 10) {
          System.out.println("Собака проплыла " + distance + " м");
      } else {
          System.out.println("Собака не может проплыть такую дистанцию");
      }
  }

  static int getCount() {
      return count;
  }

  Dog() {
      count++;
  }
}