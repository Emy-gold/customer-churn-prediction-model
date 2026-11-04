import CustomerForm from "./containers/Customer";
import "./App.css"

function App() {
   
  return <div className="bg-mesh h-screen min-w-full m-0 w-full">
    <CustomerForm onSubmit={function (): void {
      throw new Error("Function not implemented.");
    }}
    />
  </div>;
}

export default App
