import axios from "axios"
import { config } from "./config/config"
import { buildUrl, callApi } from "./services/apiService"
/*
function testApi() {
  const res = axios.get(config.apiUrl)
  console.log(res)
}

testApi()


const url = buildUrl([
  {key: 't', value: 'Terminator'},
  {key: 'y', value: '2020'},
])

console.log(url)*/

const response = await callApi([
  {key: 't', value: 'terminator'},
  {key: 'y', value: '2000'},
])

console.log(response)

































/*

import { addOrder, advSearch, listOrders, orders, search } from './domaci'
import './style.css'
import { car } from './vezba'

// Void - Ova fn ne vraća nikakav odgovor (nema return ili je prazan return)
function sayHello(message: string | number): void {
  console.log("Hello", message)
}

sayHello("Bojan")
sayHello(5)


/**
 * Vežba - napraviti calculator funkciju
 *  add(5, 10) -> 15
 */
/*
function calculate(a: number, b: number): number {
  return a + b
}

console.log("Rezultat: ", calculate(8, 10))

function addRide(location: string, length: number): string {
  return `Ride from ${location} might take ${length} km`
}

console.log(
  addRide("Belgrade", 80)
)

//Tuple (strict defined array): 
const userInfo: [string, number, boolean] = ["Bojan", 40, true]

// X, Y, ImeGrada = 40.7128, -74.0060, "New York City"
const location: [number, number, string] = [40.7128, -74.0060, "New York City"]

// E sad, kako od ovoga napraviti niz nizova? Tu nap dolazi TYPE:

type LocationType = [number, number, string]

const myLocation: LocationType[] = [
  [40.7128, -74.0060, "New York City"],
  [10.7128, -22.0060, "Belgrade"],
]

console.log("Car: ", car)

const first = addOrder("Bojan Đurđević", "NoviSad Srbija", 21000, 1, "laptop", "RSD", 100000)
const second = addOrder("Toma Nikolić", "Beograd Srbija", 11000, 1, "TV", "RSD", 100000)


listOrders(orders)

//advSearch("laptop", orders) */