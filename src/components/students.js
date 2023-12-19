const Students = () => {
    const tableSpacing = "py-4 px-2"
    return (
        <div className=" h-screen">
            <h3 className=" font-extrabold text-2xl text-green-500">Students</h3>
            <table className="border-collapse w-full mt-5 text-sm text-left m-5 border border-gray-600  rounded-md text-white ">
                
                <thead>
                    <tr className="border px-2">
                    <th className={tableSpacing}>ID</th>
                    <th className={tableSpacing}>First Name</th>
                    <th className={tableSpacing}>Last Name</th>
                    <th className={tableSpacing}>Class</th>
                    <th className={tableSpacing}>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className={tableSpacing}>ID 1965</td>
                        <td className={tableSpacing}>Johnson </td>
                        <td className={tableSpacing}>Barota</td>
                        <td className={tableSpacing}>4R</td>
                        <td className={tableSpacing}>pending</td>
                    </tr>
                    <tr className="border">
                        <td className={tableSpacing}>ID 1965</td>
                        <td className={tableSpacing}>Johnson </td>
                        <td className={tableSpacing}>Barota</td>
                        <td className={tableSpacing}>4R</td>
                        <td className={tableSpacing}>pending</td>
                    </tr>
                    <tr className="border">
                        <td className={tableSpacing}>ID 1965</td>
                        <td className={tableSpacing}>Johnson </td>
                        <td className={tableSpacing}>Barota</td>
                        <td className={tableSpacing}>4R</td>
                        <td className={tableSpacing}>pending</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default Students