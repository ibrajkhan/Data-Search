import MiceLo from "../src/assets/Img/M&M.png";
import BluePine from "../src/assets/Img/BluPine.png";
import { Navbar, Container, Row, Col } from "react-bootstrap";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import "./HeaderTwo.css";

const HeaderTwo = () => {
  return (
    <>
      <Navbar className="header-navbar fixed-top">
        <Container>
          <Row className="w-100 align-items-center">
            <Col xs={4} className="d-flex justify-content-start">
              <img
                src={MiceLo}
                alt="Left Logo"
                // effect="blur"
                className="header-logo"
              />
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <img
                src={BluePine}
                alt="Center Logo"
                // effect="blur"
                className="header-logo"
              />
            </Col>
            {/* <Col xs={4} className="d-flex justify-content-end">
              <LazyLoadImage
                src={Cii}
                alt="Right Logo"
                effect="blur"
                className="header-logo"
              />
            </Col> */}
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderTwo;
