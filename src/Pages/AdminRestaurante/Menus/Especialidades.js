import React from "react";
import '../MenusEstilos/Especialidades.css';
import { Link } from 'react-router-dom';

export default function especialidades() {

    return (

        <div className="container" id="opcEspContainer">

            <h1>Especiales</h1>

            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <img src="https://img.icons8.com/ios/452/chef-hat.png" alt="" id="logoOpcEsp"></img>

                    </div>
                    <div className="col-sm" >
                        <h3 id="opcLabel">Opciones</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                <Link to='/AdminRestaurante/ListEspeciales'> <button className="btn btn-secondary mb-2">Especialidades</button></Link>
                                <Link to='/AdminRestaurante/MenuBebidas'> <button className="btn btn-secondary mb-2">Menu bebidas</button></Link>
                                <Link to='/AdminRestaurante/ListBuffet'> <button className="btn btn-secondary mb-2">Buffet</button></Link>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}
