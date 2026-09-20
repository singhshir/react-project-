export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-lg shadow border">
                    <h2 className="text-gray-500 text-sm">
                        Total Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        120
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border">
                    <h2 className="text-gray-500 text-sm">
                        Active Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        95
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border">
                    <h2 className="text-gray-500 text-sm">
                        Inactive Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        25
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border">
                    <h2 className="text-gray-500 text-sm">
                        Admins
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        5
                    </p>
                </div>

            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    Recent Users
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left">
                                    ID
                                </th>

                                <th className="border border-gray-300 px-4 py-3 text-left">
                                    Name
                                </th>

                                <th className="border border-gray-300 px-4 py-3 text-left">
                                    Email
                                </th>

                                <th className="border border-gray-300 px-4 py-3 text-left">
                                    Role
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3">
                                    1
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    Shishir Singh
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    shishir@example.com
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    Admin
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 px-4 py-3">
                                    2
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    Ram Sharma
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    ram@example.com
                                </td>

                                <td className="border border-gray-300 px-4 py-3">
                                    User
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

