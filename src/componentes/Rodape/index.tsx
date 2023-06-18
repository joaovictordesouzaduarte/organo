import "./Rodape.css";

function Rodape() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="#" target="_blank">
              <img alt="Facebook" src="/imagens/fb.png"></img>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img alt="Twitter" src="/imagens/tw.png"></img>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img alt="Instagram" src="/imagens/ig.png"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo organograma"></img>
      </section>
      <section>
        <p>Desenvolvido por João Victor Duarte</p>
      </section>
    </footer>
  );
}

export default Rodape;
