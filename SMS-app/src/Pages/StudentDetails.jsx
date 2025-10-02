import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context.jsx/AuthContext";

export const StudentDetails = () => {
  const { role } = useAuth();
  const navigate = useNavigate();
  const [stuInfo, setStuInfo] = useState([]);
  const [syl, setSyl] = useState([]);

  const getAllStudent = async () => {
    const response = await axios.get(`http://localhost:3000/school/student`);
    // console.log(response.data);
    setStuInfo(response.data.data);
    setSyl(response.data.studentYearLevelIds);
  };
  // const handleClick = () => {
  //   navigate(`/fee/${stuInfo.id}`);
    console.log(stuInfo);

  // };

  useEffect(() => {
    getAllStudent();
  }, []);
  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-blue-600">
        Student Details
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stuInfo.map((info, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-6 sm:p-5"
          >
            {/* Profile Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/183/183760.png"
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mt-2 border border-gray-300"
            />

            {/* Student Name */}
            <div className="mt-4 text-center w-full">
              <h5 className="text-lg sm:text-xl font-bold text-blue-600">
                {info.userData.map((user, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm block sm:inline-block m-1"
                  >
                    {user.first_name} {user.last_name}
                  </span>
                ))}
              </h5>

              {/* DOB */}
              <div className="mb-4">
                <div className="mt-1 flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
                    DOB: {info.date_of_birth}
                  </span>
                </div>
              </div>

              {/* Guardian Details */}
              <div className="mb-3">
                <strong className="text-gray-700 block mb-2 text-sm sm:text-base">
                  Guardian Details
                </strong>
                <div className="flex flex-col sm:flex-wrap sm:flex-row gap-2 justify-center text-center">
                  <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
                    Father's Name: {info.father_name}
                  </span>
                  <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
                    Mother's Name: {info.mother_name}
                  </span>
                  {info.guardianData.map((g, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 sm:flex-row sm:flex-wrap justify-center"
                    >
                      <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
                        Occupation: {g.occupation}
                      </span>
                      <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
                        Annual Income: {g.annual_income}
                      </span>
                      <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
                        Qualification: {g.qualification}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div className="mb-4">
                <div className="mt-1 flex flex-wrap gap-2 justify-center">
                  {info.userData.map((user, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                    >
                      Gender: {user.gender}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="mb-4">
                <strong className="text-gray-700 block mb-2">
                  Contact Details:
                </strong>
                <div className="mt-1 flex flex-col gap-2 items-center sm:items-start sm:flex-wrap sm:flex-row justify-center">
                  {info.userData.map((user, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm text-center sm:text-left"
                    >
                      Email: {user.email}
                      <br className="hidden sm:block" />
                      Phone: {user.phone_no}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fee Button */}
         
                <div className="mt-auto flex justify-evenly" >
                  {role == "officestaff" && (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
                      onClick={() => navigate(`/fee/${syl[idx]}`)}
                    >
                      Fee
                    </button>
                  )}
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
                    onClick={()=>navigate(`/feeRecord/${syl[idx]}`)}
                    >
                      Fee Record
                    </button>
                </div>
        
            </div>
          </div>
        ))}

        {stuInfo.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No Student data available.
          </div>
        )}
      </div>
    </div>
  );
};
