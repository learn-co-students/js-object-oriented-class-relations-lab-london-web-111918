const store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter((trip) => {
      if (trip.driverId === this.id) {
        return trip
      }
    })
  }

  passengers() {
    return this.trips().map((trip) => trip.passenger())
  }

}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter((trip) => {
      if (trip.passengerId === this.id) {
        return trip
      }
    })
  }

  drivers() {
    return this.trips().map((trip) => trip.driver())
  }

}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find((driver) => this.driverId === driver.id)
  }

  passenger() {
    return store.passengers.find((passenger) => this.passengerId === passenger.id)
  }

}
