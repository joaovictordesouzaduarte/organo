import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  required?: boolean;
  label: string;
  valor: string;
  tipo?: "date" | "text" | "password" | "email" | "number";
}

function CampoTexto({
  aoAlterado,
  placeholder,
  label,
  valor,
  required = false,
  tipo = "text",
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
        type={tipo}
      />
    </div>
  );
}

export default CampoTexto;
