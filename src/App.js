import { Route,Routes } from 'react-router-dom';
import './componts/component-category/component-stayle/categories.styles.scss';
import Home from './routes/home/home.component';
import Shop from './componts/component-category/container-category/shop.component';
import Navbar from '../src/componts/component-category/container-category/naviton.componet';
import Authentication from './componts/authentication/authenticaion.component';
const App=()=>{
return(
  <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='auth' element={<Authentication />}/>
    </Route>
  </Routes>
);
}
export default App;
