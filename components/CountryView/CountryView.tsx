import React, { useState } from "react";
import { Country } from "../../types";
import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  Divider,
  Grid,
} from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { formatCapitals, formatList } from "../../utils";
import CountryMap from "./CountryMap";

interface CountryViewProps {
  country: Country;
  excerpt: string;
}

const CountryView: React.FC<CountryViewProps> = ({ country, excerpt }) => {
  const {
    name,
    tld,
    currencies,
    region,
    subregion,
    capital,
    flags,
    flag,
    languages,
    unMember,
    independent,
    timezones,
  } = country;

  const [nativeNamesToggled, setNativeNamesToggled] = useState(false);

  const toggleAccordion = () => {
    nativeNamesToggled
      ? setNativeNamesToggled(false)
      : setNativeNamesToggled(true);
  };

  const hasCapital = Object.keys(country.capitalInfo).length > 0;
  let latitude, longitude;
  if (hasCapital) {
    latitude = country.capitalInfo.latlng[0];
    longitude = country.capitalInfo.latlng[1];
  }

  const bg = useColorModeValue("gray.50", "gray.700");
  const boxBg = useColorModeValue("white", "gray.800");

  const nativeNames = Object.keys(name.nativeName);

  return (
    <Container maxW="container.sm" background={bg} pt={3}>
      <Link
        href={`/`}
        color="blue.500"
        _focus={{
          boxShadow: "none",
        }}
      >
        <Text>← Back to home</Text>
      </Link>
      <VStack h="100%" py={6}>
        <Heading size="lg" fontSize="40px">
          {name.common}
        </Heading>
        <Text fontSize="20px" textAlign={"center"}>
          {name.official}
        </Text>

        {nativeNames.slice(0, 3).map((language, key) => (
          <Box display={"flex"} justifyContent={"center"} key={key}>
            <Text fontSize="12px" alignSelf={"flex-end"} marginRight={1}>
              {language.toUpperCase()}
            </Text>{" "}
            <Text fontSize="18px" fontStyle="italic" key={key}>
              {name.nativeName[language].official}
            </Text>
          </Box>
        ))}
        {nativeNames.length > 3 && (
          <Accordion allowToggle w="60%">
            <AccordionItem>
              <h2>
                <AccordionButton
                  onClick={toggleAccordion}
                  bg={nativeNamesToggled ? "blackAlpha.50" : ""}
                >
                  <Box flex="1" textAlign="left">
                    {nativeNamesToggled ? "Hide" : "Show"}{" "}
                    <b>{nativeNames.length - 3} more </b>
                    native names
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"blackAlpha.50"}>
                {nativeNames.slice(3).map((language, key) => (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    margin="10px 0 10px 0"
                    key={key}
                  >
                    <Text
                      fontSize="12px"
                      alignSelf={"flex-end"}
                      color={nativeNamesToggled ? "" : "white"}
                      marginRight={1}
                    >
                      {language.toUpperCase()}
                    </Text>{" "}
                    <Text fontSize="20px" fontStyle="italic" key={key}>
                      {name.nativeName[language].official}
                    </Text>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}

        <Container maxW="sm" centerContent>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            background={boxBg}
            p={5}
            overflow="hidden"
          >
            <Image src={flags.png} alt={`Flag of ${name.common}`} />
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            background={boxBg}
            p={5}
            overflow="hidden"
            mt={15}
            gridGap="5px"
            w="100%"
          >
            <Heading size="sm">Useful information</Heading>
            <Divider my={2} />
            <Grid templateColumns="repeat(2, 1fr)" columnGap={6} rowGap={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  🏛
                </Text>
                <Text fontWeight="bold">Capital:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {formatCapitals(capital)}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  🌍
                </Text>
                <Text fontWeight="bold"> Region:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {subregion}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  🏳
                </Text>
                <Text fontWeight="bold"> Flag emoji:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {flag}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  👨‍⚖️
                </Text>
                <Text fontWeight="bold"> Independent:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {independent ? "Yes" : "No"}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  🇺🇳
                </Text>
                <Text fontWeight="bold"> UN member:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {unMember ? "Yes" : "No"}</Text>
              </Box>

              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  🌐
                </Text>
                <Text fontWeight="bold"> TLD:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {formatList(tld)}</Text>
              </Box>

              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize="20px" mr="5px">
                  ⏰
                </Text>
                <Text fontWeight="bold"> Timezone:</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text> {formatList(timezones)}</Text>
              </Box>
            </Grid>
          </Box>

          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            background={boxBg}
            p={5}
            overflow="hidden"
            mt={15}
          >
            <Heading size="sm">Excerpt from Wikipedia</Heading>
            <Divider my={2} />
            <Text>{excerpt}</Text>
            <Link
              href={`https://en.wikipedia.org/wiki/${name.common}`}
              isExternal
              color="blue.500"
              mt={5}
            >
              Read more
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          {hasCapital && (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              background={boxBg}
              p={5}
              overflow="hidden"
              mt={15}
            >
              <CountryMap latitude={latitude} longitude={longitude} />
            </Box>
          )}
        </Container>
      </VStack>
    </Container>
  );
};

export default CountryView;
