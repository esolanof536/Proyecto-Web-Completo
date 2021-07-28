import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateBebHelApi } from "../../Api/bebidaHelada";
import { UserOutlined, UnorderedListOutlined, AlignLeftOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditBebHelForm(props) {
    const { bebHel, setIsVisibleModal, setReloadBebHel } = props;
    const [BebHelData, setBebHelData] = useState({
        nombre: bebHel.nombre,
        precio: bebHel.precio,
        restaurante: bebHel.restaurante,
        descripcion: bebHel.descripcion
    })

    const updateBebHel = e => {
        e.preventDefault();
        let BebHelUpdate = BebHelData;

        if (!BebHelUpdate.nombre || !BebHelUpdate.precio || !BebHelUpdate.restaurante || !BebHelUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateBebHelApi(BebHelUpdate, bebHel._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadBebHel(true);
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
                BebHelData={BebHelData}
                setBebHelData={setBebHelData}
                updateBebHel={updateBebHel}
            />
        </div>
    )
}




function EditForm(props) {
    const { BebHelData, setBebHelData, updateBebHel } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setBebHelData({ ...BebHelData, nombre: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio"
                            onChange={e => setBebHelData({ ...BebHelData, precio: e.target.value })}
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
                            onChange={e => setBebHelData({ ...BebHelData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setBebHelData({ ...BebHelData, restaurante: e })}
                        >
                            <Option value="Piccola Stella">Piccola Stella</Option>
                            <Option value="Turin Anivo">Turin Anivo</Option>
                            <Option value="Notte Di Fuoco">Notte Di Fuoco</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateBebHel}>
                    Actualizar Bebida Helada
                </Button>
            </Form.Item>
        </Form >
    )
}