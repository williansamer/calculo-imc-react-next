import { useState } from "react";

interface FormDadosIMCProps{
    peso: number | any,
    altura: number | any,
    imc: number | any
}

export default function FormDadosIMC(props: FormDadosIMCProps) {
    const [nome, setNome] = useState<string>("");

    return(
        <div className="dados-form">
        <div className="div-container-inputs">
            <label className="each-label">Nome: </label>
            <input className="each-input" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Peso: </label>
            <input className="each-input" type="text" value={props.peso}/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Atura: </label>
            <input className="each-input" type="text" value={props.altura}/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">IMC: </label>
            <input className="each-input" type="text" value={props.imc}/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Data: </label>
            <input className="each-input" type="text" value="18/06/2024"/>
        </div>
        <div className="div-botao-salvar">
            <button className="dados-botao-salvar">Salvar</button>
        </div>
    </div>
    )
};
