import { Form } from 'formik';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import css from "./navbar.css";
import logo from "./logo1.png"


function MainNavbar() {
    return (
      <>
  

  <nav className="navbar bg-light mainnav ">
  <div className="container navitems">
    <a className="navbar-brand" href="#">
    <img className='logoimg' src={logo} /> 
    </a>
    <h1 className='navphonenumber'>*4955</h1>
  <div className= 'navbuttons'>
  <button className='navbtn1'> התנדבות</button> 
  <button className='navbtn2'> אימוץ כלב</button>
  <button className='navbtn3'> חדשות</button>
  <button className='navbtn4'> צרו קשר</button>
  <button className='navbtn5'> תרומה</button>
  </div>
   </div>
</nav>
       
        {/* <Navbar className=>
          <Container className='navitems'>
  
  >

  </div>
          </Container>
        </Navbar> */}
      </>
    );
  }
  
  export default MainNavbar




