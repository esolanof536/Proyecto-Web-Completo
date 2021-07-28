import React, { useState, useEffect } from 'react'
import "./FacturacionCliente.css";
import { getEspecialesNameApi } from "../../Api/especiales"
import { getMesasNameApi, getMesaEspecificaName, updateMesaApi } from "../../Api/mesas"
import { getBuffetNameApi } from "../../Api/buffet"
import { agregarCliMesaApi } from "../../Api/factMesa"
import jwtDecode from 'jwt-decode';
import { ACCESS_TOKEN } from '../../Utils/constants'


var total = 0;

const setPrice = (e) => {


    var especialPrecio = document.getElementById("inpPrecio1");
    var especialPrecio2 = document.getElementById("inpPrecio2");
    var especialPrecio3 = document.getElementById("inpPrecio3");
    var especialPrecio4 = document.getElementById("inpPrecio4");

    var buffetPrecio = document.getElementById("inpBufPrecio1");
    var buffetPrecio2 = document.getElementById("inpBufPrecio2");
    var buffetPrecio3 = document.getElementById("inpBufPrecio3");
    var buffetPrecio4 = document.getElementById("inpBufPrecio4");

    var buffetch1 = document.getElementById("buffet1");
    var buffetch2 = document.getElementById("buffet2");
    var buffetch3 = document.getElementById("buffet3");
    var buffetch4 = document.getElementById("buffet4");

    var sumatotal = document.getElementById("montoTotal");
    total = Number(sumatotal.value);


    var selec = e.target;
    var selectedText = selec.options[selec.selectedIndex].value;



    if (selec.id == "pedidoSilla1") {

        especialPrecio.value = selectedText;


    } else if (selec.id == "pedidoSilla2") {


        especialPrecio2.value = selectedText;


    } else if (selec.id == "pedidoSilla3") {

        especialPrecio3.value = selectedText;



    } else if (selec.id == "pedidoSilla4") {

        especialPrecio4.value = selectedText;

    } else if (selec.id == "selecBuff1" && buffetch1.checked == true) {

        buffetPrecio.value = selectedText;

    } else if (selec.id == "selecBuff2" && buffetch2.checked == true) {

        buffetPrecio2.value = selectedText;

    } else if (selec.id == "selecBuff3" && buffetch3.checked == true) {

        buffetPrecio3.value = selectedText;

    } else if (selec.id == "selecBuff4" && buffetch4.checked == true) {

        buffetPrecio4.value = selectedText;

    }

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;
    var p6 = 0;
    var p7 = 0;
    var p8 = 0;


    if (especialPrecio.value !== "" || especialPrecio.value !== "0") {

        p1 = Number(especialPrecio.value);

    } if (especialPrecio2.value !== "" || especialPrecio2.value !== "0") {

        p2 = Number(especialPrecio2.value);

    } if (especialPrecio3.value !== "" || especialPrecio3.value !== "0") {

        p3 = Number(especialPrecio3.value);

    } if (especialPrecio4.value !== "" || especialPrecio4.value !== "0") {

        p4 = Number(especialPrecio4.value);

    } if (buffetch1.checked == true) {


        if (buffetPrecio.value !== "" || buffetPrecio.value !== "0") {

            p5 = Number(buffetPrecio.value);

        }


    } if (buffetch2.checked == true) {


        if (buffetPrecio2.value !== "" || buffetPrecio2.value !== "0") {

            p6 = Number(buffetPrecio2.value);
        }


    } if (buffetch3.checked == true) {

        if (buffetPrecio3.value !== "" || buffetPrecio3.value !== "0") {

            p7 = Number(buffetPrecio3.value);
        }


    } if (buffetch4.checked == true) {


        if (buffetPrecio4.value !== "" || buffetPrecio4.value !== "0") {

            p8 = Number(buffetPrecio4.value);
        }

    }

    total = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;


    sumatotal.value = Number(total);
}


