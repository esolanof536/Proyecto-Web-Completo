import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateMesaApi } from "../../Api/mesas";
import { UserOutlined, NumberOutlined, PhoneOutlined, StarOutlined } from '@ant-design/icons';


export default function EditMesasForm(props) {
    const { mesas, setIsVisibleModal, setReloadMesa } = props;
    const [MesasData, setMesasData] = useState({
        nombre: mesas.nombre,
        numero: mesas.numero,
        cantSillas: mesas.cantSillas,
        restaurante: mesas.restaurante
    })

    const updateMesas = e => {
        e.preventDefault();
        let MesasUpdate = MesasData;

        if (!MesasUpdate.nombre || !MesasUpdate.numero || !MesasUpdate.cantSillas || !MesasUpdate.restaurante) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateMesaApi(MesasUpdate, mesas._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadMesa(true);
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
                MesasData={MesasData}
                setMesasData={setMesasData}
                updateMesas={updateMesas}
            />
        </div>
    )
}




function EditForm(props) {
    const { MesasData, setMesasData, updateMesas } = props;
    const { Option } = Select;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setMesasData({ ...MesasData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Número"
                            onChange={e => setMesasData({ ...MesasData, numero: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad de Sillas"
                            onChange={e => setMesasData({ ...MesasData, cantSillas: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setMesasData({ ...MesasData, restaurante: e })}
                        >
                            <Option value="Picolla Stella">Picolla Stella</Option>
                            <Option value="Turin Anivo">Turin Anivo</Option>
                            <Option value="Notte Di Fuoco">Notte Di Fuoco</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateMesas}>
                    Actualizar Mesa
                </Button>
            </Form.Item>
        </Form>
    )
}