import "./index.css";

export function Footer() {
  return (
    <div className={"footer"}>
      <div className={"container-name"}>
        <h1 className={"LogoNome"}> Maycon</h1>
        <h1 className={"LogoSobreNome"}> Coutinho</h1>
      </div>
      <div className={"social-icons-container"}>
        <a
          href="https://www.linkedin.com/in/maycon-coutinho/"
          target="_blank"
          className={"social-icon"}
          rel="noreferrer"
        />
        <a
          onClick={() => {
            alert("mayconcoutinhoart@gmail.com");
          }}
          target="_blank"
          className={"social-icon"}
        />
        <a
          href="https://api.whatsapp.com/send/?text=Ol%C3%A1%20meu%20nome%20%C3%A9%20Maycon%20Coutinho,%20%20sou%20Desenvolvedor%20Full%20Stack%20e%20esse%20%C3%A9%20o%20meu%20WhatsApp&phone=5528999287132"
          target="_blank"
          className={"social-icon"}
          rel="noreferrer"
        />
      </div>
      <ul className={"footer-menu-container"}>
        <li onClick={() => alert("Legal")} className={"menu-item"}>
          Legal
        </li>
        <li onClick={() => alert("Cookies")} className={"menu-item"}>
          Cookies
        </li>
        <li onClick={() => alert("Privacy")} className={"menu-item"}>
          Privacy
        </li>
        <li onClick={() => alert("Shipping")} className={"menu-item"}>
          Shipping
        </li>
        <li onClick={() => alert("Refounds")} className={"menu-item"}>
          Refounds
        </li>
      </ul>
      <span className={"copyright"}>
        &copy;2023, Template React.js Maycon Coutinho. All rights reserved.
      </span>
    </div>
  );
}
