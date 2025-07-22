import { Routes, Route } from 'react-router-dom'
import { admin } from '../constant/routes/AdminRouteConstant'
function AdminRoutes() {
  return (
    <Routes>
      {admin.map((routes,key)=>

      <Route key={key} path={routes.route} element={<routes.component />} />
      )
     }
    </Routes>
  )
}

export default AdminRoutes

