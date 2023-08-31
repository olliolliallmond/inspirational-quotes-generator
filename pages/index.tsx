import Head from 'next/head'
import Image from 'next/image'
// Styled Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GradientBackgroundCon, RedSpan } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
// import Cloud1 from 'assets/sun.jpg'
import Clouds1 from '@/assets/cloud-and-thunder.png'
import Clouds2 from '@/assets/cloudy-weather.png'
import { useState } from 'react'

export default function Home() {
  // const numberOfQuotes = 8;
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  // const handleGenerateQuote = () => {}

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="cloudybackground1"
        />

        <BackgroundImage2 
          src={Clouds2}
          height="300"
          alt="cloudybackground1"
        />

        <FooterCon>
          {/* Call to Action */}
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> following this <FooterLink href="https://www.youtube.com/watch?v=FRmCxj9K7II" target="_blank" rel="noopener noreferrer">tutorial</FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  )
}
