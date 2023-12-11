import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error,HomeLayout,HomePage,About,Contacts,Service,ProductsPage,Login,VendingMachines,CoffeeMachines,Snacks, Faq, AdminPage,ProtectedRoute,VerifyEmail } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "contacts",
        element: <Contacts />,
        errorElement: <Error />,
      },
      {
        path: "service",
        element: <Service />,
        errorElement: <Error />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
            errorElement: <Error />,
          },
          {
            path: "vending",
            element: <VendingMachines />,
            errorElement: <Error />,
          },
          {
            path: "coffee",
            element: <CoffeeMachines />,
            errorElement: <Error />,
          },
          {
            path: "snacks-and-ingredients",
            element: <Snacks />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: 'faq',
        element: <Faq/>,
        errorElement: <Error/>,
      },
      {
        path:'admin',
        element: <ProtectedRoute children={<AdminPage/>}/>,
        errorElement: <Error/>,
      },
      {
        path:'verify-email',
        element:<VerifyEmail/>,
        errorElement: <Error/>,
      }
    ],
  },
]);
const App = () => {
  return (
      <RouterProvider router={router} />
  );
};
export default App;
