import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateProveedoresApi } from "../../Api/Sistema/proveedor";
import { FlagOutlined } from '@ant-design/icons';


export default function EditProveedoresForm(props) {
    const { proveedores, setIsVisibleModal, setReloadProveedores } = props;
    const [proveedoresData, setProveedoresesData] = useState({
        nombrePorveedor: proveedores.nombrePorveedor,
        pApellido: proveedores.pApellido,
        sApellido: proveedores.sApellido,
        correo: proveedores.correo
    })

    const updateProveedoreses = e => {
        e.preventDefault();
        let proveedoresUpdate = proveedoresData;

        if (!proveedoresUpdate.nombrePorveedor || !proveedoresUpdate.pApellido || !proveedoresUpdate.sApellido || !proveedoresUpdate.correo) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateProveedoresApi(proveedoresUpdate, proveedores._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadProveedores(true);
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
                proveeData={proveedoresData}
                setProveedoresData={setProveedoresesData}
                updateProveedores={updateProveedoreses}
            />
        </div>
    )
}




function EditForm(props) {
    const { proveeData, setProveedoresData, updateProveedores } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FlagOutlined />}
                            placeholder="Nombre"
                            onChange={e => setProveedoresData({ ...proveeData, nombrePorveedor: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FlagOutlined />}
                            placeholder="Primera Apellido"
                            onChange={e => setProveedoresData({ ...proveeData, pApellido: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FlagOutlined />}
                            placeholder="Segundo Apellido"
                            onChange={e => setProveedoresData({ ...proveeData, sApellido: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FlagOutlined />}
                            placeholder="Correo Electrónico"
                            onChange={e => setProveedoresData({ ...proveeData, correo: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateProveedores}>
                    Actualizar Proveedor
                </Button>
            </Form.Item>
        </Form>
    )
}