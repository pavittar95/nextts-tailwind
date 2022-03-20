import Head from "next/head";
import React from "react";
import { MetaProps } from "../../types/meta";

export default function Meta({ pageMeta }: MetaProps) {
  return (
    <Head>
      <title>{pageMeta?.title}</title>
      <meta name="description" content={pageMeta?.description}></meta>
      <link
        rel="preload"
        href="https://cdn.lovefromyours.com/static/images/header/landing-page-hero-480.jpg"
        imagesrcset="https://cdn.lovefromyours.com/static/images/header/landing-page-hero-1440.jpg 1440w, https://cdn.lovefromyours.com/static/images/header/landing-page-hero-480.jpg 480w,  https://cdn.lovefromyours.com/static/images/header/landing-page-hero1-480.jpg 360w"
        as="image"
      />
    </Head>
  );
}
