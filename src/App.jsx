import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/:title" element={<Details />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
