import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateUserApi } from "../../../Api/Seguridad/usuarios";
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';


export default function EditUserForm(props) {
    const { users, setIsVisibleModal, setReloadUser } = props;
    const [usersData, setUsersData] = useState({
        nombre: users.nombre,
        primerApellido: users.primerApellido,
        segundoApellido: users.segundoApellido,
        telefono: users.telefono,
        celular: users.celular,
        username: users.username,
        admin: users.admin
    })

    const updateUsers = e => {
        e.preventDefault();
        let userUpdate = usersData;

        if (!userUpdate.nombre || !userUpdate.primerApellido || !userUpdate.segundoApellido || !userUpdate.telefono || !userUpdate.celular || !userUpdate.username
            || !userUpdate.admin) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateUserApi(userUpdate, users._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadUser(true);
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
            <h1>Formulario de Edición</h1>
            <EditForm
                clienteData={usersData}
                setClienteData={setUsersData}
                updateCliente={updateUsers}
            />
        </div>
    )
}




function EditForm(props) {
    const { clienteData, setClienteData, updateCliente } = props;
    const { Option } = Select;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setClienteData({ ...clienteData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Primer Apellido"
                            onChange={e => setClienteData({ ...clienteData, primerApellido: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Segundo Apellido"
                            onChange={e => setClienteData({ ...clienteData, segundoApellido: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Teléfono"
                            onChange={e => setClienteData({ ...clienteData, telefono: e.target.value })}
                        />
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Celular"
                            onChange={e => setClienteData({ ...clienteData, celular: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            onChange={e => setClienteData({ ...clienteData, username: e.target.value })}
                        />
                    </Form.Item>
                </Col>

            </Row><Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccionar un rol"
                            onChange={e => setClienteData({ ...clienteData, admin: e })}
                        >
                            <Option value="restaurante">Restaurante</Option>
                            <Option value="sistema">Sistema</Option>
                            <Option value="seguridad">Seguridad</Option>
                            <Option value="cuentas">Cuentas</Option>

                        </Select>
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateCliente}>
                    Actualizar Usuario
                </Button>
            </Form.Item>
        </Form>
    )
}