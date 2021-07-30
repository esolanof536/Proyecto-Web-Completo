import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateVinoApi } from "../../Api/vinos";
import { UserOutlined, NumberOutlined, AlignLeftOutlined, DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';


export default function EditVinoForm(props) {
    const { vino, setIsVisibleModal, setReloadVino } = props;
    const [VinoData, setVinoData] = useState({
        nombre: vino.nombre,
        cantidad: vino.cantidad,
        precioUnitario: vino.precioUnitario,
        precioBotella: vino.precioBotella,
        restaurante: vino.restaurante,
        descripcion: vino.descripcion,
        yearCosecha: vino.yearCosecha

    })

    const updateVino = e => {
        e.preventDefault();
        let VinoUpdate = VinoData;

        if (!VinoUpdate.nombre || !VinoUpdate.cantidad || !VinoUpdate.precioUnitario || !VinoUpdate.precioBotella || !VinoUpdate.yearCosecha || !VinoUpdate.restaurante
            || !VinoUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateVinoApi(VinoUpdate, vino._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadVino(true);
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
                VinoData={VinoData}
                setVinoData={setVinoData}
                updateVino={updateVino}
            />
        </div>
    )
}




function EditForm(props) {
    const { VinoData, setVinoData, updateVino } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setVinoData({ ...VinoData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setVinoData({ ...VinoData, cantidad: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio Unitario"
                            onChange={e => setVinoData({ ...VinoData, precioUnitario: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio Botella"
                            onChange={e => setVinoData({ ...VinoData, precioBotella: e.target.value })}
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
                            onChange={e => setVinoData({ ...VinoData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setVinoData({ ...VinoData, restaurante: e })}
                        >
                            <Option value="Piccola Stella">Piccola Stella</Option>
                            <Option value="Turin Anivo">Turin Anivo</Option>
                            <Option value="Notte Di Fuoco">Notte Di Fuoco</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>

                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<ClockCircleOutlined />}
                            placeholder="Año Consecha"
                            onChange={e => setVinoData({ ...VinoData, yearCosecha: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateVino}>
                    Actualizar Vino
                </Button>
            </Form.Item>
        </Form>
    )
}