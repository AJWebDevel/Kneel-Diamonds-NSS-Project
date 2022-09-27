import { getSizes, setSize } from "./database.js"

const sizes = getSizes()


export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        html += `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += "</ul>"

    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)
