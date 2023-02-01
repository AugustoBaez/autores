import "./App.css";
import Authors from "./components/Authors";
import EditAuthor from "./components/EditAuthor";
import AddAuthor from "./components/AddAuthor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Authors />}></Route>
          <Route path="/new" element={<AddAuthor />}></Route>
          <Route path="/edit/:id" element={<EditAuthor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
