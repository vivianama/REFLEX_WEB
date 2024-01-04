
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { isTrue } from "/utils/state"
import Script from "next/script"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <VStack sx={{"bg": "#212529", "position": "sticky", "borderBottom": "0.25em solid #D3D3D3", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0", "width": "100%"}}>
  <HStack sx={{"width": "100%"}}>
  <Link as={NextLink} className={`nes-icon is-medium star`} href={`https://github.com/vivianama`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
  <Text>
  {`Viviana Acevedo`}
</Text>
  <Spacer/>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Link as={NextLink} className={`nes-icon linkedin is-medium`} href={`https://www.linkedin.com/in/vivianaacevedo/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
</Box>
  <Link as={NextLink} className={`nes-icon github is-medium`} href={`https://github.com/vivianama`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {``}
</Link>
</HStack>
</VStack>
  <Center>
  <VStack spacing={`4em`} sx={{"width": "100%"}}>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium like`}/>
  <Heading size={`md`} sx={{"color": "#EA5940", "fontFamily": "Press Start 2P"}}>
  {`Hola, mi nombre es Vivian Acevedo`}
</Heading>
</HStack>
  <Flex direction={["column", "column", "column", "row", "row"]} sx={{"alignItems": "start", "spacing": "2em"}}>
  <Avatar name={`Viviana Acevedo`} size={`2xl`} src={`foto_perfil.jpg`} sx={{"bg": "#212529", "padding": "2px", "border": "4px", "borderColor": "#D3D3D3", "marginRight": "0.5em", "marginBottom": "0.5em"}}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Soy apasionada por la innovación y las tecnologías ágiles, con un enfoque colaborativo en la gestión de equipos de desarrollo de software. Mi objetivo es fusionar la tecnología con las necesidades y expectativas de las personas, basándome en principios y valores sólidos. Cuento con una sólida experiencia en liderazgo de equipos ágiles, impulsando la entrega exitosa de proyectos y fomentando un entorno de trabajo motivador y colaborativo. `}
  <Text as={`span`} sx={{"color": "#EA5940", "fontSize": "1em"}}>
  {`Aqui puedes saber mas de mi`}
</Text>
  {`.`}
</Text>
  <Stack alignItems={`start`} direction={["column", "column", "column", "row", "row"]}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/vivianaacevedo/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Linkedin`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Github`}
</Button>
</Link>
</Stack>
</VStack>
</Flex>
</VStack>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium nes-icon trophy is-small`}/>
  <Heading size={`md`} sx={{"color": "#EA5940", "fontFamily": "Press Start 2P"}}>
  {`Mis proyectos`}
</Heading>
</HStack>
  <VStack alignItems={`start`} className={`nes-container is-dark`} sx={{"width": "100%"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Estos proyectos simbolizan mi incursión en diversos lenguajes de programación, motivada por mi profunda pasión por la programación. A pesar de que mi rol actual no me permite involucrarme directamente en la programación, siempre me mantengo cercano al área de desarrollo. Para mí, programar es más que un trabajo, es mi pasatiempo`}
</Text>
  <HStack alignItems={`start`} sx={{"flexDirection": ["column", "column", "column", "row", "row"]}}/>
</VStack>
  <SimpleGrid columns={[3, 3, 4, 5, 6]} spacing={`1em`} sx={{"width": "100%", "paddingY": "2em"}}>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en Reflex`} src={`project/1.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 1`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`1`}
</Text>
</Box>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en React Js`} src={`project/2.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 2`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`2`}
</Text>
</Box>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en Power BI`} src={`project/3.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 3`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`3`}
</Text>
</Box>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en Power BI`} src={`project/4.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 4`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`4`}
</Text>
</Box>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en Power BI`} src={`project/5.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 5`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`5`}
</Text>
</Box>
  <Box sx={{"bg": "#EA5940", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Link as={NextLink} href={`https://github.com/vivianama`} isExternal={true} sx={{"position": "absolute", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  <ChakraImage alt={`Projecto en Python`} src={`project/6.png`} sx={{"padding": "0.5em"}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <ChakraImage alt={`Regalo asociado al día 6`} src={`gift.png`} sx={{"position": "absolute", "padding": "0.5em"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {`6`}
</Text>
</Box>
</SimpleGrid>
  <Script src={`/js/countdown.js`} strategy={`afterInteractive`}/>
</VStack>
  <HStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px", "paddingBottom": "2em"}}>
  <Center sx={{"width": "80%"}}>
  <VStack alignItems={`start`} spacing={`0.8em`}>
  <Text sx={{"fontSize": "0.5em", "marginBottom": "0.8em"}}>
  {`Mi pagina web`}
</Text>
  <Link as={NextLink} href={`https://www.linkedin.com/in/vivianaacevedo/`} isExternal={true} sx={{"fontSize": "0.5em", "color": "#D3D3D3", "textDecoration": "none", "_hover": {"color": "#EA5940", "textDecoration": "none"}}}>
  {`Creado con reflex `}
  <Box className={`nes-icon is-small heart`}/>
</Link>
</VStack>
  <Spacer/>
  <Box className={`nes-octocat animate`}/>
</Center>
</HStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`CV Viviana Acevedo`}
</title>
  <meta content={`Esta es mi página profesional`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
