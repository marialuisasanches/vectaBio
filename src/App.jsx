import Logo from "/imgs/semfundovecta.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <img src={Logo} alt="Logo da Vecta" />

        <div className="subtitulo">
          <p>Contabilidade que simplifica.</p>
          <p className="sub2">Resultado que transforma.</p>
        </div>
      </header>

      <section className="links">
        <a
          href="https://wa.me/55SEU NUMERO"
          className="btn btn-whatsapp"
          id="whatsapp-luan"
          target="_blank"
        >
          Falar no WhatsApp com Luan Zuniga
        </a>

        <a
          href="https://wa.me/55SEU NUMERO"
          className="btn btn-whatsapp"
          id="whatsapp-lucas"
          target="_blank"
        >
          Falar no WhatsApp com Lucas Cunha
        </a>
        <a
          href="https://instagram.com/SEU@"
          className="btn btn-insta"
          target="_blank"
        >
          Nos siga no Instagram
        </a>
      </section>
      <section className="porque">
        <div className="porque-titulo">
          <span>—</span>
          <h2>Por que a Vecta?</h2>
          <span>—</span>
        </div>

        <div className="cards">
          <div className="card">
            <span className="card-icon">⚡</span>
            <h3>Contabilidade Inteligente</h3>
            <p>
              Tecnologia e conhecimento para organizar as finanças do seu
              negócio com agilidade.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🎯</span>
            <h3>Especialistas em MEI</h3>
            <p>Soluções sob medida para quem trabalha por conta própria.</p>
          </div>
          <div className="card">
            <span className="card-icon">🛡️</span>
            <h3>Serviços Completos</h3>
            <p>Da abertura de empresa à declaração anual — cuidamos de tudo.</p>
          </div>
          <div className="card">
            <span className="card-icon">🚀</span>
            <h3>Atendimento Rápido</h3>
            <p>Respostas ágeis e linguagem simples. Sem burocracia.</p>
          </div>
        </div>
      </section>

      <section className="fale">
        <h3>Parceiro do seu negócio</h3>
        <p>Do início ao crescimento, a Vecta está com você.</p>
        <a href="#whatsapp-luan" className="btn btn-fale">
          Fale conosco
        </a>
      </section>

      <footer>
        <p>© 2026 VECTA SOLUÇÕES CONTÁBEIS</p>
      </footer>
    </div>
  );
}

export default App;
