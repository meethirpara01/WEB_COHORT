import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Recipecontext from "./context/RecipeContext.jsx";


createRoot(document.getElementById('root')).render(
    <Recipecontext>
        <BrowserRouter>
            <App />
            <ToastContainer></ToastContainer>
        </BrowserRouter>
    </Recipecontext>
);
