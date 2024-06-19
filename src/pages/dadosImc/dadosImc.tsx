import FormDadosIMC from "@/components/FormDadosIMC";
import Grid from "@/components/Grid";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function dadosImc() {
    const [peso, setPeso] = useState<number | any>();
    const [altura, setAltura] = useState<number | any>();
    const [imc, setImc] = useState<number | any>("");
    const [status, setStatus] = useState<string | any>("");
    const [date, setDate] = useState<string | any>("");

    let [dataImc, setDataImc] = useState<any>();

    const router = useRouter();

    const {p_peso, p_altura, p_imc, p_status} = router.query;

    useEffect(()=> {
        const dataAtual = new Date();

        const dia = dataAtual.getDate(); // Obtém o dia do mês (1 a 31)
        const mes = dataAtual.getMonth() + 1; // Obtém o mês (0 a 11 --- lembre-se de adicionar 1)
        const ano = dataAtual.getFullYear(); // Obtém o ano (YYYY)

        setDate(dia + "/" + mes + "/" + ano);
        setPeso(p_peso);
        setAltura(p_altura);
        setImc(p_imc);
        setStatus(p_status);
    }, []);

    return(
        <div className="dados-container">
            <div className="dados-titulo">
                Dados IMC
            </div>
            <FormDadosIMC peso={peso} altura={altura} imc={imc} status={status} date={date} setDataImc={setDataImc}/>
            <Grid dataImc={dataImc}/>
        </div>
    )
};
