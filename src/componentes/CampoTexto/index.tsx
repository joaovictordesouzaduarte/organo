import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  required?: boolean;
  label: string;
  valor: string;
}

function CampoTexto({
  aoAlterado,
  placeholder,
  label,
  valor,
  required = false,
}: CampoTextoProps) {
  // let valor = "";
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
    valor = evento.target.value;
  };
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        required={required}
        placeholder={placeholder}
        onChange={aoDigitado}
        value={valor}
      />
    </div>
  );
}

export default CampoTexto;
