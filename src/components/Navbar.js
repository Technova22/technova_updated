import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import '../Navbar.css'
import 'rsuite/dist/rsuite.min.css';
const Navbar1 = () => {
  const currentName = useStore((state) => state.currentName);
  const { setCurrentName, setCurrentEmail } = useStore();
  const location = useLocation();
  console.log(location.pathname)
  const refer = useRef(null);
  window.addEventListener('scroll', fixNav)
  function fixNav() {
    if (window.scrollY > 150) {
      refer.current.classList.add('active1');
    } else {
      refer.current.classList.remove('active1');
    }
  }
  useEffect(() => {
    if (location.pathname == '/' || location.pathname == '/contact') {
      refer.current.classList.remove('navbg');
      refer.current.classList.add('navbg1');

    }
    else if (location.pathname == '/AllEvent' || location.pathname == '/profile') {
      refer.current.classList.remove('navbg1');
      refer.current.classList.add('navbg');
    }
    else {
      refer.current.classList.add('navbg');
    }

  }, [location])
  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} >
      <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>

      <Link to='/'><Dropdown.Item onClick={() => { setCurrentName(''); setCurrentEmail('') }}>Signout</Dropdown.Item></Link>

    </Dropdown>
  );
  return (
    <header>

      <nav className="d-block navnew navbar navbar-expand-lg w-100w" ref={refer}>
        <div class="containernew">
          <h3 class="logo me-auto"><Link to="/">Technova22</Link></h3>
          <button class="ms-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="ms-auto collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><Link to="/" class="ms-auto current">Home</Link></li>
            <li className='nav-item'><a href="#about">About</a></li>
            <li className='nav-item'><Link to="/AllEvent">Events</Link></li>
            <li className='nav-item'><a href="#gallery">Gallery</a></li>
            <li className='nav-item'><Link to="/contact">Contact</Link></li>
            {

              (currentName === '') ?
                <li><Link to="/signup" ><button class="btn4 btn btn-outline-primary text-light">Sign Up</button></Link></li>
                :
                <CustomDropdown title={currentName} trigger={['click', 'hover']} />


            }
          </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar1