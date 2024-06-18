import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const Body = () => {

    const routeConfig = [
        {
            path: "/",
            element: <Login></Login>
        },
        {
            path: "/browse",
            element: <Browse></Browse>
        }
    ];
    const appRouter = createBrowserRouter(routeConfig);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;