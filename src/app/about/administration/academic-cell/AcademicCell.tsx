import React from 'react'

const AcademicCell = () => {
  const data = [
    ['1', 'Dr. Surendra Singh Rathod', 'Principal'],
    ['2', 'Dr. Sapna Prabhu', 'HOD, Electronics & Computer Science'],
    ['3', 'Dr. Bhushan Patil', 'HOD, Mechanical Engineering'],
    ['4', 'Dr. Jagruti Save', 'HOD, Artificial Intelligence & Data Science'],
    ['5', 'Dr. Sujata Deshmukh', 'HOD, Computer Engineering'],
    ['6', 'Mr. Dileep C.C.', 'HOD, Humanities & Science'],
  ]

  return (
    <div className="flex min-h-max sm:w-full w-[90vw]  flex-col">
      <main className="container mx-auto flex-grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 sm:p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Academic Cell</h2>
          <section className="mx-auto mb-10 w-full lg:w-[70%]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg bg-white shadow-md">
                <thead className="bg-[#001f3f] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Sr.
                    </th>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Name
                    </th>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[0]}
                      </td>
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[1]}
                      </td>
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AcademicCell
