import React from 'react';
import 'antd/dist/antd.css';
import { Route, Link, Redirect } from 'react-router-dom';
import "./StyleMenu.css";
import { Layout, Menu } from 'antd';
import useAuth from "../Hooks/useAuth";
import jwtDecode from 'jwt-decode';
import { ACCESS_TOKEN } from '../Utils/constants'


export default function LayoutRestaurante(props) {
    const { Header } = Layout;
    const { routes } = props;

    const { user, isLoading } = useAuth();
    console.log(user);

    if (!user && !isLoading) {
        return (
            <>
                <Route path="/" />
                <Redirect to="/" />
            </>
        )
    }

    if (user && !isLoading) {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        //iguala la constante metatoken a accessToken decodificado con la libreria jwtDecode
        const metaToken = jwtDecode(accessToken);
        //Con destructuracion saca el atributo de restaurante
        const { Restaurante } = metaToken;
        var redirect = ""

        if (Restaurante === "Piccola Stella") {
            redirect = "/AdminRestaurante/PiccolaStella"
        }
        if (Restaurante === "Notte Di Fuoco") {
            redirect = "/AdminRestaurante/NotteDiFuoco"
        }
        if (Restaurante === "Turin Anivo") {
            redirect = "/AdminRestaurante/TurinAnivo"

        }

        function refreshPage() {
            window.location.href = redirect;
        }

        return (
            <Layout className="color">
                <Header className='head'>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to='/AdminRestaurante'>Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/AdminRestaurante/ListEspeciales' >Especialidades</Link></Menu.Item>
                        <Menu.Item key="3"> <Link to='/AdminRestaurante/MenuBebidas'>Menu bebidas</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/AdminRestaurante/ListBuffet'>Buffet</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/AdminRestaurante/Especialidades' >Especialidades</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/AdminRestaurante/ListEmpleados'>Empleados</Link></Menu.Item>
                        <Menu.Item key="7"> <Link to='/AdminRestaurante/ListPuestos'>Puestos</Link></Menu.Item>
                        <Menu.Item key="8"><Link to='/AdminRestaurante/ListMesas'>Mesas</Link></Menu.Item>
                        <Menu.Item key="9"><Link to='/AdminRestaurante/ListGaseosas'>Gaseosas</Link></Menu.Item>
                        <Menu.Item key="10"> <Link to='/AdminRestaurante/ListBebCalientes'>Calientes</Link></Menu.Item>
                        <Menu.Item key="11"><Link to='/AdminRestaurante/ListBebHeladas'>Heladas</Link></Menu.Item>
                        <Menu.Item key="12"><Link to='/AdminRestaurante/ListLicores'>Licores</Link></Menu.Item>
                        <Menu.Item key="13"><Link to='/AdminRestaurante/ListClienteMesa'>Facturas Clientes</Link></Menu.Item>

                        <Menu.Item key="14"><Link to='/AdminRestaurante/ListVinos'>Vinos</Link></Menu.Item>
                        <Menu.Item key="15"><Link to={redirect} onClick={refreshPage}>Restaurante</Link></Menu.Item>
                        <Menu.Item key="16"><Link to='/AdminRestaurante/cerrarCaja'>Cerrar Sesión</Link></Menu.Item>
                    </Menu>
                </Header>
                <div style={{ padding: '0 50px' }} className='contenido'>
                    <LoadRouters routes={routes} />
                </div>
            </Layout>

        );
    }

    return null;


}


function LoadRouters({ routes }) {

    return routes.map((route, index) => (

        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />

    ));
}