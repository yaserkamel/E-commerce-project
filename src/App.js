import Footer from "./components/Utility/Footer";
import NavbarLogin from "./components/Utility/NavbarLogin";
import ProtectedRoute from "./components/Utility/ProtectedRoute";
import ProtectedRootHook from "./hook/auth/protected-root-hook";
import ResetPasswordPage from "./hook/auth/resetPasswordPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddCouponpage from "./pages/Admin/AdminAddCouponpage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddproductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import VerifyPasswordPage from "./pages/Auth/verifyPasswordPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import CartPage from "./pages/Cart/CartPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import ChoosePayMethoudPage from "./pages/Checkout/ChoosePayMethoudPage";
import PorductDetailsPage from "./pages/Products/PorductDetailsPage";
import ProductByBrandPage from "./pages/Products/ProductByBrandPage";
import ProductByCategoryPage from "./pages/Products/ProductByCategoryPage";
import ShopProductsPage from "./pages/Products/ShopProductsPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter ,Routes , Route  } from "react-router-dom";

function App() {

  const [isUser,isAdmin,userData]=ProtectedRootHook()
  // console.log(isUser)
  // console.log(isAdmin)
  return (
    <div className="font">
      <NavbarLogin/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/allCategory" element={<AllCategoryPage/>}/>
          <Route path="/allbrand" element={<AllBrandPage/>}/>
          <Route path="/products" element={<ShopProductsPage/>}/>
          <Route path="/products/:id" element={<PorductDetailsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          
          <Route path="/products/category/:id" element={<ProductByCategoryPage/>}/>
          <Route path="/products/brand/:id" element={<ProductByBrandPage/>}/>

        <Route element={<ProtectedRoute auth={isAdmin}/>}>
          <Route path="/admin/allproducts" element={<AdminAllProductsPage/>}/>
          <Route path="/admin/allorders" element={<AdminAllOrdersPage/>}/>
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage/>}/>
          <Route path="/admin/addbrand" element={<AdminAddBrandPage/>}/>
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>}/>
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>}/>
          <Route path="/admin/addproduct" element={<AdminAddProductsPage/>}/>
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage/>}/>
          <Route path="/admin/addcoupon" element={<AdminAddCouponpage/>}/>
          <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage/>}/>
        </Route>

        <Route element={<ProtectedRoute auth={isUser}/>}>
          <Route path="/user/allorders" element={<UserAllOrdersPage/>}/>
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage/>}/>
          <Route path="/user/addresses" element={<UserAllAddresPage/>}/>
          <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage/>}/>
          <Route path="/user/profile" element={<UserProfilePage/>}/>
          <Route path="/user/forget-password" element={<ForgetPasswordPage/>}/>
          <Route path="/user/verify-code" element={<VerifyPasswordPage/>}/>
          <Route path="/user/reset-password" element={<ResetPasswordPage/>}/>
          <Route path="/order/paymethod" element={<ChoosePayMethoudPage/>}/>
        </Route>


        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
