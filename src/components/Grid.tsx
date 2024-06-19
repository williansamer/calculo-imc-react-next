import { useEffect, useState } from "react"

interface GridProps{
    dataImc: any
}

export default function Grid(props: GridProps) {

    const [imcData, setImcData] = useState<any[]>([]);

    useEffect(()=> {
        if (props.dataImc === undefined) {
            fetch("http://127.0.0.1:1880/showIMCData")
            .then(res=>res.json())
            .then(res=>
                setImcData(res)
            )
        } else {
            setImcData(props.dataImc)
        }
    }, [props.dataImc])

    return(
        <div className="grid-container">
            <div className="titulo-grid">
                <div className="each-titulo titulo-status"></div>
                <div className="each-titulo titulo-nome">Nome</div>
                <div className="each-titulo">Peso</div>
                <div className="each-titulo">Altura</div>
                <div className="each-titulo">IMC</div>
                <div className="each-titulo">Data</div>
            </div>
            {imcData.map((element: any) => {
                return(
                    <div className="texto-grid" key={element.id}>
                        <div className={"each-texto texto-status rounded-2xl " + element.status}></div>
                        <div className="each-texto texto-nome">{element.nome}</div>
                        <div className="each-texto">{element.peso}</div>
                        <div className="each-texto">{element.altura}</div>
                        <div className="each-texto">{element.imc}</div>
                        <div className="each-texto">{element.data}</div>
                    </div>
                )
            })}
        </div>
    )
};
