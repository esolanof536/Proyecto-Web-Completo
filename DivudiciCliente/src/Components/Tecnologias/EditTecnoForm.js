import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateTecnoApi } from "../../Api/Sistema/tecnologia";
import { UserOutlined, NumberOutlined, AlignLeftOutlined } from '@ant-design/icons';


export default function EditTecnoForm(props) {
    const { tecno, setIsVisibleModal, setReloadTecno } = props;
    const [TecnoData, setTecnoData] = useState({
        nombre: tecno.nombre,
        cantidad: tecno.cantidad,
        descripcion: tecno.descripcion,
    })

    const updateTecno = e => {
        e.preventDefault();
        let TecnoUpdate = TecnoData;

        if (!TecnoUpdate.nombre || !TecnoUpdate.cantidad || !TecnoUpdate.descripcion) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateTecnoApi(TecnoUpdate, tecno._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadTecno(true);
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
                TecnoData={TecnoData}
                setTecnoData={setTecnoData}
                updateTecno={updateTecno}
            />
        </div>
    )
}




function EditForm(props) {
    const { TecnoData, setTecnoData, updateTecno } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setTecnoData({ ...TecnoData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setTecnoData({ ...TecnoData, descripcion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setTecnoData({ ...TecnoData, cantidad: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateTecno}>
                    Actualizar Tecnología
                </Button>
            </Form.Item>
        </Form>
    )
}