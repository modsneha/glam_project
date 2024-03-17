import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../assets/final.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { clearUser } from '../redux/authSlice';

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const handleStickyHeader = () => {
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky');
            } else {
                headerRef.current.classList.remove('sticky');
            }
        }
        window.addEventListener('scroll', handleScroll);
    }

    useEffect(() => {
        handleStickyHeader();

        return () => window.removeEventListener('scroll', handleStickyHeader);
    });

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user:details');
        localStorage.removeItem('user:token');
        dispatch(clearUser())
        window.location.href = '/';
    }

    const navLinks = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/services',
            display: 'Services'
        },
        {
            path: '/course',
            display: 'Course'
        },
        {
            path: '/contact',
            display: 'Contact'
        },
        {
            path: '/review',
            display: 'Review'
        },
        {
            path: '/about',
            display: 'About'
        },
        {
            path: '/gallery',
            display: 'Gallery'
        },
    ]

  return (
    <header className='header flex items-center NavbarGradient' ref={headerRef}>
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/* LOGO */}
                <Link to='/'>
                    <div className='font-extrabold text-xl xl:text-3xl bg-[url("./assets/bgLogo.avif")] bg-cover bg-center p-5 bg-clip-text text-transparent flex items-center gap-2'>
                        <img src={Logo} alt='logo' className='h-[50px] w-[50px] xl:h-[70px] xl:w-[70px] rounded-full'/>
                        <span className='hidden md:block'>
                            Glam Studio & Academy
                        </span>
                    </div>
                </Link>
                {/* NAVIGATION */}
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    <ul className='menu flex items-center gap-8 md:mx-2 xl:gap-11'>
                    {
                        navLinks.map((link,i) => 
                        <li key={i}>
                            <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[18px] xl:text-[20px] leading-7 font-[400] border-b-2 border-b-primaryColor' : 'text-textColor text-[15px] xl:text-[18px] leading-7 font-300 hover:text-primaryColor hover:border-b-2 hover:border-b-primaryColor'} >
                                {link.display}
                            </NavLink>
                        </li>)
                    }
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    {/* <div className='hidden'>
                        <Link to='/'>
                            <figure className='w-[35px] h-[35px] rounded-full'>
                                <img src={userImg} className='w-full rounded-full' alt='' />
                            </figure>
                        </Link>
                    </div> */}
                    {user ? 
                        (<>
                            <span className='bg-white py-1 px-4 text-primaryColor font-[400] h-9 flex items-center justify-center rounded-[50px]'>{user.user.name}</span>
                            <button className='bg-primaryColor py-1 px-4 text-white font-[400] h-9 flex items-center justify-center rounded-[50px]' onClick={e => handleLogout(e)}>Logout</button>
                        </>)
                        :
                        (<>
                            <Link to='/sign_in'>
                                <button className='bg-primaryColor py-1 px-4 text-white font-[400] h-9 flex items-center justify-center rounded-[50px]'>Login</button>
                            </Link>
                            <Link to='/sign_up'>
                                <button className='bg-primaryColor py-1 px-4 text-white font-[400] h-9 flex items-center justify-center rounded-[50px]'>Register</button>
                            </Link>
                        </>)
                    }
                    <span className='md:hidden' onClick={toggleMenu}>
                        <BiMenu className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;