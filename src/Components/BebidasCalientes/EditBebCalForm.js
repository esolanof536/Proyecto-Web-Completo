import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateBebCalApi } from "../../Api/bebidaCalientes";
import { UserOutlined, UnorderedListOutlined, AlignLeftOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditBebCalForm(props) {
    const { bebCal, setIsVisibleModal, setReloadBebCal } = props;
    const [BebCalData, setBebCalData] = useState({
        nombre: bebCal.nombre,
        ingrediente: bebCal.ingrediente,
        precio: bebCal.precio,
        restaurante: bebCal.restaurante,
        descripcion: bebCal.descripcion
    })

    const updateBebCal = e => {
        e.preventDefault();
        let BebCalUpdate = BebCalData;

        if (!BebCalUpdate.nombre || !BebCalUpdate.ingrediente || !BebCalUpdate.precio || !BebCalUpdate.restaurante || !BebCalUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateBebCalApi(BebCalUpdate, bebCal._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadBebCal(true);
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
                BebCalData={BebCalData}
                setBebCalData={setBebCalData}
                updateBebCal={updateBebCal}
            />
        </div>
    )
}




function EditForm(props) {
    const { BebCalData, setBebCalData, updateBebCal } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setBebCalData({ ...BebCalData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UnorderedListOutlined />}
                            placeholder="Ingredientes"
                            onChange={e => setBebCalData({ ...BebCalData, ingrediente: e.target.value })}
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
                            onChange={e => setBebCalData({ ...BebCalData, precio: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setBebCalData({ ...BebCalData, restaurante: e })}
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
                            onChange={e => setBebCalData({ ...BebCalData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateBebCal}>
                    Actualizar Bebida Caliente
                </Button>
            </Form.Item>
        </Form>
    )
}