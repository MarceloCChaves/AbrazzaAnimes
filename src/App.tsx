import { Home } from "./pages/Home/index";
import { Animes } from "./pages/Animes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { News } from "./pages/News";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/animes" exact component={Animes}/>
          <Route path="/news/:id" exact component={News}></Route>
        </Switch>
    </BrowserRouter>
    <GlobalStyle/>
    </div>
  );
}

export default App;
