import React, { useState } from 'react';
import "./NotteDiFuoco.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Modal from "../../Components/Modal";
import AddClienteBarraForm from "../../Components/ClientesBarra/AddClienteBarraForm";
import { getMesaEspecifica, updateMesaApi } from "../../Api/mesas";
import { getBuffetNameApi } from "../../Api/buffet"
import { Link, Route } from 'react-router-dom';


export default function NotteDiFuoco() {

    const [barraState, setBarraState] = useState(false);
    const [mesas, setMesas] = useState("");

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);


    const changeBarraState = (rb) => {
        if (rb.checked) {
            setBarraState(true)
        } else {
            setBarraState(false)
        }
    }

    const addClienteBarra = () => {
        setIsVisibleModal(true);
        setModalTitle("Agregar Cliente Barra");
        setModalContent(
            <AddClienteBarraForm
                setIsVisibleModal={setIsVisibleModal}
                clieBarra={null}
            />
        )
    }



    window.onload = function () {

        (async () => {

            for (var i = 1; i <= 24; i++) {
                var num = "ME-" + i;

                const mesa = await getMesaEspecifica(num);
                const ocupado = mesa.mesa;

                var test = ocupado.map(a => a.ocupado)
                var test2 = test[0]

                if (test2 == true) {
                    document.getElementById("label-" + i).innerHTML = "Ocupado"
                } else {
                    document.getElementById("label-" + i).innerHTML = "NF-" + i;
                }

                var reservados = ocupado.map(a => a.reserva);
                var getReserva = reservados[0];

                if (getReserva == true) {
                    document.getElementById("reserva-" + i).checked = true;
                }
            }


            var mesaOcupadas = 0;
            var mesaDesocupadas = 0;

            for (var i = 1; i <= 24; i++) {
                var cantMesa = document.getElementById("label-" + i);
                var styleMesa = cantMesa.innerHTML == "Ocupado"
                if (styleMesa == true) {
                    mesaOcupadas++;
                } else {
                    mesaDesocupadas++
                }
            }

            document.getElementById("mesaTA").value = "Mesas Ocu: " + mesaOcupadas + "\nMesas Desocu: " + mesaDesocupadas + "\nTotal: 24";

            var mesasReserva = 0;
            var mesasNormales = 0;

            for (var i = 1; i <= 24; i++) {
                var cantMesa = document.getElementById("reserva-" + i);
                var stateMesa = cantMesa.checked;
                if (stateMesa == false) {
                    mesasNormales++
                } else {

                    mesasReserva++;
                }
            }

            document.getElementById("reservaTA").value = "Mesas Reserva: " + mesasReserva + "\nMesas No Reserva: " + mesasNormales + "\nTotal: 24"

            const result = await getBuffetNameApi();
            const v = result.buffet;

            var selectBuffet = document.getElementById("buffetSelect");

            for (var i = 0; i < v.length; i++) {
                selectBuffet.options[i] = new Option(v[i].nombre, 'valor: ' + v[i]);
            }

        })();
    }

    function refreshPage() {
        window.location.href = '/facturacion'
    }

    const clear = (codigo) => {
        (async () => {
            const clear2 = {
                ocupado: false,
                reserva: false
            }

            const mesa = await getMesaEspecifica(codigo);
            const ocupado = mesa.mesa;

            var test = ocupado.map(a => a._id)
            var test2 = test[0]

            updateMesaApi(clear2, test2)
            window.location.reload()
        })();


    }


    return (
        <>
            <div className="row" id="resBody" >
                <div className="col-1 restaurantBanner">
                    <div className="bannerButton">
                        <div id="fondoMesa">
                            <textarea id="mesaTA" className="form-control" readOnly></textarea>
                        </div>
                    </div>
                    <br />

                    <div className="bannerButton">
                        <div id="fondoReserva">
                            <textarea id="reservaTA" className="form-control" readOnly></textarea>
                        </div>
                    </div>
                    <br />

                    <div className="bannerButton">
                        <div id="fondoCli">
                            <select id="buffetSelect" size="6" onchange='this.size=1; this.blur()'></select>
                        </div>

                    </div>
                    <br />

                </div>

                <div className="col-sm">
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-2">
                            <br /><br /><br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-1" onClick={() => setMesas("ME-1")} ><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-1" disabled />
                                    <h5 id="label-1" >NF-1</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-1")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-2" onClick={() => setMesas("ME-2")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon " /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-2" disabled />
                                    <h5 id="label-2" >NF-2</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-2")}>Desocupar</button>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-3" onClick={() => setMesas("ME-3")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-3" disabled />
                                    <h5 id="label-3" >NF-3</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-3")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-4" onClick={() => setMesas("ME-4")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-4" disabled />
                                    <h5 id="label-4" >NF-4</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-4")}>Desocupar</button>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-5" onClick={() => setMesas("ME-5")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-5" disabled />
                                    <h5 id="label-5" >NF-5</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-5")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-6" onClick={() => setMesas("ME-6")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-6" disabled />
                                    <h5 id="label-6" >NF-6</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-6")}>Desocupar</button>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-7" onClick={() => setMesas("ME-7")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-7" disabled />
                                    <h5 id="label-7" >NF-7</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-7")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-8" onClick={() => setMesas("ME-8")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-8" disabled />
                                    <h5 id="label-8" >NF-8</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-8")}>Desocupar</button>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-9" onClick={() => setMesas("ME-9")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-9" disabled />
                                    <h5 id="label-9" >NF-9</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-9")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-10" onClick={() => setMesas("ME-10")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-10" disabled />
                                    <h5 id="label-10" >NF-10</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-10")}>Desocupar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-sm middleUpRow">
                                    <div className="row">
                                        <div className="col-3" style={{ textAlign: "center" }}>
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a id="ME-11" onClick={() => setMesas("ME-11")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-11" disabled />
                                            <h5 id="label-11" >NF-11</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-11")}>Desocupar</button>

                                        </div>
                                        <div className="col-4" style={{ textAlign: "center" }}>
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a id="ME-12" onClick={() => setMesas("ME-12")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-12" disabled />
                                            <h5 id="label-12" >NF-12</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-12")}>Desocupar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="barText">
                                <div className="row">
                                    <div className="col-2">
                                        <a>{barraState ? <CheckCircleTwoTone twoToneColor="#C00040" id="checkIcon" onClick={addClienteBarra} /> : null}</a>
                                    </div>
                                    <div className="col-sm">
                                        <br />
                                        <input type="radio" name="barState" id="abrirBarra" onClick={() => changeBarraState(document.getElementById("abrirBarra"))} />
                                        <h7 className="barraLabel">Barra Abierta</h7>
                                        <br />
                                        <input type="radio" name="barState" onClick={() => changeBarraState(document.getElementById("abrirBarra"))} defaultChecked />
                                        <h7 className="barraLabel">Barra Cerrada</h7>
                                    </div>
                                    <div className="col-sm">
                                        <br />
                                        <h7>Estado Barra</h7>
                                        <br />
                                        <h7 id="estadoLabel">{barraState ? "Abierta" : "Cerrada"}</h7>
                                    </div>

                                </div>

                            </div>
                            <div className="bar"></div>

                            <div className="row">
                                <div className="col-sm middleDownRowNF">
                                    <div className="row">
                                        <div className="col-3" style={{ textAlign: "center" }}>
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a id="ME-13" onClick={() => setMesas("ME-13")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-13" disabled />
                                            <h5 id="label-13" >NF-13</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-13")}>Desocupar</button>

                                        </div>
                                        <div className="col-4" style={{ textAlign: "center" }}>
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a id="ME-14" onClick={() => setMesas("ME-14")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-14" disabled />
                                            <h5 id="label-14" >NF-14</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-14")}>Desocupar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 tableRowRight">
                            <br /><br /><br />

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-15" onClick={() => setMesas("ME-15")} ><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-15" disabled />
                                    <h5 id="label-15" >NF-15</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-15")}>Desocupar</button>

                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-16" onClick={() => setMesas("ME-16")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon " /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-16" disabled />
                                    <h5 id="label-16" >NF-16</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-16")}>Desocupar</button>

                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-17" onClick={() => setMesas("ME-17")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-17" disabled />
                                    <h5 id="label-17" >NF-17</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-17")}>Desocupar</button>
                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-18" onClick={() => setMesas("ME-18")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-18" disabled />
                                    <h5 id="label-18" >NF-18</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-18")}>Desocupar</button>

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-19" onClick={() => setMesas("ME-19")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-19" disabled />

                                    <h5 id="label-19" >NF-19</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-19")}>Desocupar</button>

                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-20" onClick={() => setMesas("ME-20")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-20" disabled />

                                    <h5 id="label-20" >NF-20</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-20")}>Desocupar</button>

                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-21" onClick={() => setMesas("ME-21")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-21" disabled />

                                    <h5 id="label-21" >NF-21</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-21")}>Desocupar</button>

                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-22" onClick={() => setMesas("ME-22")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-22" disabled />

                                    <h5 id="label-22" >NF-22</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-22")}>Desocupar</button>

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-23" onClick={() => setMesas("ME-23")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-23" disabled />

                                    <h5 id="label-23" >NF-23</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-23")}>Desocupar</button>

                                </div>
                                <div className="col-sm" style={{ textAlign: "center" }}>
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a id="ME-24" onClick={() => setMesas("ME-24")}><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" className="tableIcon" /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-24" disabled />

                                    <h5 id="label-24" >NF-24</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-24")}>Desocupar</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}

            >
                {modalContent}
            </Modal>

        </>
    )
}