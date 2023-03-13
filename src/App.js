import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:image" exact component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
