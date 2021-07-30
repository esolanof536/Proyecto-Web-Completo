import React, { useState } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Modal from "../Modal";
import EditDesechableForm from "./EditDesechableForm";
import { deleteDesechableApi } from "../../Api/Sistema/desechables"


export default function ListaDesechables(props) {
    const { desechables, setReloadDesechable } = props
    const [viewDesechables, setViewDesechables] = useState(true);

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);


    return (
        <>
            <div>
                {viewDesechables ? <Desechable desechables={desechables} setIsVisibleModal={setIsVisibleModal} setModalTitle={setModalTitle} setModalContent={setModalContent}
                    setReloadDesechable={setReloadDesechable} /> : <Desechable />}
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

function Desechable(props) {
    const { desechables, setIsVisibleModal, setModalTitle, setModalContent, setReloadDesechable } = props;

    const editDesechable = dese => {
        setIsVisibleModal(true);
        setModalTitle(`Editar ${dese.nombre}`);
        setModalContent(<EditDesechableForm desechable={dese} setIsVisibleModal={setIsVisibleModal} setReloadDesechable={setReloadDesechable} />);
    }

    return (
        <div>
            <br />
            <DesechableListTable userData={desechables} editFunction={editDesechable} />

        </div>

    )
}

class DesechableListTable extends React.Component {
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
            deleteDesechableApi(key)
        );
        window.location.reload()

    };

    render() {
        const columns = [
            {
                title: 'Codigo',
                dataIndex: 'codigo',
                key: 'codigo',
                width: '15%',
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
                title: 'Cantidad',
                dataIndex: 'cantidad',
                key: 'cantidad',
                width: '15%',
                ...this.getColumnSearchProps('cantidad'),
            },
            {
                title: 'Restaurante',
                dataIndex: 'restaurante',
                key: 'restaurante',
                width: '15%',
                ...this.getColumnSearchProps('restaurante'),
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
        return <Table columns={columns} dataSource={this.props.userData} />;
    }
}

