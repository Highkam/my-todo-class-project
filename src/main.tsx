import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_API_SENTRY_DSN,
  tracesSampleRate: 1.0,
  sendDefaultPii: true
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
