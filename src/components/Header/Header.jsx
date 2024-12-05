import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Organize seu pedido aqui</h1>
        <p>
          Escolha a que mais lhe agradar dentre um menu com diversas opções,
          feitas com ingredientes selecionados e orgânicos.
        </p>
        <button>ver cardápio</button>
      </div>
    </div>
  );
};

export default Header;
