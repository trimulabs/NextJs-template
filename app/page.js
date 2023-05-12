"use client"
import Image from 'next/image'
import Navbar from './NavBar'
import Tomb from './tomb'
import styles from './page.module.css'
import Backpic from './bg-text'
import Islam from './islamicCenter'
import { Box } from '@chakra-ui/react';
import { Url } from 'next/dist/shared/lib/router/router'

export default function Home() {
  return (

    <Box
      backgroundImage="url('')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        backgroundColor="rgba(0, 0, 0, 0.6)"
        padding={6}
        borderRadius="md"
        color="white"
        textAlign="center"
      >
        <h1>Welcome to my website</h1>
        <p>Some additional text goes here...</p>
      </Box>
    </Box>

  )
}


