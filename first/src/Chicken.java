class Chicken extends Birds {
  private int maxFlightAltitude;

  Chicken(int maxFlightAltitude) {
        this.maxFlightAltitude = maxFlightAltitude;
  }
 
  void flightAltitude() {
      System.out.println("Максимальная высота полета Курицы: " + maxFlightAltitude + " м");
  }
}