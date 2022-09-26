import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from "./Components/Home/Home";
import Shop from './Components/Shop/Shop'
import OrderReview from './Components/Order Review/OrderReview'
import Shipment from './Components/Shipment/Shipment'
import Inventory from './Components/Manage Inventory/Inventory'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/orderReview' element={<OrderReview />}></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
