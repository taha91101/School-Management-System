import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context.jsx/AuthContext";

export const Sidebar = () => {
  const { role } = useAuth();
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn  drawer-button">
          {" "}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <h1 className="text-shadow-lg/30">Dashboard</h1>
        {role == "director" && (
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to={"admissionForm"}>Admission Form</Link>
            </li>
            <li>
              <Link to={"teacherRegistration"}>Teacher Registration</Link>
            </li>
            <li>
              <Link to={"staffRegistration"}>Staff Registration</Link>
            </li>
            <li>
              <Link to={"studentDetails"}>Student Details</Link>
            </li>
            <li>
              <Link to={"teacherDeatails"}>Teacher Details</Link>
            </li>
            <li>
              <Link to={"staffDetails"}>Staff Details</Link>
            </li>
            <li>
              <Link to={"setPeriods"}>Periods</Link>
            </li>
            <li>
              <Link to={"addSubjects"}>Add Subject</Link>
            </li>
          </ul>
        )}
        {role == "teacher" && (
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <h1 className="text-shadow-lg/30">Dashboard</h1>

            <li>
              <Link to={"studentDetails"}>Student Details</Link>
            </li>

            <li>
              <Link to={"staffDetails"}>Staff Details</Link>
            </li>
            <li>
              <Link to={"markAttendence"}>Attendence</Link>
            </li>
          </ul>
        )}
        {role == "officestaff" && (
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <h1 className="text-shadow-lg/30">Dashboard</h1>
            <li>
              <Link to={"admissionForm"}>Admission Form</Link>
            </li>
            <li>
              <Link to={"studentDetails"}>Student Details</Link>
            </li>
            <li>
              <Link to={"teacherDeatails"}>Teacher Details</Link>
            </li>
            <li>
              <Link to={"setPeriods"}>Periods</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
