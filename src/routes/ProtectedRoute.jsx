import { Navigate, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Navbar from '../components/Navbar';
import { useAuth } from "../contexts/Auth";
import { ModalProvider, useModal } from "../contexts/ModalContext";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const { relation } = useModal();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid row">
        <nav className="offcanvas-md offcanvas-start col-md-3 col-lg-2" tabIndex="-1" id="sidebar" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Estoque</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebar" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Menu />
          </div>
        </nav>
        <main className="col-md-9 col-lg-10 ps-5">
          <Outlet />
          { relation && <Modal /> }
        </main>
      </div>
    </>
  )
}

export default ProtectedRoute