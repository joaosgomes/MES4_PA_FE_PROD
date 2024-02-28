// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {EventEdit,EventForm,EventDetail,EventList } from "../index.js";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/MES4_PA_FE_PROD" element={<EventList />} />
      <Route path="/MES4_PA_FE_PROD/event/:eventId" element={<EventDetail />} />
      <Route path="/MES4_PA_FE_PROD/new-event" element={<EventForm />} />
      <Route path="/MES4_PA_FE_PROD/edit-event/:eventId" element={<EventEdit />} />
    </Routes>
  );
};

export default AppRoutes;