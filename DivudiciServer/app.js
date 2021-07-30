const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

//Load routings
const userRoutes = require('./Router/Usuarios');
const bbHRoutes = require('./Router/BebidasRoute/bebidaHelada');
const bbCRoutes = require('./Router/BebidasRoute/bebidaCaliente');
const bbGRoutes = require('./Router/BebidasRoute/bebidaGaseosa');
const LicoRoutes = require('./Router/BebidasRoute/licor');
const VinosRoutes = require('./Router/BebidasRoute/vinos');
const EspecialRoutes = require('./Router/Especiales/espieciali');
const BuffetRoutes = require('./Router/Especiales/buffet');
const MesasRoutes = require('./Router/mesas');
const EmpleadoRoutes = require('./Router/empleados');
const PuestosRoutes = require('./Router/puesto');
const MarcasRoutes = require('./Router/marca');
const DesechEmpaqRoutes = require('./Router/Sistema/desechEmpaq');
const EquipoUtencilEmpaqRoutes = require('./Router/Sistema/equipoUtenc');
const LimpHigieneRoutes = require('./Router/Sistema/limpHigiene');
const TecnologiaRoutes = require('./Router/Sistema/tecnologia');
const ProveedorRoutes = require('./Router/proveedor');
//const CajaRoutes = require('./Router/Seguridad/caja');
const rolRoutes = require('./Router/Seguridad/rol');
const UMRoutes = require('./Router/Seguridad/unidadM');
const ConsecuRoutes = require('./Router/Seguridad/consecutivo');
const PaisRoutes = require('./Router/Seguridad/pais');
const ComestibRoutes = require('./Router/Sistema/comestible');
//Apertura y cierre de cajas
const AbrirCajasRoutes = require('./Router/cajas/abrirCaja.js');
const CerrarCajasRoutes = require('./Router/cajas/cerrarCaja.js');

const FacMesaRoutes = require('./Router/factMesa');

const ResRoutes = require('./Router/restaurante');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Router Basic
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, bbHRoutes);
app.use(`/api/${API_VERSION}`, bbCRoutes);
app.use(`/api/${API_VERSION}`, bbGRoutes);
app.use(`/api/${API_VERSION}`, LicoRoutes);
app.use(`/api/${API_VERSION}`, VinosRoutes);
app.use(`/api/${API_VERSION}`, EspecialRoutes);
app.use(`/api/${API_VERSION}`, BuffetRoutes);
app.use(`/api/${API_VERSION}`, MesasRoutes);
app.use(`/api/${API_VERSION}`, EmpleadoRoutes);
app.use(`/api/${API_VERSION}`, PuestosRoutes);
app.use(`/api/${API_VERSION}`, MarcasRoutes);
app.use(`/api/${API_VERSION}`, DesechEmpaqRoutes);
app.use(`/api/${API_VERSION}`, EquipoUtencilEmpaqRoutes);
app.use(`/api/${API_VERSION}`, LimpHigieneRoutes);
app.use(`/api/${API_VERSION}`, TecnologiaRoutes);
app.use(`/api/${API_VERSION}`, ProveedorRoutes);
//app.use(`/api/${API_VERSION}`, CajaRoutes);
app.use(`/api/${API_VERSION}`, rolRoutes);
app.use(`/api/${API_VERSION}`, UMRoutes);
app.use(`/api/${API_VERSION}`, ConsecuRoutes);
app.use(`/api/${API_VERSION}`, PaisRoutes);
app.use(`/api/${API_VERSION}`, ComestibRoutes);
//Apertura y cierre de cajas
app.use(`/api/${API_VERSION}`, AbrirCajasRoutes);
app.use(`/api/${API_VERSION}`, CerrarCajasRoutes);

app.use(`/api/${API_VERSION}`, ResRoutes);


app.use(`/api/${API_VERSION}`, FacMesaRoutes);
module.exports = app;