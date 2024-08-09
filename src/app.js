import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Body from "./components/Body"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

const App = () => {
    return (
      <div>
          <Header />
          <Outlet />
      </div>
    );
  };
  

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);