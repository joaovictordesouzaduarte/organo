import Colaborador from "../Colaborador";
import { IColaborador } from "../compartilhado/interfaces/IColaborador";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  nome: string;
  corSecundaria: string;
  colaboradores: IColaborador[];
}
function Time(props: TimeProps) {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
            cargo={colaborador.cargo}
            nome={colaborador.nome}
            data={colaborador.data}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Time;
