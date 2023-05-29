"use client";
import { Provider } from "react-redux";
import "./globals.css";
import store from "./Store";
import Main from "./home/MainContainer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Main children={children} />
        </Provider>
      </body>
    </html>
  );
}
