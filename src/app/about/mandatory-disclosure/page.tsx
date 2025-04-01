import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-linear-to-b from-white to-[#E5F0FF]">
      <header className="bg-linear-to-br from-[#001f3f] to-[#003366] p-6 pt-48 text-center text-white">
        <h1 className="text-2xl font-bold">Mandatory Disclosure</h1>
      </header>

      <main className="container mx-auto my-8 grow p-4">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Mandatory Disclosure</h2>
          <div className="h-[800px] w-full">
            {/* Adjust height as needed */}
            <object
              data="/MandatoryDisclosure.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/MandatoryDisclosure.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>{' '}
                instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PDFViewerPage
