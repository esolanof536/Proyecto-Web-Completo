import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateLimpiezaApi } from "../../Api/Sistema/limpieza";
import { FieldNumberOutlined, AlignLeftOutlined, UserOutlined, CopyOutlined } from '@ant-design/icons';


export default function EditLimpiezaForm(props) {
    const { limpieza, setIsVisibleModal, setReloadLim } = props;
    const [limpiezaData, setLimpiezaData] = useState({
        nombre: limpieza.nombre,
        cantidad: limpieza.cantidad,
        descripcion: limpieza.descripcion
    })

    const updateLimpieza = e => {
        e.preventDefault();
        let limpiezaUpdate = limpiezaData;



        updateLimpiezaApi(limpiezaUpdate, limpieza._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadLim(true);
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
                limpiezaData={limpiezaData}
                setLimpiezaData={setLimpiezaData}
                updateLimpieza={updateLimpieza}
            />
        </div>
    )
}




function EditForm(props) {
    const { limpiezaData, setLimpiezaData, updateLimpieza } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setLimpiezaData({ ...limpiezaData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FieldNumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setLimpiezaData({ ...limpiezaData, cantidad: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setLimpiezaData({ ...limpiezaData, descripcion: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<CopyOutlined />}
                            placeholder="Tipo"
                            onChange={e => setLimpiezaData({ ...limpiezaData, tipo: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateLimpieza}>
                    Actualizar Limpieza/Higiene
                </Button>
            </Form.Item>
        </Form>
    )
}