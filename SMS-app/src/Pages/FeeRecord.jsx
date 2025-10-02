import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FeeRecord = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const GetFeeDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/school/feeRecord/${id}`
      );
      console.log(response.data);
      setDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetFeeDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Fee Record</h1>
            <p className="mt-2 text-gray-600">Fees Data</p>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Receipt</th>
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-left">Fee Type</th>
                  <th className="px-4 py-2 text-left">Total Amount</th>
                  <th className="px-4 py-2 text-left">Due Amount</th>
                  <th className="px-4 py-2 text-left">Late Fee</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Remarks</th>
                  <th className="px-4 py-2 text-left">Sign</th>
                </tr>
              </thead>
              <tbody>
                {details.map((info, idx) => (
                  <tr key={idx} className="text-center">
                    <td>{info.receipt_number}</td>
                    <td>{info.month}</td>
                    <td>{info.fee_type}</td>
                    <td>{info.total_amount}</td>
                    <td>{info.due_amount}</td>
                    <td>{info.late_fee}</td>
                    <td>{info.payment_status}</td>
                    <td>{info.remarks}</td>
                    <td>{info.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//     <div className="p-8">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
//           Fee Record
//         </h1>
//         <p className="mt-3 text-lg text-gray-600">Overview of all fee transactions</p>
//       </div>

//       {/* Fee Table */}
//       <div className="overflow-x-auto rounded-lg border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Receipt</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Months</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Fee Type</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Total Amount</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Due Amount</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Late Fee</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Status</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Remarks</th>
//               <th className="px-6 py-3 text-left font-semibold tracking-wide">Sign</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100 bg-white">
//             {details.map((info, idx) => (
//               <tr
//                 key={idx}
//                 className="hover:bg-blue-50 transition duration-150 ease-in-out"
//               >
//                 <td className="px-6 py-4 text-gray-800">{info.receipt_number}</td>
//                 <td className="px-6 py-4 text-gray-600">{info.month}</td>
//                 <td className="px-6 py-4">{info.fee_type}</td>
//                 <td className="px-6 py-4 font-semibold text-gray-900">
//                   ₹{info.total_amount}
//                 </td>
//                 <td className="px-6 py-4 text-red-500">
//                   {info.due_amount > 0 ? `₹${info.due_amount}` : "-"}
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   {info.late_fee ? `₹${info.late_fee}` : "-"}
//                 </td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 text-xs font-medium rounded-full ${
//                       info.payment_status === "Paid"
//                         ? "bg-green-100 text-green-700"
//                         : info.payment_status === "Pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {info.payment_status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-gray-600 italic">
//                   {info.remarks || "—"}
//                 </td>
//                 <td className="px-6 py-4 text-gray-800">{info.signature}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>

  );
};
