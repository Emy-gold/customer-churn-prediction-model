import "../App.css"
import { BrainCircuit, ArrowRight } from "lucide-react";

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
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-6 relative">Customer Information</h1>
        <button className="group relative overflow-hidden px-8 py-3.5 m-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-600 text-white text-lg font-bol border border-cyan-300/30 shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40 hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900" type="submit">
          <span className="relative z-10 flex items-center gap-2">
            <BrainCircuit size={20} />
              Predict Churn
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
          </span>
        </button>
      </div>

    </form>
  );
}

export default CustomerForm;