import { useState } from "react";

interface FormDadosIMCProps{
    peso: number | any,
    altura: number | any,
    imc: number | any,
    status: string,
    setDataImc: any,
    date: any
}

export default function FormDadosIMC(props: FormDadosIMCProps) {
    const [nome, setNome] = useState<string>("");

    function salvarImc() {
        if (nome !== "" && props.peso !== undefined && props.altura !== undefined && props.imc !== undefined && props.status !== undefined) {
            fetch('http://127.0.0.1:1880/addIMCData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: Math.random()*999999999999, nome: nome, peso: props.peso, altura: props.altura, imc: props.imc, status: props.status, data: props.date},)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Erro ao adicionar o IMC.');
            })
            .then(data => {
                props.setDataImc(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        } else {
            alert("Todos os campos tem que ser preenchidos")
        }
    }
    return(
        <div className="dados-form">
        <div className="div-container-inputs">
            <label className="each-label">Nome: </label>
            <input className="each-input" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Peso: </label>
            <input className="each-input" type="text" value={props.peso} readOnly/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Atura: </label>
            <input className="each-input" type="text" value={props.altura} readOnly/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">IMC: </label>
            <input className="each-input" type="text" value={props.imc} readOnly/>
        </div>
        <div className="div-container-inputs">
            <label className="each-label">Data: </label>
            <input className="each-input" type="text" value={props.date}/>
        </div>
        <div className="div-botao-salvar">
            <button className="dados-botao-salvar" onClick={salvarImc}>Salvar</button>
        </div>
    </div>
    )
};
