import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [

        ]
    }

])