import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import ListaProjetos from './pages/ListaProjetos.jsx';
import Contato from "./pages/Contato.jsx";
import PageNotFound from './pages/PageNotFound.jsx';
import DetalheProjeto from './pages/DetalheProjeto.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/projetos", element: <ListaProjetos /> },
      { path: "/contato", element: <Contato /> },
      { path: "/projetos/:id", element: <DetalheProjeto /> },
      { path: "*", element: <PageNotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
