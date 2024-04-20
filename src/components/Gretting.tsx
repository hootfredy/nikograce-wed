import { styled } from "@stitches/react";
import { Col, Divider, Image, Row } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "4.5vh",
  fontWeight: "normal",
  fontFamily: '"Calligraffitti", cursive',
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "4vh",
  fontWeight: "normal",
  fontFamily: '"Calligraffitti", cursive',
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

const GroomBrideSubtitle = styled("span", {
  fontSize: "2vh",
  fontWeight: "normal",
  fontFamily: '"Calligraffitti", cursive',
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Yang Berbahagia</Title>
      </Divider>
    
      <Row justify="start" align="top">
        <Col xs={{ offset: 2, span: 8}} md={{ offset:8, span: 8}}>
          <Image
            width={'100%'}
            src="/assets/GRACE_EDITED.png"
          />
        </Col>
        <Col xs={{ offset: 1, span: 12}} md={{ offset: 0, span: 24}}>
          <GroomBride>
            The Bride<br/>
            {data?.bride?.name}
            <br/>
            <GroomBrideSubtitle>
              Anak kedua dari tiga bersaudara <br/>
              {data?.bride?.parents?.mother?.name} dan {data?.bride?.parents?.father?.name}
            </GroomBrideSubtitle>
          </GroomBride>
        </Col>
      </Row>
      <Divider plain></Divider>
      <Row justify="end" align="top">
      <Col xs={{ pull: 2, span: 12}} md={{ pull: 0, span: 24}}>
          <GroomBride>
            The Groom<br/>
            {data?.groom?.name} <br/>
            <GroomBrideSubtitle>
              Anak kedua dari empat bersaudara <br/>
              {data?.groom?.parents?.mother?.name} dan {data?.groom?.parents?.father?.name}
            </GroomBrideSubtitle>
          </GroomBride>
        </Col>
        <Col xs={{ pull: 2, span: 8}} md={{ pull:8, span: 8}}>
          <Image
            width={'100%'}
            src="/assets/NIKO_EDITED.png"
          />
        </Col>
        
      </Row>

    </Wrapper>
  );
}
