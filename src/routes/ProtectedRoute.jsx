import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import Accordion from "../components/menu/Accordion";
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
    <div className="container-fluid ps-0">
        <div className="row">
          <div class="offcanvas-md offcanvas-end col-auto bg-white" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <Accordion />
            </div>
          </div>
          <div className="col-8">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default ProtectedRoute