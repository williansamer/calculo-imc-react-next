interface ReferenciaProps{
    imc: number
}

export default function Referencia(props: ReferenciaProps) {
    return(
        <div className="flex flex-col ">
            <div className="w-full flex text-lg font-bold underline">
                <div className="w-1/2 border border-zinc-700 bg-zinc-400 text-center">Classificação</div>
                <div className="w-1/2 border border-zinc-700 bg-zinc-400 text-center">IMC</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc <= 18.4 ? "destaque-atencao" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Abaixo do Peso</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Abaixo de 18,4</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc >= 18.5 && props.imc <= 24.9 ? "destaque-normal" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Peso Normal</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Entre 18,5 e 24,9</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc >= 25 && props.imc <= 29.9 ? "destaque-atencao" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Sobrepeso</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Entre 25 e 29,9</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc >= 30 && props.imc <= 34.9 ? "destaque-grave" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Obesidade Grau I</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Entre 30 e 34,9</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc >= 35 && props.imc <= 39.9 ? "destaque-grave" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Obesidade Grau II</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Entre 35 e 39,9</div>
            </div>
            <div className={"w-full flex text-lg font-medium " + (props.imc > 0 && props.imc >= 40 ? "destaque-grave" : "")}>
                <div className="w-1/2 border border-zinc-400 pl-2">Obesidade Grau III</div>
                <div className="w-1/2 border border-zinc-400 pl-2">Acima de 40</div>
            </div>
        </div>
    )
};
