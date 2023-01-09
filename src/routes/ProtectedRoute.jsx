import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from '../components/Navbar';
import { getSession } from "../controllers/Auth";
import { Offcanvas } from 'bootstrap';


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
      <>
        <Navbar />
        <div className="offcanvas-md offcanvas-start" tabIndex="-1" id="offcanvasResponsiveLabel" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Estoque</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsiveLabel" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Menu />
          </div>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </>
  )
}

export default ProtectedRoute