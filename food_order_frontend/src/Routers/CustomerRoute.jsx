import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/Home/HomePage'
import Navbar from '../customer/component/Navbar/Navbar'
import Cart from '../customer/pages/Cart/Cart'
import Profile from '../customer/pages/Profile/Profile'
// import PaymentSuccess from '../customers/pages/PaymentSuccess/PaymentSuccess'
// import Search from '../customers/components/Search/Search'
// import CreateRestaurantForm from '../Admin/AddRestaurants/CreateRestaurantForm'
import RestaurantDetail from '../customer/pages/Restaurant/RestaurantDetail'
import Auth from '../customer/pages/Auth/Auth'
import PaymentSuccess from '../customer/pages/PaymentSuccess/PaymentSuccess'
// import PasswordChangeSuccess from '../customers/pages/Auth/PasswordChangeSuccess'
// import NotFound from '../customers/pages/NotFound/NotFound'



const CustomerRoute = () => {
  return (
    <div className='relative'>
        <nav className="sticky top-0 z-50">
            <Navbar/>
        </nav>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/account/:register' element={<HomePage/>}/>
            <Route exact path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            {/* <Route path='/search' element={<Search/>}/>
            <Route path='/admin/add-restaurant' element={<CreateRestaurantForm/>}/>
            <Route exact path='/password_change_success' element={<PasswordChangeSuccess/>}/>
            <Route exact path='/*' element={<NotFound/>}/> */}
        </Routes>
        <Auth></Auth>
    </div>
  )
}

export default CustomerRoute;