import './global.css'
import { Provider } from 'react-redux';
import user from "../store/store"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={user}>
      <Component {...pageProps} />
    </Provider>
  );
}