import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateUMApi } from "../../Api/Seguridad/unidadM";
import { UserOutlined, AlignLeftOutlined, PercentageOutlined, ColumnHeightOutlined } from '@ant-design/icons';


export default function EditUMForm(props) {
    const { UM, setIsVisibleModal, setReloadUM } = props;
    const [UMData, setUMData] = useState({
        nombre: UM.nombre,
        escala: UM.escala,
        detalle: UM.detalle,
        simbologia: UM.simbologia,
        simbolo: UM.simbolo
    })

    const updateUM = e => {
        e.preventDefault();
        let UMUpdate = UMData;

        if (!UMUpdate.nombre || !UMUpdate.escala || !UMUpdate.detalle || !UMUpdate.simbologia || !UMUpdate.simbolo) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateUMApi(UMUpdate, UM._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadUM(true);
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
                UMData={UMData}
                setUMData={setUMData}
                updateUM={updateUM}
            />
        </div>
    )
}




function EditForm(props) {
    const { UMData, setUMData, updateUM } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setUMData({ ...UMData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<ColumnHeightOutlined />}
                            placeholder="Escala"
                            onChange={e => setUMData({ ...UMData, escala: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Detalle"
                            onChange={e => setUMData({ ...UMData, detalle: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Simbología"
                            onChange={e => setUMData({ ...UMData, simbologia: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PercentageOutlined />}
                            placeholder="Simbolo"
                            onChange={e => setUMData({ ...UMData, simbolo: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateUM}>
                    Actualizar Unidad de Medida
                </Button>
            </Form.Item>
        </Form>
    )
}