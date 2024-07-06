import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
function Dashboard(props){
    const {userRole}=props;
    switch(userRole){
        case 'admin':
            return <AdminDashboard />
        case 'user':
            return <UserDashboard />
        default:
            return <div>Error:Invalid User Role</div>
    }
}
export default Dashboard;