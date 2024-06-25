
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Add from './Pages/Add';
import Employees from './Pages/Employees';
import View from './Pages/View';
import Edit from './Pages/Edit';




function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Login></Login>} ></Route>
      <Route path='/home' element={<AdminHome></AdminHome>}></Route>
      <Route path='/add-new' element={<Add></Add>}></Route>
      <Route path='/employee-mng' element={<Employees></Employees>}></Route>
      <Route path='/employee-view/:id' element={<View></View>}></Route>
      <Route path='/employee-edit/:id' element={<Edit></Edit>}></Route>
      
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
