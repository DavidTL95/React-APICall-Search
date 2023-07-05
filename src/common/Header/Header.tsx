
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {

    const navigate = useNavigate();

  return (
    <Container className='d-flex justify-content-center'>
        <Row>
            {/* <Col>
                <div onClick={() => navigate("/")}>REACT</div>
            </Col> */}
            <Col>
                <div className='login' onClick={() => navigate("/login")}>LOGIN</div>
            </Col>
        </Row>
    </Container>
  );
}

export default Header