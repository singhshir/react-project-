

export default function CmsUserList() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                CMS User List
            </h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-300">
                    <thead>
                        <tr className="bg-blue-300">
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
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                Status
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
                            <td className="border border-gray-300 px-4 py-3">
                                Active
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
                            <td className="border border-gray-300 px-4 py-3">
                                Active
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}