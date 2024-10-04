import UserContextProvider from "./context/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
      <h1>Using Context API</h1>
    </UserContextProvider>
  )
}

export default App
