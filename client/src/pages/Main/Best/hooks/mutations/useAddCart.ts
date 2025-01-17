import { useMutation } from "@apollo/client";
import { ADD_CART, PRODUCT } from "../../graphql/schema";

function useAddCart() {
  const [addCart] = useMutation(ADD_CART, {
    refetchQueries: [{ query: PRODUCT }, "product"],
  });
  return addCart;
}

export default useAddCart;
