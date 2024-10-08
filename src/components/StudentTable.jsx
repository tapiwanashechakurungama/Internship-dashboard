
const StudentTable = () => {
  const data = [
    {
      student: "PB Phoenix Baker",
      date: "Jan 4, 2022",
      status: "Scheduled",
      teacher: "Charles Halen",
      action: "View",
    },
    {
      student: "LS Candice Wu",
      date: "Jan 2, 2022",
      status: "Pending",
      teacher: "M Peter Phil",
      action: "View",
    },
    {
      student: "LS Lana Steiner",
      date: "Jan 4, 2022",
      status: "Cancelled",
      teacher: "Hudson Sky",
      action: "View",
    },
    {
      student: "DC Drew Cano",
      date: "Jan 8, 2022",
      status: "Scheduled",
      teacher: "Kelly Brown",
      action: "View",
    },
    {
      student: "No Natali Craig",
      date: "Jan 6, 2022",
      status: "Pending",
      teacher: "Mary Kie",
      action: "View",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table table-striped table-responsive bg-gray-900">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left px-4 py-2">Student</th>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Teacher</th>
            <th className="text-left px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900">
          {data.map((row, index) => (
            <tr key={index} className="bg-gray-900">
              <td className="text-left px-4 py-2">{row.student}</td>
              <td className="text-left px-4 py-2">{row.date}</td>
              <td className="text-left px-4 py-2">{row.status}</td>
              <td className="text-left px-4 py-2">{row.teacher}</td>
              <td className="text-left px-4 py-2">
                <button className="text-[blue] font-semibold">
                  {row.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
