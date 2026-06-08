type Currency = "EUR" | "RSD"
type NameFormat = `${string} ${string}`

interface Shippment {
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

export function addOrder(name: NameFormat, location: string, zip: number, quantity: number, product: string, currency: Currency, price: number): void {

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

  //return orders
}

export function listOrders(orders: Shippment[]): void {
  const appDiv = document.querySelector<HTMLDivElement>('#app')
  
  orders.forEach(item => {
    const myDiv: HTMLDivElement = document.createElement('div')
    myDiv.className = 'orderDiv'
    myDiv.innerHTML = `
      <h3>Product: ${item.product} </h3>
      <p>Price: ${item.price} ${item.currency} </p>
      <p>Poručilac: ${item.firstName} ${item.lastName} </p>
      <p>Grad: ${item.city} </p>
    `
    if(appDiv) appDiv.appendChild(myDiv)
    
  })
}

