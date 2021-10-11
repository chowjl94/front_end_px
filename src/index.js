// import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";

import { LoginPage } from "./pages/login";
import { RegisterForm } from "domains/auth/components/register-form";
import { PageNotFound } from "./pages/404";
import { MoviesPage } from "pages/movies";
import { SingleMoviePage } from "pages/single-movie"



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
          <Route path='/register'>
            <RegisterForm/>
          </Route>
            <Route path="/login">
              <LoginPage />
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
