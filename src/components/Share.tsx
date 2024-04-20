import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Col, Divider, Row, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

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

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

const GiftText = styled("p", {
  fontSize: "4vh",
  fontWeight: "normal",
  fontFamily: '"Calligraffitti", cursive',
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  useEffect(() => {
    if (shareCount !== 0) {
      window.Kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${data?.groom?.name}❤${data?.bride?.name} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: data?.kakaotalk?.share_image,
          link: {
            mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
            webUrl: data?.kakaotalk?.wedding_invitation_url,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
              webUrl: data?.kakaotalk?.wedding_invitation_url,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    } else {
      try {
        window.Kakao.init(data?.kakaotalk?.api_token);
      } catch {}
    }
  }, [shareCount]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Kirim hadiah</Title>
      </Divider>
      
      <Row justify={"space-around"} align={"middle"}>
        <Col>
          <GiftText>Kirim hadiah ke </GiftText>
          <GiftText>
            Bank : Mandiri
            No : 9000037285104 
            Atas Nama : Niko Kohar
          </GiftText>
        </Col>
      </Row>

    </Wrapper>
  );
}
