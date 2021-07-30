import React, { useState, useEffect } from 'react';
import '../ListasEstilos/lisEmpleados.css';
import { getEmpleadosApi } from "../../../Api/empleado";
import ListaEmpleado from "../../../Components/Empleados/ListaEmpleados";
import { Link } from 'react-router-dom';
export default function ListEmpleados() {

    const [empleado, setEmpleado] = useState([]);
    const [reloadEmpleado, setReloadEmpleado] = useState(false);

    useEffect(() => {
        getEmpleadosApi().then(response => {
            setEmpleado(response.empleado);
        });
        setReloadEmpleado(false)
    }, [reloadEmpleado])


    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerEmpleado">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Empleados</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://image.flaticon.com/icons/png/512/1869/1869679.png" alt="" id="imgListEmp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaEmpleado empleados={empleado} setReloadEmpleado={setReloadEmpleado} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/Agregarempleado' className='routing'><button class="btn btn-secondary ">Agregar Empleados</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
