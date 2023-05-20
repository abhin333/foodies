import './App.css';
import Header from "./Componenets/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import CardDetails from './Componenets/Cards/CardDetails';
import Home from './Componenets/Page/Home';
import Payment from './Componenets/Payment/Payment';
function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart/:id' element={<CardDetails/>}/>
      <Route path='/payment'element={<Payment/>}/>

    </Routes>
    

    </div>
  );
}

export default App;
