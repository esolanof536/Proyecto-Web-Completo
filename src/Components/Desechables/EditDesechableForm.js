import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateDesechableApi } from "../../Api/Sistema/desechables";
import { NumberOutlined, AlignLeftOutlined, UserOutlined } from '@ant-design/icons';


export default function EditDesechableForm(props) {
    const { desechable, setIsVisibleModal, setReloadDesechable } = props;
    const [conseData, setDesechableData] = useState({
        nombre: desechable.nombre,
        cantidad: desechable.cantidad,
        descripcion: desechable.descripcion
    })

    const updateDesechable = e => {
        e.preventDefault();
        let desechableUpdate = conseData;



        updateDesechableApi(desechableUpdate, desechable._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadDesechable(true);
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
                conseData={conseData}
                setDesechableData={setDesechableData}
                updateDesechable={updateDesechable}
            />
        </div>
    )
}




function EditForm(props) {
    const { conseData, setDesechableData, updateDesechable } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setDesechableData({ ...conseData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setDesechableData({ ...conseData, cantidad: e.target.value })}
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
                            onChange={e => setDesechableData({ ...conseData, descripcion: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateDesechable}>
                    Actualizar Desechable/Empaque
                </Button>
            </Form.Item>
        </Form>
    )
}