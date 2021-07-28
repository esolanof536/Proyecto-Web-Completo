import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateRolApi } from "../../Api/Seguridad/roles";
import { UserOutlined, AlignLeftOutlined } from '@ant-design/icons';


export default function EditRolForm(props) {
    const { roles, setIsVisibleModal, setReloadRol } = props;
    const [rolesData, setRolesData] = useState({
        nombre: roles.nombre,
        descripcion: roles.descripcion,
    })

    const updateRoles = e => {
        e.preventDefault();
        let rolesUpdate = rolesData;

        if (!rolesUpdate.nombre || !rolesUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateRolApi(rolesUpdate, roles._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadRol(true);
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
                rolData={rolesData}
                setRolData={setRolesData}
                updateRol={updateRoles}
            />
        </div>
    )
}




function EditForm(props) {
    const { rolData, setRolData, updateRol } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setRolData({ ...rolData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setRolData({ ...rolData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateRol}>
                    Actualizar Rol
                </Button>
            </Form.Item>
        </Form>
    )
}