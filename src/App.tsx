import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/admin/dashboard'
import LoginPage from './pages/login'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='app/*' element={<DashboardPage />} />
    </Routes>
  )
}

export default App
