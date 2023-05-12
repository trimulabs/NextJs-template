"use client"
import { Image } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import {
    Box, Card, CardHeader, CardBody, CardFooter, SimpleGrid,
    Heading,
    Flex,
    Text,
    Spacer,
    IconButton,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import sujood from '../public/images/men_in_sujood_illustration.svg'
import fajar from '../public/images/fajar.svg'
import zohar from '../public/images/zohar.svg'
import asar from '../public/images/asar.svg'
import maghrib from '../public/images/maghrib.svg'
import isha from '../public/images/isha.svg'


const PrayerTime = () => {





    return (
        <Box bgColor={'#38A169'} color={'white'}>
            <Heading> Prayer Time</Heading>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            <Image src={sujood.src}></Image>

            <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' colorScheme="green" marginRight={10} color={'black'} fontFamily={'Lato'}>
                <Box bg='white' height={230} width={170}>
                    <Card >

                        <CardHeader>

                            <Image src={fajar.src} width={50} height={50} marginTop={50} align={'center'} ml={60} />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> FAJAR</Heading>

                        </CardBody>
                        <CardFooter>
                            <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>4:43 AM</Text>

                        </CardFooter>

                    </Card>
                </Box>
                <Box bg='white' height={230} width={170}>
                    <Card>
                        <CardHeader>
                            <Image src={zohar.src} width={50} height={50} marginTop={60} ml={60} />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> ZOHAR</Heading>
                        </CardBody>
                        <CardFooter>
                            <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>12:10 PM</Text>

                        </CardFooter>
                    </Card>
                </Box>
                <Box bg='white' height={230} width={170}>
                    <Card>
                        <CardHeader>
                            <Image src={asar.src} width={50} height={50} marginTop={60} ml={60} />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> ASAR</Heading>
                        </CardBody>
                        <CardFooter>
                            <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>4:31 PM</Text>

                        </CardFooter>
                    </Card>
                </Box>






                <Box bg='white' height={230} width={170}>
                    <Card>
                        <CardHeader>
                            <Image src={maghrib.src} width={50} height={50} marginTop={60} ml={60} />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> MAGHRIB</Heading>
                        </CardBody>
                        <CardFooter>
                            <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>6:15 PM</Text>

                        </CardFooter>
                    </Card>
                </Box>
                <Box bg='white' height={230} width={170}>
                    <Card>
                        <CardHeader>
                            <Image src={isha.src} width={50} height={50} marginTop={60} ml={60} />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> ISHA</Heading>
                        </CardBody>
                        <CardFooter align={'center'}>
                            <Text size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}>7:36 PM</Text>

                        </CardFooter>
                    </Card>
                </Box>
            </SimpleGrid>




        </Box>

    );


};

export default PrayerTime;
