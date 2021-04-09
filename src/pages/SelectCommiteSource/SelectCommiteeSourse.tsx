import React,{useState} from 'react';
import './SelectCommiteSource.scss';
import {Row,Col, Radio, Menu, Button} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import {  Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Header } from '../HeaderPage/Header';
const { SubMenu } = Menu;

const SelectSource=()=>{
      const  handleClick =(e:any) => {
          console.log('click ', e);
        };
    
    const [value, setValue] =useState(1);
    const onChange = (e:any) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const columns:any = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        width: '15vw',
      },
      {
        title: 'Last Logged in',
        dataIndex: 'lastLoggedIn',
        width: '18vw',
      },
      {
        title: 'Last Logged out',
        dataIndex: 'lastLoggedOut',
        width: '18vw',
      },
      {
        title: 'Sync Source',
        dataIndex: 'syncSourse',
        width: '13vw',
      },
      {
        title: 'Committee Edited',
        dataIndex: 'Committeedited',
        width: '20vw',
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: '18vw',
      },
    ];
    const data = [
      {
        key: '1',
        name: <div className="Employee_Name">Patterson, Jim</div>,
        lastLoggedIn: '3pm GMT 5.00+ 10-22-2021',
        lastLoggedOut: '6pm GMT 5.00+ 10-22-2021',
        syncSourse: 'Sheety.com',
        Committeedited: 'Accountability & administartive Review',
        actions: <div><div><span className="staff_text">Staff</span> Scotr,Herbstrmen Editied </div>
        <div><span className="staff_text">Staff</span>  Scotr,Herbstrmen Editied</div>
        <div> <span className="staff_text">Staff</span> Scotr,Herbstrmen Editied</div>
        <div> <span className="member_text">Member</span>  Scotr,Herbstrmen Editied</div>
         <div><span className="member_text">Member</span>  Scotr,Herbstrmen Editied</div>
        </div>
      },
      {
        key: '2',
        name: <div className="Employee_Name">Patterson, Jim</div>,
        lastLoggedIn: '3pm GMT 5.00+ 10-22-2021',
        lastLoggedOut: '6pm GMT 5.00+ 10-22-2021',
        syncSourse: 'Sheety.com',
        Committeedited: 'Accountability & administartive Review',
        actions: <div><div><span className="staff_text">Staff</span> Scotr,Herbstrmen Editied </div>
        <div><span className="staff_text">Staff</span>  Scotr,Herbstrmen Editied</div>
        <div> <span className="staff_text">Staff</span> Scotr,Herbstrmen Editied</div>
        <div> <span className="member_text">Member</span>  Scotr,Herbstrmen Editied</div>
         <div><span className="member_text">Member</span>  Scotr,Herbstrmen Editied</div>
        </div>
      },
    ];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a >1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a >2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
    return(
<div>
<Header/>
    <Row align='middle' justify='center'>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
       <Row className='select_source_heading'>
           <h3 className='select_text'>Select a source to manage committees</h3>
       </Row>
       {/* //....................First-Row...................// */}
       <Row className="first_main_row" >
           {/* ...first-col-row */}

           <Col>
           <Row  justify='center' >
       <Radio.Group onChange={(e)=>onChange(e)} value={value}>
      <Radio value={1}></Radio>
    </Radio.Group>
    <h5 className='Sheety_before_dropdown_text'>Sheety.com</h5>
       <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     <span className="ant_dropdown"> Dropdown</span> <DownOutlined />
    </a>
  </Dropdown>
      </Row>
      </Col>

        {/* ...second-col-row */} 
      <Col className="first_row_second_col">
           <Row justify='center'>
       <Radio.Group onChange={(e)=>onChange(e)} value={value}>
       <Radio value={2}></Radio>
    </Radio.Group>
    <h5 className='Sheety_before_dropdown_text'>Daily PDF</h5>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <span className="ant_dropdown"> Dropdown</span> <DownOutlined />
    </a>
  </Dropdown>
      </Row>
      </Col>

        {/* ...third-col-row */}
      <Col className="first_row_third_col">
           <Row justify='center'>
       <Radio.Group onChange={(e)=>onChange(e)} value={value}>
      <Radio value={3}></Radio>
    </Radio.Group>
    <h5 className='Sheety_before_dropdown_text'>Octaparse</h5>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <span className="ant_dropdown"> Dropdown</span> <DownOutlined />
    </a>
  </Dropdown>
      </Row>
      </Col>
      
      <Col>
      <Button shape='round' className='scrap_data_btn'>Compare Scrapped Data</Button>
      </Col>

       </Row>
{/* ..................Second-Row........................ */}
       <Row>
          <h3 className='Last_activity_text'> Last Activity</h3>
       </Row>
       <Row className="first_main_row">
           {/* ...first-col-row */}

           <Col>
           <Row justify='center'>
       <Radio.Group onChange={(e)=>onChange(e)} value={value}>
      <Radio value={1}></Radio>
    </Radio.Group>
    <h5 className='Sheety_before_dropdown_text'>Filtern by Employee</h5>
         <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <span className="Pattersin_Jim"> Pattersin,Jim</span><DownOutlined />
    </a>
  </Dropdown>
      </Row>
      </Col>

        {/* ...second-col-row */}
      <Col className='second_row_second_col'>
           <Row justify='center'>
       <Radio.Group onChange={(e)=>onChange(e)} value={value}>
      <Radio value={4}></Radio>
    </Radio.Group>
    <h5 className='Sheety_before_dropdown_text'>Filter by Source</h5>
         <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <span className="sheety_dropdown_text"> Sheety.com</span><DownOutlined />
    </a>
  </Dropdown>
      </Row>
      </Col>
      </Row>
      {/* ......................Table-Headings............................ */}
      <Row className="table_row_data">
        <Col>
      <Row >
        {/* <Col span={24}> */}
      <Table columns={columns}   dataSource={data} size="middle" />
      {/* <Table columns={columns} dataSource={data} /> */}
      {/* </Col> */}
      </Row>
      </Col>
           </Row>
        </Col>
    </Row>   
</div>
    );
};
export default SelectSource;