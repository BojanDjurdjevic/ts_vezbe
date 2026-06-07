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

function addOrder(name: string, lname: string, city: string, country: string, zip: number, quantity: number, product: string, currency: Currency, price: number): Shippment {
  const output: Shippment = {
    firstName: name,
    lastName: lname,
    city: city,
    country: country,
    zip: zip,
    quantity: quantity,
    product: product,
    currency: currency,
    price: price
  }

  return output
}

console.log(
  addOrder("Bojan", "Đurđević", "Novi Sad", "Srbija", 21000, 1, "laptop", "RSD", 100000)
)