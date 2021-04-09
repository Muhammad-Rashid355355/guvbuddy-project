import React from 'react'
import './DataRecord.scss';
import { CheckCircleFilled } from '@ant-design/icons';
import { Result, Button, Row, Col } from 'antd';

const DataRecord = () => {
    return (
        <div >
            <Row justify='center' align='middle' >
                <Col span={12} className="main_col" >
                <div className="result_col"> 
                <Row justify='center'>
                <CheckCircleFilled className='tick_svg' />

                </Row>
              <Row  justify='center' className="Row_one">
                  <Col>
                  <span className='ant-result-title'>           
                   Data record update succesfuly on
                    </span>
                  </Col>
              </Row>
    <Row justify='center'>
        <Col>
        <span className='ant-result-subtitle'>
             GOVBUDDY !
    </span>
        </Col>
    </Row>
   
    
    </div>  
           </Col>
           </Row>
       <Row className="second_rows">

       </Row>
           </div>
    )
}

export default DataRecord
