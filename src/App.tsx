// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { adminRoutes, privateRoutes, publicRoutes } from './routes/allRoutes';
// import Home from './pages/Public/Home';
// import AdminRoute from './routes/AdminRoute';
// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';

import { RouterProvider } from 'react-router-dom';
import CreateAppRouter from './routes/routes';

// function App() {
//   return <App />;
// }
// // <Router>
// //   <Routes>
// //     {/* Public Routes */}
// //     {publicRoutes.map(({ path, element }) => (
// //       <Route
// //         key={path}
// //         path={path}
// //         element={<PublicRoute element={element} />}
// //       />
// //     ))}

// //     {/* Private Routes */}
// //     {privateRoutes.map(({ path, element }) => (
// //       <Route
// //         key={path}
// //         path={path}
// //         element={<PrivateRoute element={element} />}
// //       />
// //     ))}

// //     {/* Admin Routes */}
// //     {adminRoutes.map(({ path, element }) => (
// //       <Route
// //         key={path}
// //         path={path}
// //         element={<AdminRoute element={element} />}
// //       />
// //     ))}

// //     {/* Unauthorized and 404 Routes */}
// //     <Route path='/home' element={<Home />} />
// //     <Route path='*' element={<>nai vai</>} />
// //   </Routes>
// // </Router>

// export default App;

const App = () => {
  const router = CreateAppRouter(); // Call the component function to get the router

  return <RouterProvider router={router} />;
};

export default App;
