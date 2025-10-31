import { Routes, Route } from "react-router-dom";

import { buildRoute } from "../constant/routes/BuildRouteConstant";
// import { buildRoute } from "../../../../constant/routes/BuildRouteConstant";

function buildRoutes() {
  return (
    <Routes>
      {buildRoute.map((routes, key) => (
        <Route key={key} path={routes.route} element={<routes.component />} />
      ))}
    </Routes>
  );
}

export default buildRoutes;
