import "./App.css";
import Auth from "./component/Auth";
import BasePage from "./component/BasePage";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth);

  return <div className="App">{auth.isAuth ? <BasePage /> : <Auth />}</div>;
}

export default App;
