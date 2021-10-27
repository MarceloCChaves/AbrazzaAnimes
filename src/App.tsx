import { Home } from "./pages/Home/";
import { About } from './pages/About'
import { Help } from "./pages/Help";
import { Animes } from "./pages/Animes";
import { News } from "./pages/News";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/help" exact component={Help}/>
          <Route path="/animes" exact component={Animes}/>
          <Route path="/news/:id" exact component={News}></Route>
        </Switch>
    </BrowserRouter>
    <GlobalStyle/>
    </div>
  );
}

export default App;
