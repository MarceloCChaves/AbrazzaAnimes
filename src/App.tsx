import { Home } from "./pages/Home/index";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
    </BrowserRouter>
    <GlobalStyle/>
    </div>
  );
}

export default App;
