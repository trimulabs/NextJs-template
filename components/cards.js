"use client"
import { Cinzel } from 'next/font/google'
import { Lato } from 'next/font/google'

import { AbsoluteCenter, Box, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import mosque from '../public/images/mosque-develop_icon.svg'
import quran from '../public/images/quran_teaching_icon.svg'
import islamic_classes from '../public/images/islamic_classes_icon.svg'
import islamic_awareness from '../public/images/islamic_awareness.svg'
import charity from '../public/images/charity_icon.svg'


const Cards = () => {
    return (
        <SimpleGrid spacing={50} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' colorScheme="green" marginRight={30} color={'white'} fontFamily={'Lato'}>
            <Box bg='#38A169' height={470} width={320}>
                <Card >

                    <CardHeader>

                        <Image src={mosque.src} width={100} height={100} marginTop={50} align={'center'} ml={100} />
                    </CardHeader>
                    <CardBody>
                        <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> MOSQUE <br />DEVELOPMENT</Heading>

                    </CardBody>
                    <CardFooter>
                        <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                    </CardFooter>

                </Card>
            </Box>
            <Box bg='#38A169' height={470} width={320}>
                <Card>
                    <CardHeader>
                        <Image src={quran.src} width={100} height={100} marginTop={60} ml={100} />
                    </CardHeader>
                    <CardBody>
                        <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> QURAN <br />TEACHING</Heading>
                    </CardBody>
                    <CardFooter>
                        <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                    </CardFooter>
                </Card>
            </Box>
            <Box bg='#38A169' height={470} width={320}>
                <Card>
                    <CardHeader>
                        <Image src={islamic_classes.src} width={100} height={100} marginTop={60} ml={100} />
                    </CardHeader>
                    <CardBody>
                        <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> ISLAMIC <br />CLASSES</Heading>
                    </CardBody>
                    <CardFooter>
                        <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                    </CardFooter>
                </Card>
            </Box>






            <Box bg='#38A169' height={470} width={320}>
                <Card>
                    <CardHeader>
                        <Image src={islamic_awareness.src} width={100} height={100} marginTop={60} ml={100} />
                    </CardHeader>
                    <CardBody>
                        <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> ISLAMIC <br />AWARENESS</Heading>
                    </CardBody>
                    <CardFooter>
                        <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                    </CardFooter>
                </Card>
            </Box>
            <Box bg='#38A169' height={470} width={320}>
                <Card>
                    <CardHeader>
                        <Image src={charity.src} width={100} height={100} marginTop={60} ml={100} />
                    </CardHeader>
                    <CardBody>
                        <Heading size='md' fontFamily={'Cinzel'} align={'center'} fontSize={25} lineHeight={1.5} fontWeight={20}> CHARITY & <br /> DONATION</Heading>
                    </CardBody>
                    <CardFooter>
                        <Text fontWeight={500} size={18} lineHeight={1.5} align={'center'} ml={15} mr={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

                    </CardFooter>
                </Card>
            </Box>
        </SimpleGrid>

    )
}


export default Cards;