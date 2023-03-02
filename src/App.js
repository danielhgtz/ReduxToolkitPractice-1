import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Profile from "./components/profile";
import Error404 from "./components/error404";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
