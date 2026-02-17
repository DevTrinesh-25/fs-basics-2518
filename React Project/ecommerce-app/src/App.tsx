import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductHighlights from './pages/ProductHighlights';
import RatingsReviews from './pages/RatingsReviews';
import QuestionAnswers from './pages/QuestionAnswers';
import Employees from './pages/Employees';
import Groceries from './pages/Groceries';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path='product-details/:productId' element={<ProductDetails/>}>
          <Route path="" element={<ProductHighlights/>}></Route>
          <Route path="ratings-reviews" element={<RatingsReviews/>}></Route>
          <Route path="questions-answers" element={<QuestionAnswers/>}></Route>
        </Route>
        <Route path="employees" element={<Employees/>}></Route>
        <Route path="Groceries" element={<Groceries/>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  )
}

export default App
