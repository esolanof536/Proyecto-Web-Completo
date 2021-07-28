import React, { useState } from 'react';
import "./PiccolaStella.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Modal from "../../Components/Modal";
import AddClienteBarraForm from "../../Components/ClientesBarra/AddClienteBarraForm";
import { getMesaEspecifica, updateMesaApi } from "../../Api/mesas";
import { getBuffetNameApi } from "../../Api/buffet"
import { Link } from 'react-router-dom';


export default function PiccolaStella() {
    const [barraState, setBarraState] = useState(false);
    const [barraState2, setBarraState2] = useState(false);

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

    const changeBarraState2 = (rb) => {
        if (rb.checked) {
            setBarraState2(true)
        } else {
            setBarraState2(false)
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

            for (var i = 25; i <= 47; i++) {
                var num = "ME-" + i;

                const mesa = await getMesaEspecifica(num);
                const ocupado = mesa.mesa;

                var test = ocupado.map(a => a.ocupado)
                var test2 = test[0]


                if (test2 == true) {
                    document.getElementById("label-" + i).innerHTML = "Ocupado"
                } else {
                    document.getElementById("label-" + i).innerHTML = "PS-" + (i - 24);

                }

                var reservados = ocupado.map(a => a.reserva);
                var getReserva = reservados[0];

                if (getReserva == true) {
                    document.getElementById("reserva-" + i).checked = true;
                }
            }


            var mesaOcupadas = 0;
            var mesaDesocupadas = 0;

            for (var i = 25; i <= 47; i++) {
                var cantMesa = document.getElementById("label-" + i);
                var styleMesa = cantMesa.innerHTML == "Ocupado"
                if (styleMesa == true) {
                    mesaOcupadas++;
                } else {
                    mesaDesocupadas++
                }
            }

            document.getElementById("mesaTA").value = "Mesas Ocu: " + mesaOcupadas + "\nMesas Desocu: " + mesaDesocupadas + "\nTotal: 23";

            var mesasReserva = 0;
            var mesasNormales = 0;

            for (var i = 25; i <= 47; i++) {
                var cantMesa = document.getElementById("reserva-" + i);
                var stateMesa = cantMesa.checked;
                if (stateMesa == true) {
                    mesasReserva++;
                } else {
                    mesasNormales++
                }
            }

            document.getElementById("reservaTA").value = "Mesas Reserva: " + mesasReserva + "\nMesas No Reserva: " + mesasNormales + "\nTotal: 23"

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
            <div className="row">
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
                        <div className="col-sm">

                            <br />
                            <div className="row" id="leftTableContainer">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} >
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-25")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-25" disabled />
                                    < h5 id="label-25">PS-1</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-25")}>Desocupar</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-26")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-26" disabled />
                                    < h5 id="label-26">PS-2</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-26")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>

                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-27")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-27" disabled />
                                    < h5 id="label-27">PS-3</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-27")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-28")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-28" disabled />
                                    < h5 id="label-28">PS-4</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-28")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>


                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-29")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-29" disabled />
                                    < h5 id="label-29">PS-5</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-29")}>Desocupar</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-30")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-30" disabled />
                                    < h5 id="label-30">PS-6</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-30")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>


                            <div className="row" id="barra1Container">
                                <div className="col-4">
                                    <div className="bar1">
                                        <div id="vertBar"></div>
                                        <div id="horiBar"></div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="barText" id="barContainer">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row" id="middelTables">
                                <div className="col-sm leftMiddle">
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-31")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-31" disabled />
                                            < h5 id="label-31" className="middleTable">PS-7</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-31")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-32")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-32" disabled />
                                            < h5 id="label-32" className="middleTable">PS-8</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-32")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-33")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-33" disabled />
                                            < h5 id="label-33" className="middleTable">PS-9</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-33")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-34")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-34" disabled />
                                            < h5 id="label-34" className="middleTable">PS-10</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-34")}>Desocupar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm middle">
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-35")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-35" disabled />
                                            < h5 id="label-35" className="middleTable">PS-11</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-35")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-36")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-36" disabled />
                                            < h5 id="label-36" className="middleTable">PS-12</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-36")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-37")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-37" disabled />
                                            < h5 id="label-37" className="middleTable">PS-13</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-37")}>Desocupar</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm rightMiddle">
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-38")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-38" disabled />
                                            < h5 id="label-38" className="middleTable">PS-14</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-38")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-39")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-39" disabled />
                                            < h5 id="label-39" className="middleTable">PS-15</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-39")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-40")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-40" disabled />
                                            < h5 id="label-40" className="middleTable">PS-16</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-40")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-41")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-41" disabled />
                                            < h5 id="label-41" className="middleTable">PS-17</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-41")}>Desocupar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row">

                                <div className="col-sm">
                                    <div className="barText" id="barContainer2">
                                        <div className="row">
                                            <div className="col-2">
                                                <a>{barraState2 ? <CheckCircleTwoTone twoToneColor="#C00040" id="checkIcon" onClick={addClienteBarra} /> : null}</a>
                                            </div>
                                            <div className="col-sm">
                                                <br />
                                                <input type="radio" name="barState2" id="abrirBarra2" onClick={() => changeBarraState2(document.getElementById("abrirBarra2"))} />
                                                <h7 className="barraLabel">Barra Abierta</h7>
                                                <br />
                                                <input type="radio" name="barState2" onClick={() => changeBarraState2(document.getElementById("abrirBarra2"))} defaultChecked />
                                                <h7 className="barraLabel">Barra Cerrada</h7>
                                            </div>
                                            <div className="col-sm">
                                                <br />
                                                <h7>Estado Barra</h7>
                                                <br />
                                                <h7 id="estadoLabel">{barraState2 ? "Abierta" : "Cerrada"}</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="bar2">
                                        <div id="horiBar2"></div>
                                        <div id="vertBar2"></div>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} >
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-42")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-42" disabled />
                                    < h5 id="label-42">PS-18</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-42")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row" >
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-43")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-43" disabled />
                                    < h5 id="label-43">PS-19</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-43")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-44")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-44" disabled />
                                    < h5 id="label-44">PS-20</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-44")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-45")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-45" disabled />
                                    < h5 id="label-45">PS-21</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-45")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-46")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-46" disabled />
                                    < h5 id="label-46">PS-22</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-46")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-47")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-47" disabled />
                                    < h5 id="label-47">PS-23</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-47")}>Desocupar</button>
                                </div>
                            </div>
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