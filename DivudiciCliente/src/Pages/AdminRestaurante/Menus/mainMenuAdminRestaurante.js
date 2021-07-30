import React from 'react'
import '../MenusEstilos/mainMenuAdminRestaurante.css'
import { Link } from 'react-router-dom';

export default function MainMenuAdminRes() {
    return (
        <div class="container" id="menuAdminResContainer">
            <br />
            <h1>Administración</h1>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img src="https://i2.wp.com/www.gladysgbegnedji.com/wp-content/uploads/2016/07/icono-engranaje-project-manager.png?fit=223%2C219&ssl=1" alt="" id="logoOpcEsp" />
                    </div>
                    <div class="col-sm" >
                        <h3 id="opcLabel">Opciones</h3><br />
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <Link to='/AdminRestaurante/Especialidades' className='routing'><button class="btn btn-secondary ">Especialidades</button></Link>
                                    <br /><br />
                                    <Link to='/AdminRestaurante/ListEmpleados' className='routing'><button class="btn btn-secondary ">Empleados</button></Link>
                                    <br /><br />
                                </div>
                                <div class="col-sm">
                                    <Link to='/AdminRestaurante/ListMesas' className='routing'><button class="btn btn-secondary ">Mesas</button></Link>
                                    <br /><br />
                                    <Link to='/AdminRestaurante/ListPuestos' className='routing'><button class="btn btn-secondary ">Puestos</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
