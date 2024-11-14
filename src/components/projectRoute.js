import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Electronic from "./Electronic";
import Search from "./Search";
import Filter from "./Filter";
import Productpage from "./Productpage";
import App from "./App";
import Cart from "./Cart";

const projectRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children : [
            {
                path: '',
                element: <Homepage/>
            },
            {
                path: '/fakestore-electronics/:catname',
                element: <Electronic/>
            },
            {
                path: '/fakestore-search',
                element: <Search/>
            },
            {
                path: '/fakestore-filter',
                element: <Filter/>
            },
            {
                path: '/productpage/:productid',
                element: <Productpage/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
    
])

export default projectRoute;