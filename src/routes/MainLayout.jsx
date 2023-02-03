import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, Modal, Navbar } from "../components";
import { useModal } from "../contexts/ModalContext";

const MainLayout = () => {
  const { modal } = useModal();

  return (
    <>
      <Navbar />
      <div className="container-fluid row h-100">
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
          { modal ? <Modal /> : null }
        </main>
      </div>
    </>
  )
}

export default MainLayout