import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import { ThemeContextProvider } from './theme'
import { GlobalStyles } from './theme/styles/globalStyles'

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}

export default App
