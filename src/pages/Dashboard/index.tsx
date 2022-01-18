import { Button, Flex, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { useEffect } from "react";
import { Card } from "../../components/Card";
import { useAuth } from "../../context/Auth.Context";
import { useProduct } from "../../context/Products.Context";
import { ProductsList } from "./ProductsList";

interface Comment {
  userId: number;
  productId: number;
  comment: string;
}

interface Product {
  product: string;
  price: string;
  category: string;
  id: number;
  comments: Comment[];
}

export const Dashboard = () => {
  const { signOut } = useAuth();
  const { products, loadProducts } = useProduct();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <ProductsList products={products} />
      <Button onClick={signOut}>Logout</Button>
    </>
  );
};