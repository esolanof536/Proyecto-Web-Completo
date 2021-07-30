import React from 'react'
import '../MenusEstilos/menuListBebidas.css'
import { Link } from 'react-router-dom';

export default function MenuListBebidas() {
    return (
        <div class="container" id="opcMenuBebContainer">
            <br />
            <h1>Bebidas</h1>

            <div class="container">
                <div class="row">

                    <div class="col-4">
                        <img src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png" alt="" id="logoOpcEsp" />
                    </div>
                    <div class="col-sm" >
                        <h3 id="opcLabel">Opciones</h3><br />
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <Link to='/AdminRestaurante/ListGaseosas' className='routing'><button class="btn btn-secondary ">Gaseosas</button></Link>
                                    <br /><br />
                                    <Link to='/AdminRestaurante/ListBebCalientes' className='routing'><button class="btn btn-secondary ">Calientes</button></Link>
                                    <br /><br />
                                    <Link to='/AdminRestaurante/ListBebHeladas' className='routing'><button class="btn btn-secondary mb-2 ">Heladas</button></Link>

                                </div>
                                <div class="col-sm">
                                    <Link to='/AdminRestaurante/ListLicores' className='routing'><button class="btn btn-secondary ">Licores</button></Link>
                                    <br /><br />
                                    <Link to='/AdminRestaurante/ListVinos' className='routing'><button class="btn btn-secondary ">Vinos</button></Link>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

