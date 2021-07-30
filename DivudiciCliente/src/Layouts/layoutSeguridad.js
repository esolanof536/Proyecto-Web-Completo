import React from 'react';
import 'antd/dist/antd.css';
import "./StyleMenu.css";
import { Route, Link, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { logOut } from "../Api/auth"
import useAuth from "../Hooks/useAuth";

export default function LayoutSeguridad(props) {

    const { Header, Content } = Layout;
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
                        <Menu.Item key="1"><Link to='/adminSeguridad'>Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/adminSeguridad/listaUsuarios' >Usuarios</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/adminSeguridad/listaRoles'>Roles</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/adminSeguridad/listaConsecutivos' >Consecutivos</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/adminSeguridad/listaUM'>Uni. Medida</Link></Menu.Item>
                        <Menu.Item key="6"> <Link to='/adminSeguridad/listaPaises'>Paises</Link></Menu.Item>
                        <Menu.Item key="7"><a id='logoutButton' onClick={logoutUser}>Cerrar Sesión</a></Menu.Item>
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