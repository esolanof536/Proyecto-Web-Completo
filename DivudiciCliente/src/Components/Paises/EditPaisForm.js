import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updatePaisApi } from "../../Api/Seguridad/paises";
import { FlagOutlined } from '@ant-design/icons';


export default function EditPaisForm(props) {
    const { paises, setIsVisibleModal, setReloadPais } = props;
    const [paisesData, setPaisesData] = useState({
        nombre: paises.nombre
    })

    const updatePaises = e => {
        e.preventDefault();
        let paisesUpdate = paisesData;

        if (!paisesUpdate.nombre) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updatePaisApi(paisesUpdate, paises._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadPais(true);
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
                paisData={paisesData}
                setPaisData={setPaisesData}
                updatePais={updatePaises}
            />
        </div>
    )
}




function EditForm(props) {
    const { paisData, setPaisData, updatePais } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FlagOutlined />}
                            placeholder="Nombre"
                            onChange={e => setPaisData({ ...paisData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updatePais}>
                    Actualizar País
                </Button>
            </Form.Item>
        </Form>
    )
}