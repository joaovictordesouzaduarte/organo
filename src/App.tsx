import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { IColaborador } from "./componentes/compartilhado/interfaces/IColaborador";
function App() {
  const [colaboradores, setColaborador] = useState<IColaborador[]>([]);
  const aoNovoColaboradorCadastrado = (colaborador: IColaborador) => {
    setColaborador([...colaboradores, colaborador]);
  };
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9 ",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A28",
      corSecundaria: "#FFEEDF",
    },
  ];
  return (
    <div className="App">
      <Banner enderecoImagem="/imagens/banner.png" />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          nome={time.nome}
          key={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
