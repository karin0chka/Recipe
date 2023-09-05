import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from "./app/store"


import { Provider } from 'react-redux'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
