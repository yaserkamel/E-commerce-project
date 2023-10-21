import React, {useState, useEffect} from 'react'
import { Container, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import { NavbarSearchHook } from '../../hook/search/navbar-search-hook'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'



const NavbarLogin = () => {
    const [onChangeSearch , searchWord] = NavbarSearchHook()
    let word="";
    if(localStorage.getItem('searchWord')!= null)
        word = localStorage.getItem('searchWord')

    const [user, setUser] = useState('')
    // console.log(user)

    useEffect(()=>{
        if(localStorage.getItem('user')!= null){
            setUser(JSON.parse(localStorage.getItem('user'))) 
        }
    }, [])

    const logOut = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser('')
    }

    const [itemsNum] = GetAllUserCartHook()

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' alt='sfvs' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={word}
                        onChange={onChangeSearch}
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">

                        {
                            user !== '' ? (
                                <NavDropdown title={user.name} id="basic-nav-dropdown">
                                {
                                    user.role === "admin" ? (
                                    <NavDropdown.Item href="/admin/allproducts">Dashboard</NavDropdown.Item>
                                    ) : (
                                        <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                                        )
                                    
                                }
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logOut} href="/">Logout</NavDropdown.Item>
                                    
                                </NavDropdown>
                            ) : (
                                <Nav.Link href='/login'
                                    className="nav-text d-flex mt-3 justify-content-center ">
                                    <img src={login} className="login-img" alt="sfvs" />
                                    <p style={{ color: "white" }} className='px-1'>Login</p>
                                </Nav.Link>
                            )
                        }
                        
                        <Nav.Link href='/cart'
                            className="nav-text mt-3 "
                            style={{ color: "white" }}>
                            <div className=' d-flex justify-content-center position-relative'>
                                <img src={cart} className="login-img" alt="sfvs" />
                                <p style={{ color: "white" }} className='px-1'>Cart</p>

                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {itemsNum || 0}
                                </span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarLogin
