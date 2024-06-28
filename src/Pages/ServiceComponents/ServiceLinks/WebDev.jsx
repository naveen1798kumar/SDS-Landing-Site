import React from 'react'

import WebBan from "../../../assets/Service-Assets/Sidebar/craiyon_095631.png"


function WebDev() {
  return (
      <>
          <section className='flex justify-evenly '>
            <div className='border-2 border-white w-{400px} h-[400px]'>
                  <h1>Websites we can offer</h1>
                  <div>
                    
                  </div>

            </div>
            <div className='border-2 border-white w-[400px] h-[400px]'>
                  <img src={WebBan} alt="" />
            </div>
          </section>
      </>
  )
}

export default WebDev