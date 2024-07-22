const options = [
    {
        tamanho: ["39", "40", "41", "42", "43"], cor: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]
    },
]

const ProductOptions = () => {
    return (
        <div className="productoptions">
            <div className="tamanho">
                <span>Tamanho</span>
                <ul>
                    <li>{options[0].tamanho[0]}</li>
                    <li>{options[0].tamanho[1]}</li>
                    <li>{options[0].tamanho[2]}</li>
                    <li>{options[0].tamanho[3]}</li>
                    <li>{options[0].tamanho[4]}</li>
                </ul>
            </div>
            <div className="cor">
                <span>Cor</span>
                <ul>
                    <li style={{ backgroundColor: options[0].cor[0] }}></li>
                    <li style={{ backgroundColor: options[0].cor[1] }}></li>
                    <li style={{ backgroundColor: options[0].cor[2] }}></li>
                    <li style={{ backgroundColor: options[0].cor[3] }}></li>
                    <li style={{ backgroundColor: options[0].cor[4] }}></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductOptions