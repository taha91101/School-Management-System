import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
const FeeSubmission = () => {
  const { register, handleSubmit,reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/school/feesdeposit/${id}`,
        data
      );
      alert("Fee Submitted Successfully")
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset()
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Fee Submission</h1>
            <p className="mt-2 text-gray-600">
              Fill in the fee payment details for the student
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Payment Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Type *
              </label>
              <select
                {...register("fee_type")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Payment Type</option>
                <option value="tuitionfee">Tuition Fee</option>
                <option value="culturalfee">Cultural Program Fee</option>
                <option value="examfee">Exam Fee</option>
              </select>
            </div>

            {/* Month */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Month *
              </label>
              <select
                {...register("month")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Total Amount *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("total_amount")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Paid Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Paid Amount *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("paid_amount")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Due Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Due Amount *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("due_amount")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Payment Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Date *
              </label>
              <input
                type="date"
                {...register("payment_date")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Receipt Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Receipt Number *
              </label>
              <input
                type="text"
                {...register("receipt_number")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Late Fee */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Late Fee *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("late_fee")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Payment Status */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Status *
              </label>
              <select
                {...register("payment_status")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Status</option>
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>

            {/* Remarks */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Remarks *
              </label>
              <textarea
                rows="3"
                {...register("remarks")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Signature */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Signature *
              </label>
              <input
                type="text"
                {...register("signature")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Submit Fee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeeSubmission;
