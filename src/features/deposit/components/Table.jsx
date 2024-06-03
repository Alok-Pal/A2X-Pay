import { CopyOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react';




const TableComponent = ({ data }) => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem('theme') === 'dark' ? '##1d232a' : '#fff');

  useEffect(() => {
    const handleThemeChange = () => {
      const newThemeColor = localStorage.getItem('theme') === 'dark' ? '##1d232a' : '#fff';
      setThemeColor(newThemeColor);
    };

    window.addEventListener('storage', handleThemeChange);

    // Call handleThemeChange initially to ensure state is synced with localStorage
    handleThemeChange();

    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const handleCopy = (values) => {
    navigator.clipboard.writeText(values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#1890ff', // Replace with your theme color
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#ffffff', // Replace with your theme color
        },
      }}
    >
      <Table dataSource={data} rowKey="id">
        <Column
          title="ID"
          dataIndex="id"
          key="id"
          width={"7%"}
          className="bg-white"
        />
        <Column
          title="Amount"
          dataIndex="amount"
          key="amount"
          className="bg-white"
          width={"15%"}
        />
        <Column
          title="Code"
          dataIndex="code"
          key="code"
          className="bg-white"
          width={"10%"}
        />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          className="bg-white"
          width={"10%"}
          render={(status) => (
            <Tag color={status === 'Assigned' ? 'blue' : status === 'Completed' ? 'green' : 'red'
            }>
              {status}
            </Tag>
          )}
        />
        <Column
          title="User"
          dataIndex="user"
          key="user"
          className="bg-white"
          width={"15%"}
        />
        <Column
          title="Merchant"
          dataIndex="merchant"
          key="merchant"
          className="bg-white"
          width={"10%"}
        />
        <Column
          title="Merchant Order ID"
          dataIndex="merchantOrderId"
          key="merchantOrderId"
          className="bg-white"
          width={"13%"}
          render={(value) => (
            <div className={"accessTokenDiv flex justify-center items-center gap-3"} >
              <div>{value}</div>
              <Button className={'accessTokenDiv__copyBtn px-2'} onClick={() => handleCopy(value)}>
                <CopyOutlined />
              </Button>
            </div>
          )}
        />
        <Column
          title="Paying UUID"
          dataIndex="payingUUID"
          key="payingUUID"
          className="bg-white"
          width={"15%"}
          render={(value) => (
            <div className={"accessTokenDiv flex justify-center items-center gap-3"} >
              <div>{value}</div>
              <Button className={'accessTokenDiv__copyBtn px-2'} onClick={() => handleCopy(value)}>
                <CopyOutlined />
              </Button>
            </div>
          )}
        />
        <Column
          title="Last Updated"
          dataIndex="lastUpdated"
          key="lastUpdated"
          className="bg-white"
          width={"15%"}
        />

      </Table>
    </ConfigProvider>
  );
};


export default TableComponent;
