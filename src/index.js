import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";
// import { ApplyJob } from "./pages/apply-job";
// import { JobDetailsPage } from "./pages/job-details";
import { LoginPage } from "./pages/login";
import { Register } from "pages/register";

// import { ListingDetailsPage } from "./pages/listing-details";
// import { MarketplacePublic } from "./pages/marketplace-public";
// import { ShoppingCart } from "./pages/shopping-cart";
import { PageNotFound } from "./pages/404";
import { MoviesPage } from "pages/movies";
import { SingleMoviePage } from "pages/single-movie"
import { HighLightPage } from "pages/highlights";
import { Career } from "./pages/career";
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
      <AuthProvider>
        <AppShell>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/highlights">
              <HighLightPage />
            </Route>
            <Route path="/career">
              <Career />
            </Route>



            <Route path="/" exact>
              <MoviesPage/>
            </Route>
            <Route path="/movie/:movieId" exact>
              <SingleMoviePage/>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AppShell>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
