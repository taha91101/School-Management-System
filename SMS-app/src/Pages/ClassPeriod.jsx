import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const ClassPeriod = () => {
  const { register, handleSubmit, reset } = useForm();
  const [subject, setSubject] = useState([]);
  const [teachername, setTeachername] = useState([]);
  const [teacherIds, setTeacherIds] = useState([]);
  const getAllteacher = async () => {
    const response = await axios.get("http://localhost:3000/school/teacher/");
    // console.log(response.data.data);

    setTeachername(response.data.data);
    setTeacherIds(response.data.data.userData);
  };
  const getSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/school/subject/");
      console.log(response.data.subjectNames);
      setSubject(response.data.subjectNames);
    } catch (error) {
        console.log(error);
    }
};
const onSubmit = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/school/setPeriod",
            data
        );
        alert("Class Period Assigned Successfully")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  useEffect(() => {
    getSubjects();
    getAllteacher();
  }, []);
  // console.log(teachername);
  // console.log(teacherIds);
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Set Class Period
            </h1>
            <p className="mt-2 text-gray-600">
              Please fill in all the details to schedule a class period
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Subject */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                {...register("subject_name")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose Subject</option>
                {subject.map((sub, idx) => (
                  <option key={idx} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            {/* Teacher */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Teacher <span className="text-red-500">*</span>
              </label>
              <select
                {...register("first_name")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose Teacher</option>
                {teachername.map((tr) =>
                  tr.userData.map((t, idx) => (
                    <option key={idx} value={t.first_name}>
                      {t.first_name}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Start Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                {...register("start_period")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* End Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                End Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                {...register("end_period")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Classroom */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Classroom No. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("classroom_no")}
                placeholder="Enter classroom number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Period Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Period <span className="text-red-500">*</span>
              </label>
              <select
                {...register("name")}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Period</option>
                {[1, 2, 3, 4, 5].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Save Period
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassPeriod;
