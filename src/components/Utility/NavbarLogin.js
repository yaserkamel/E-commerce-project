import React, {useState, useEffect} from 'react'
import { Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../../images/Assets/logo.png'
import { NavbarSearchHook } from '../../hook/search/navbar-search-hook'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartShopping, faRightToBracket, faSearch } from '@fortawesome/free-solid-svg-icons'



const NavbarLogin = () => {
    const [onChangeSearch , searchWord] = NavbarSearchHook()
    // let word="";
    // if(localStorage.getItem('searchWord')!= null)
    //     word = localStorage.getItem('searchWord')

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
    
    const [itemsNum, , , , , , ] = GetAllUserCartHook()

    return (
        <Navbar className="sticky-top " bg='white' expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/' style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                        <img src={logo} className='logo' alt='sfvs' />
                        <p className='m-0 text-dark text-uppercase' style={{fontSize: '24px'}} ></p>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className='container-search'>
                        <FontAwesomeIcon icon={faSearch} size="sm" className='searchIcon'/>
                        <FormControl
                            value={searchWord}
                            onChange={onChangeSearch}
                            type="search"
                            placeholder="Search"
                            className="form-search"
                            aria-label="Search"
                        />  
                    </Form>
                    <Nav className="d-flex align-items-center justify-content-center" >
                        {
                            user !== '' ? (
                                <NavDropdown className='text-capitalize' title={user.name} id="basic-nav-dropdown">
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
                                <Nav.Link href='/login' className="">
                                    <div className='button'>
                                        Sign In
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" className='ps-2'/>
                                    </div>
                                </Nav.Link>
                            )
                        }
                        
                        <Nav.Link href='/cart'>
                            <div className='p-1 d-flex align-items-center position-relative'>
                                <FontAwesomeIcon icon={faCartShopping} size="lg" className='position-relative'/>
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
