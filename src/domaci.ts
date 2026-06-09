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

const appDiv = document.querySelector<HTMLDivElement>('#app')

export function addOrder(name: NameFormat, location: string, zip: number, 
  quantity: number, product: string, currency: Currency, price: number): Shippment[] | never {

  const splitName = name.split(" ")
  const splitLocation = location.split(" ")

  //Validacija
  if(splitName.length > 2 || splitLocation.length > 2) throw new Error("Name or location exceeds limits of 2");

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

export function listOrders(orders: Shippment[]): void {
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

export function search(name: string): void {
  let myorders: Shippment[] = [];

  orders.forEach(order => {
    if(order.product == name) myorders.push(order)
  })
  /*
  if(myorders.length < 1) {
    
  }
  */
    //return `Nije pronađen proizvod po imenu ${name}` 
  if(appDiv) appDiv.innerHTML = ''
  listOrders(myorders)
}

export function advSearch(searchTerm: string, orderList: Shippment[]): void {
  const lowerTerm = searchTerm.toLowerCase()

  const myorders = orderList.filter(order => {
    if(order.product.toLowerCase() === lowerTerm) return order
  })

  if(appDiv) appDiv.innerHTML = ''

  /**
    if (appDiv) {
      appDiv.replaceChildren()
    }
   */

  listOrders(myorders)
}