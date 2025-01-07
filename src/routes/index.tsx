import { Route, Routes } from 'react-router-dom'
import MainPage from '@pages/MainPage'
import WorkDetail from '@pages/WorkDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='/works/:id'
        element={<WorkDetail />}
      />
    </Routes>
  )
}

export default AppRoutes
