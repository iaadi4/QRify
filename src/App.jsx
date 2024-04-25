import { useEffect, useState } from "react"


function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    if(data != "") {
      const qrImagehtml = document.createElement('img')
      qrImagehtml.src = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&amp;size=100x100`
      qrImagehtml.alt = "QR CODE"
      const qrDiv = document.getElementById('qrCodeDiv')
      qrDiv.innerHTML = ""
      qrDiv.appendChild(qrImagehtml)
    }
  }, [data, setData])

  return (
    <>
      <div className="flex h-screen flex-col md:flex-row">
        <div className="flex md:basis-3/5 basis-5/12 md:flex-col bg-blue-300 justify-center items-center">
          <div className="flex flex-col bg-white shadow-lg p-4 w-1/2 min-w-[300px] rounded-2xl">
            <h1 className="pb-3 text-lg text-gray-600">Enter text to convert into QR</h1>
            <input
              type="text"
              placeholder="Your text"
              className="w-full p-2 outline-none text-gray-700 focus:border focus:border-blue-300 focus:rounded-lg"
              onChange={(e) => {
                setData(e.target.value)
              }}
            >
            </input>
          </div>
        </div>
        <div className="flex basis-7/12 flex-col justify-center items-center shadow-lg">
          <div id="qrCodeDiv" className=" h-60 w-60 shadow-2xl p-5 rounded-xl">
          </div>
        </div>
      </div>
    </>
  )
}

export default App
