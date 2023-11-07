class Eagle extends Birds {
  private int maxFlightAltitude;

  Eagle(int maxFlightAltitude) {
      this.maxFlightAltitude = maxFlightAltitude;
  }



  void flightAltitude() {
      System.out.println("Максимальная высота полета орла: " + maxFlightAltitude + " м");
  }
}