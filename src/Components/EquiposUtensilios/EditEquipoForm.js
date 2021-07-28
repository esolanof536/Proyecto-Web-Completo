import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateEquipoApi } from "../../Api/Sistema/equipos";
import { NumberOutlined, AlignLeftOutlined, UserOutlined } from '@ant-design/icons';


export default function EditEquipoForm(props) {
    const { equipo, setIsVisibleModal, setReloadEquipo } = props;
    const [conseData, setEquipoData] = useState({
        nombre: equipo.nombre,
        cantidad: equipo.cantidad,
        descripcion: equipo.descripcion
    })

    const updateEquipo = e => {
        e.preventDefault();
        let equipoUpdate = conseData;



        updateEquipoApi(equipoUpdate, equipo._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadEquipo(true);
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
                setEquipoData={setEquipoData}
                updateEquipo={updateEquipo}
            />
        </div>
    )
}




function EditForm(props) {
    const { conseData, setEquipoData, updateEquipo } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setEquipoData({ ...conseData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setEquipoData({ ...conseData, cantidad: e.target.value })}
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
                            onChange={e => setEquipoData({ ...conseData, descripcion: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateEquipo}>
                    Actualizar Equipo/Utensilio
                </Button>
            </Form.Item>
        </Form>
    )
}