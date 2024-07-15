import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ErrorBoundary from './pages/ErrorPage';
import Slider from './pages/Slider';
import SubmitPage from './pages/SubmitPage';
import Final from './pages/Final';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: <Slider />,
        },
        {
          path: `/products/:productId`,
          element: <ProductDetail />,
        },
        {
          path: '/products',
          element:<Products/>,
        },
        {
          path: '/electronics',
          element: <Products category='electronics'/>,
        },
        {
          path: '/man',
          element: <Products category="men's%20clothing" />
        },
        {
          path: '/woman',
          element: <Products category="women's%20clothing" />
        },{
          path: '/jewellery',
          element: <Products category='jewelery' />
        },
        {
          path: '/contacts',
          element: <Contacts />
        },
        {
          path: '/submit',
          element: <SubmitPage />
        }, 
        {
          path: '/final',
          element: <Final />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
