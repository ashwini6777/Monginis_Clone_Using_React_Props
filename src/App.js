import logo from './logo.svg';
import './App.css';
import MonginisNavbar from './MonginisNavbar';
import MonginisCarousel from './MonginisCarousel';
import { Data } from './HappinessSection2'; 
import HappinessSection2 from './HappinessSection2';
import Promotions from './Promotions';
import Speciality from './Speciality';
import ShopCakeCategory2 from './ShopCakeCategory2';
import BestsellerCategories from './BestsellerCategories ';
import {categories} from './BestsellerCategories ';

function App() {
  return (
    <div className="App">
      <MonginisNavbar />
      <MonginisCarousel />
      <HappinessSection2 Data={Data} />
      <BestsellerCategories categories={categories}/>
      {/* <HappinessSection /> */}
      <ShopCakeCategory2 />
      <Promotions />
      <Speciality /> 
    </div>
  );
}

export default App;
