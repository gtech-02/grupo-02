const options = [
    {
        tamanho: ["39", "40", "41", "42", "43"], cor: ["1", "2", "3", "4", "5"]
    },
]

export default function ProductOptions() {
    return (
        <>
            <div>{options[0].tamanho[0]} {options[0].tamanho[1]} {options[0].tamanho[2]} {options[0].tamanho[3]} {options[0].tamanho[4]}</div>
            <div>{options[0].cor[0]} {options[0].cor[1]} {options[0].cor[2]} {options[0].cor[3]} {options[0].cor[4]}</div>
        </>
    )
}