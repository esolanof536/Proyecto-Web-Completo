import React, { useState } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Modal from "../Modal";
import EditBuffetForm from "./EditBuffetForm";
import { deleteBuffetApi } from "../../Api/buffet";

export default function ListaBuffet(props) {
    const { buffets, setReloadBuffet } = props
    const [viewBuffets, setViewBuffets] = useState(true);

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);


    return (
        <>
            <div>
                {viewBuffets ? <Buffets buffets={buffets} setIsVisibleModal={setIsVisibleModal} setModalTitle={setModalTitle} setModalContent={setModalContent}
                    setReloadBuffet={setReloadBuffet} /> : <Buffets />}
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

function Buffets(props) {
    const { buffets, setIsVisibleModal, setModalTitle, setModalContent, setReloadBuffet } = props;

    const editBuffet = espe => {
        setIsVisibleModal(true);
        setModalTitle(`Editar ${espe.nombre}`);
        setModalContent(<EditBuffetForm espe={espe} setIsVisibleModal={setIsVisibleModal} setReloadBuffet={setReloadBuffet} />);
    }

    return (
        <div>
            <br />
            <BuffetListTable userData={buffets} editFunction={editBuffet} />
        </div>

    )
}

class BuffetListTable extends React.Component {
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
            deleteBuffetApi(key)
        );
        window.location.reload()
    }

    render() {
        const columns = [
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                key: 'codigo',
                width: '20%',
                ...this.getColumnSearchProps('codigo'),
            },
            {
                title: 'Nombre',
                dataIndex: 'nombre',
                key: 'nombre',
                width: '15%',
                ...this.getColumnSearchProps('nombre'),
            },
            {
                title: 'Precio',
                dataIndex: 'precio',
                key: 'precio',
                width: '15%',
                ...this.getColumnSearchProps('precio'),
            },
            {
                title: 'Tipo',
                dataIndex: 'tipo',
                key: 'tipo',
                width: '15%',
                ...this.getColumnSearchProps('tipo'),
            },
            {
                title: 'Unidad de Medida',
                dataIndex: 'unidadMedida',
                key: 'unidadMedida',
                width: '15%',
                ...this.getColumnSearchProps('unidadMedida'),
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

