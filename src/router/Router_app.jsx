import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator_view from '../views/project_calculator/Calculator_view';
import Todoist_view from '../views/project_todoist/Todoist_view';

function Router_app(){
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Calculator_view/>}/>
            <Route path="/todoist"  element={<Todoist_view/>}/>
        </Routes>
    </BrowserRouter>
    </>
)}

export default Router_app