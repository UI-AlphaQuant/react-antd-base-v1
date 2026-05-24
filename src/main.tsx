import React from 'react'
// import 'antd/dist/reset.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import { I18nProvider } from './i18n'
import { ErrorBoundary } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <I18nProvider>
          <App />
        </I18nProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
