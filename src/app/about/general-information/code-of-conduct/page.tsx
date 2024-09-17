import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CodeOfConductPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            CODE OF CONDUCT
          </h1>
          <p className="rounded-full bg-white/20 px-4 py-2 text-sm font-light text-white backdrop-blur-sm md:text-base">
            Home {'>'} About {'>'} Code of Conduct
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Roles of the Faculty Members
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Academic Responsibilities',
                items: [
                  'Class Room and Laboratory instruction',
                  'Developing learning resource material for classroom and lab',
                  'Student assessment & evaluation including examination work',
                  'Participation in co-curricular & extra-curricular activities',
                  'Continuing Education',
                  'Self-development through upgrading qualifications and staying updated with latest developments',
                ],
              },
              {
                title: 'Research and Development Responsibilities',
                items: [
                  'Conduct research and publish findings in peer-reviewed journals and conferences',
                  'Collaborate with industry for sponsored projects',
                  'Strive for Consultancy and Testing opportunities',
                  'Proactively promote Industry-institution partnerships',
                ],
              },
              {
                title: 'Administrative Responsibilities',
                items: [
                  'Provide guidance and support to student technical and non-technical committees',
                  'Discharge duties as class teacher, laboratory in-charge, and infrastructure in-charge',
                  'Organize and participate in staff development activities',
                  'Assist in institute activities like accreditations, ranking surveys, admission assistance',
                  'Assist in student/staff compliance committees',
                  'Actively involve in examination-related responsibilities',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-md">
                <h3
                  className={`${zilla.className} mb-4 text-xl font-semibold text-[#4a90e2]`}
                >
                  {section.title}
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Qualifications & Experience
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-md">
              <thead className="bg-[#001f3f] text-white">
                <tr>
                  <th className="border border-gray-300 p-3">
                    Program & Cadre
                  </th>
                  <th className="border border-gray-300 p-3">Qualifications</th>
                  <th className="border border-gray-300 p-3">Experience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Engg/Tech Assistant Professor',
                    'BE / B Tech and ME / M Tech in relevant subject with First Class or equivalent either in BE / B Tech or ME / M Tech',
                    '2 years of relevant Experience is desirable.',
                  ],
                  [
                    'Engg/Tech Management Associate Professor',
                    'Qualification as above that is for the post of Assistant Professor, as applicable and Ph.D. or equivalent, in an appropriate discipline. Post Ph.D. publications and guiding Ph.D. student is highly desirable.',
                    'Minimum of 5 years experience in teaching and/or research and/or industry of which at least 2 years shall be post Ph.D. is desirable.',
                  ],
                  [
                    'Engg/Tech Management Professor',
                    'Qualifications as above that are for the post of Associate Professor, as applicable. Post PhD publications and guiding PhD students is highly desirable',
                    'Minimum of 10 years teaching and/or research and/or industrial experience of which at least 5 years should be at the level of Associate Professor. Or minimum of 13 years experience in teaching and/ or Research and/or Industry.',
                  ],
                  [
                    'Engg/Tech Management Adjunct Faculty',
                    'Masters degree in relevant field',
                    'As deemed fit',
                  ],
                  [
                    'Humanities & Science Assistant Professor',
                    'Masters degree with first class in the relevant subject',
                    '',
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                  >
                    <td className="border border-gray-300 p-3">{row[0]}</td>
                    <td className="border border-gray-300 p-3">{row[1]}</td>
                    <td className="border border-gray-300 p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Conditions stated above shall be subject to change as per the latest
            norms by University, governing body/authorities.
          </p>
        </section>
      </div>

      <div className="bg-[#001f3f] py-8 text-center text-white">
        <p className="text-lg">
          All staff members are expected to contribute positively in the
          academic activities and administration with utmost commitment and
          dedication. Faculty members are also expected to contribute to
          Community Social Responsibility activities.
        </p>
      </div>
    </div>
  )
}

export default CodeOfConductPage
