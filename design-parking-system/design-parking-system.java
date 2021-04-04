class ParkingSystem {
  
  private int big, med, sm;
  
  public ParkingSystem(int big, int medium, int small) {
    this.big = big;
    this.med = medium;
    this.sm = small;
  }

  public boolean addCar(int carType) {
    switch(carType) {
      case 1: return this.big-- > 0;
      case 2: return this.med-- > 0;
      case 3: return this.sm-- > 0;
      default: return false;
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * boolean param_1 = obj.addCar(carType);
 */