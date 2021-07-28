import React, { useState } from 'react';
import "./TurinAnivo.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Modal from "../../Components/Modal";
import AddClienteBarraForm from "../../Components/ClientesBarra/AddClienteBarraForm";
import { getMesaEspecifica, updateMesaApi } from "../../Api/mesas";
import { getBuffetNameApi } from "../../Api/buffet"
import { Link } from 'react-router-dom';

export default function TurinAnivo() {

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

            for (var i = 48; i <= 70; i++) {
                var num = "ME-" + i;

                const mesa = await getMesaEspecifica(num);
                const ocupado = mesa.mesa;

                var test = ocupado.map(a => a.ocupado)
                var test2 = test[0]


                if (test2 == true) {
                    document.getElementById("label-" + i).innerHTML = "Ocupado"
                } else {
                    document.getElementById("label-" + i).innerHTML = "TA-" + (i - 47);

                }

                var reservados = ocupado.map(a => a.reserva);
                var getReserva = reservados[0];

                if (getReserva == true) {
                    document.getElementById("reserva-" + i).checked = true;
                }
            }


            var mesaOcupadas = 0;
            var mesaDesocupadas = 0;

            for (var i = 48; i <= 70; i++) {
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

            for (var i = 48; i <= 70; i++) {
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
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-48")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-48" disabled />
                                    < h5 id="label-48">TA-1</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-48")}>Desocupar</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-49")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-49" disabled />
                                    < h5 id="label-49">TA-2</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-49")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>

                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-50")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-50" disabled />
                                    < h5 id="label-50">TA-3</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-50")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-51")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-51" disabled />
                                    < h5 id="label-51">TA-4</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-51")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>


                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-52")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-52" disabled />
                                    < h5 id="label-52">TA-5</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-52")}>Desocupar</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasLeft">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-53")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-53" disabled />
                                    < h5 id="label-53">TA-6</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-53")}>Desocupar</button>
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
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-54")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-54" disabled />
                                            < h5 id="label-54" className="middleTable">TA-7</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-54")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-55")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-55" disabled />
                                            < h5 id="label-55" className="middleTable">TA-8</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-55")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-56")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-56" disabled />
                                            < h5 id="label-56" className="middleTable">TA-9</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-56")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-57")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-57" disabled />
                                            < h5 id="label-57" className="middleTable">TA-10</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-57")}>Desocupar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm middle">
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-58")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-58" disabled />
                                            < h5 id="label-58" className="middleTable">TA-11</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-58")}>Desocupar</button>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-59")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-59" disabled />
                                            < h5 id="label-59" className="middleTable">TA-12</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-59")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-60")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-60" disabled />
                                            < h5 id="label-60" className="middleTable">TA-13</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-60")}>Desocupar</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm rightMiddle">
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-61")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-61" disabled />
                                            < h5 id="label-61" className="middleTable">TA-14</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-61")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-62")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-62" disabled />
                                            < h5 id="label-62" className="middleTable">TA-15</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-62")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-63")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-63" disabled />
                                            < h5 id="label-63" className="middleTable">TA-16</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-63")}>Desocupar</button>

                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                                <a className="middleTable"><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-64")} /></a>
                                            </Link>
                                            <input type="checkbox" id="reserva-64" disabled />
                                            < h5 id="label-64" className="middleTable">TA-17</h5>
                                            <button className="btn btn-link" onClick={() => clear("ME-64")}>Desocupar</button>

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
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-65")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-65" disabled />
                                    < h5 id="label-65">TA-18</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-65")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row" >
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-66")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-66" disabled />
                                    < h5 id="label-66">TA-19</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-66")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-67")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-67" disabled />
                                    < h5 id="label-67">TA-20</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-67")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-68")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-68" disabled />
                                    < h5 id="label-68">TA-21</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-68")}>Desocupar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-69")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-69" disabled />
                                    < h5 id="label-69">TA-22</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-69")}>Desocupar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm" style={{ textAlign: "center" }} id="mesasRight">
                                    <Link to={{ pathname: '/facturacion', }} onClick={refreshPage}>
                                        <a><img src="https://img.icons8.com/dusk/64/000000/restaurant-table.png" onClick={() => setMesas("ME-70")} /></a>
                                    </Link>
                                    <input type="checkbox" id="reserva-70" disabled />
                                    < h5 id="label-70">TA-23</h5>
                                    <button className="btn btn-link" onClick={() => clear("ME-70")}>Desocupar</button>
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