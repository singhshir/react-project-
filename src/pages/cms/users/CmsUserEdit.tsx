export default function CmsUserEdit() {
    return (
        <div className="min-h-screen  p-6">

            <h1 className="text-2xl font-bold mb-6">
                User Profile
            </h1>

         
            <div className="bg-white w-full max-w-md mx-auto rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:scale-104 transition delay-300">

                {/* Card Header */}
                <div className="bg-teal-600 text-white px-6 py-4">
                    <h2 className="text-xl font-semibold">
                 USER CARD
                    </h2>

                    <p className="text-sm text-gray-300">
                        User Information
                    </p>
                </div>


                <div className="p-6">

                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center  hover:scale-103 delay-300 transation cursor-pointer hover:bg-amber-300">
                            <span className="text-3xl font-bold text-gray-500 hover:scale-103 transition delay-300">
                                SS
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">

                        <div>
                            <p className="text-sm text-gray-500">
                                Full Name
                            </p>

                            <p className="font-semibold">
                                Shishir Singh
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="font-semibold">
                                shishir@example.com
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                User ID
                            </p>

                            <p className="font-semibold">
                                #USR001
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Role
                            </p>

                            <p className="font-semibold">
                                Admin
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                Active
                            </span>
                        </div>

                    </div>
                </div>

                {/* Edit Button */}
                <div className="border-t border-gray-200 p-4">
                    <button
                        type="button"
                        className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Edit User
                    </button>
                </div>

            </div>
        </div>
    );
}
