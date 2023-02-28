import './Navbar.scss'
import { navbarItems } from './data';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import ModShopping from '../Modals/ModShopping';

const Navbar = (props) => {
  const { toggleConfigBar } = props;

  const showAlert = (e)=>{
    e.preventDefault();
    Swal.fire({
    title: "Sorry, We are working for you",
    icon: "warning",
    footer: "<b>Continue to enjoy our services</b>",
    timer: 3000,
    })
  }

  return (
    <div className='navbar'>
      <div className='navLeft'>
      <Link to='/' className='linkLogo' >
        <i className="fa-solid fa-house-laptop"></i>
        CodeAdvisor
      </Link>
      </div>
      <div className='navRight'>
      {navbarItems.map((item, index) => {
        const linkProps = {
          to: item.path,
          key: index
        };
        if (item.name === 'Forum' || item.name === 'FAQs') {
          linkProps.onClick = showAlert;
        }
        return <Link {...linkProps}><div>{item.name}</div></Link>;
      })}
      <div className="shopping">
        <ModShopping/>
      </div>
        <div className='conf'>
        <i className="config-icon fa-solid fa-gear" onClick={toggleConfigBar}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
