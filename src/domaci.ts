type Currency = "EUR" | "RSD"
type NameFormat = `${string} ${string}`

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

export const orders: Shippment[] = []

export function addOrder(name: NameFormat, location: string, zip: number, quantity: number, product: string, currency: Currency, price: number): object[] {

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

  orders.push(output)

  return orders
}

