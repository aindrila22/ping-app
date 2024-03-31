import { backendUrl } from "@/utils/url";
import dynamic from "next/dynamic";

const DynamicUserList = dynamic(() => import("@/components/Home"), {
  ssr: false,
});
async function getUsers() {
  const res = await fetch(`${backendUrl}/api/v1/getAllUsers`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }
  return res.json();
}
const Dashboard = async () => {
  const data = await getUsers();

  return <DynamicUserList users={data} />;
};

export default Dashboard;
