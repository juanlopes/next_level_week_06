import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';


import {Home} from './pages/Home'
import { NewRoom } from './pages/NewRoom';

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> }
  ]);
  return routes;
}

export default App;
