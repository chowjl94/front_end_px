import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
// import { ApplyJob } from "./pages/apply-job";
import {MarketplacePublic} from './pages/marketplace-public'
import { AuthProvider } from "./domains/auth";

// ReactDOM.render(<ApplyJob />, document.querySelector("#root"));
ReactDOM.render(

    <AuthProvider>
        <MarketplacePublic />
    </AuthProvider>,
     document.querySelector("#root"));

