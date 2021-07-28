import React from 'react';
import 'antd/dist/antd.css';
import "./StyleMenu.css";
import { Route, Link, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { logOut } from "../Api/auth"
import useAuth from "../Hooks/useAuth";
export default function LayoutSistema(props) {

    const { Header , Content} = Layout;
    const { routes } = props;

    const logoutUser = () => {
        logOut()
        window.location.reload();
    }

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
        return (
            <Layout className="color">
                <Header className='head'>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to='/AdminSistema'>Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/AdminSistema/ListComestibles' >Comestibles</Link></Menu.Item>
                        <Menu.Item key="3"> <Link to='/AdminSistema/ListTecnologia'>Tecnologia</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/AdminSistema/ListLimpHigiene'>Limpieza e Higiene</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/AdminSistema/ListDesEmpaques' >Desechables y Empaques</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/AdminSistema/ListEqUtencilios'>Equipos y Utencilios</Link></Menu.Item>
                        <Menu.Item key="7"> <Link to='/AdminSistema/ListMarcas'>Marcas</Link></Menu.Item>
                        <Menu.Item key="8"> <Link to='/AdminSistema/MenuProductos'>Productos</Link></Menu.Item>
                        <Menu.Item key="9"> <Link to='/AdminSistema/ListProveedores'>Proveedores</Link></Menu.Item>
                        <Menu.Item key="10"><a id='logoutButton' onClick={logoutUser}>Cerrar Sesión</a></Menu.Item>
                    </Menu>
                </Header>
                <Content className='contenido'>
                    <LoadRouters routes={routes} />
                </Content>
            </Layout>
        );
    }
    return null
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