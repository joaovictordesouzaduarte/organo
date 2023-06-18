import "./Colaborador.css";

interface ColaborProps {
  nome: string;
  cargo: string;
  imagem: string;
  corDeFundo: string;
}

function Colaborador({ nome, cargo, imagem, corDeFundo }: ColaborProps) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img alt="" src={imagem}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