export default function FacturacionCliente() {

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    //iguala la constante metatoken a accessToken decodificado con la libreria jwtDecode
    const metaToken = jwtDecode(accessToken);
    //Con destructuracion saca el atributo de restaurante
    const { Restaurante } = metaToken;


    const [mesaData, setMesaData] = useState({
        ocupado: false,
        reserva: false
    })

    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        nombreMesa: "",
        montoTotal: "",
        restaurante: "",
        detalle: "",
        horaEntrada: "",
        horaSalida: "",
        duracion: "",
        reservacion: "",
        fechaLlegada: "",
        fechaReservacion: "",
        silla1: {
            orden1: "",
            monto1: ""
        }, silla2: {
            orden2: "",
            monto2: ""
        }, silla3: {
            orden3: "",
            monto3: ""
        }, silla4: {
            orden4: "",
            monto4: ""
        }

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });


    };

    const show = (e) => {

        var mT = document.getElementById("montoTotal");
        inputs.montoTotal = mT.value;

        e.preventDefault();

        var b1 = document.getElementById("buffet1").checked;
        var b2 = document.getElementById("buffet2").checked;
        var b3 = document.getElementById("buffet3").checked;
        var b4 = document.getElementById("buffet4").checked;

        var selecEspecial = document.getElementById("pedidoSilla1");
        var selecEspecial2 = document.getElementById("pedidoSilla2");
        var selecEspecial3 = document.getElementById("pedidoSilla3");
        var selecEspecial4 = document.getElementById("pedidoSilla4");

        var buff = document.getElementById("inpBufPrecio1");
        var buff2 = document.getElementById("inpBufPrecio2");
        var buff3 = document.getElementById("inpBufPrecio3");
        var buff4 = document.getElementById("inpBufPrecio4");

        var selecBuffet1 = document.getElementById("selecBuff1");
        var selecBuffet2 = document.getElementById("selecBuff2");
        var selecBuffet3 = document.getElementById("selecBuff3");
        var selecBuffet4 = document.getElementById("selecBuff4");

        var r = document.getElementById("reservaCB");



        if (r.checked) {

            inputs.reservacion = "Si"
        } else if (!r.checked) {

            inputs.reservacion = "No"

        }


        if (!b1) {

            var ordenP = selecEspecial.options[selecEspecial.selectedIndex].childNodes[0].data;
            inputs.orden1 = ordenP;
            inputs.monto1 = selecEspecial.value;


        } else if (b1) {


            var ordenP = selecBuffet1.options[selecBuffet1.selectedIndex].childNodes[0].data;
            inputs.orden1 = ordenP;
            inputs.monto1 = buff.value;

        }

        if (!b2) {

            var ordenP = selecEspecial2.options[selecEspecial2.selectedIndex].childNodes[0].data;
            inputs.orden2 = ordenP;
            inputs.monto2 = selecEspecial2.value;


        } else if (b2) {


            var ordenP = selecBuffet2.options[selecBuffet2.selectedIndex].childNodes[0].data;
            inputs.orden2 = ordenP;
            inputs.monto2 = buff2.value;

        }

        if (!b3) {

            var ordenP = selecEspecial3.options[selecEspecial3.selectedIndex].childNodes[0].data;
            inputs.orden3 = ordenP;
            inputs.monto3 = selecEspecial3.value;


        } else if (b3) {


            var ordenP = selecBuffet3.options[selecBuffet3.selectedIndex].childNodes[0].data;
            inputs.orden3 = ordenP;
            inputs.monto3 = buff3.value;

        }

        if (!b4) {

            var ordenP = selecEspecial4.options[selecEspecial4.selectedIndex].childNodes[0].data;
            inputs.orden4 = ordenP;
            inputs.monto4 = selecEspecial4.value;



        } else if (b4) {


            var ordenP = selecBuffet4.options[selecBuffet4.selectedIndex].childNodes[0].data;
            inputs.orden4 = ordenP;
            inputs.monto4 = buff4.value;

        }

        var det = "Silla 1: " + inputs.orden1 + ", Silla 2: " + inputs.orden2 + ", Silla 3: " + inputs.orden3 + ", Silla 4: " + inputs.orden4;

        selectMesas()

        inputs.detalle = det;
        const result = agregarCliMesaApi(inputs);

        console.log(inputs);

        redirigir()
    }

    function redirigir() {
        setTimeout(function () {
            if (Restaurante === "Piccola Stella") {
                window.location.href = "/AdminRestaurante/PiccolaStella"
            }
            if (Restaurante === "Notte Di Fuoco") {
                window.location.href = "/AdminRestaurante/NotteDiFuoco"
            }
            if (Restaurante === "Turin Anivo") {
                window.location.href = "/AdminRestaurante/TurinAnivo"

            }
        }, 1000)
    }

    const selectMesas = () => {
        (async () => {
            var selectMesa = document.getElementById("selecMesas");

            const result = await getMesaEspecificaName(selectMesa.value);
            const v = result.mesa;

            var test = v.map(a => a._id)
            var idMesa = test[0].toString()


            const setTrue1 = {
                ocupado: true,
                reserva: false
            }

            const setTrue2 = {
                ocupado: true,
                reserva: true
            }

            console.log();

            var r = document.getElementById("reservaCB")

            if (r.checked) {
                let mesaUpdate = setTrue2;
                updateMesaApi(setTrue2, idMesa);
                console.log(setTrue2);

            } else if (!r.checked) {
                let mesaUpdate = setTrue1;
                updateMesaApi(setTrue1, idMesa);
                console.log(setTrue1);

            }

        })();

    }

    function sumaEsp() {

        var especialPrecio = document.getElementById("inpPrecio1");
        var especialPrecio2 = document.getElementById("inpPrecio2");
        var especialPrecio3 = document.getElementById("inpPrecio3");
        var especialPrecio4 = document.getElementById("inpPrecio4");

        var sumatotal = document.getElementById("montoTotal");
        total = Number(sumatotal.value);


        var buffetch1 = document.getElementById("buffet1");
        var buffetch2 = document.getElementById("buffet2");
        var buffetch3 = document.getElementById("buffet3");
        var buffetch4 = document.getElementById("buffet4");

        var buffetPrecio = document.getElementById("inpBufPrecio1");
        var buffetPrecio2 = document.getElementById("inpBufPrecio2");
        var buffetPrecio3 = document.getElementById("inpBufPrecio3");
        var buffetPrecio4 = document.getElementById("inpBufPrecio4");

        var p1 = 0;
        var p2 = 0;
        var p3 = 0;
        var p4 = 0;
        var p5 = 0;
        var p6 = 0;
        var p7 = 0;
        var p8 = 0;


        if (especialPrecio.value !== "" || especialPrecio.value !== "0") {

            p1 = Number(especialPrecio.value);

        } if (especialPrecio2.value !== "" || especialPrecio2.value !== "0") {

            p2 = Number(especialPrecio2.value);

        } if (especialPrecio3.value !== "" || especialPrecio3.value !== "0") {

            p3 = Number(especialPrecio3.value);

        } if (especialPrecio4.value !== "" || especialPrecio4.value !== "0") {

            p4 = Number(especialPrecio4.value);

        } if (buffetch1.checked == true) {


            if (buffetPrecio.value !== "" || buffetPrecio.value !== "0") {

                p5 = Number(buffetPrecio.value);

            }


        } if (buffetch2.checked == true) {


            if (buffetPrecio2.value !== "" || buffetPrecio2.value !== "0") {

                p6 = Number(buffetPrecio2.value);
            }


        } if (buffetch3.checked == true) {

            if (buffetPrecio3.value !== "" || buffetPrecio3.value !== "0") {

                p7 = Number(buffetPrecio3.value);
            }


        } if (buffetch4.checked == true) {


            if (buffetPrecio4.value !== "" || buffetPrecio4.value !== "0") {

                p8 = Number(buffetPrecio4.value);
            }

        }

        total = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;


        sumatotal.value = Number(total);

    }


    function sumaAll() {

        var sumatotal = document.getElementById("montoTotal");

        var especialPrecio = document.getElementById("inpPrecio1");
        var especialPrecio2 = document.getElementById("inpPrecio2");
        var especialPrecio3 = document.getElementById("inpPrecio3");
        var especialPrecio4 = document.getElementById("inpPrecio4");

        var buff = document.getElementById("inpBufPrecio1");
        var buff2 = document.getElementById("inpBufPrecio2");
        var buff3 = document.getElementById("inpBufPrecio3");
        var buff4 = document.getElementById("inpBufPrecio4");

        var p1 = 0;
        var p2 = 0;
        var p3 = 0;
        var p4 = 0;
        var p5 = 0;
        var p6 = 0;
        var p7 = 0;
        var p8 = 0;

        if (especialPrecio.value !== "" || especialPrecio.value !== "0") {

            p1 = Number(especialPrecio.value);

        } if (especialPrecio2.value !== "" || especialPrecio.value !== "0") {

            p2 = Number(especialPrecio2.value);

        } if (especialPrecio3.value !== "" || especialPrecio.value !== "0") {

            p3 = Number(especialPrecio3.value);

        } if (especialPrecio4.value !== "" || especialPrecio.value !== "0") {

            p4 = Number(especialPrecio4.value);

        } if (buff.value !== "") {

            p5 = Number(buff.value);

        } if (buff2.value !== "") {

            p6 = Number(buff2.value);

        } if (buff3.value !== "") {

            p7 = Number(buff3.value);

        } if (buff4.value !== "") {

            p8 = Number(buff4.value);

        }

        total = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
        sumatotal.value = Number(total);

    }

    const ChangeBuffet = (cb1, cb2, cb3, cb4) => {

        var sumatotal = document.getElementById("montoTotal");

        var especialPrecio = document.getElementById("inpPrecio1");
        var especialPrecio2 = document.getElementById("inpPrecio2");
        var especialPrecio3 = document.getElementById("inpPrecio3");
        var especialPrecio4 = document.getElementById("inpPrecio4");

        var selecEspecial = document.getElementById("pedidoSilla1");
        var selecEspecial2 = document.getElementById("pedidoSilla2");
        var selecEspecial3 = document.getElementById("pedidoSilla3");
        var selecEspecial4 = document.getElementById("pedidoSilla4");

        var show = document.getElementById("buffetShow");


        sumaEsp();


        if (cb1.checked || cb2.checked || cb3.checked || cb4.checked) {



            show.hidden = false;

            var buff = document.getElementById("inpBufPrecio1");
            var buff2 = document.getElementById("inpBufPrecio2");
            var buff3 = document.getElementById("inpBufPrecio3");
            var buff4 = document.getElementById("inpBufPrecio4");



            (async () => {
                const result = await getBuffetNameApi();
                const v = result.buffet;
                console.log(v);

                var selecBuffet1 = document.getElementById("selecBuff1");
                var selecBuffet2 = document.getElementById("selecBuff2");
                var selecBuffet3 = document.getElementById("selecBuff3");
                var selecBuffet4 = document.getElementById("selecBuff4");



                for (var i = 0; i < v.length; i++) {

                    selecBuffet1.options[i] = new Option(v[i].nombre, v[i].precio);
                    selecBuffet2.options[i] = new Option(v[i].nombre, v[i].precio);
                    selecBuffet3.options[i] = new Option(v[i].nombre, v[i].precio);
                    selecBuffet4.options[i] = new Option(v[i].nombre, v[i].precio);

                }

            })();




            if (cb1.checked) {
                especialPrecio.value = "0";
                selecEspecial.selectedIndex = 0;
                document.getElementById("pedidoSilla1").disabled = true;

                // sumaAll();


            }
            if (cb2.checked) {



                especialPrecio2.value = "0";
                selecEspecial2.selectedIndex = 0;
                document.getElementById("pedidoSilla2").disabled = true;


                // sumaAll();


            }

            if (cb3.checked) {


                especialPrecio3.value = "0";
                selecEspecial3.selectedIndex = 0;
                document.getElementById("pedidoSilla3").disabled = true;
                //sumaAll();


            }

            if (cb4.checked) {

                especialPrecio4.value = "0";
                selecEspecial4.selectedIndex = 0;
                document.getElementById("pedidoSilla4").disabled = true;


                //sumaAll();

            }

            if (!cb1.checked) {

                document.getElementById("pedidoSilla1").disabled = false;
                buff.value = "";

                sumaEsp();


            } if (!cb2.checked) {
                document.getElementById("pedidoSilla2").disabled = false;

                buff2.value = "";
                sumaEsp();


            } if (!cb3.checked) {

                document.getElementById("pedidoSilla3").disabled = false;
                buff3.value = "";
                sumaEsp();


            } if (!cb4.checked) {

                document.getElementById("pedidoSilla4").disabled = false;
                buff4.value = "";
                sumaEsp();


            }


        }
        else {

            show.hidden = true;
            sumaEsp();

            document.getElementById("pedidoSilla1").disabled = false;
            document.getElementById("pedidoSilla2").disabled = false;
            document.getElementById("pedidoSilla3").disabled = false;
            document.getElementById("pedidoSilla4").disabled = false;


            var p1 = 0;
            var p2 = 0;
            var p3 = 0;
            var p4 = 0;


            if (especialPrecio.value !== "" || especialPrecio.value !== "0") {

                p1 = Number(especialPrecio.value);

            } if (especialPrecio2.value !== "" || especialPrecio.value !== "0") {

                p2 = Number(especialPrecio2.value);

            } if (especialPrecio3.value !== "" || especialPrecio.value !== "0") {

                p3 = Number(especialPrecio3.value);

            } if (especialPrecio4.value !== "" || especialPrecio.value !== "0") {

                p4 = Number(especialPrecio4.value);

            }

            total = p1 + p2 + p3 + p4;

            sumatotal.value = Number(total);

        }

    }

    const changeReserva = (cb1, llegada, reserva) => {
        if (cb1.checked) {

            llegada.disabled = true;
            reserva.disabled = false;
        }
        else if (!cb1.checked) {

            llegada.disabled = false;
            reserva.disabled = true;
        }
    }


    window.onload = function () {

        (async () => {
            const result = await getEspecialesNameApi();
            const v = result.especialidades;
            console.log(v);

            var selecEspecial = document.getElementById("pedidoSilla1");
            var selecEspecial2 = document.getElementById("pedidoSilla2");
            var selecEspecial3 = document.getElementById("pedidoSilla3");
            var selecEspecial4 = document.getElementById("pedidoSilla4");

            selecEspecial.options[0] = new Option("Sin ordenar", "");
            selecEspecial2.options[0] = new Option("Sin ordenar", "");
            selecEspecial3.options[0] = new Option("Sin ordenar", "");
            selecEspecial4.options[0] = new Option("Sin ordenar", "");


            for (var i = 1; i < v.length; i++) {

                selecEspecial.options[i] = new Option(v[i].nombre, v[i].precio);
                selecEspecial2.options[i] = new Option(v[i].nombre, v[i].precio);
                selecEspecial3.options[i] = new Option(v[i].nombre, v[i].precio);
                selecEspecial4.options[i] = new Option(v[i].nombre, v[i].precio);

            }

        })();


        (async () => {
            const result = await getMesasNameApi();
            const v = result.mesas;
            console.log(v);

            var selecMesas = document.getElementById("selecMesas");

            selecMesas.options[0] = new Option("Elegir nombre", "");

            for (var i = 0; i < v.length; i++) {

                selecMesas.options[i] = new Option(v[i].nombre, v[i].codigo);

            }

        })();

    }



    return (
        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container" id="facCliContainer">
                    <h1>Clientes</h1>

                    <div className="row">
                        <div className="col-sm">
                            <br />
                            <h4>Datos</h4>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Código</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" name="codigo" value={inputs.codigo} className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Nombre Cliente</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" name="nombre" value={inputs.nombre} className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Nombre Mesa</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="nombreMesa" id="selecMesas" value={inputs.nombreMesa} className="form-control"></select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Monto Pago</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" name="montoTotal" id="montoTotal" className="form-control" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Restaurante</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" name="restaurante" value={inputs.restaurante} className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Hora Entrada</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="time" name="horaEntrada" value={inputs.horaEntrada} className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Hora Salida</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="time" name="horaSalida" value={inputs.horaSalida} className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Duración Mesa</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="time" name="duracion" value={inputs.duracion} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-4">
                            <br />
                            <h4>Fechas de Cliente</h4>
                            <br />
                            <div className="row">
                                <div className="col-sm">

                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Llegada</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="datetime-local" value={inputs.fechaLlegada} name="fechaLlegada" className="form-control" id="llegada" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Reservación</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="datetime-local" value={inputs.fechaReservacion} name="fechaReservacion" disabled className="form-control" id="reserva" />
                                        </div>
                                    </div>
                                    <br />
                                    <input type="checkbox" id="reservaCB" onChange={() => changeReserva(document.getElementById("reservaCB"),
                                        document.getElementById("llegada"), document.getElementById("reserva"))}

                                    />
                                    <h5 className="bookingLabel">Reservación</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm">
                            <br />
                            <h4>Información de Pedido</h4>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Número Mesa</h5>
                                        </div>
                                        <div className="col-sm">

                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Pedido Silla 1</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="orden1" id="pedidoSilla1" onChange={setPrice} className="form-control" placeholder="Seleccione uno">
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Pedido Silla 2</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="orden2" id="pedidoSilla2" value={inputs.orden2} onChange={setPrice} className="form-control"></select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Pedido Silla 3</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="orden3" id="pedidoSilla3" value={inputs.orden3} onChange={setPrice} className="form-control"></select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Pedido Silla 4</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="orden4" id="pedidoSilla4" value={inputs.orden4} onChange={setPrice} className="form-control"></select>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Precio</h5>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text" id="inpPrecio1" name="monto3" value={inputs.monto3} className="form-control" disabled />
                                        </div>
                                        <div className="col-sm">
                                            <input type="checkbox" className="checkbox"
                                                onChange={() => ChangeBuffet((document.getElementById("buffet1")),
                                                    (document.getElementById("buffet2")),
                                                    (document.getElementById("buffet3")),
                                                    (document.getElementById("buffet4")))}
                                                id="buffet1"
                                            />
                                            <h5 className="buffetLabel">Buffet</h5>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text" id="inpPrecio2" name="monto3" value={inputs.monto3} className="form-control" disabled />
                                        </div>
                                        <div className="col-sm">
                                            <input type="checkbox" className="checkbox"

                                                onChange={() => ChangeBuffet((document.getElementById("buffet1")),
                                                    (document.getElementById("buffet2")),
                                                    (document.getElementById("buffet3")),
                                                    (document.getElementById("buffet4")))}
                                                id="buffet2"
                                            />
                                            <h5 className="buffetLabel">Buffet</h5>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text" id="inpPrecio3" name="monto4" value={inputs.monto4} className="form-control" disabled />
                                        </div>
                                        <div className="col-sm">
                                            <input type="checkbox" className="checkbox"

                                                onChange={() => ChangeBuffet((document.getElementById("buffet1")),
                                                    (document.getElementById("buffet2")),
                                                    (document.getElementById("buffet3")),
                                                    (document.getElementById("buffet4")))}
                                                id="buffet3"
                                            />
                                            <h5 className="buffetLabel">Buffet</h5>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="text" id="inpPrecio4" name="monto1" value={inputs.monto1} className="form-control" disabled />
                                        </div>
                                        <div className="col-sm">
                                            <input type="checkbox" className="checkbox"

                                                onChange={() => ChangeBuffet((document.getElementById("buffet1")),
                                                    (document.getElementById("buffet2")),
                                                    (document.getElementById("buffet3")),
                                                    (document.getElementById("buffet4")))}
                                                id="buffet4"
                                            />

                                            <h5 className="buffetLabel">Buffet</h5>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>


                        </div>
                        <div className="col-4">
                            <br />
                            <br />
                            <div className="row">
                                <img src="https://img.icons8.com/bubbles/2x/user-male.png" alt="" id="factImg" />
                                <br />
                            </div>
                            <br />
                            <br />

                            <button type="submit" id="submitBtn">Aceptar</button>

                        </div>
                    </div>
                    <br />
                    {/* {viewBuffet ? <BuffetActive setPrice={setPrice} /> : null} */}
                    <div id="buffetShow" hidden>

                        <div className="row">
                            <div className="col-sm">
                                <h5>Pedido Silla 1</h5>
                                <select size="3" id="selecBuff1" onChange={setPrice} multiple="multiple" className="form-control">

                                </select>
                                <br />
                                <h5>Total</h5>
                                <input type="text" id="inpBufPrecio1" className="form-control" disabled />
                            </div>
                            <div className="col-sm">
                                <h5>Pedido Silla 2</h5>
                                <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff2" className="form-control">

                                </select>
                                <br />
                                <h5>Total</h5>
                                <input type="text" id="inpBufPrecio2" className="form-control" disabled />
                            </div>
                            <div className="col-sm">
                                <h5>Pedido Silla 3</h5>
                                <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff3" className="form-control">

                                </select>
                                <br />
                                <h5>Total</h5>
                                <input type="text" id="inpBufPrecio3" className="form-control" disabled />
                            </div>
                            <div className="col-sm">
                                <h5>Pedido Silla 4</h5>
                                <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff4" className="form-control">

                                </select>
                                <br />
                                <h5>Total</h5>
                                <input type="text" id="inpBufPrecio4" className="form-control" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

function BuffetActive(props) {

    const { setPrice } = props;


    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <h5>Pedido Silla 1</h5>
                    <select size="3" id="selecBuff1" onChange={setPrice} multiple="multiple" className="form-control">

                    </select>
                    <br />
                    <h5>Total</h5>
                    <input type="text" id="inpBufPrecio1" className="form-control" disabled />
                </div>
                <div className="col-sm">
                    <h5>Pedido Silla 2</h5>
                    <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff2" className="form-control">

                    </select>
                    <br />
                    <h5>Total</h5>
                    <input type="text" id="inpBufPrecio2" className="form-control" disabled />
                </div>
                <div className="col-sm">
                    <h5>Pedido Silla 3</h5>
                    <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff3" className="form-control">

                    </select>
                    <br />
                    <h5>Total</h5>
                    <input type="text" id="inpBufPrecio3" className="form-control" disabled />
                </div>
                <div className="col-sm">
                    <h5>Pedido Silla 4</h5>
                    <select size="3" multiple="multiple" onChange={setPrice} id="selecBuff4" className="form-control">

                    </select>
                    <br />
                    <h5>Total</h5>
                    <input type="text" id="inpBufPrecio4" className="form-control" disabled />
                </div>
            </div>
        </>
    )
}

