import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Monte seu pedido.</h1>
        <p>
          As opções que mais lhe agradarem podem ser selecionadas dentre um menu com diversas outras. Confira o cardápio abaixo!
        </p>
        <button>ver cardápio</button>
      </div>
    </div>
  );
};

export default Header;
