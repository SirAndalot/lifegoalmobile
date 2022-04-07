import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import DashboardHome from "../Components/Dashboardhome";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <Navigation />
        <div className="container">
          <Sidebar />
          <DashboardHome />
        </div>
      </div>
      <div className="d-grid gap-2">
        <button variant="primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
