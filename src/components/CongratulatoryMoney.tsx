import { styled } from "@stitches/react";
import { Button, Checkbox, Col, Divider, Form, FormInstance, GetProp, Input, Modal, Radio, RadioChangeEvent, Row, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

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
  fontFamily: 'Petrona", serif',
  fontSize: "2.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

interface SubmitButtonProps {
  form: FormInstance;
}


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
  data
}: CongratulatoryMoneyProps) {
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false);
  const [form] = Form.useForm();
  const options = [
    { label: 'Ya, Saya bisa datang', value: 'lamaran' },
    { label: 'Pemberkatan Gereja', value: 'gereja' },
    { label: 'Resepsi Pernikahan', value: 'resepsi' },
  ];

  let hadirBoolean = false;

  const onChangeHadir = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
  };

  const onChangeAkomodasi = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
  };

  const onFinish = async (values: any) => {
    console.log(values);
    console.log("put the logic to send to api here")
    setSubmitSuccess(true)
    const rawResponse = await fetch('https://wfaubagpq6ivb2cyjqiwwqwh7i0doadk.lambda-url.ap-southeast-1.on.aws/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "access-control-allow-origin" : "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const content = await rawResponse.json();

    
  };

  const ThankyouText = styled("p", {
    fontSize: "2.5vh",
    fontFamily: '"Petrona", serif',
    margin: '20px',
  })

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Konfirmasi Kehadiran</Title>
      </Divider>
      <Content>Kami sangat menantikan kehadiran bapak/ibu/saudara/teman yang terkasih dalam acara yang berbahagia ini. Mohon untuk mengkonfirmasi kehadiran Anda dengan mengisi formulir berikut</Content>
      
      <Row justify={"space-around"} align={"middle"}>
        <Col sm={{ span: 12 }} className={!submitSuccess? 'hidden' : undefined}>
          <ThankyouText>Terima kasih sudah mengisi form ini! Tuhan memberkati!</ThankyouText>;
        </Col>
        <Col sm={{ span: 12 }} className={submitSuccess? 'hidden' : undefined}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" initialValues={{ size: 'large' }} onFinish={onFinish}>
            <Form.Item name="name" label="Nama" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="alamat" label="Alamat / Asal" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Nomor HP / Telepon / Whatsapp" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="pesan" label="Ucapan" rules={[{ required: false }]}>
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item name="hadir" label="Bisa hadir di acara kami?">
              <Radio.Group onChange={onChangeHadir} value={hadirBoolean}>
                <Radio value={true}>Ya saya bisa hadir</Radio>
                <Radio value={false}>Tidak, saya tidak bisa hadir</Radio>
              </Radio.Group>
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
