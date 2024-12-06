/* eslint-disable react/prop-types */
import "./Login.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Faça login!");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginSuccess(true);

    setTimeout(() => {
      setShowLogin(false);
    }, 2000);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{loginSuccess ? "Login efetuado com sucesso!" : currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Fechar"
          />
        </div>

        {!loginSuccess && (
          <div className="login-popup-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Nome completo" required />
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />

            <div className="forget-password">
              <label htmlFor="">
                <input type="checkbox" />
                Lembre-se de mim
                <a href="#">Esqueceu sua senha?</a>
              </label>
            </div>
          </div>
        )}

        {!loginSuccess && (
          <button type="submit">
            {currentState === "Crie sua conta!" ? "Criar sua conta" : "Login"}
          </button>
        )}

        {!loginSuccess && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Aceito os termos de uso e políticas de privacidade.</p>
          </div>
        )}

        {!loginSuccess && currentState === "Login" ? (
          <p>
            Novo por aqui? Crie uma conta.
            <span onClick={() => setCurrentState("Crie sua conta!")}>
              {" "}
              Clique aqui!
            </span>
          </p>
        ) : (
          <p>
            Já possui uma conta?
            <span onClick={() => setCurrentState("Login")}> Entrar!</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
