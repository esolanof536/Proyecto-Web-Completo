import React, { useState } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Modal from "../Modal";
import EditEmpleadoForm from "./EditEmpleadoForm";
import { deleteEmpleadoApi } from "../../Api/empleado";


export default function ListEmpleados(props) {
    const { empleados, setReloadEmpleado } = props
    const [viewEmpleados, setViewEmpleados] = useState(true);


    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);


    return (
        <>
            <div>
                {viewEmpleados ? <Empleados empleados={empleados} setIsVisibleModal={setIsVisibleModal} setModalTitle={setModalTitle} setModalContent={setModalContent}
                    setReloadEmpleado={setReloadEmpleado} /> : <Empleados />}
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </>
    )
}

function Empleados(props) {
    const { empleados, setIsVisibleModal, setModalTitle, setModalContent, setReloadEmpleado } = props;

    const editEmpleado = empleado => {
        setIsVisibleModal(true);
        setModalTitle(`Editar ${empleado.nombre}`);
        setModalContent(<EditEmpleadoForm empleados={empleado} setIsVisibleModal={setIsVisibleModal} setReloadEmpleado={setReloadEmpleado} />);
    }

    return (
        <div>
            <br />
            <EmpleadosListTable userData={empleados} editFunction={editEmpleado} />
        </div>

    )
}

class EmpleadosListTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: ''
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
          </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
          </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
          </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    handleDelete = (key) => {
        const dataSource = [...this.props.userData];
        this.setState(
            deleteEmpleadoApi(key)
        );
        window.location.reload()
    }

    render() {
        const columns = [
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                key: 'codigo',
                width: '10%',
                ...this.getColumnSearchProps('codigo'),
            },
            {
                title: 'Cedula',
                dataIndex: 'cedula',
                key: 'cedula',
                width: '10%',
                ...this.getColumnSearchProps('cedula'),
            },
            {
                title: 'Nombre',
                dataIndex: 'nombre',
                key: 'nombre',
                width: '10%',
                ...this.getColumnSearchProps('nombre'),
            },
            {
                title: 'Primer Apellido',
                dataIndex: 'pApellido',
                key: 'pApellido',
                width: '10%',
                ...this.getColumnSearchProps('pApellido'),
            },
            {
                title: 'Segundo Apellido',
                dataIndex: 'sApellido',
                key: 'sApellido',
                width: '10%',
                ...this.getColumnSearchProps('sApellido'),
            },
            {
                title: 'Editar',
                key: 'action',
                width: '12.5%',
                render: (text, record) => (
                    <Space size="middle" onClick={() => this.props.editFunction(record)}>
                        <a style={{ color: "rgb(192, 0, 64" }}>Editar</a>
                    </Space>
                )
            },
            {
                title: 'Eliminar',
                dataIndex: 'operation',
                width: '20%',
                render: (_, record) =>
                    this.props.userData.length >= 1 ? (
                        <Popconfirm title="¿Seguro que desea eliminarlo?" onConfirm={() => this.handleDelete(record._id)} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                            <a style={{ color: "rgb(192, 0, 64" }}>Delete</a>
                        </Popconfirm>

                    ) : null,
            }


        ];
        return <Table columns={columns} dataSource={this.props.userData} bordered />;
    }
}

