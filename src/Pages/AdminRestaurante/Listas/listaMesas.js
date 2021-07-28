import React, { useState, useEffect } from 'react';
import "../ListasEstilos/listaMesas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMesasApi } from "../../../Api/mesas";
import ListMesas from "../../../Components/Mesas/ListMesas";
import { Link } from 'react-router-dom';
export default function ListaMesas() {

	const [mesas, setMesas] = useState([]);
	const [reloadMesa, setReloadMesa] = useState(false);


	useEffect(() => {
		getMesasApi().then(response => {
			setMesas(response.mesas);
		});
		setReloadMesa(false)
	}, [reloadMesa])

	return (

		<>

			<div className="row">
				<div className="col-2">
					<div className="row">
						<div className="col-1"></div>
						<div className="col-sm" id="bannerMesas">
							<br />
							<br />
							<h2 className="listLabel">Lista de Mesas</h2>
							<div className="row">
								<div id="circle-background">
									<img src="https://cdn3.iconfinder.com/data/icons/furniture-177/64/table-dinner-restaurant-furniture-chair-512.png" alt="" id="imgList" />
								</div>

							</div>
						</div>

					</div>
				</div>
				<div className="col-sm">

					<div className="row-row-cols-lg-6">
					<ListMesas mesas={mesas} setReloadMesa={setReloadMesa} />
					</div>
					<div className="row">
						<div className="col-sm d-flex justify-content-center">
							<Link to='/AdminRestaurante/AgregarMesa' className='routing'><button className="btn btn-secondary ">Agregar Mesas</button></Link>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

