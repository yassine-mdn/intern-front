import data from "./data/test-data.json"
import Homepage from "./pages/home-page/Homepage";
import Signup from "./pages/sign-up/Signup";
import Login from "./pages/login/login";
import Page404 from "./pages/404/Page404";
import Page500 from "./pages/505/Page500";

function App() {
    const getHeadings = () => {
        return Object.keys(data[0]);
    }

  return (
  <div>
      <Homepage/>
  </div>
  );
}

export default App;
