import React, { useEffect, useState, useRef } from "react";
import "./App.css";

import {
  AppLayout,
  AppRoutes,
  OnlineStatusIndicator,
  ConnectionStatusMonitor,
} from "./components";

function App() {
  return (
    <AppLayout>
      <OnlineStatusIndicator />
      <ConnectionStatusMonitor />

      <AppRoutes />
    </AppLayout>
  );
}

export default App;
