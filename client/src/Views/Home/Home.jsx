import './Home.scss'
import Cards from "../../components/Cards/Cards"
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Testimonials from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';

const Home = (props) => {
  return (
    <div className='home'>
      <Commercial />
      <SideBar />
      <Cards />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>
      <ConfigSideBar isConfigBarOpen={props.isConfigBarOpen} toggleConfigBar={props.toggleConfigBar} />


    </div>
  );
};

export default Home;
