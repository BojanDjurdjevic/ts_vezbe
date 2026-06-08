type Currency = "EUR" | "RSD"

type Shippment = {
  firstName: string;
  lastName: string,
  city: string,
  country: string,
  zip: number,
  quantity: number,
  product: string,
  currency: Currency,
  price: number, 
}

function addOrder(name: string, location: string, zip: number, quantity: number, product: string, currency: Currency, price: number): Shippment {

  const splitName = name.split(" ")
  const splitLocation = location.split(" ")

  const output: Shippment = {
    firstName: splitName[0],
    lastName: splitName[1],
    city: splitLocation[0],
    country: splitLocation[1],
    zip: zip,
    quantity: quantity,
    product: product,
    currency: currency,
    price: price
  }

  return output
}

console.log(
  addOrder("Bojan Đurđević", "Novi Sad Srbija", 21000, 1, "laptop", "RSD", 100000)
)