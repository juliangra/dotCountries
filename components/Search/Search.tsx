import {
  Button,
  Text,
  HStack,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Stack,
  Box,
  Heading,
  Image,
  ModalCloseButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { Country } from "../../types";
import React, { useRef, useState } from "react";

interface SearchProps { }

const Search: React.FC<SearchProps> = ({ }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [countries, setCountries] = useState<Country[]>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const query: string = searchInput?.current?.value || "";

    if (query != "") {
      setIsInvalid(false);

      const getCountry = async () => {
        const res = await fetch(`/api/${encodeURIComponent(query)}`);
        const data = await res.json();

        return data;
      };

      getCountry().then((res) => {
        if (res.status == 200) {
          const multipleCountries = res.data;
          setCountries(res.data as Country[]);

          if (multipleCountries.length > 1) {
            onOpen();
            setIsInvalid(false);
            setIsLoading(false);
            return;
          }

          setIsInvalid(false);
          router.push(`/search/${encodeURIComponent(query)}`);
          return;
        }

        setIsInvalid(true);
        setErrorMsg(res.message);
        setIsLoading(false);
      });
    } else {
      setIsInvalid(true);
      setErrorMsg("Please enter the name of a country or a capital city");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {countries && countries.length} alternatives found
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH={"600px"} overflow={"scroll"}>
            <Stack spacing={4}>
              {countries &&
                (countries as Country[]).map((country, key) => (
                  <Link
                    href={
                      country.name.common == "China"
                        ? `/search/Beijing`
                        : `/search/${country.name.common}`
                    }
                    key={key}
                  >
                    <Feature
                      title={country.name.common}
                      desc={country.name.official}
                      flag={country.flags.png}
                    />
                  </Link>
                ))}
            </Stack>
            <ModalFooter></ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
      <HStack w="400px" mx="auto">
        <Input
          id="country"
          type="text"
          placeholder="Search for a country, capital or territory"
          isInvalid={isInvalid}
          errorBorderColor="red.300"
          ref={searchInput}
          autoFocus
        />
        <Button type="submit" isLoading={isLoading} colorScheme="blue">
          Search
        </Button>
      </HStack>
      <Text
        fontSize="sm"
        color="red.300"
        visibility={isInvalid ? "visible" : "hidden"}
      >
        {errorMsg}
      </Text>
    </form>
  );
};

interface IFeature {
  title: string;
  desc: string;
  flag: string;
}

const Feature = ({ title, desc, flag }: IFeature) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      p={5}
      shadow="sm"
      borderWidth="1px"
      borderRadius="5px"
      display={"flex"}
      alignItems={"center"}
      transitionProperty="shadow"
      transitionDuration="1"
      transition={"0.3s all ease"}
      _hover={{
        transform: "translateY(-4px)",
        shadow: "md",
        transition: "0.3s all ease",
      }}
    >
      <Image src={flag} maxW={20} maxH={10} alt={`Flag of ${title}`} />
      <Box ml={3}>
        <Heading fontSize="xl">{title}</Heading>
        <Text color={colorMode == "dark" ? "whiteAlpha.700" : "blackAlpha.600"}>
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

export default Search;
