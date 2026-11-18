import CustomerForm from "./containers/Customer";
import "./App.css"

function App() {
   
  return <div className="min-h-screen min-w-screen m-0 w-full flex flex-col items-center justify-center bg-mesh transition-colors">
    <CustomerForm onSubmit={function (): void {
      throw new Error("Function not implemented.");
    }}
    />
  </div>;
}

export default App
