import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateEmpleadoApi } from "../../Api/empleado";
import { UserOutlined, NumberOutlined, PhoneOutlined, StarOutlined } from '@ant-design/icons';


export default function EditEmpleadosForm(props) {
    const { empleados, setIsVisibleModal, setReloadEmpleado } = props;
    const [EmpleadosData, setEmpleadosData] = useState({
        nombre: empleados.nombre,
        cedula: empleados.cedula,
        pApellido: empleados.pApellido,
        sApellido: empleados.sApellido,
        telefono1: empleados.telefono1,
        telefono2: empleados.telefono2,
        restaurante: empleados.restaurante
    })

    const updateEmpleados = e => {
        e.preventDefault();
        let EmpleadosUpdate = EmpleadosData;

        if (!EmpleadosUpdate.nombre || !EmpleadosUpdate.cedula || !EmpleadosUpdate.pApellido || !EmpleadosUpdate.sApellido || !EmpleadosUpdate.telefono1 || !EmpleadosUpdate.telefono2
            || !EmpleadosUpdate.restaurante) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateEmpleadoApi(EmpleadosUpdate, empleados._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadEmpleado(true);
        });



    }

    const openNotification = (placement, message, type) => {
        notification[type]({
            message: message,
            placement,
        });
    };

    return (
        <div>
            <EditForm
                EmpleadosData={EmpleadosData}
                setEmpleadosData={setEmpleadosData}
                updateEmpleados={updateEmpleados}
            />
        </div>
    )
}




function EditForm(props) {
    const { EmpleadosData, setEmpleadosData, updateEmpleados } = props;
    const { Option } = Select;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cedula"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, cedula: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nomnbre"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, nombre: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Primer Apellido"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, pApellido: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Segundo Apellido"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, sApellido: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Teléfono 1"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, telefono1: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Teléfono 2"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, telefono2: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setEmpleadosData({ ...EmpleadosData, restaurante: e })}
                        >
                            <Option value="Piccola Stella">Piccola Stella</Option>
                            <Option value="Turin Anivo">Turin Anivo</Option>
                            <Option value="Notte Di Fuoco">Notte Di Fuoco</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateEmpleados}>
                    Actualizar Empleado
                </Button>
            </Form.Item>
        </Form>
    )
}