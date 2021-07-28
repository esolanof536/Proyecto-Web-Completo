import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

export default function ListCajas(props) {
    const { cajas } = props
    const [viewCajas, setViewCajas] = useState(true);

    return (
        <div className="List-users">

            {viewCajas ? <Cajas cajas={cajas} /> : <Cajas />}

        </div>
    )
}

function Cajas(props) {
    const { cajas } = props;
    // console.log(props.UnidadesMedida);
    // console.log(props);
    return (
        <div>
            <br />
            <CajasListTable userData={cajas} />

        </div>

    )
}

class CajasListTable extends React.Component {
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
                title: 'Tipo',
                dataIndex: 'tipo',
                key: 'tipo',
                width: '10%',
                ...this.getColumnSearchProps('tipo'),
            },
            {
                title: 'Apertura Caja',
                dataIndex: 'aptCaja',
                key: 'aptCaja',
                width: '15%',
                ...this.getColumnSearchProps('aptCaja'),
            },
            {
                title: 'Cierre Caja',
                dataIndex: 'cieCaja',
                key: 'cieCaja',
                width: '15%',
                ...this.getColumnSearchProps('cieCaja'),
            },
            {
                title: 'Entrada Dinero',
                dataIndex: 'entDinero',
                key: 'entDinero',
                width: '15%',
                ...this.getColumnSearchProps('entDinero'),
            },
            {
                title: 'Fecha',
                dataIndex: 'fecha',
                key: 'fecha',
                width: '10%',
                ...this.getColumnSearchProps('fecha'),
            },
            {
                title: 'Restaurante',
                dataIndex: 'restaurante',
                key: 'restaurante',
                width: '20%',
                ...this.getColumnSearchProps('restaurante'),
            },
            {
                title: 'Descripcion',
                dataIndex: 'descripcion',
                key: 'descripcion',
                width: '40%',
                ...this.getColumnSearchProps('descripcion'),
            }


        ];
        return <Table columns={columns} dataSource={this.props.userData} />;
    }
}

