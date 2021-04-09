import { Button, Col, Row,Radio } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined,CaretDownOutlined } from '@ant-design/icons';
import React from 'react';
import {Header} from '../HeaderPage/Header';
import './MemberData.scss';
import nature from '../images/nature.jpg';
const { SubMenu } = Menu;

const MemberData=()=>{
     const menu = (
          <Menu>
            <Menu.Item key="0">
              <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
          </Menu>
        );
            
    return(
       <div>
            <Header/>
      <Row className='main_row' justify='center'>
           <Col span={23}>
           <Row className='first_row_class' align='middle'>
                <div style={{display:'flex'}} className='text_div'>
                    <div className='orange_div'></div>
                    <p className="first_row_text">Comitee mismatch</p>
                    <div className='blue_div'></div>
                    <p className="first_row_text">Member mismatch</p>
                    <div className='green_div'></div>
                    <p className="first_row_text">staff mismatch</p>
                </div>
           </Row>
           <Row className='second_row' justify='center' >
                <Col span={12}>
                     <h2 className='sheety_text'>Sheety.Co</h2>
                </Col>
                <Col span={12}>
                <h2 className='guvbuddy'>Guv Buddy</h2>
                <Button className='commit_btn' shape='round'>Comit on guvbuddy</Button>
                </Col>
           </Row>
           <Row >
                <Col span={12} className="commite_texts_col">
                     <Row className='sheety_div'>
                     <input type='radio' className='radio_input_first_row'/>
                          <Col className='first_pink_row_col'>
                          <h3><span className='pink_div_color_text1'>COMMITTE:</span> </h3>
                          <h5><span className='pink_div_color_text'>Branch</span></h5>
                          <h5><span className='pink_div_color_text'>Committee type</span></h5>
                          <h5><span className='pink_div_color_text'>Meets</span></h5>
                          <h5><span className='pink_div_color_text'>Office</span></h5>
                          <h5><span className='pink_div_color_text'>Phone Number</span> </h5>
                          <h5><span className='pink_div_color_text'>Fax Number</span> </h5>
                          </Col>
                          <Col  xs={24} sm={15} lg={15} xl={18} xxl={19} className='first_pink_row_col'>
                          <h3 className="pink_div_text1">Accountability & Administrative Review</h3>
                          <h5 className="pink_div_text">State Assembly Standing Committee</h5>
                          <h5 className="pink_div_text_border"> Standing</h5>
                          <h5 className="pink_div_text">9:30 am, 1st , 2nd, & 4th Thursday, RM 4203</h5>
                          <h5 className="pink_div_text"> RM 305</h5>
                          <h5 className="pink_div_text_border_num"> 123-456789</h5>
                          <h5 className="pink_div_text"> 123-456-789-0 </h5>
                          </Col>
                          <Col  className='three_dot_divs'>
                    <div className='orange1_div'></div>
                    <div className='blue1_div'></div>
                    <div className='green1_div'></div>
                               </Col>
                     </Row>
                     <div className="side_border_row_data_row">
                          <Row align='middle' className="ant-dropdown-link2">
                              
                          {/* <CaretDownOutlined className='drop_down_icon' /> */}
                          <svg className='drop_down_icon'  width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="#2F80ED"/>
</svg>
                          <span className="ant_dropdown2"> Member</span> 

                        
                     {/* <Dropdown overlay={menu} trigger={['click']}>
                     <a className="ant-dropdown-link2" onClick={e => e.preventDefault()}>
                   <DownOutlined />
                       </a>
                        </Dropdown> */}
                
                        </Row>
                     <Row className="data_record_div" align='middle'>
                          <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>

                     </Row>
                     <Row className="data_record_div" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text1">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                     </Row>
                     <Row className="data_record_div" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text1">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                     </Row>
                     <Row align='middle' className="ant-dropdown-link2">
                              
                          {/* <CaretDownOutlined className='drop_down_icon2'/> */}
                          <svg className='drop_down_icon2' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="#27AE60"/>
</svg>
                          <span className="ant_dropdown2_staff">Staff</span> 

                        
                     {/* <Dropdown overlay={menu} trigger={['click']}>
                     <a className="ant-dropdown-link2" onClick={e => e.preventDefault()}>
                   <DownOutlined />
                       </a>
                        </Dropdown> */}
                
                        </Row>
                     <Row className="data_record_div_third" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text2">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text2">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                         </Row>
                         </div>
                         <Row className="data_record_div_end" align='middle'>
                         <Col xs={24} sm={2} lg={2} xl={1} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={4} lg={3} xl={3} xxl={3}>
                     <h5><span className='pink_div_color_text2'>COMMITTEE:</span></h5>
                     </Col>
                     <Col xs={24} sm={16} lg={18} xl={19} xxl={18}>
                     <h3 className="agri_text">Agriculture</h3>
                    
                     </Col>
                     <Col>
                     <div className='agri_text_right_box_div'>

                      </div>
                     </Col>
                    
                         </Row>
                         <Row className="data_record_div_end" align='middle' >
                       <Col xs={24} sm={2} lg={2} xl={1} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={4} lg={3} xl={3} xxl={3}>
                     <h5><span className='pink_div_color_text2'>COMMITTEE:</span></h5>
                     </Col>
                     <Col xs={24} sm={16} lg={18} xl={19} xxl={18}>
                     <h3 className="agri_text">Agri-Invasive-species
                      </h3>
                     </Col>
                      <Col>
                     <div className='agri_text_right_box_div2'>

                      </div>
                      </Col>
                     
                         </Row>
                     
                </Col>
                <Col span={12} className="commite_texts_col2">
                     <Row className='guvbuddy_div'>
                          <input type='radio' className='radio_input_first_row'/>
                          <Col className='first_pink_row_col'>
                          <h3><span className='pink_div_color_text1'>COMMITTE:</span> </h3>
                          <h5><span className='pink_div_color_text'>Branch</span></h5>
                          <div><h5><span className='pink_div_color_text'>Committee type</span></h5></div>
                          <h5><span className='pink_div_color_text'>Meets</span></h5>
                          <h5><span className='pink_div_color_text'>Office</span></h5>
                          <h5><span className='pink_div_color_text'>Phone Number</span> </h5>
                          <h5><span className='pink_div_color_text'>Fax Number</span> </h5>
                          </Col>
                          <Col xs={24} sm={15} lg={15} xl={18} xxl={19} className='first_pink_row_col'>
                          <h3 className="pink_div_text2">Accountability & Administrative Review</h3>
                          <h5 className="pink_div_text">State Assembly Standing Committee</h5>
                          <h5 className="pink_div_text_border"> Standing2</h5>
                          <h5 className="pink_div_text">9:30 am, 1st , 2nd, & 4th Thursday, RM 4203</h5>
                          <h5 className="pink_div_text"> RM 305</h5>
                          <h5 className="pink_div_text_border_num"> 123-456789</h5>
                          <h5 className="pink_div_text"> 123-456-789-0 </h5>
                          </Col>
                          <div style={{display:'flex'}} className='three_dot_divs'>
                    <div className='orange1_div'></div>
                    <div className='blue1_div'></div>
                    <div className='green1_div'></div>
                               </div>
                     </Row>
                     <div className="side_border_row_data_row2">
                     <Row align='middle' className="ant-dropdown-link3">
                              
                              {/* <CaretDownOutlined  className='drop_down_icon'/> */}
                              <svg className='drop_down_icon'  width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="#2F80ED"/>
</svg>
                              <span className="ant_dropdown2"> Member</span> 
    
                            
                         {/* <Dropdown overlay={menu} trigger={['click']}>
                         <a className="ant-dropdown-link2" onClick={e => e.preventDefault()}>
                       <DownOutlined />
                           </a>
                            </Dropdown> */}
                    
                            </Row>
                     <Row className="data_record_div2" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>

                     </Row>
                     <Row className="data_record_div2" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text1">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                     </Row>
                     <Row className="data_record_div2" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text1">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                     </Row>
                     <Row align='middle' className="ant-dropdown-link3">
                              
                              {/* <CaretDownOutlined className='drop_down_icon2'/> */}
                              <svg className='drop_down_icon2' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="#27AE60"/>
</svg>


                              <span className="ant_dropdown2_staff">Staff</span> 

    
                            
                         {/* <Dropdown overlay={menu} trigger={['click']}>
                         <a className="ant-dropdown-link2" onClick={e => e.preventDefault()}>
                       <DownOutlined />
                           </a>
                            </Dropdown> */}
                    
                            </Row>
                     <Row className="data_record_div2_third" align='middle'>
                     <Col xs={24} sm={2} lg={2} xl={2} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={2} xxl={2}>
                     <img className="img"  src={nature}/>
                     </Col>
                     <Col xs={24} sm={8} lg={6} xl={6} xxl={6}>
                     <h3 className="patterson_text2">Patterson,Jim</h3>
                     </Col>
                     <Col xs={24} sm={3} lg={4} xl={4} xxl={4}>
                     <h3 className="chair_text2">Chair</h3>
                     </Col>
                     <Col xs={24} sm={2} lg={3} xl={3} xxl={3}>
                     <h3 className="D_text">(D)</h3>
                     </Col>
                     <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
                     <h3 className='state_assembly_text'>State Assembly</h3>
                     </Col>
                         </Row>
                         </div>
                         <Row className="data_record_div_end2" align='middle'>
                         <Col xs={24} sm={2} lg={2} xl={1} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={4} lg={3} xl={3} xxl={3}>
                     <h5><span className='pink_div_color_text2'>COMMITTEE:</span></h5>
                     </Col>
                     <Col xs={24} sm={16} lg={18} xl={19} xxl={18}>
                     <h3 className="agri_text">Agriculture</h3>
                    
                     </Col>
                     <Col>
                     <div className='agri_text_right_box_div'>

                      </div>
                     </Col>
                    
                         </Row>
                         <Row className="data_record_div_end2" align='middle' >
                         <Col xs={24} sm={2} lg={2} xl={1} xxl={2}>
                     <input type='radio' className='radio_input'/>
                     </Col>
                     <Col xs={24} sm={4} lg={3} xl={3} xxl={3}>
                     <h5><span className='pink_div_color_text2'>COMMITTEE:</span></h5>
                     </Col>
                     <Col xs={24} sm={16} lg={18} xl={19} xxl={18}>
                     <h3 className="agri_text">Agri-Invasive-species
                      </h3>
                     </Col>
                      <Col>
                     <div className='agri_text_right_box_div2'>

                      </div>
                      </Col>
                     
                         </Row>
                     
                </Col>
               </Row>
          
           </Col>
      </Row>

       </div>
    )
}
export default MemberData;