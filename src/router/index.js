import Home from "../components/home";
import Category from "../components/category";
import Cart from "../components/cart";
import User from "../components/user";
import Search from "../components/search";
import Commodity from "../components/commodity";
import NotFound from "../components/notFound";

const routes = [
    {
        exact : true,
        path : "/",
        component : Home
    },
    {
        path : "/category",
        component : Category
    },
    {
        path : "/cart",
        component : Cart
    },
    {
        path : "/user",
        component : User
    },
    {
        path : "/search",
        component : Search
    },
    {
        path : "/commodity/detail/:shopid",
        component : Commodity
    },
    {
        component : NotFound
    }
];

export default routes;