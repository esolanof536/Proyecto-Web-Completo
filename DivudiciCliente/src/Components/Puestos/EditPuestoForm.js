import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updatePuestoApi } from "../../Api/puestos";
import { UserOutlined, DollarOutlined } from '@ant-design/icons';


export default function EditPuestoForm(props) {
    const { puesto, setIsVisibleModal, setReloadPuesto } = props;
    const [PuestoData, setPuestoData] = useState({
        nombre: puesto.nombre,
        internoExterno: puesto.internoExterno,

    })

    const updatePuesto = e => {
        e.preventDefault();
        let PuestoUpdate = PuestoData;

        if (!PuestoUpdate.nombre || !PuestoUpdate.internoExterno) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updatePuestoApi(PuestoUpdate, puesto._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadPuesto(true);
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
                PuestoData={PuestoData}
                setPuestoData={setPuestoData}
                updatePuesto={updatePuesto}
            />
        </div>
    )
}




function EditForm(props) {
    const { PuestoData, setPuestoData, updatePuesto } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setPuestoData({ ...PuestoData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un si es Interno o Externo  "
                            onChange={e => setPuestoData({ ...PuestoData, internoExterno: e })}
                        >
                            <Option value="Interno">Interno</Option>
                            <Option value="Externo">Externo</Option>

                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updatePuesto}>
                    Actualizar Puesto
                </Button>
            </Form.Item>
        </Form>
    )
}