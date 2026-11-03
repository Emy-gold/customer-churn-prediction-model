import CustomerForm from "./containers/Customer";

function App() {
   
  return <div>
    <CustomerForm onSubmit={function (): void {
      throw new Error("Function not implemented.");
    } }/>
  </div>;
}

export default App
