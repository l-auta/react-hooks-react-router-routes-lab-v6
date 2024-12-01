

import Home from './pages/Home';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Error from './pages/Error';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '*',  // This is the wildcard for all invalid paths
    element: <Error />,
  },
];

export default routes;
