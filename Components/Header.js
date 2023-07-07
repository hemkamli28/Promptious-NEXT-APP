'use client';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { BiX } from 'react-icons/bi';
const Header = () => {
  const linkStyle = {
    textDecoration: 'none',
  }
  const hideStyle = {
    display: 'none'
  }
  const showStyle = {
    display : "flex"
  }

  const handleClick = () => {
    setDstyle(showStyle);
    setBtn(false);
  }

  const handleClose = () => {
    setBtn(true);
    setDstyle(hideStyle);
  }
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  const [dstyle, setDstyle] = useState(showStyle);
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
    setupProviders();
  }, [])

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navBrand}>
          <Link style={linkStyle}  href={"/"}>
            <Image className={styles.brandImg} src={"/navBrand.png"} alt={"Brand Logo"} height={90} width={280} />
          </Link>
        </div>
       { btn ? <div className={styles.navlinkToggle}  onClick={handleClick} >
          <FaEllipsisVertical />
        </div> :
        <div className={styles.navlinkToggle}  onClick={handleClose} >
          <BiX />
        </div> 
        }
        <div className={styles.navItems} >

          {session?.user ?
            <>
              <Link style={linkStyle} href={"/create-prompt"}>
                <li className={styles.navlink}  style={dstyle} >Create Prompt</li>
              </Link>

              <Link style={linkStyle}  href={"/profile"}>
                <li  className={styles.navlink}  style={dstyle}>{session?.user.name}</li>
              </Link>
              <li className={styles.navlink} style={dstyle} onClick={signOut}>Logout</li>
            </>
            :
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <li className={styles.navlink} style={dstyle} key={provider.id} onClick={() => signIn(provider.id)}>Login</li>

                ))}
            </>
          }


        </div>
      </div>
    </>
  )
}

export default Header