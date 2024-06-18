import FormDadosIMC from "@/components/FormDadosIMC";
import Grid from "@/components/Grid";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function dadosImc() {
    const [peso, setPeso] = useState<number | any>();
    const [altura, setAltura] = useState<number | any>();
    const [imc, setImc] = useState<number | any>("");

    const router = useRouter();

    const {p_peso, p_altura, p_imc} = router.query;

    useEffect(()=> {
        setPeso(p_peso);
        setAltura(p_altura);
        setImc(p_imc);
    }, []);

    return(
        <div className="dados-container">
            <div className="dados-titulo">
                Dados IMC
            </div>
            <FormDadosIMC peso={peso} altura={altura} imc={imc} />
            <Grid/>
        </div>
    )
};
