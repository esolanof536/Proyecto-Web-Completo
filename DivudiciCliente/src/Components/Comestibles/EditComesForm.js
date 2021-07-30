import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Form, Input, notification, Select } from "antd";
import { updateComesApi } from "../../Api/Sistema/comestibles";
import { UserOutlined, NumberOutlined } from '@ant-design/icons';


export default function EditComesForm(props) {
    const { comes, setIsVisibleModal, setReloadComes } = props;
    const [ComesData, setComesData] = useState({
        nombre: comes.nombre,
        cantidad: comes.cantidad,
        tipo: comes.tipo,
        marca: comes.marca,
        clase: comes.clase,
        linea: comes.lineas
    })

    const updateComes = e => {
        e.preventDefault();
        let ComesUpdate = ComesData;

        if (!ComesUpdate.nombre || !ComesUpdate.cantidad || !ComesUpdate.tipo || !ComesUpdate.marca || !ComesUpdate.clase || !ComesUpdate.linea) {
            openNotification('bottomRight', "Por favor rellene todos los espacios", "error")


            return;
        }

        updateComesApi(ComesUpdate, comes._id).then(result => {
            openNotification('bottomRight', result.message, "success")
            setIsVisibleModal(false)
            setReloadComes(true);
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
                ComesData={ComesData}
                setComesData={setComesData}
                updateComes={updateComes}
            />
        </div>
    )
}




function EditForm(props) {
    const { ComesData, setComesData, updateComes } = props;
    const { Option } = Select

    return (
        <Form className="form-edit">
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            onChange={e => setComesData({ ...ComesData, nombre: e.target.value })}

                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<NumberOutlined />}
                            placeholder="Cantidad"
                            onChange={e => setComesData({ ...ComesData, cantidad: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione un Tipo"
                            onChange={e => setComesData({ ...ComesData, tipo: e })}
                        >
                            <Option value="Frutas">Frutas</Option>
                            <Option value="Cacao">Cacao</Option>
                            <Option value="Carnes">Carnes</Option>
                            <Option value="Aceites">Aceites</Option>
                            <Option value="Cereales">Cereales</Option>
                            <Option value="Vegetales">Vegetales</Option>
                            <Option value="Legumbres">Legumbres</Option>
                            <Option value="Frutos Secos">Frutos Secos</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione una Clase"
                            onChange={e => setComesData({ ...ComesData, clase: e })}
                        >
                            <Option value="Fibra">Fibra</Option>
                            <Option value="Grasas">Grasas</Option>
                            <Option value="Proteínas">Proteínas</Option>
                            <Option value="Vitaminas">Vitaminas</Option>
                            <Option value="Minerales">Minerales</Option>
                            <Option value="Carbohidratos">Carbohidratos</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>

                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Seleccione una Linea"
                            onChange={e => setComesData({ ...ComesData, linea: e })}
                        >
                            <Option value="Secos">Secos</Option>
                            <Option value="Congelados">Congelados</Option>
                            <Option value="Refrigerados">Refrigerados</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>



            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" onClick={updateComes}>
                    Actualizar Comestible
                </Button>
            </Form.Item>
        </Form>
    )
}