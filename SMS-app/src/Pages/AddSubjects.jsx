import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const AddSubjects = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/school/addsubject",
        data
      );
      alert("Subject add Successfully");
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Add Subject</h1>
            <p className="mt-2 text-gray-600">
              Please fill in all the required details
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Department Name */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="departmentName"
                >
                  Department Name <span className="text-red-500">*</span>
                </label>
                <select
                  id="departmentName"
                  {...register("department_name", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Department</option>
                  <option value="common">Nursery - 10</option>
                  <option value="pcm">PCM</option>
                  <option value="bio">BIO</option>
                  <option value="arts">ARTS</option>
                  <option value="commerce">COMMERCE</option>
                </select>
              </div>

              {/* Subject Name */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="subjectName"
                >
                  Subject Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subjectName"
                  {...register("subject_name", { required: true })}
                  placeholder="Enter subject name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Add Subject
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
