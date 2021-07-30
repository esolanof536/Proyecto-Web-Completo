import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateBuffetApi } from "../../Api/buffet";
import { UserOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditBuffetForm(props) {
    const { espe, setIsVisibleModal, setReloadBuffet } = props;
    const [EspeData, setEspeData] = useState({
        nombre: espe.nombre,
        tipo: espe.tipo,
        precio: espe.precio,

    })

    const updateEspe = e => {
        e.preventDefault();
        let EspeUpdate = EspeData;

        if (!EspeUpdate.nombre || !EspeUpdate.tipo || !EspeUpdate.precio) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateBuffetApi(EspeUpdate, espe._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadBuffet(true);
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
                BuffetData={EspeData}
                setBuffetData={setEspeData}
                updateBuffet={updateEspe}
            />
        </div>
    )
}




function EditForm(props) {
    const { BuffetData, setBuffetData, updateBuffet } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setBuffetData({ ...BuffetData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio"
                            onChange={e => setBuffetData({ ...BuffetData, precio: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Tipo"
                            onChange={e => setBuffetData({ ...BuffetData, tipo: e })}
                        >
                            <Option value="Marina">Marina</Option>
                            <Option value="Vegetal">Vegetal</Option>
                            <Option value="Frutas">Frutas</Option>
                            <Option value="Comida Mediterranea">Comida Mediterranea</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateBuffet}>
                    Actualizar Buffet
                </Button>
            </Form.Item>
        </Form>
    )
}