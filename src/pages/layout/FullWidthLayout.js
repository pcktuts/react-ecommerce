import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ThemeProvider } from 'react-bootstrap';

function FullWidthLayout(props) {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
        <Container fluid>
          <Row>
            <Col>{props.children}</Col>
          </Row>
        </Container>
    </ThemeProvider>
  );
  }
  
  export default FullWidthLayout;