import React from 'react'
import {Row,Col} from 'antd';
import './ConfermChangesPage.scss';
const ConfermChangesPage = () => {
    return (
        <div>
            <Row justify='center' align='middle' className="container_row">
                <svg className='arrow_svg' width="148" height="185" viewBox="0 0 148 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.644 160.076C-25.8772 53.9693 78.2399 9.81422 140.364 1C140.364 3.79817 141.691 10.8216 147 16.5298C16.4848 40.706 45.0581 118.663 75.6591 154.619L95.0152 123.56L87.8258 184L1 154.619C3.76515 150.142 18.3652 144.966 54.644 160.076Z" fill="#C4C4C4" stroke="black"/>
</svg>
                <Col span={14} className="container_col">
               
              <Row className='first_rowss' justify="center" align='middle'>
             <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>Comitte Nam</h5>
             <h5>Previous Detail</h5>
             <h5>123-0000000</h5>
             </Col>
             <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>privious Member</h5>
             <h5>John Doe</h5>
             <h5>Chair</h5>
             </Col>
             <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>Old Member Position</h5>
             <h5>John Doe</h5>
             <h5>Chair</h5>
             </Col>
             <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>Old Member</h5>
             <h5>XYZ</h5>
             <h5>Member</h5>
             </Col>
              </Row>
             <h5 className='carols'>Carols Update</h5>

              <Row className='second_rowss' justify="center" align='middle'>
              <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>Comitte Nam</h5>
             <h5>Changed Detailes</h5>
             <h5>Standing2</h5>
             <h5>123-0000000</h5>

             </Col>
             <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
             <h5>New Members</h5>
             <h5>Kathryn</h5>
             <h5>Chair</h5>
             </Col>
             <Col xs={24} sm={7} lg={7} xl={7} xxl={7}>
             <h5>Update Member Position</h5>
             <h5>John Doe</h5>
             <h5>Vice-Chair</h5>
             </Col>
             <Col xs={24} sm={6} lg={6} xl={6} xxl={6}>
             <h5>Removed Member</h5>
             <h5 className="xyz">XYZ</h5>
             <h5 className='members_text'>Member</h5>
             </Col>
               </Row>
             <h5 className='bruce_text'>Bruce Update</h5>

            </Col>
            </Row>
            
        </div>
    )
}

export default ConfermChangesPage
