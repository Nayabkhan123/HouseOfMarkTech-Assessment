import logo from './logo.svg';
import './App.css';
import HeroSection from './component/HeroSection';
import ContactForm from './component/ContactForm';
import ServiceCards from './component/ServiceCards';
import PlanCard from './component/PlanCard';
import DummyUsers from './component/DummyUsers';
import NavBar from './component/NavBar';

function App() {
  return (
    // All components
    <div className="" sc>
      <NavBar/>
      <HeroSection/>
      <div className='w-3/4 mx-auto'>
        <ServiceCards/>
        <PlanCard/>
        <DummyUsers/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
