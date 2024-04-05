import { createBrowserRouter } from 'react-router-dom';
import App from "../App.tsx";
import HomePages from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <HomePages/>
            }
        ]
    },
]);

export default router;