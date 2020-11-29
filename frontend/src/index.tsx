import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./config";
import { AuthProvider } from "./hooks/services/useAuth";
import { GroupProvider } from "./hooks/services/useGroup";

// Temp work space
import { WebRTC } from './api/webRTC';
const webRTC = new WebRTC();
console.log('webRTC:', webRTC)


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <SocketProvider> */}
      <AuthProvider>
        <GroupProvider>
          <App />
        </GroupProvider>
      </AuthProvider>
      {/* </SocketProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
