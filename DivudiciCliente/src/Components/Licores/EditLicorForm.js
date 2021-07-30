import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateLicorApi } from "../../Api/licores";
import { UserOutlined, NumberOutlined, AlignLeftOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditLicorForm(props) {
    const { licor, setIsVisibleModal, setReloadLicor } = props;
    const [LicorData, setLicorData] = useState({
        nombre: licor.nombre,
        cantidad: licor.cantidad,
        precioUnitario: licor.precioUnitario,
        precioBotella: licor.precioBotella,
        restaurante: licor.restaurante,
        descripcion: licor.descripcion
    })

    const updateLicor = e => {
        e.preventDefault();
        let LicorUpdate = LicorData;

        if (!LicorUpdate.nombre || !LicorUpdate.cantidad || !LicorUpdate.precioUnitario || !LicorUpdate.precioBotella || !LicorUpdate.restaurante || !LicorUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateLicorApi(LicorUpdate, licor._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadLicor(true);
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
                LicorData={LicorData}
                setLicorData={setLicorData}
                updateLicor={updateLicor}
            />
        </div>
    )
}




function EditForm(props) {
    const { LicorData, setLicorData, updateLicor } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setLicorData({ ...LicorData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setLicorData({ ...LicorData, cantidad: e.target.value })}
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
                            onChange={e => setLicorData({ ...LicorData, precioUnitario: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<DollarOutlined />}
                            placeholder="Precio Botella"
                            onChange={e => setLicorData({ ...LicorData, precioBotella: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>

                <Col span={12}>
                    <Form.Item>

                        <Select
                            placeholder="Seleccione un Restaurante"
                            onChange={e => setLicorData({ ...LicorData, restaurante: e })}
                        >
                            <Option value="Piccola Stella">Piccola Stella</Option>
                            <Option value="Turin Anivo">Turin Anivo</Option>
                            <Option value="Notte Di Fuoco">Notte Di Fuoco</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>

                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setLicorData({ ...LicorData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateLicor}>
                    Actualizar Licor
                </Button>
            </Form.Item>
        </Form>
    )
}