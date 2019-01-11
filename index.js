let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip) {
        return this.id === trip.driverId}.bind(this)
    )

  }

  passengers(){
    return this.trips().map(trip =>
      trip.passenger()
    )

  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  };

  trips() {
    return store.trips.filter(
      function(trip) {
        return this.id === trip.passengerId}.bind(this)
    )
  };

  drivers() {
    // console.log(this.trips())
    return this.trips().map(trip => {
      console.log(trip);
      return trip.driver()
    })
  };
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    // this.driver = driver
    this.passengerId = passenger.id
    // this.passenger = passenger

    store.trips.push(this)
  };

  driver() {
    return store.drivers.find(
      function(driver) {
      return driver.id === this.driverId}.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
      return passenger.id === this.passengerId}.bind(this)
    )
  }
}
