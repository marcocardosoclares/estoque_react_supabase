import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from '../components/Navbar';
import { getSession } from "../controllers/Auth";

export async function loader() {

    const session = await getSession();
    return session;
}

const ProtectedRoute = () => {
  const session = useLoaderData();

  if (!session) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-fluid min-vh-100 pb-2">
      <Navbar />
      <div className="hstack gap-2">
        <div className="offcanvas-md offcanvas-start mb-auto" tabIndex="-1" id="sidebar" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Estoque</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebar" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Menu />
          </div>
        </div>
        <div className="bg-body flex-grow-1 shadow-sm rounded mb-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProtectedRoute