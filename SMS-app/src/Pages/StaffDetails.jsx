import axios from "axios";
import React, { useEffect, useState } from "react";

export const StaffDetails = () => {
  const [staffInfo, setstaffInfo] = useState([]);

  const getAllstaff = async () => {
    const response = await axios.get(`http://localhost:3000/school/staff`);
    console.log(response.data.data);
    setstaffInfo(response.data.data);
  };
  useEffect(() => {
    getAllstaff();
  }, []);
  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-600">
        Staff Details
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {staffInfo.map((info, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/183/183760.png"
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full mt-2"
            />
            <div className="mt-4 text-center w-full">
              <h5 className="text-lg font-bold text-blue-600">
                {info.userData.map((user, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                  >
                    {user.first_name} {user.last_name}
                  </span>
                ))}
              </h5>

              <div className="mb-4">
                {/* <strong className="text-gray-700">Contact Details : </strong> */}
                <div className="mt-1 flex flex-wrap gap-2 flex-col justify-evenly">
                  <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
                     Date of Joining : {info.date_joined}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                {/* <strong className="text-gray-700"> </strong> */}
                <div className="mt-1 flex flex-wrap gap-2 justify-center">
                  {info.userData.map((user, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                    >
                      Gender : {user.gender}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Contact Details : </strong>
                <div className="mt-1 flex flex-wrap gap-2 justify-center">
                  {info.userData.map((user, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                    >
                      Email : {user.email} <br />
                      Phone No : {user.phone_no}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {staffInfo.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No Staff data available.
          </div>
        )}
      </div>
    </div>
  );
};
