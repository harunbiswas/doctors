import { Outlet } from "react-router-dom";
import Footer from "../../layouts/footers/Footer";
import Header from "../../layouts/headers/Header";

export default function FrontendLayout() {
  return (
    <div className="forntend-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
