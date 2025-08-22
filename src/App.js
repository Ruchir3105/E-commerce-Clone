import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Body from "./components/Body/Body.jsx";
import ResultsPage from "./pages/resultsPage.jsx";
import ProductPage from "./pages/productPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import MyAccount from "./pages/myAccount.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/ResgiterPage.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/products" element={<ResultsPage />} />
          <Route path="/products/category/:category" element={<ResultsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/:id" element={<MyAccount />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
