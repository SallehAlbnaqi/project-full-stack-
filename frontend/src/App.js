import { Route } from "react-router-dom";
import Home from "./componants/Home";
import Favorite from "./componants/Favorite";
import Movie from "./componants/Movie";
import Movies from "./componants/Movies";
import Header from "./componants/Header";
import LogIn from "./componants/LogIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Favorite" component={Favorite} />
      <Route exact path="/Movies" component={Movies} />
      <Route exact path="/Movie/:id" component={Movie} />
      <Route exact path="/login" component={LogIn} />
    </div>
  );
}

export default App;
