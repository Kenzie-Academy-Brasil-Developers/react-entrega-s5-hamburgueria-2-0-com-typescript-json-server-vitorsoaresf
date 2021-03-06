import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/Auth.Context";
import { useCart } from "../../context/Cart.Context";
import { ModalCart } from "../Modal";
import { InputSearch } from "./InputSearch";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const { signOut } = useAuth();
  const { cart } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      h="80px"
      bg="gray.0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        ml={["16px", "16px", "75px", "50px", "100px"]}
        display="flex"
        alignItems="center"
        fontSize={["2xl"]}
      >
        Burguer{" "}
        <Text
          h="100%"
          ml="5px"
          color="#EB5757"
          fontSize={["sm"]}
          fontWeight="700"
        >
          Kenzie
        </Text>
      </Heading>
      <Flex mr={["0px", "0px", "20px"]}>
        <Button
          onClick={() => setSearch(true)}
          bg="none"
          w="50px"
          fontSize="4xl"
          color="gray.400"
        >
          <FaSearch />
        </Button>
        <Button
          onClick={onOpen}
          bg="none"
          w="50px"
          fontSize="4xl"
          color="gray.400"
        >
          {cart.length > 0 && (
            <Text
              m="0px 0px 20px 15px"
              fontSize="0.75rem"
              borderRadius="5px"
              padding="2px 4px"
              color="white"
              bg="green.800"
              position="absolute"
            >
              {cart.length}
            </Text>
          )}

          <FaShoppingCart />
        </Button>
        <Button
          onClick={signOut}
          bg="none"
          w="50px"
          fontSize="4xl"
          color="gray.400"
        >
          <FaSignOutAlt />
        </Button>
      </Flex>
      {search && <InputSearch setSearch={setSearch} />}
      <ModalCart isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
