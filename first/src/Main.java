public class Main {
    public static void main(String[] args) {
        Animal[] animals = new Animal[6];
        animals[0] = new Dog();
        animals[1] = new Cat();
        animals[2] = new Tiger();
        animals[3] = new Eagle(5000);
        animals[4] = new Chicken(100);
        animals[5] = new Hummingbird(2000);
        int totalAnimalCount = animals.length;
        for (Animal animal : animals) {
            animal.run(300);
            animal.swim(5);
            if (animal instanceof Birds) {
                ((Birds) animal).flightAltitude();
            }
        }
        System.out.println("Количество собак: " + Dog.getCount());
        System.out.println("Количество котов: " + Cat.getCount());
        System.out.println("Количество тигров: " + Tiger.getCount());
      System.out.println("Количество созданных животных: " + animals.length);
      System.out.println("Общее количество животных: " + totalAnimalCount);
  }
}

