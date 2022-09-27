import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()




//function to display order number,time, and price of each order when it is made
export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    orders.map(order => {

        //cost stuff here
        // Remember that the function you pass to find() must return true/false
        const foundMetal = metals.find(
            (metal) => {
                return metal.id === order.metalId
            }
        )
        const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
        )
        const foundStyle = styles.find(
            (style) => {
                return style.id === order.styleId
            }
        )
        const totalCost = foundMetal.price + foundStyle.price + foundSize.price

        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return html += `<li name="order" value="${order.id}">
             Order #${order.id} was placed at ${order.timestamp}. It costs ${costString}
        </li>`
    })


    html += "</ul>"

    return html
}

