import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgetPass from "./Auth/ForgetPass";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ErrPage from "./components/ErrPage";
import AuthContext from "./Contexts/AuthContext";
import CartContext from "./Contexts/CartContext";
import Collection from "./pages/Collection";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <div className="container">
      <CartContext>
        <AuthContext>
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/collections">
                <Collection />
              </Route>

              <Route path="/register">
                <Signup />
              </Route>

              <Route path="/forgetPassword">
                <ForgetPass />
              </Route>

              <Route exact path="/">
                <ProductDetails />
              </Route>

              <Route exact path="">
                <ErrPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthContext>
      </CartContext>
    </div>
  );
};

export default App;
