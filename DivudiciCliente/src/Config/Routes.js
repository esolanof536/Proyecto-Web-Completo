// Layouts

import LayoutRestaurante from '../Layouts/layoutRestaurante'
import LayoutSeguridad from '../Layouts/layoutSeguridad'
import LayoutSistema from '../Layouts/layoutSistema'
// Pages
import Login from '../Pages/Login/login';
//Menus Admin Restaurante
import MenuEspecialidades from '../Pages/AdminRestaurante/Menus/Especialidades';
import MainMenuAdminRes from '../Pages/AdminRestaurante/Menus/mainMenuAdminRestaurante'
import MenuListBebidas from '../Pages/AdminRestaurante/Menus/menuListBebidas'
//Forms AdminRestaurante
import InsertBebidaHelada from '../Pages/AdminRestaurante/Forms/AgregarBebidasHeladas';
import InsertLicor from '../Pages/AdminRestaurante/Forms/AgregarLicores';
import InsertGaseosa from '../Pages/AdminRestaurante/Forms/addGaseosas';
import InsertBebidaCaliente from '../Pages/AdminRestaurante/Forms/formBebCalientes';
import InsertVino from '../Pages/AdminRestaurante/Forms/formAddVinos';
import InsertMesa from '../Pages/AdminRestaurante/Forms/formAddMesa';
import InsertPuesto from '../Pages/AdminRestaurante/Forms/FormAddPuestos';
import InsertEspecial from '../Pages/AdminRestaurante/Forms/formAddEspeciales';
import InsertBuffet from '../Pages/AdminRestaurante/Forms/formAddBuffet';
import InsertEmpleado from '../Pages/AdminRestaurante/Forms/formAddEmpleados';
//Listas AdminRestaurante
import ListLicores from '../Pages/AdminRestaurante/Listas/listaLicores'
import ListMesas from '../Pages/AdminRestaurante/Listas/listaMesas'
import ListBebCalientes from '../Pages/AdminRestaurante/Listas/listBebCalientes'
import ListBuffet from '../Pages/AdminRestaurante/Listas/listBuffet'
import ListEmpleados from '../Pages/AdminRestaurante/Listas/listEmpleados'
import ListEspeciales from '../Pages/AdminRestaurante/Listas/listEspeciales'
import ListGaseosas from '../Pages/AdminRestaurante/Listas/listGaseosas'
import ListPuestos from '../Pages/AdminRestaurante/Listas/listPuestos'
import ListVinos from '../Pages/AdminRestaurante/Listas/listVinos'
import ListBebHeladas from '../Pages/AdminRestaurante/Listas/listaBebHeladas'
//Pages Seguridad 
//Listas
import ListaUsuario from "../Pages/AdminSeguridad/Listas/ListaUsuarios/ListaUsuarios";
import ListaConsecutivos from "../Pages/AdminSeguridad/Listas/ListaConsecutivos/ListaConsecutivos";
import ListaCajas from "../Pages/AdminSeguridad/Listas/ListaCajas/ListaCajas";
import ListaPaises from "../Pages/AdminSeguridad/Listas/ListaPaises/ListaPaises";
import ListaUnidadesMedida from "../Pages/AdminSeguridad/Listas/ListaUnidadesMedida/ListaUnidadesMedida";
import ListaRoles from "../Pages/AdminSeguridad/Listas/ListaRoles/ListaRoles";
//Formularios de agregar en Admin Seguridad
import AgregarConsecutivos from "../Pages/AdminSeguridad/Forms/AgregarConsecutivos";
import AgregarPaises from "../Pages/AdminSeguridad/Forms/AgregarPaises";
import AgregarRoles from "../Pages/AdminSeguridad/Forms/AgregarRoles";
import AgregarUsuario from "../Pages/AdminSeguridad/Forms/AgregarUsuario";
import AgregarUnidadesMedidas from "../Pages/AdminSeguridad/Forms/AgregarUnidadesMedidas";
import VentanaSeguridad from "../Pages/AdminSeguridad/VentanaSeguridad/VentanaSeguridad";
//Pages AdminSistema
//Menus admin sistema
import VentanaProductos from '../Pages/AdminSistema/Menus/ventanaProductos'
import VentanaProveedores from '../Pages/AdminSistema/Menus/ventanaProveedores'
//Listas de admin sistema
import ListComestibles from '../Pages/AdminSistema/Lista/listComestibles'
import ListaDesechablesEmpaques from '../Pages/AdminSistema/Lista/listDesechablesEmpaques'
import ListEqUtencilios from '../Pages/AdminSistema/Lista/listEquiposUtencilios'
import ListLimpiezaHigiene from '../Pages/AdminSistema/Lista/listLimpiezaHigiene'
import ListMarcas from '../Pages/AdminSistema/Lista/listMarcas'
import ListProveedores from '../Pages/AdminSistema/Lista/ListProveedores'
import ListTecnologia from '../Pages/AdminSistema/Lista/listTecnologia'
//formulario de admin sistema
import AgregarComestibles from '../Pages/AdminSistema/Form/formAddComestibles'
import FormAddDesechablesEmpaques from '../Pages/AdminSistema/Form/formAddDesechablesEmpaques'
import FormAddEquiposUtencilios from '../Pages/AdminSistema/Form/formAddEquiposUtencilios'
import FormAddLimpiezaHigiene from '../Pages/AdminSistema/Form/formAddLimpiezaHigiene'
import FormAddListProveedores from '../Pages/AdminSistema/Form/formAddListProveedores'
import FormAddMarca from '../Pages/AdminSistema/Form/formAddMarca'
import FormAddTecnologia from '../Pages/AdminSistema/Form/formAddTecnologia'
//REPORTES
import reportesLicores from "../Pages/Reportes/Reporte Licores/ReporteLicores";
import reporteSeguridad from "../Pages/Reportes/Reporte Seguridad/ReporteSeguridad";
import reporteSistema from "../Pages/Reportes/Reporte Sistema/ReporteSistema";

