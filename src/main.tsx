import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("VEXO: Initializing neural grid...");

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("VEXO Error: Terminal root not found.");

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log("VEXO: Interface online.");
} catch (error) {
  console.error("VEXO Critical Failure:", error);
  rootElement.innerHTML = `
    <div style="background: #0a0a0c; color: #fff; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; padding: 20px;">
      <h1 style="color: #00f0ff; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 20px;">NEURAL LINK FAILURE</h1>
      <p style="color: #a0a0a0; max-width: 400px; line-height: 1.6;">The interface encountered a critical runtime error. Please check the console logs for diagnostic data.</p>
      <button onclick="window.location.reload()" style="margin-top: 30px; background: #fff; color: #000; border: none; padding: 12px 30px; border-radius: 12px; font-weight: 900; cursor: pointer;">REINITIALIZE</button>
    </div>
  `;
}
