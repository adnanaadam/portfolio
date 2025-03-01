// import Footer from "./components/footer";
import Navbar from "@/components/ui/nav";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
