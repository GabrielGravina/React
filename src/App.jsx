import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Lucas" age={42} isStudent={false}/>
      <Student name="Pedro" age={22} isStudent={true}/>
      <Student name="Amanda" age={21} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
