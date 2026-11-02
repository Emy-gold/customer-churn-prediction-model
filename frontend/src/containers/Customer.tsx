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
      <h2>Customer Information</h2>

      <button type="submit">
        Predict Churn
      </button>
    </form>
  );
}

export default CustomerForm;