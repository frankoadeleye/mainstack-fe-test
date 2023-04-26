import Layout from "common/layout";
import DashboardContents from "components/dashboard-home-contents";
import Sidebar from "components/sidebar";

function Dashboard() {
  return (
    <Layout>
      <Sidebar />
      <DashboardContents />
    </Layout>
  );
}

export default Dashboard;
