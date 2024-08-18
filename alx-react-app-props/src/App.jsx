import ProfilePage from "./ProfilePage";
import { UserContext } from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
  <div>
    <UserContext value = {userData}>
    <ProfilePage />
    </UserContext>
  </div>
  )
}

export default App;
