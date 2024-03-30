import { useState } from "react";
import "./form.scss";

const Form = ({ setOpenForm }) => {
  const [colorSelected, setColorSelected] = useState("");

  const handleSelection = (e) => {
    console.log(e.target.parentNode.dataset.color);
    setColorSelected(e.target.parentNode.dataset.color);
  };
  const handleForm = () => {


  };

  return (
    <div id="modalForm">
      <div className="purchaseForm">
        <div className="closeBtn">
          <button onClick={() => setOpenForm(false)}>X</button>
        </div>
        <div className="purchaseForm_title">
          <h4>¡Pide Tu Morral en OFERTA!</h4>
          <p>
            Si deseas que te lo llevemos a tu casa, llena el siguiente
            formulario y te llegará dentro de 3 días(confirmar dato) con ENVÍO
            GRATIS y lo pagas solo cuando lo recibes.
          </p>
        </div>
        <div className="formContainer">
          <div className="colorOptions">
            <h4>Selecciona el color</h4>
            <div className="colorsContainer">
              <div
                className="colorOption caquiColor"
                data-color="Beige Arena"
                onClick={handleSelection}
              >
                Beige Arena
                <img src="src/assets/img/beigeArena.png" alt="" />
              </div>
              <div
                className="colorOption blackColor"
                data-color="Negro Noche"
                onClick={handleSelection}
              >
                Negro Noche
                <img src="src/assets/img/negroNoche.png" alt="" />
              </div>
              <div
                className="colorOption greenColor"
                data-color="Verde Militar"
                onClick={handleSelection}
              >
                Verde Militar
                <img src="src/assets/img/verdeMilitar.png" alt="" />
              </div>
            </div>
          </div>
          <div className="purchaseDetail">
            <div className="purchaseItem colorSelected">
              Color: <span>{colorSelected}</span>
            </div>
            <div className="purchaseItem purchaseDetail_subtotal">
              <span>Subtotal</span> <span>$xxx</span>
            </div>
            <div className="purchaseItem purchaseDetail_envio">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <hr />
            <div className="purchaseItem purchaseDetail_total">
              <span>Total</span>
              <span>xxx</span>
            </div>
          </div>
          <div className="alertAdvice">
            <span>🚨 Atención 🚨</span>
            <p>
              Asegúrate de proporcionar la información correcta para el envío de
              tu pedido. Es crucial incluir un número de teléfono con WhatsApp.
            </p>
          </div>

          <form action="">
            <label htmlFor="name">
              Nombre
              <input type="text" id="name" placeholder="Tu Nombre Completo" />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="text" id="email" placeholder="ejemplo@gmail.com" />
            </label>
            <label htmlFor="telefono">
              Telefono
              <input type="text" id="telefono" placeholder="320 123 4567" />
            </label>
            <div className="ciudadDepartamento">
              <label htmlFor="ciudad">
                Ciudad
                <input type="text" id="ciudad" placeholder="Ciudad" />
              </label>
              <label htmlFor="departamento">
                Departamento
                <input
                  type="text"
                  id="departamento"
                  placeholder="Departamento"
                />
              </label>
            </div>
            <label htmlFor="direccion">
              Dirección
              <input
                type="text"
                id="direccion"
                placeholder="calle xxx, barrio xxx, cerca a ..."
              />
            </label>

            <button className="btn btn-success text-white">
              ¡Pedir y Pagar En Casa!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
