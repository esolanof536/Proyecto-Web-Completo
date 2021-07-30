import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateBebGasApi } from "../../Api/gaseosa";
import { UserOutlined, NumberOutlined, AlignLeftOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditBebGasForm(props) {
    const { bebGas, setIsVisibleModal, setReloadBebGas } = props;
    const [BebGasData, setBebGasData] = useState({
        nombre: bebGas.nombre,
        cantidad: bebGas.cantidad,
        precio: bebGas.precio,
        restaurante: bebGas.restaurante,
        descripcion: bebGas.descripcion
    })

    const updateBebGas = e => {
        e.preventDefault();
        let BebGasUpdate = BebGasData;

        if (!BebGasUpdate.nombre || !BebGasUpdate.cantidad || !BebGasUpdate.precio || !BebGasUpdate.restaurante || !BebGasUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateBebGasApi(BebGasUpdate, bebGas._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadBebGas(true);
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
                BebGasData={BebGasData}
                setBebGasData={setBebGasData}
                updateBebGas={updateBebGas}
            />
        </div>
    )
}




function EditForm(props) {
    const { BebGasData, setBebGasData, updateBebGas } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setBebGasData({ ...BebGasData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setBebGasData({ ...BebGasData, cantidad: e.target.value })}
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
                            onChange={e => setBebGasData({ ...BebGasData, precio: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setBebGasData({ ...BebGasData, restaurante: e })}
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
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setBebGasData({ ...BebGasData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateBebGas}>
                    Actualizar Bebida Gaseosa
                </Button>
            </Form.Item>
        </Form>
    )
}