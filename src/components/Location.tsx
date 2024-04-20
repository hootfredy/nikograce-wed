import { styled } from "@stitches/react";
import { Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "4.5vh",
  fontWeight: "bold",
  fontFamily: '"Calligraffitti", cursive',
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

const customCalendarButtonStyle = {
  display: "block",
  background: "transparent",
  padding: "10px",
  fontFamily: '"Calligraffitti", cursive',
  margin: "auto",
  width: '294px',
  boxShadow: 'none',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Urutan Acara</Title>
      </Divider>
      <Row justify={"space-around"} align={"middle"}>

        <Col md={{ span: 9}}>
          <Card
            title="Pemberkatan & Resepsi Pernikahan"
            style={{ width: "100%" }}
            hoverable
            cover={<img alt="example" src="https://cdn-image.hipwee.com/wp-content/uploads/2016/11/hipwee-cb2773a6b13409878404c9fd99e8dcf5-750x500.jpg" />}
          >
            <p>Minggu, 28 April 2024</p>
            <p>Jam 09:00 WIB - selesai</p>
            <p>Hotel Grand Mansion 2</p>
            <p>Jl. Irian No.29, Jajar, Kanigoro, Kec. Kanigoro, Kabupaten Blitar, Jawa Timur</p>
            <p><a target="_blank" href="https://g.co/kgs/S6fV5tv">Google Map</a></p>
          </Card>
        </Col>

      </Row>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}></Divider>
      <Row justify={"space-around"} align={"middle"}>
        <Col>
          <a target="_blank" style={{display: "block",
          color: '#3b3b3b',
  background: "transparent",
  padding: "10px",
  fontFamily: 'font-family: "Petrona", serif;',
  margin: "auto",
  width: '294px',
  boxShadow: 'none',
  textTransform: 'uppercase', border: '1px solid black',
  letterSpacing: '2px',}} href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240428T030000Z%2F20240428T093000Z&details=Acara%20Pemberkatan%20%3A%20Aula%20Gereja%20XXXX&location=Blitar&text=Nico%20%26%20Grace%20-%20Pernikahan">
            Simpan acara di kalenderku
          </a>
        </Col>
      </Row>
    </Wrapper>
  );
}
