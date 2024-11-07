import { FaBars } from 'react-icons/fa'
import './_header.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdApps, MdNotifications } from 'react-icons/md'
import { VscAccount } from "react-icons/vsc";


export default function Header({handleToggleSidebar}) {
  return (
    <div className='border border-dark header'>
      
      {/* hamburger icon */}
      <FaBars className='header_menu' size={15}
        onClick={()=>handleToggleSidebar()} />
    <div className='title_container'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_(2017).svg/2560px-YouTube_full-color_icon_(2017).svg.png'
        alt='youtube-icon'
        className='header_logo'

      />
      <span className='_title'>YouTube</span>
    </div>
      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22}/>{/*render a magnifying glass */}
        </button>
      </form>

      <div className='header_icons'>
        <MdNotifications size={22} />
        <MdApps size={22} />
        <VscAccount size={22} />    
      </div>
    </div>
  )
}
