import React from 'react'
import Links from './Links'

type Props = {
  selectedPage: string;
  setSelectPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  return (
    <nav>
      <div className={`${flexBetween} py-6 fixed top-0 z-30 w-full bg-[#1e1e1e] `}>
        <div className={`${flexBetween} w-5/6 mx-auto text-white `}>
          
        {/* Logo */}
        <div className='w-full'>
          <p>WORKOUT</p>
        </div>
        {/* Right */}
        <div className={`${flexBetween} gap-16 w-full`}>
          <div className={`${flexBetween} gap-8`}>
            <Links 
              page="Home"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage} />
            <Links 
              page="Benefits"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage} />
            <Links 
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage} />
            <Links 
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage} />
          </div>
          <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
            <button>Become a Member</button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar