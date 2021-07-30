import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateConseApi } from "../../Api/Seguridad/cosnecutivos";
import { FieldNumberOutlined, AlignLeftOutlined, FontColorsOutlined } from '@ant-design/icons';


export default function EditConseForm(props) {
    const { roles, setIsVisibleModal, setReloadConse } = props;
    const [conseData, setConseData] = useState({
        descripcion: roles.descripcion,
        prefijo: roles.prefijo,
        valor: roles.valor
    })

    const updateConse = e => {
        e.preventDefault();
        let rolesUpdate = conseData;



        updateConseApi(rolesUpdate, roles._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadConse(true);
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
                conseData={conseData}
                setConseData={setConseData}
                updateConse={updateConse}
            />
        </div>
    )
}




function EditForm(props) {
    const { conseData, setConseData, updateConse } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Descripción"
                            onChange={e => setConseData({ ...conseData, descripcion: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FontColorsOutlined />}
                            placeholder="Prefijo"
                            onChange={e => setConseData({ ...conseData, prefijo: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<FieldNumberOutlined />}
                            placeholder="Valor"
                            onChange={e => setConseData({ ...conseData, valor: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>


            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateConse}>
                    Actualizar Consecutivo
                </Button>
            </Form.Item>
        </Form>
    )
}