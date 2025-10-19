import Login from './Login'
import Browse from './Browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import WatchTrailers from './WatchTrailers';



const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>,
        },
        {
            path : "/watch",
            element : <WatchTrailers/>
        },
        {
            path : "/watchTrailer",
            element : <WatchTrailers/>
        }
    
    ]);



    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body