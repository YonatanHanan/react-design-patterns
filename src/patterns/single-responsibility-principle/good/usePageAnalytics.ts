import { useEffect } from "react";
import { sendAnalyticsEvent } from "../../../common/analytics";

type Event = {
  page: string;
};

// ✅ Single responsibility: managing analytics
export function usePageAnalytics(event: Event) {
  useEffect(() => {
    sendAnalyticsEvent("page_view", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
