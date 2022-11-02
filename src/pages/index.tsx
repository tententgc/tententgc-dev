import React from "react"
import Head from "next/head"

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai"

import { BsFacebook } from "react-icons/bs"

import tw from "twin.macro"

import { TerminalWindow } from "../ui/TerminalWindow"

const Backdrop = tw.main`
  flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100
  min-h-screen px-2 text-white
`

const Title = tw.h1`
  text-center px-2 text-white my-0 font-medium
  text-2xl xs:text-4xl sm:text-5xl md:text-6xl
`

const Link: React.FC<{ href: string }> = ({ href, children }) => (
  <a
    tw="text-white text-xs xs:text-sm sm:text-lg underline leading-loose!"
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
)

const Landing = () => {
  return (
    <Backdrop tw="space-y-5">
      <Head>
        <title>Thanyapisit Buaprakhong - software engineer</title>

        <meta
          name="description"
          content="tententgc is a software engineer who loves to build things with code."
        />
      </Head>

      <TerminalWindow>
        <Title tw="md:mb-4">Thanyapisit Buaprakhong</Title>

        <p tw="text-xl leading-loose">@tententgc</p>

        <section tw="flex space-x-2 mt-4">
          <Link href="https://github.com/tententgc">
            <AiOutlineGithub />
          </Link>
          <Link href="https://facebook.com/tententgc">
            <BsFacebook />
          </Link>
          <Link href="https://twitter.com/tententgc">
            <AiOutlineTwitter />
          </Link>
          <Link href="https://instagram.com/tenten_tgc">
            <AiOutlineInstagram />
          </Link>
        </section>
      </TerminalWindow>
    </Backdrop>
  )
}

export default Landing
