import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import "./index.css";
import { PageNotFound } from "./pages/404";
import { HighLightPage } from "pages/highlights";
// import { ApplyJob } from "./pages/apply-job";
// import { JobDetailsPage } from "./pages/job-details";
// import { LoginPage } from "./pages/login";
// import { Register } from "pages/register";

// import { ListingDetailsPage } from "./pages/listing-details";
// import { MarketplacePublic } from "./pages/marketplace-public";
// import { ShoppingCart } from "./pages/shopping-cart";
// import { MoviesPage } from "pages/movies";
// import { SingleMoviePage } from "pages/single-movie"
// import { Career } from "./pages/career";
// import { Marketplace } from "./pages/marketplace";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AppShell>
          <Switch>
            <Route path="/highlights">
              <HighLightPage />
            </Route>
            <Route path="/" exact>
              <HighLightPage/>
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AppShell>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
