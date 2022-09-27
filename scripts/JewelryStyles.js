import { getStyles, setStyle } from "./database.js"

const styles = getStyles()



export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        html += `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })


    html += "</ul>"
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)