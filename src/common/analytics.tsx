export const sendAnalyticsEvent = (event: string, data: unknown) => {
  console.log(event, JSON.stringify(data));
};
