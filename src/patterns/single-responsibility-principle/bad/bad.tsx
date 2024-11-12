import { useEffect, useState } from "react";
import { sendAnalyticsEvent } from "../../../common/analytics";

export const SingleResponsibilityPrincipleBad = () => {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    sendAnalyticsEvent("page_view", { page: "big_component" });
  }, []);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Open
      </button>
      {isModalOpen ? data : ""}
    </div>
  );
};
