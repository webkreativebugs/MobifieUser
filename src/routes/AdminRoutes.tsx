import { Routes, Route } from 'react-router-dom'
import { admin } from '../constant/routes/AdminRouteConstant'


function AdminRoutes() {
  return (
    <Routes>
      {admin.map((routes) => {
        const Component = routes.component; // 👈 Capitalize first letter
        return <Route
  path={routes.route}
  element={<Component route={{ params: {} }} />} // pass the required prop
/>;
      })}
    </Routes>
  );
}

export default AdminRoutes;
