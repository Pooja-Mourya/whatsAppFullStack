// queryClient.js

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { QueryProvider, queryClient };
