import React, { useState } from 'react';
import "../FormEstilos/formBebCalientes.css";
import { agregarBebidaCalienteApi } from "../../../Api/bebidaCalientes";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function FormAddbebcaliente() {


  const [inputs, setInputs] = useState({

    codigo: "",
    nombre: "",
    ingrediente: "",
    precio: "",
    restaurante: "",
    descripcion: "",
    foto: ""

  });

  const changeForm = e => {

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const show = async e => {

    e.preventDefault();
    var z = inputs.codigo;
    var str = Number(z.slice(3));


    const cod = {

      valor: str,
      prefijo: "BC-",
      descripcion: "Bebidas Calientes",
      tipo: "Bebidas Calientes"
    }
    const result2 = agregarConsecuApi(cod);
    const result = await agregarBebidaCalienteApi(inputs);
    if (result.message) {
      notification["error"]({
        message: result.message
      })
    } else {

      notification["success"]({
        message: "Bebica caliente agregada"
      });
    }
  }
  const cod = (e) => {

    const prefijo = {

      prefijo: "BC-"

    }

    var v = 0;
    (async () => {
      const result = await getConsecuApi(prefijo);
      v = result.conse.valor;
      v = v + 1;
      document.getElementById("codBC").value = prefijo.prefijo + v;
      inputs.codigo = prefijo.prefijo + v;

    })();

  }

  return (
    <div>
      <div className="container bordeGeneral mt-5">
        <br />
        <h1>Bebidas Calientes</h1>
        <br />
        <h3 id="beCaInfo">Informacion</h3>
        <br />
        <form onSubmit={show} onChange={changeForm}>

          <div className="row">
            <div className="col-3">
              <img
                src="https://pbs.twimg.com/profile_images/1355400485755379714/LHTa4v6x.jpg"
                alt="Bebidas Caliente"
                id="iconBeCa"
              />
            </div>
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <div className="row">
                    <div className="col-sm">
                      <h5>Código</h5>
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        disabled id="codBC"
                        className="form-control"
                        placeholder="Ingrese código"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Nombre</h5>
                    </div>
                    <div className="col-sm">
                      <input
                        type="text" onClick={cod}
                        value={inputs.nombre} name="nombre"
                        className="form-control"
                        placeholder="Ingrese nombre"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Ingredientes</h5>
                    </div>
                    <div className="col-sm">
                      <textarea
                        value={inputs.ingrediente} name="ingrediente"
                        cols="23"
                        rows="3"
                        className="form-control textArea"
                        id="ingreBebCalInput"
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Precio</h5>
                    </div>
                    <div className="col-sm">
                      <input
                        type="number"
                        value={inputs.precio} name="precio"
                        className="form-control"
                        placeholder="Ingrese precio"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Restaurante</h5>
                    </div>
                    <div className="col-sm">
                      <select name="restaurante" className="form-control">
                        <option selected disabled>Seleccione Rest</option>
                        <option value="Piccola Stella">Piccola Stella</option>
                        <option value="Turin Anivo">Turin Anivo</option>
                        <option value="Notte di Fuoco">Notte di Fuoco</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Descripción</h5>
                    </div>
                    <div className="col-sm">
                      <textarea
                        value={inputs.descripcion} name="descripcion"
                        cols="23"
                        rows="3"
                        className="form-control textArea"
                        id="descBebCalInput"
                      ></textarea>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <h5>Imagen</h5>
                </div>
                <div className="col-sm">
                  <img src="" alt="" id="imgBeCa" />
                  <input type="file" id="fileBeCa" />
                  <br />
                  <br />
                  <button id="findBeCa">Examinar...</button>
                </div>
              </div>
              <div className="row" id="buttonRow">
                <div className="col-sm">
                  <button value="Submit" type="submit">Submit</button>

                </div>
                <div className="col-sm">
                  <a href="">
                    <i className="far fa-times-circle fa-3x"></i>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="">
                    <i className="fas fa-broom fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
