import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./Detail";

/**
 * @jest-environment jsdom
 */

const queryClient = new QueryClient();

test("renders learn react link", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Detail />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
