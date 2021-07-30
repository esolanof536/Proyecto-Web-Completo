import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateEspeApi } from "../../Api/especiales";
import { UserOutlined, UnorderedListOutlined, DollarOutlined, AlignLeftOutlined } from '@ant-design/icons';


export default function EditEspeForm(props) {
    const { espe, setIsVisibleModal, setReloadEspe } = props;
    const [EspeData, setEspeData] = useState({
        nombre: espe.nombre,
        ingrediente: espe.ingrediente,
        precio: espe.precio,
        detalle: espe.detalle

    })

    const updateEspe = e => {
        e.preventDefault();
        let EspeUpdate = EspeData;

        if (!EspeUpdate.nombre || !EspeUpdate.ingrediente || !EspeUpdate.precio || !EspeUpdate.detalle) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateEspeApi(EspeUpdate, espe._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadEspe(true);
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
                EspeData={EspeData}
                setEspeData={setEspeData}
                updateEspe={updateEspe}
            />
        </div>
    )
}




function EditForm(props) {
    const { EspeData, setEspeData, updateEspe } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setEspeData({ ...EspeData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UnorderedListOutlined />}
                            placeholder="Ingredientes"
                            onChange={e => setEspeData({ ...EspeData, ingrediente: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio"
                            onChange={e => setEspeData({ ...EspeData, precio: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Detalle"
                            onChange={e => setEspeData({ ...EspeData, detalle: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateEspe}>
                    Actualizar Especialidad
                </Button>
            </Form.Item>
        </Form>
    )
}