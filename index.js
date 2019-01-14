let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  passengers() {
    let passengers = []
    store.trips.forEach((trip) => {
      if (this.id === trip.driverId) {
        passengers.push(
          store.passengers.find((passenger) => trip.passengerId === passenger.id)
        )
      }
    })
    return passengers
  }

  trips() {
    return store.trips.filter((trip) => {
      if (trip.driverId === this.id) {
        return trip
      }
    })
  }
}

class Passenger {
  constructor(name) {
      this.id = ++passengerId
      this.name = name

      store.passengers.push(this)
  }

  drivers() {
    let drivers = []
    store.trips.forEach((trip) => {
      if (this.id === trip.passengerId) {
        drivers.push(
          store.drivers.find((driver) => trip.driverId === driver.id)
        )
      }
    })
    return drivers
  }

  trips() {
    return store.trips.filter((trip) => {
      if (trip.passengerId === this.id) {
        return trip
      }
    })
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find((driver) => this.driverId === driver.id)
  }

  passenger() {
    return store.passengers.find((passenger) => this.passengerId === passenger.id)
  }

}
