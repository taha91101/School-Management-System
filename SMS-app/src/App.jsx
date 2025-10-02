import "./App.css";
import { Login } from "./Pages/Login";
import { Nopage } from "./Pages/Nopage";
import { Layout } from "./Pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { AdmissionForm } from "./Pages/AdmissionForm";
import { TeacherRegistration } from "./Pages/TeacherRegistration";
import { StudentDetails } from "./Pages/StudentDetails";
import { TeacherDetails } from "./Pages/TeacherDetails";
import { StaffDetails } from "./Pages/StaffDetails";
import { StaffRegistration } from "./Pages/StaffRegistration";
import FeeSubmission from "./Pages/FeeSubmission";
import ClassPeriod from "./Pages/ClassPeriod";
import { AddSubjects } from "./Pages/AddSubjects";
import { StudentAttendence } from "./Pages/StudentAttendence";
import { FeeRecord } from "./Pages/FeeRecord";
import { Card } from "./Pages/Card";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="admissionForm" element={<AdmissionForm />} />
            <Route path="studentDetails" element={<StudentDetails />} />
            <Route path="teacherDeatails" element={<TeacherDetails />} />
            <Route path="staffDetails" element={<StaffDetails />} />
            <Route path="fee/:id" element={<FeeSubmission />} />
            <Route path="teacherRegistration" element={<TeacherRegistration />}  />
            <Route path="staffRegistration" element={<StaffRegistration />} />
            <Route path="setPeriods" element={<ClassPeriod />} />
            <Route path="addSubjects" element={<AddSubjects />} />
            <Route path="markAttendence" element={<StudentAttendence />} />
            <Route path="feeRecord/:id" element={<FeeRecord />} /> 
            <Route path="card" element={<Card />} /> 
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
