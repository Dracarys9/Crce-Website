import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const PlacementsPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            CAMPUS PLACEMENTS
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-28 py-16">
        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Placement Overview
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Building Careers, Creating Futures"
            </p>
            <p className="text-gray-700">
              CRCE's Training and Placement Cell is dedicated to bridging the gap between industry and academia. 
              We provide exceptional placement opportunities to our students across various engineering disciplines, 
              preparing them for successful careers in leading organizations. Our comprehensive training programs, 
              industry partnerships, and dedicated placement team ensure that our students are well-equipped to 
              excel in today's competitive job market.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Placement Statistics
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 text-center shadow-lg">
              <span className="block text-4xl font-bold text-[#4a90e2]">95%</span>
              <span className="text-gray-700">Placement Rate</span>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 text-center shadow-lg">
              <span className="block text-4xl font-bold text-[#4a90e2]">120+</span>
              <span className="text-gray-700">Recruiting Companies</span>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 text-center shadow-lg">
              <span className="block text-4xl font-bold text-[#4a90e2]">₹12L</span>
              <span className="text-gray-700">Average CTC</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Top Recruiters
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Accenture', 'Capgemini', 'IBM', 
                'Cognizant', 'Deloitte', 'JP Morgan', 'Goldman Sachs'].map((company, index) => (
                <div key={index} className="rounded-lg bg-white p-4 text-center shadow">
                  <p className="font-medium text-[#4a90e2]">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Placement Process
          </h2>
          <ul className="space-y-4">
            {[
              'Registration for placement through our dedicated portal for eligible students',
              'Pre-placement talks and company presentations to help students understand organizational culture',
              'Aptitude tests, technical assessments, and coding challenges based on company requirements',
              'Technical and HR interviews conducted by company representatives',
              'Final selection and offer letters distribution by the placement cell',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                  {index + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <div className="rounded-lg bg-[#001f3f] p-6 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Contact Placement Cell</h2>
            <p className="mb-2">
              <strong>Placement Officer:</strong> Prof. Jane Doe
            </p>
            <p className="mb-2">
              <strong>Email:</strong> placements@crce.ac.in
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91-22-XXXXXXXX
            </p>
            <Link 
              href="/students/placements/contact" 
              className="mt-4 inline-block rounded bg-[#4a90e2] px-6 py-2 font-medium hover:bg-blue-600"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementsPage