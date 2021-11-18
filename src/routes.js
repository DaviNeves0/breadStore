import React from "react";
import { Switch, Route } from "react-router-dom";

//IMPORT DAS PÁGINAS
import HomeStore from "./pages/homeStore";
import Checkout from "./pages/checkout";

export default function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={HomeStore} />
            <Route exact path="/checkout" component={Checkout} />
        </Switch>

    )
}