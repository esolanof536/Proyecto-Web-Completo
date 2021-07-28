import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

export default function ListaClienteBarra(props) {
    const { cliBarra } = props
    const [viewCliBarra, setViewCliBarra] = useState(true);

    return (
        <div className="List-users">

            {viewCliBarra ? <CliBarra cliBarra={cliBarra} /> : <CliBarra />}

        </div>
    )
}

function CliBarra(props) {
    const { cliBarra } = props;

    return (
        <div>
            <br />
            <CliBarraListTable userData={cliBarra} />

        </div>

    )
}

class CliBarraListTable extends React.Component {
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

    render() {
        const columns = [
            {
                title: 'Código',
                dataIndex: 'codigo',
                key: 'codigo',
                width: '20%',
                ...this.getColumnSearchProps('codigo'),
            },
            {
                title: 'Nombre',
                dataIndex: 'nombreCliente',
                key: 'nombreCliente',
                width: '20%',
                ...this.getColumnSearchProps('nombreCliente'),
            },
            {
                title: 'Monto Pago',
                dataIndex: 'montoPago',
                key: 'montoPago',
                width: '20%',
                ...this.getColumnSearchProps('montoPago'),
            },
            {
                title: 'Pedidos',
                dataIndex: 'pedido',
                key: 'pedido',
                width: '30%',
                ...this.getColumnSearchProps('pedido'),
            },
            {
                title: 'Duración Barra',
                dataIndex: 'duracionBarra',
                key: 'duracionBarra',
                width: '20%',
                ...this.getColumnSearchProps('duracionBarra'),
            }



        ];
        return <Table columns={columns} dataSource={this.props.userData} />;
    }
}

