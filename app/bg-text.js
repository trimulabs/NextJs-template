"use client"
import { Image } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import {
    Box,
    Flex,
    Text,
    Spacer,
    IconButton,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Backpic = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box boxSize='lg'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' textIndent={'dfbjhefku'}  />
            <Box bg='red.200' w='800px'>
                This is a box
            </Box>


        </Box>

    );
};

export default Backpic;
