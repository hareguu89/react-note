import showToast from "@components/ToastInfoBody";
import { useCoreMutation } from "@queries/core";
import { createOrUpdateCartItemsApi } from "@services/cart";
import { useCartStore } from "@store/Cart";

export const useCart = () => {
  const { actions } = useCartStore();
};
export const useCartCreateOrUpdate = () => {
  const { actions } = useCartStore();

  return useCoreMutation(createOrUpdateCartItemsApi, {
    onSuccess: data => {
      if (data.length) {
        actions.addCartList(data);
        showToast({ message: "The product has been added to cart" });
      } else {
        showToast({
          message: "Please select at least one item",
          type: "error",
        });
      }
    },
  });
};
