import React, { useState } from 'react';
import "../FormEstilos/formLicores.css";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { agregarLicorApi } from "../../../Api/licores";
import { faBroom, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { notification } from 'antd';
library.add(faCheckCircle, faTimesCircle, faBroom);


export default function AgregarLicor() {

    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        marca: "",
        nacionalidad: "",
        precioUnitario: "",
        precioBotella: "",
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


    const cod = (e) => {

        const prefijo = {

            prefijo: "L-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codLicor").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }


    const show = async e => {

        e.preventDefault();

        const result = await agregarLicorApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(2));


        const cod = {

            valor: str,
            prefijo: "L-",
            descripcion: "Licores",
            tipo: "Licores"
        }

        const result2 = agregarConsecuApi(cod);
        
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Licor agregado"
                
            });
            window.location.href = window.location.href;
        }

    }

    return (

        <>
            <title>Agregar Licores</title>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/fdf10fb395.js" crossOrigin="anonymous"></script>


            <br></br>
            <div className="container" id="addLicorContainer">
                <br></br>
                <h1>Licores</h1>
                <form onSubmit={show} onChange={changeForm}>
                    <div className="container">
                        <h3 id="infoLicor">Información</h3><br></br>
                        <div className="row">

                            <div className="col-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Alcohol_drinking_icon.svg/1200px-Alcohol_drinking_icon.svg.png" alt="Puesto" id="logoLicor" />
                            </div>
                            <div className="col-sm" >

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <div></div>
                                            <h5>Código</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="codLicor" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="col-sm">

                                            <h5>Nombre</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" value={inputs.nombre} onClick={cod} name="nombre" id="nomLicor" className="form-control" />
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Marca</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="marca" id="marcaSelectLicor" className="form-control">

                                                <option defaultValue disabled>Marcas</option>
                                                <option value="Nestle">Nestle</option>
                                                <option value="Bimbo">Bimbo</option>
                                                <option value="Coronado">Coronado</option>

                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Nacionalidad</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="nacionalidad" id="nacioSelectLicor" className="form-control">

                                                <option defaultValue disabled>Nacionalidades</option>
                                                <option value="Tico">Tico</option>
                                                <option value="Nica">Nica</option>

                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Precio Uni.</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="number" value={inputs.precioUnitario} name="precioUnitario" className="form-control" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Precio Botella</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="number" value={inputs.precioBotella} name="precioBotella" className="form-control" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Cantidad</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="number" value={inputs.cantidad} name="cantidad" className="form-control" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Restaurante</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="restaurante" id="restauSelectLicor" className="form-control">
                                                <option selected disabled>Restaurantes</option>
                                                <option value="Piccola Stella">Piccola Stella</option>
                                                <option value="Turin Anivo">Turin Anivo</option>
                                                <option value="Notte di Fuoco">Notte di Fuoco</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Detalle</h5>
                                        </div>
                                        <div className="col-sm">
                                            <textarea value={inputs.descripcion} name="descripcion" cols="21" rows="3" className="textAreaLicor "></textarea>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Imagen</h5>
                                        </div>
                                        <div className="col-sm">
                                            <img src="" alt="" id="imgLicor" />
                                            <br></br>
                                            <br></br>
                                            <label id="addImgLicor" name="addImgLicor" className="btn">
                                                <input type="file" id="fileLicor" name="fileLicor" />
                                            Examinar...
                                            </label>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>


                                    <div className="row">
                                        <div className="col-sm">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </>
    )
}
