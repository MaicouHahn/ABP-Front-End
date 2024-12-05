import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="menu" id="menu">
      <h1>Explore o menu</h1>
      <p className="menu-text">Explore uma gama de produtos deliciosos!</p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu-list-item"
            >
              <img src={item.menu_image} alt={`Imagem de ${item.menu_name}`} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
