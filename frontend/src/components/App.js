import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SignInPage from "./SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users/:id">
            <ProfilePage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
