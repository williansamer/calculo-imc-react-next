export default function Grid() {
    return(
        <div className="grid-container">
            <div className="titulo-grid">
                <div className="each-titulo titulo-nome">Nome</div>
                <div className="each-titulo">Peso</div>
                <div className="each-titulo">Altura</div>
                <div className="each-titulo">IMC</div>
                <div className="each-titulo">Data</div>
            </div>
            <div className="texto-grid">
                <div className="each-texto texto-nome">Nome 1</div>
                <div className="each-texto">Peso 1</div>
                <div className="each-texto">Altura 1</div>
                <div className="each-texto">IMC 1</div>
                <div className="each-texto">Data 1</div>
            </div>
        </div>
    )
};
