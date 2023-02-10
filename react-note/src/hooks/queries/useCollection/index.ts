import { useCoreQuery } from "@queries/core";
import { listCollectionsApi } from "@services/collections";
import { CollectionParams } from "@store/Collection";
import { useRecoilValue } from "recoil";
import { CollectionKey } from "src/constant/queryKey";

export const useCollectionList = () => {
  const recoilValue = useRecoilValue(CollectionParams);

  return useCoreQuery(
    CollectionKey(recoilValue.date),
    async () => listCollectionsApi(recoilValue),
    {
      refetchOnWindowFocus: false,
    },
  );
};
