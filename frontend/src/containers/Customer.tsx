import "../App.css"

interface CustomerFormProps {
  onSubmit: () => void;
}

function CustomerForm({ onSubmit }: CustomerFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-pink-100 text-2xl font-bold">Customer Information</h1>
        <button type="submit">
          Predict Churn
        </button>
      </div>

    </form>
  );
}

export default CustomerForm;