import { Provider } from "react-redux";
import Router from "./components/Router/Router";
import store from './store/store';

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
