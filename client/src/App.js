import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";


function App() {
    return (
<BrowserRouter>
<AppContext>
<Header></Header>
    <Routes>
        {/* jitne pages utne routes route=page */}
<Route path="/" element={<Home></Home>}></Route>
<Route path="/category/:id" element={<Category></Category>}></Route>
<Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>
    </Routes>
    <Newsletter></Newsletter>
    <Footer></Footer>

</AppContext>

</BrowserRouter>

    );
}

export default App;
