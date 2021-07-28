import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateMarcaApi } from "../../Api/Sistema/marcas";
import { PhoneOutlined, AlignLeftOutlined, UserOutlined } from '@ant-design/icons';


export default function EditMarcaForm(props) {
    const { marca, setIsVisibleModal, setReloadMarca } = props;
    const [marcaData, setMarcaData] = useState({
        nombre: marca.nombre,
        nombreEmpesa: marca.nombreEmpesa,
        detalleEmpresa: marca.detalleEmpresa,
        telefono: marca.telefono,
        descripcion: marca.descripcion
    })

    const updateMarca = e => {
        e.preventDefault();
        let marcaUpdate = marcaData;



        updateMarcaApi(marcaUpdate, marca._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadMarca(true);
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
                marcaData={marcaData}
                setMarcaData={setMarcaData}
                updateMarca={updateMarca}
            />
        </div>
    )
}




function EditForm(props) {
    const { marcaData, setMarcaData, updateMarca } = props;

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setMarcaData({ ...marcaData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre de la Empresa"
                            onChange={e => setMarcaData({ ...marcaData, nombreEmpesa: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<AlignLeftOutlined />}
                            placeholder="Detalle de la Empresa"
                            onChange={e => setMarcaData({ ...marcaData, detalleEmpresa: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Teléfono"
                            onChange={e => setMarcaData({ ...marcaData, telefono: e.target.value })}

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
                            onChange={e => setMarcaData({ ...marcaData, descripcion: e.target.value })}

                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateMarca}>
                    Actualizar Marca
                </Button>
            </Form.Item>
        </Form>
    )
}