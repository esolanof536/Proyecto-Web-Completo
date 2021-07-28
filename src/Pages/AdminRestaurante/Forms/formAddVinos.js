import React, { useState } from 'react';
import "../FormEstilos/formAddVinos.css";
import { agregarVinosApi } from "../../../Api/vinos";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function FormAddVinos() {


  const [inputs, setInputs] = useState({

    codigo: "",
    nombre: "",
    marca: "",
    nacionalidad: "",
    precioUnitario: "",
    precioBotella: "",
    yearCosecha: "",
    restaurante: "",
    cantidad: "",
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

    const result = await agregarVinosApi(inputs);

    var z = inputs.codigo;
    var str = Number(z.slice(2));


    const cod = {

      valor: str,
      prefijo: "V-",
      descripcion: "Vinos",
      tipo: "Vinos"
    }

    const result2 = agregarConsecuApi(cod);
    if (result.message) {
      notification["error"]({
          message: result.message
      })
  } else {

      notification["success"]({
          message: "Vino agregado"
          
      });
      window.location.href = window.location.href;
  }
    

  }

  const cod = (e) => {

    const prefijo = {

      prefijo: "V-"

    }

    var v = 0;
    (async () => {
      const result = await getConsecuApi(prefijo);
      v = result.conse.valor;
      v = v + 1;
      document.getElementById("codVin").value = prefijo.prefijo + v;
      inputs.codigo = prefijo.prefijo + v;

    })();

  }

  return (

    <div className="container bordeGeneralVino">
      <br />
      <h1>Vinos</h1>
      <br />
      <h3 id="addVinoInfo">Informacion</h3>
      <br />
      <form onSubmit={show} onChange={changeForm}>

        <div className="row">
          <div className="col-3">
            <img
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/wine.png"
              alt="Bebidas Gaseosa"
              id="addVinoLogo"
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
                      disabled
                      id="codVin"
                      className="form-control"
                      placeholder="Ingrese código" />
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
                    <h5>Marca</h5>
                  </div>
                  <div className="col-sm">
                    <select name="marca" className="form-control">

                      <option selected disabled>Marcas</option>
                      <option value="Nestle">Nestle</option>
                      <option value="Bimbo">Bimbo</option>
                      <option value="Coronado">Coronado</option>

                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm">
                    <h5>Nacionalidad</h5>
                  </div>
                  <div className="col-sm">
                    <select name="nacionalidad" className="form-control">
                      <option selected disabled>Nacionalidades</option>
                      <option value="Ticos">Ticos</option>
                      <option value="Nicas">Nicas</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm">
                    <h5>Precio Unitario</h5>
                  </div>
                  <div className="col-sm">
                    <input
                      type="text"
                      value={inputs.precioUnitario} name="precioUnitario"
                      className="form-control"
                      placeholder="Ingrese precio"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm">
                    <h5>Precio Botella</h5>
                  </div>
                  <div className="col-sm">
                    <input
                      type="text"
                      value={inputs.precioBotella} name="precioBotella"
                      className="form-control"
                      placeholder="Ingrese precio"
                    />
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-sm">
                    <h5>Descripción</h5>
                  </div>
                  <div className="col-sm">
                    <textarea value={inputs.descripcion} name="descripcion" id="descAddVino" cols="21" rows="3" className="form-control textArea" id="descAddVinoInput"></textarea>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="col-sm">
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
                <h5>Año Cosecha</h5>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={inputs.yearCosecha} name="yearCosecha"
                  className="form-control"
                  placeholder="Ingrese año"
                />
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm">
                <h5>Cantidad</h5>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={inputs.cantidad} name="cantidad"
                  className="form-control"
                  placeholder="Ingrese cantidad"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm">
                <h5>Foto</h5>
              </div>
              <div className="col-sm">
                <img src="" alt="" id="imgVino" />
                <br />
                <br />
                <label id="addImgVinos" name="addImgVinos" className="btn">
                  <input type="file" id="fileVinos" name="fileVinos" />
                                            Examinar...
                                            </label>
              </div>
            </div>
            <br />
            <div className="row">
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
  );
}
