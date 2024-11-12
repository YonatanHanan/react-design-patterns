import { useEffect, useState } from "react";
import { sendAnalyticsEvent } from "../../../common/analytics";

export const SingleResponsibilityPrincipleBad = () => {
  // Responsible for multiple unrelated states
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responsible for fetching data
  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // Responsible for implementing sending analytics events
  useEffect(() => {
    sendAnalyticsEvent("page_view", { page: "big_component" });
  }, []);

  // Responsible for toggling modal
  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      {isModalOpen ? data : ""}
      <button type="button" onClick={toggleModal}>
        toggle
      </button>
    </div>
  );
};
