import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import "./index.css";
import { PageNotFound } from "./pages/404";
import { HighLightPage } from "pages/highlights";
import { Bookmarks } from "pages/bookmarks";


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
            <Route path='/bookmarks'>
              <Bookmarks/>
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
