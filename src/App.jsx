import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bot from "./pages/Bot";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/AlertBot">
          <Bot />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
