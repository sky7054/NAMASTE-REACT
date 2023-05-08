import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


//Chunking
//code Splitting
//Dynamic Bundling
//lazy Loading
//On Demond Loading
// Dynamic Import

const InstaMart = lazy(() => import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));
// Upon on Demand Loading --> upon render --> suspend loading

const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

// Routing(finding) a path

const appRouter = createBrowserRouter([
    {
        path:"/", 
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/about",
                element:(
                    <Suspense fallback ={<Shimmer/>}>
                    <About/>
                    </Suspense>),
                children:[{
                    path:"profile",
                    element:<Profile/>,
                },
            ],
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/Restaurant/:id",
                element:<RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element:(
                    <Suspense fallback = {<Shimmer/>}>
                    <InstaMart/>
                    </Suspense>
                    ),
            },
        ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

