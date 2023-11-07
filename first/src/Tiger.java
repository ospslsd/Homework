class Tiger extends Animal {
    private static int count;

    @Override
    void run(int distance) {
        if (distance <= 1000) {
            System.out.println("Тигр пробежал " + distance + " м");
        } else {
            System.out.println("Тигр не может пробежать такую дистанцию");
        }
    }

    @Override
    void swim(int distance) {
        System.out.println("Тигр не умеет плавать");
    }

    static int getCount() {
        return count;
    }

    Tiger() {
        count++;
    }
}