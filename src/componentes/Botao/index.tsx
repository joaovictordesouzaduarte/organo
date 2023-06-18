import "./Botao.css";
import * as React from "react";

interface BotaoProps {
  children: React.ReactElement | string;
}
function Botao(props: BotaoProps) {
  return <button className="botao">{props.children}</button>;
}

export default Botao;
