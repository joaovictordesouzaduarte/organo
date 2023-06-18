import "./Colaborador.css";

interface ColaborProps {
  nome: string;
  cargo: string;
  imagem: string;
  corDeFundo: string;
  data: string;
}

function Colaborador({ nome, cargo, imagem, corDeFundo, data }: ColaborProps) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img alt="" src={imagem}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
