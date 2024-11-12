import { Modal } from "./Modal";
import { useFetchData } from "./useFetchData";
import { usePageAnalytics } from "./usePageAnalytics";

// ✅ Single responsibility: put everything together
export const SingleResponsibilityPrincipleGood = () => {
  const data = useFetchData();

  usePageAnalytics({
    page: "wow",
  });

  return <Modal>{data}</Modal>;
};
