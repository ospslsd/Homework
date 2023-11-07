class Hummingbird extends Birds {
  private int maxFlightAltitude;

  Hummingbird(int maxFlightAltitude) {
      this.maxFlightAltitude = maxFlightAltitude;
  }


  void flightAltitude() {
      System.out.println("Максимальная высота полета Колибри: " + maxFlightAltitude + " м");
  }
}