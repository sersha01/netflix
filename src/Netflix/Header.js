import 'bootstrap/dist/css/bootstrap.min.css'
import {  Row, Col } from 'react-bootstrap'


function Header() {
    return(
        <Row className='headerUp m-0'>
            <Col xs='12' className='p-5 d-flex justify-content-between'>
                <div><img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' className='logo' /></div>
                <div><img alt='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' className='avathar' /></div>
            </Col>
        </Row>
    )
}

export default Header