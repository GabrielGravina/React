import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Gabriel"/>
      <UserGreeting />
    </>
  );
}

export default App
