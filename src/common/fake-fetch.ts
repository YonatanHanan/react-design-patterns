type MockedResponse = {
  status: number;
  body: unknown;
  headers?: HeadersInit;
};

type FakeFetchOptions = {
  mocks: { [url: string]: MockedResponse };
  defaultResponse?: MockedResponse;
  delay: number;
};

export const setupFakeFetch = ({
  mocks,
  defaultResponse,
  delay,
}: FakeFetchOptions) => {
  // Store the original fetch to restore later if needed
  const originalFetch = window.fetch;

  // Override fetch to intercept requests
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.fetch = async (
    url: string,
    options?: RequestInit
  ): Promise<Response> => {
    // Check if a mock response is defined for the URL
    const mockResponse = mocks[url] || defaultResponse;
    if (mockResponse) {
      const { status, body, headers } = mockResponse;

      return new Promise((res) => {
        setTimeout(() => {
          res(
            new Response(JSON.stringify(body), {
              status,
              headers: headers ? new Headers(headers) : undefined,
            })
          );
        }, delay);
      });
    }

    // Fallback to the original fetch if no mock is defined
    return originalFetch(url, options);
  };

  // Provide a way to restore the original fetch
  return () => {
    window.fetch = originalFetch;
  };
};
