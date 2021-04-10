import {Header} from '../HeaderPage/Header';
import React from 'react'
import './OverViewPage.scss';
import { Button, Col, Row,Radio } from 'antd';


const OverViewPage = () => {
    return (
        <div>
            <Header/>
         <Row className='main_Row' justify='center'>
             <Col className="main_row_col" span={23}>
<Row className='heading_row'>
    <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
    <h3>Committee Name</h3>
    </Col>
    <Col xs={24} sm={4} lg={4} xl={4} xxl={5}>
    <h3>Member</h3>
    </Col>
    <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
    <h3>Member Postion</h3>
    </Col>
    <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
    <h3>Removed Members</h3>
    </Col>
    <Col xs={24} sm={5} lg={5} xl={3} xxl={3}>
    <h3>updated By</h3>
    </Col>
</Row>

<Row className="first_Data_Row">
    <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5>Accountability & Administrative</h5>
<h5>Review</h5>
<h5>Standing 2</h5>
<h5>123-0000000</h5>
</Col>
<Col xs={24} sm={4} lg={4} xl={4} xxl={5}>
<h5>John Dow</h5>
<h5>Dow</h5>
</Col >
<Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5>Chair</h5>
<h5>r</h5>
</Col>
<Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5>Alexis</h5>
<h5>s</h5>
</Col>
<Col xs={24} sm={3} lg={3} xl={3} xxl={3}>
<h5 className="courlos_pete_txt">courlos Peter</h5>
<h5 className="courlos_pete_txt">Peter</h5>

</Col>


<hr className='hrTag'/>  
<svg className="Arow_svg" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.0182 0.882744C3.03594 0.882744 2.09391 1.31258 1.39934 2.07769C0.704778 2.8428 0.314575 3.88052 0.314575 4.96255L0.314575 29.4414C0.314575 30.5234 0.704778 31.5611 1.39934 32.3262C2.09391 33.0913 3.03594 33.5212 4.0182 33.5212H26.24C27.2222 33.5212 28.1643 33.0913 28.8588 32.3262C29.5534 31.5611 29.9436 30.5234 29.9436 29.4414V4.96255C29.9436 3.88052 29.5534 2.8428 28.8588 2.07769C28.1643 1.31258 27.2222 0.882744 26.24 0.882744L4.0182 0.882744ZM16.055 10.0623V21.8795L20.029 17.4998C20.1151 17.405 20.2173 17.3297 20.3298 17.2784C20.4422 17.2271 20.5628 17.2007 20.6845 17.2007C20.8063 17.2007 20.9268 17.2271 21.0393 17.2784C21.1518 17.3297 21.254 17.405 21.3401 17.4998C21.4262 17.5946 21.4945 17.7072 21.541 17.8311C21.5876 17.955 21.6116 18.0878 21.6116 18.2219C21.6116 18.356 21.5876 18.4888 21.541 18.6127C21.4945 18.7366 21.4262 18.8492 21.3401 18.944L15.7846 25.0637C15.6986 25.1587 15.5964 25.2341 15.484 25.2855C15.3715 25.3369 15.2509 25.3634 15.1291 25.3634C15.0073 25.3634 14.8867 25.3369 14.7742 25.2855C14.6617 25.2341 14.5596 25.1587 14.4735 25.0637L8.91811 18.944C8.83202 18.8492 8.76373 18.7366 8.71714 18.6127C8.67055 18.4888 8.64657 18.356 8.64657 18.2219C8.64657 18.0878 8.67055 17.955 8.71714 17.8311C8.76373 17.7072 8.83202 17.5946 8.91811 17.4998C9.09197 17.3083 9.32777 17.2007 9.57365 17.2007C9.69539 17.2007 9.81595 17.2271 9.92843 17.2784C10.0409 17.3297 10.1431 17.405 10.2292 17.4998L14.2032 21.8795V10.0623C14.2032 9.7918 14.3007 9.53237 14.4744 9.34109C14.648 9.14981 14.8835 9.04235 15.1291 9.04235C15.3747 9.04235 15.6102 9.14981 15.7838 9.34109C15.9574 9.53237 16.055 9.7918 16.055 10.0623V10.0623Z" fill="#EF3F42"/>
</svg>
  
{/* <Row className="second_Data_Row"> */}
    <Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5>Accountability & Administrative</h5>
<h5>Review</h5>
<h5>Standing 2</h5>
<h5>123-0000000</h5>
</Col>
<Col xs={24} sm={4} lg={4} xl={4} xxl={5}>
<h5>Kathryn</h5>
<h5>Murphy</h5>

</Col >
<Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5>Vice</h5>
<h5>Chair</h5>
</Col>
<Col xs={24} sm={5} lg={5} xl={5} xxl={5}>
<h5 className='alexis_text'>Alexis</h5>
<h5>s</h5>

</Col>
<Col xs={24} sm={3} lg={3} xl={3} xxl={3}>
<h5 className="courlos_pete_txt">bruce</h5>
<h5 className="courlos_pete_txt">updated</h5>

</Col>
</Row> 
{/* </Row> */}
</Col>
         </Row>
        </div>
    )
}

export default OverViewPage
