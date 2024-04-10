import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Checkbox, Col, Divider, Form, FormInstance, GetProp, Input, Modal, Row, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "4.5vh",
  fontWeight: "bold",
  fontFamily: '"Calligraffitti", cursive',
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontFamily: 'font-family: "Petrona", serif;',
  fontSize: "2.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const SubContent = styled("p", {
  fontFamily: 'font-family: "Petrona", serif;',
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontFamily: 'font-family: "Petrona", serif;',
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

interface SubmitButtonProps {
  form: FormInstance;
}

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};


const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [form] = Form.useForm();
  const options = [
    { label: 'Acara Lamaran', value: 'lamaran' },
    { label: 'Pemberkatan Gereja', value: 'gereja' },
    { label: 'Resepsi Pernikahan', value: 'resepsi' },
  ];

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Konfirmasi Kehadiran</Title>
      </Divider>
      <Content>Kami sangat menantikan kehadiran bapak/ibu/saudara/teman yang terkasih dalam acara yang berbahagia ini. Mohon untuk mengkonfirmasi kehadiran Anda dengan mengisi formulir berikut</Content>
      
      <Row justify={"space-around"} align={"middle"}>
        <Col sm={{ span: 12 }}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" initialValues={{ size: 'large' }}>
            <Form.Item name="name" label="Nama" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Alamat / Asal" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Nomor HP / Telepon / Whatsapp" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="wishes" label="Ucapan" rules={[{ required: false }]}>
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item name="acara" label="Saya bisa hadir di acara berikut:">
              <Checkbox.Group options={options} onChange={onChange} />
            </Form.Item>

            <Form.Item>
              <Space>
                <SubmitButton form={form}>Kirim</SubmitButton>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
}
