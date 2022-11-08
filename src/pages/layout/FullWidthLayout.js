import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FullWidthLayout(props) {
  return (
    <Container fluid>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
  }
  
  export default FullWidthLayout;