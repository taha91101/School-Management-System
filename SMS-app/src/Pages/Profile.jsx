import { useAuth } from "../Context.jsx/AuthContext";

export const Profile = () => {
  const { user, role } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white overflow-hidden shadow-xl rounded-3xl">
          <div className="flex flex-col md:flex-row">
            {/* Profile Image Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
              <div className="relative">
                <img
                  src="https://cdn.vectorstock.com/i/500p/23/12/young-teacher-cartoon-woman-with-glasses-vector-46392312.jpg"
                  className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                  alt="Profile"
                />
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                Profile Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-lg font-semibold text-gray-800">
                     {user.first_name} {user.last_name}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">Gender</div>
                   <p className="text-lg font-semibold text-gray-800">
                      {user.gender}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-lg text-white">
                  <p className="text-sm font-medium">Account Type</p>
                  <p className="text-xl font-bold capitalize">{role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
