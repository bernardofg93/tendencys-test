import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderList } from "./components/OrderLIst";
import { ProductList } from "./components/ProductLIst";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<OrderList />} />
          <Route path="/order/:id" element={<ProductList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
