import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

export default function ListRestaurante(props) {
    const { restaurante } = props
    const [viewRestaurante, setViewRestaurante] = useState(true);

    return (
        <div className="List-users">

            {viewRestaurante ? <Restaurante restaurante={restaurante} /> : <Restaurante />}

        </div>
    )
}

function Restaurante(props) {
    const { restaurante } = props;
    // console.log(props.UnidadesMedida);
    // console.log(props);
    return (
        <div>
            <br />
            <RestauranteListTable userData={restaurante} />

        </div>

    )
}

class RestauranteListTable extends React.Component {
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
                width: '10%',
                ...this.getColumnSearchProps('codigo'),
            },
            {
                title: 'Nombre',
                dataIndex: 'aptCaja',
                key: 'aptCaja',
                width: '15%',
                ...this.getColumnSearchProps('aptCaja'),
            },
            {
                title: 'Especialidad',
                dataIndex: 'especialidad',
                key: 'especialidad',
                width: '15%',
                ...this.getColumnSearchProps('especialidad'),
            },
            {
                title: 'Dirección',
                dataIndex: 'direccion',
                key: 'direccion',
                width: '15%',
                ...this.getColumnSearchProps('direccion'),
            },
            {
                title: 'Teléfono',
                dataIndex: 'telefono',
                key: 'telefono',
                width: '10%',
                ...this.getColumnSearchProps('telefono'),
            }


        ];
        return <Table columns={columns} dataSource={this.props.userData} />;
    }
}

