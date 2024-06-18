interface CalcularImcProps{
    label: string,
    state: number,
    fState: any
}

export default function CalcularImc(props: CalcularImcProps) {

    return(
        <div className="w-[250px] flex justify-between">
            <label className="font-semibold text-xl underline">{props.label}</label>
            <input type="number" value={props.state} onChange={(e)=>props.fState(e.target.value)}/>
        </div>
    )
};