import facturacionCliente from "../Pages/FacturacionCliente/FacturacionCliente";

//Apertura y Cierre de caja
import AperturaCaja from '../Pages/cajas/abrirCaja/abrirCaja.js';
import CerrarCajas from '../Pages/cajas/cerrarCaja/cerrarCaja.js';

//Restaurantes AdminRestaurante
import NotteDiFuoco from "../Pages/NotteDiFuoco/NotteDiFuoco";
import PiccolaStella from "../Pages/PiccolaStella/PiccolaStella";
import TurinAnivo from "../Pages/TurinAnivo/TurinAnivo";

import ListClienteMesa from "../Pages/AdminRestaurante/Listas/listClienteMesa";

const routes = [{

    path: '/AdminRestaurante',
    component: LayoutRestaurante,
    exact: false,
    routes: [
        {
            path: "/AdminRestaurante",
            component: MainMenuAdminRes,
            exact: true

        },
        {
            path: "/AdminRestaurante/Especialidades",
            component: MenuEspecialidades,
            exact: true,

        },
        {
            path: "/AdminRestaurante/ListEspeciales",
            component: ListEspeciales,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarBebidaHelada",
            component: InsertBebidaHelada,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarLicores",
            component: InsertLicor,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarBebidaGaseosa",
            component: InsertGaseosa,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarBebidaCaliente",
            component: InsertBebidaCaliente,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarVino",
            component: InsertVino,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarMesa",
            component: InsertMesa,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarPuestos",
            component: InsertPuesto,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarEspecialidades",
            component: InsertEspecial,
            exact: true
        },
        {
            path: "/AdminRestaurante/AgregarBuffet",
            component: InsertBuffet,
            exact: true
        },
        {
            path: "/AdminRestaurante/Agregarempleado",
            component: InsertEmpleado,
            exact: true
        },
        {
            path: "/AdminRestaurante/MenuBebidas",
            component: MenuListBebidas,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListEmpleados",
            component: ListEmpleados,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListBuffet",
            component: ListBuffet,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListMesas",
            component: ListMesas,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListPuestos",
            component: ListPuestos,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListGaseosas",
            component: ListGaseosas,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListBebCalientes",
            component: ListBebCalientes,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListLicores",
            component: ListLicores,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListVinos",
            component: ListVinos,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListBebHeladas",
            component: ListBebHeladas,
            exact: true
        },
        {
            path: "/AdminRestaurante/cerrarCaja",
            component: CerrarCajas,
            exact: true
        },
        {
            path: "/AdminRestaurante/NotteDiFuoco",
            component: NotteDiFuoco,
            exact: true
        },
        {
            path: "/AdminRestaurante/PiccolaStella",
            component: PiccolaStella,
            exact: true
        },
        {
            path: "/AdminRestaurante/TurinAnivo",
            component: TurinAnivo,
            exact: true
        },
        {
            path: "/AdminRestaurante/ListClienteMesa",
            component: ListClienteMesa,
            exact: true
        }
    ]
},
{
    path: "/abrirCaja",
    component: AperturaCaja,
    exact: true
},
{
    path: '/',
    component: Login,
    exact: true

},
{
    path: "/adminSeguridad",
    exact: false,
    component: LayoutSeguridad,
    routes: [
        {
            path: "/adminSeguridad",
            exact: true,
            component: VentanaSeguridad
        },
        {
            path: "/adminSeguridad/listaUsuarios",
            exact: true,
            component: ListaUsuario
        },
        {
            path: "/adminSeguridad/listaConsecutivos",
            exact: true,
            component: ListaConsecutivos
        },
        {
            path: "/adminSeguridad/listaCajas",
            exact: true,
            component: ListaCajas
        },
        {
            path: "/adminSeguridad/listaPaises",
            exact: true,
            component: ListaPaises
        },
        {
            path: "/adminSeguridad/listaUM",
            exact: true,
            component: ListaUnidadesMedida
        },
        {
            path: "/adminSeguridad/listaRoles",
            exact: true,
            component: ListaRoles
        },
        {
            path: "/adminSeguridad/addConsecutivo",
            exact: true,
            component: AgregarConsecutivos
        },
        {
            path: "/adminSeguridad/addPais",
            exact: true,
            component: AgregarPaises
        },
        {
            path: "/adminSeguridad/addRol",
            exact: true,
            component: AgregarRoles
        },
        {
            path: "/adminSeguridad/addUsuario",
            exact: true,
            component: AgregarUsuario
        },
        {
            path: "/adminSeguridad/addUnidadMedida",
            exact: true,
            component: AgregarUnidadesMedidas
        }

    ]

},
{
    path: '/AdminSistema',
    component: LayoutSistema,
    exact: false,
    routes: [
        {
            path: "/AdminSistema",
            component: VentanaProveedores,
            exact: true

        },
        {
            path: "/AdminSistema/MenuProductos",
            component: VentanaProductos,
            exact: true

        },
        {
            path: "/AdminSistema/ListMarcas",
            component: ListMarcas,
            exact: true

        },
        {
            path: "/AdminSistema/ListProveedores",
            component: ListProveedores,
            exact: true

        },
        {
            path: "/AdminSistema/AgregarMarcas",
            component: FormAddMarca,
            exact: true

        },
        {
            path: "/AdminSistema/AgregarProveedores",
            component: FormAddListProveedores,
            exact: true

        },
        {
            path: "/AdminSistema/ListComestibles",
            component: ListComestibles,
            exact: true

        },
        {
            path: "/AdminSistema/ListDesEmpaques",
            component: ListaDesechablesEmpaques,
            exact: true

        },
        {
            path: "/AdminSistema/ListLimpHigiene",
            component: ListLimpiezaHigiene,
            exact: true

        },
        {
            path: "/AdminSistema/ListTecnologia",
            component: ListTecnologia,
            exact: true

        },
        {
            path: "/AdminSistema/ListEqUtencilios",
            component: ListEqUtencilios,
            exact: true

        },
        {
            path: "/AdminSistema/FormComestibles",
            component: AgregarComestibles,
            exact: true

        },
        {
            path: "/AdminSistema/FormDesEmpaques",
            component: FormAddDesechablesEmpaques,
            exact: true

        },
        {
            path: "/AdminSistema/FormLimpHigiene",
            component: FormAddLimpiezaHigiene,
            exact: true

        },
        {
            path: "/AdminSistema/FormTecnologia",
            component: FormAddTecnologia,
            exact: true

        },
        {
            path: "/AdminSistema/FormEqutencilios",
            component: FormAddEquiposUtencilios,
            exact: true

        }
    ]
},
{
    path: "/reportesLicores",
    component: LayoutSistema,
    exact: false,
    routes: [
        {
            path: "/reportesLicores",
            component: reportesLicores,
            exact: true

        }
    ]
},
{
    path: "/reporteSeguridad",
    component: LayoutSeguridad,
    exact: false,
    routes: [
        {
            path: "/reporteSeguridad",
            component: reporteSeguridad,
            exact: true
        }
    ]
},
{
    path: "/reporteSistema",
    component: LayoutSistema,
    exact: false,
    rouets: [
        {
            path: "/reporteSistema",
            exact: true,
            component: reporteSistema
        }
    ]
},
{
    path: "/facturacion",
    component: facturacionCliente,
    exact: false
}
];


export default routes;