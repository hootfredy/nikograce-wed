import { styled } from "@stitches/react";
import { Divider } from "antd";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  backgroundColor: "rgba(255,255,255,0.5) !important",
  position: "absolute",
  width: "100%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const VideoBackground = styled("video", {
  backgroundColor: "rgba(255,255,255,0.5) !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontFamily: '"Alex Brush", cursive',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "6vh",
  opacity: 0.65,
});

const GroomBride = styled("p", {
  fontSize: "8vh",
  fontWeight: "bold",
  fontFamily: '"Calligraffitti", cursive',
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "4.5vh",
  fontWeight: "normal",
  fontFamily: '"Calligraffitti", cursive',
  opacity: 0.65,
  marginBottom: 24,
});

const WelcomeText = styled("p", {
  fontFamily: 'font-family: "Petrona", serif;',
  margin: '20px',
})

const BeneficiaryText = styled("p", {
  fontSize: "2.5vh",
  fontFamily: 'font-family: "Petrona", serif;',
  margin: '20px',
})

type TitleProps = {
  data?: Data;
  beneficiary?: string | string[] | undefined;
};

export default function Title({ data, beneficiary }: TitleProps) {
  const maybeRenderBeneficiary = function() {
    if ( beneficiary ) {
        return <BeneficiaryText>Kepada Yth. {beneficiary} di tempat.</BeneficiaryText>;
    }
  }

  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./assets/FINAL_VIDEO.mp4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>Undangan Pernikahan</WeddingInvitation>

        <GroomBride>
          {data?.groom?.nickname} &#38; {data?.bride?.nickname}
        </GroomBride>
        <Schedule>
          {data?.date}
        </Schedule>

        {maybeRenderBeneficiary()}
        <WelcomeText>{data?.welcome_text}</WelcomeText>
        <WelcomeText>{data?.bible_verse}</WelcomeText>
        
      </TitleWrapper>
    </Layout>
  );
}
