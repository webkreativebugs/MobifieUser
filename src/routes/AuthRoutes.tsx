import { Routes, Route } from 'react-router-dom'
import { auth } from '../constant/routes/AuthRouteConstant'
function AuthRoutes() {
  return (
    <Routes>
      {auth.map((routes,key)=>

      <Route key={key} path={routes.route} element={<routes.component />} />
      )
     }
    </Routes>
  )
}

export default AuthRoutes