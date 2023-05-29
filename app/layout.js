import "./globals.css";
import store from "./Store";
import Main from "./home/MainContainer";
import { Provider } from "react-redux";

export const metadata = {
  title: "Next",
  description: "G",
};

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
