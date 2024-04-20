import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import { useRouter } from 'next/router'

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  const router = useRouter()
  let beneficiaryName = router.query.name;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Niko ❤ Grace - Undangan Pernikahan" name="Title" />
        <meta
          content="Minggu 28 April 2024"
          name="Description"
        />
        <meta content="Minggu 28 April 2024" name="Keyword" />
        <meta property="og:title" content="Niko ❤ Grace - Undangan Pernikahan" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta
          property="og:description"
          content="Minggu 28 April 2024"
        />
        <meta
          property="og:url"
          content="https://nikogracewedding.netlify.app/"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Nico ❤ Grace - Undangan Pernikahan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Nothing+You+Could+Do&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Nothing+You+Could+Do&family=Petrona:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <audio loop autoPlay>
            <source src="/assets/kawin.mp3" type="audio/filetype" />
        </audio>
        <Title data={JsonData} beneficiary={beneficiaryName}/>
        <Gretting data={JsonData} />
        <Gallery />
        <Location />
        <CongratulatoryMoney data={JsonData} />
        <Footer>This wedding invitation made by hoofredy - contact me to build yours!</Footer>
      </main>
    </>
  );
}
