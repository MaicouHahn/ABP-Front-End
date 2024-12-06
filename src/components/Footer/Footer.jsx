import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.footer_logo} alt="" />
          <p>
            A Cakestra é uma padaria moderna e minimalista que oferece delivery
            de bolos, sanduíches e bebidas típicas, utilizando apenas
            ingredientes orgânicos. Seu conceito foca em praticidade, qualidade
            e sustentabilidade, proporcionando uma experiência saborosa e
            saudável.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.x_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Cakestra</h2>
          <ul>
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Delivery</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contato</h2>
          <ul>
            <li>(48) 9999-9999</li>
            <li>contato@cakestra.com.br</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        2024 © Cakestra.com - Todos os Direitos Reservados.
      </p>
    </div>
  );
};

export default Footer;
