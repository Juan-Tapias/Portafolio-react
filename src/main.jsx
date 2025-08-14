import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Header from './header.jsx';
import Inicio from './inicio.jsx';
import SobreMi from './sobre-mi.jsx'
import Skills from './skills.jsx'
import Proyectos from './proyecto.jsx'
import Soft from './soft-skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inicio />
    <SobreMi />
    <Skills />
    <Proyectos />
    <Soft />
  </StrictMode>
);
