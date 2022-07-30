import { render, screen, waitFor } from "@testing-library/react";
import NewsFeed from "../components/newsFeed/NewsFeed";

test("renders News Feed header", () => {
  render(<NewsFeed />);
  const linkElement = screen.getByText(/News Feed/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders news links", async () => {
  render(<NewsFeed />);
  await waitFor(
    () => {
      const news = screen.getByText(/Polkadot/i);
      expect(news).toBeInTheDocument();
    },
    { timeout: 4500 }
  );
});
