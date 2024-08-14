

const ProductOptions = ({ options, radius, shape }) => {

    if (shape === "square") {
        return (
            <>
                <span className="Po-txt">Tamanho</span>
                <ul className="ProductOptions">
                    {options.map((opt, index) => <li className={shape} key={index} style={{ borderRadius: radius }}>{opt}</li>)}
                </ul>
            </>
        )
    }
    if (shape === "circle") {
        return (
            <>
                <span className="Po-txt">Cor</span>
                <ul className="ProductOptions">
                    {options.map((opt, index) => <li className={shape} key={index} style={{ backgroundColor: opt }}></li>)}
                </ul>
            </>
        )
    }
}

export default ProductOptions
