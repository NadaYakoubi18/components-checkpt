import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCha from "./components/NAVBAR/navbarCha";
import ProductList from "./components/PRODUCT LIST/PRO";
function App() {
  return (
    <div className="App">
      <NavbarCha />
      <ProductList />
    </div>
  );
}

export default App;
