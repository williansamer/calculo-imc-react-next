import CalcularImc from "@/components/CalcularImc";
import Referencia from "@/components/Referencia";
import Link from "next/link";
import { useState } from "react"

export default function ImcInicio() {
    const [peso, setPeso] = useState<number | any>();
    const [altura, setAltura] = useState<number | any>();
    const [resultadoImc, setResultadoImc] = useState<number>(0);

    function handleImc() {
        let res = peso / (altura * altura);
        res = Number(res.toFixed(2));
        setResultadoImc(res);
    }

    return(
        <div className="flex flex-col gap-5 border border-black p-2 bg-zinc-500">
            <p className="font-bold text-2xl text-zinc-100">Calculando Índice de Medida Corporal</p>
            <CalcularImc label="Peso: " state={peso} fState={setPeso}/>
            <CalcularImc label="Altura: " state={altura} fState={setAltura}/>
            <button className="hover:bg-zinc-600 hover:shadow-md text-zinc-100 font-semibold bg-zinc-700 p-2 text-xl w-full" onClick={handleImc}>Calcular</button>
            <Link className="hover:bg-zinc-600 hover:shadow-md text-center text-zinc-100 font-semibold bg-zinc-700 p-2 text-xl w-full"
                    href={{
                    pathname: "/dadosImc/dadosImc",
                    query: {
                        p_peso: peso,
                        p_altura: altura,
                        p_imc: resultadoImc
                    }}}
            >Dados IMC</Link>
            <div className="text-2xl">Resultado: <span className="text-green-300 bg-zinc-600 p-2 rounded-md">{resultadoImc}</span></div>
            <hr/>
            <Referencia imc={resultadoImc}/>
        </div>
    )
};
