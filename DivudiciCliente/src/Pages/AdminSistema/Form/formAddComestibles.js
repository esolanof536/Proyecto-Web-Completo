import React, { useState } from 'react';
import '../FormEstilos/formAddComestibles.css';
import { agregarComestibleApi } from "../../../Api/Sistema/comestibles";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarComestibles() {



    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        cantidad: "",
        tipo: "",
        restaurante: "",
        marca: "",
        clase: "",
        linea: "",
        unidadMedida: ""
    });



    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };



    const show = async e => {
        e.preventDefault();
        console.log(inputs);
        const result = await agregarComestibleApi(inputs);
        var z = inputs.codigo;
        var str = Number(z.slice(4));
        const cod = {
            valor: str,
            prefijo: "COM-",
            descripcion: "Comestibles",
            tipo: "Comestibles"
        }
        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Comestible Agregada"
            });
            window.location.href = window.location.href;
        }
    }
    const cod = (e) => {
        const prefijo = {
            prefijo: "COM-"
        }
        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codPuesto").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;
        })();
    }
    return (
        <>
            <div className="container" id="comesContainer">
                <br />
                <h1>Comestibles</h1>
                <div className="container">
                    <h3 id="infoEmp">Información</h3><br />
                    <form onSubmit={show} onChange={changeForm}>
                        <div className="row">
                            <div className="col-3">
                                <img src="https://image.freepik.com/vector-gratis/pizza-plato-soda-salsa-ilustracion-vector-icono-vista-angulo-superior-concepto-icono-comida-bebida-blanco-aislado_138676-432.jpg" alt="Comestibles" id="empLogo" />
                            </div>
                            <div className="col-sm" >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <h5>Código</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="codPuesto" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <div></div>
                                            <h5>Nombre</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" onClick={cod} id="nomEmple" value={inputs.nombre} name="nombre" className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <h5>Cantidad</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="nomEmple" value={inputs.cantidad} name="cantidad" className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Tipo Comestible</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="tipo" id="" className="form-control">
                                                <option selected disabled>Tipos</option>
                                                <option value="Tipos1">Tipos1</option>
                                                <option value="Tipos2">Tipos2</option>
                                                <option value="Tipos3">Tipos3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Clase Comestible</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="clase" id="" className="form-control">
                                                <option selected disabled>Clases</option>
                                                <option value="Clases1">Clases1</option>
                                                <option value="Clases2">Clases2</option>
                                                <option value="Clases3">Clases3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Linea Comestible</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="linea" id="" className="form-control">
                                                <option selected disabled>Lineas</option>
                                                <option value="Escala1">Escala1</option>
                                                <option value="Escala2">Escala2</option>
                                                <option value="Escala3">Escala3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Unidad Medida</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="unidadMedida" id="" className="form-control">
                                                <option selected disabled>Unidades</option>
                                                <option value="Unidad3">Unidad1</option>
                                                <option value="Unidad3">Unidad2</option>
                                                <option value="Unidad3">Unidad3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Marca</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="marca" className="form-control">
                                                <option selected disabled>Marcas</option>
                                                <option value="Marcas1">Marcas1</option>
                                                <option value="Marcas2">Marcas2</option>
                                                <option value="Marcas3">Marcas3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Restaurante</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="restaurante" className="form-control">
                                                <option selected disabled>Restaurantes</option>
                                                <option value="Piccola Stella">Piccola Stella</option>
                                                <option value="Turin Anivo">Turin Anivo</option>
                                                <option value="Notte di Fuoco">Notte di Fuoco</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
