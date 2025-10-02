import axios from "axios";
import React, { useEffect, useState } from "react";

export const StudentAttendence = () => {
  const [year_level_id, set_year_level_id] = useState("");
  const [classes, setClasses] = useState([]);
  const [sameClassStudent, setSameClassStudent] = useState([]);
  const [studentGuardian, setStudentGuardian] = useState([]);
  const [status, setStatus] = useState("");
  const [studentID, setStudentID] = useState([]);
  const [syl, setSyl] = useState([]);
  const [marked, setMarked] = useState(
    `${new Date().toISOString().split("T")[0]}`
  );

  const setStatusFun = (studentID, value) => {
    setStatus((prev) => ({ ...prev, [studentID]: value }));
  };

  const getClass = async () => {
    const response = await axios.get("http://localhost:3000/school/classes");
    setClasses(response.data.allClasses);
    // console.log(response.data);
  };
  const onSubmitAttendence = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        student_id: studentID,
        Status: status,
        school_year_id: syl,
        marked_at: marked,
        teacher_id: localStorage.getItem("teacherID"),
        year_level_id: year_level_id,
      };
      const response = await axios.post(
        `http://localhost:3000/school/attendence`,
        payload
      );
      console.log(response);
      alert("Attendence marked Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const payload = {
    year_level_id: year_level_id,
  };
  const getStudentClassWise = async () => {
    const response = await axios.post(
      "http://localhost:3000/school/classwiseStudent",
      payload
    );
    setSameClassStudent(response.data.findStudentInUser);
    // console.log(response.data);

    setStudentGuardian(response.data.findInStudentTable);
    // console.log(response.data);
    setSyl(response.data.sameLevelStudent[0].year_level_id);
  };
  // console.log(syl);

  useEffect(() => {
    getClass();
  }, []);
  useEffect(() => {
    getStudentClassWise();
  }, [year_level_id]);
  useEffect(() => {
    setStudentID(studentGuardian.map((s) => s._id));
  }, [studentGuardian]);
  // console.log(studentID);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Daily Attendance
            </h1>
            <p className="mt-2 text-gray-600">Mark attendance for students</p>
          </div>

          <form className="space-y-6" onSubmit={onSubmitAttendence}>
            {/* Choose Class */}
            <div className="space-y-2">
              <label
                htmlFor="classes"
                className="block text-sm font-medium text-gray-700"
              >
                Choose Class <span className="text-red-500">*</span>
              </label>
              <select
                id="classes"
                required
                onChange={(e) => set_year_level_id(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Class for Attendance</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.level_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Attendance Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">First Name</th>
                    <th className="px-4 py-2 text-left">Last Name</th>
                    <th className="px-4 py-2 text-left">Father Name</th>
                    <th className="px-4 py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sameClassStudent.map((stu, idx) => (
                    <tr key={stu._id}>
                      <td>{stu.first_name}</td>
                      <td>{stu.last_name}</td>
                      <td>{studentGuardian[idx].father_name}</td>
                      <td>
                        <label htmlFor={`present${studentGuardian[idx]._id}`}>
                          Present
                        </label>
                        <input
                          type="radio"
                          id={`present${studentGuardian[idx]._id}`}
                          name={`attendence${studentGuardian[idx]._id}`}
                          // value={`present${studentGuardian[idx]._id}`}
                          onClick={() =>
                            setStatusFun(studentGuardian[idx]._id, "present")
                          }
                        />{" "}
                        <label htmlFor={`absent${studentGuardian[idx]._id}`}>
                          Absent
                        </label>
                        <input
                          type="radio"
                          id={`absent${studentGuardian[idx]._id}`}
                          name={`attendence${studentGuardian[idx]._id}`}
                          // value={`absent${studentGuardian[idx]._id}`}
                          onClick={() =>
                            setStatusFun(studentGuardian[idx]._id, "absent")
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
