import { createRoot } from 'react-dom/client';
import Home from "./components/home/Home.jsx"


const container = document.getElementById('home');
const root = createRoot(container);
root.render(<Home tab="home" />);