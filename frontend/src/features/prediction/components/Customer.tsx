
import "../App.css";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { CustomerData } from "../types/prediction";

interface CustomerFormProps {
  onSubmit: (customer: CustomerData) => void;
}

function CustomerForm({ onSubmit }: CustomerFormProps) {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<CustomerData>({
    CreditScore: 650,
    Geography: "France",
    Gender: "Female",
    Age: 30,
    Tenure: 5,
    Balance: 50000,
    NumOfProducts: 2,
    HasCrCard: 1,
    IsActiveMember: 1,
    EstimatedSalary: 50000,
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-6 relative">
          Customer Information
        </h1>

        {/* Customer form appears after clicking the button */}
        {showForm && (
          <div className="w-full max-w-3xl mt-4 lg:mt-2 p-5 rounded-2xl bg-slate-900/70 border border-cyan-400/20 shadow-xl shadow-cyan-500/10">
            <h2 className="text-2xl font-bold text-white mb-4 lg:mb-6">
              Customer Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Credit Score */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="CreditScore">
                  Credit Score
                </label>

                <input
                  id="CreditScore"
                  type="number"
                  min="300"
                  max="850"
                  value={formData.CreditScore}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      CreditScore: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Age */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="Age">
                  Age
                </label>

                <input
                  id="Age"
                  type="number"
                  min="1"
                  value={formData.Age}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      Age: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

            {/* Geography */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-300" htmlFor="Geography">
                Geography
              </label>

              <select
                id="Geography"
                value={formData.Geography}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Geography: e.target.value as CustomerData["Geography"],
                  })
                }
                className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
              </select>
            </div>

              {/* Tenure */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-300" htmlFor="Tenure">
                Tenure (Years)
              </label>

              <input
                id="Tenure"
                type="number"
                min="0"
                max="15"
                value={formData.Tenure}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Tenure: Number(e.target.value),
                  })
                }
                className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>    
            {/* Balance */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-300" htmlFor="Balance">
                Account Balance
              </label>

              <input
                id="Balance"
                type="number"
                min="0"
                step="0.01"
                value={formData.Balance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Balance: Number(e.target.value),
                  })
                }
                className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"/>
            </div>
            {/* Number of Products */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="NumOfProducts">
                  Number of Products
                </label>

                <input
                  id="NumOfProducts"
                  type="number"
                  min="1"
                  max="4"
                  step="1"
                  value={formData.NumOfProducts}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      NumOfProducts: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              {/* Estimated Salary */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="EstimatedSalary">
                  Estimated Salary
                </label>

                <input
                  id="EstimatedSalary"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.EstimatedSalary}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      EstimatedSalary: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              {/* Has Credit Card */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="HasCrCard">
                  Has Credit Card?
                </label>

                <select
                  id="HasCrCard"
                  value={formData.HasCrCard}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      HasCrCard: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              {/* Is Active Member */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300" htmlFor="IsActiveMember">
                  Is Active Member?
                </label>

                <select
                  id="IsActiveMember"
                  value={formData.IsActiveMember}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      IsActiveMember: Number(e.target.value),
                    })
                  }
                  className="p-3 lg:p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
          </div>

            
            {/* Submit button */}
            <button
              type="submit"
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              Submit Customer
            </button>
          </div>
        )}

        {/* Original Predict Churn button */}
        {!showForm && (
          <button
            className="group relative overflow-hidden px-8 py-3.5 m-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-600 text-white text-lg font-bold border border-cyan-300/30 shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40 hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            type="button"
            onClick={() => setShowForm(true)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <BrainCircuit size={20} />
              Predict Churn
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>
        )}
      </div>
    </form>
  );
}

export default CustomerForm;