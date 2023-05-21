import React from 'react'
import Navs from './components/navbars/navs'
import Welcome from './components/body/Welcome';
import Explore from './components/body/Explore';
import MeetIdeologyLeader from './components/body/MeetIdeologyLeader';
import HararData from './components/body/HararData';
import UpcomingEvent from './components/body/UpcomingEvent';
import News from './components/body/News';
import OnlineService from './components/body/OnlineService';
import Footer from './components/body/Footer';
import BottomImages from './components/body/BottomImages';
import CityCouncil from './components/body/CityCouncil';

const App = () => {
  return (
    <div>
      <Navs/>
      <Welcome/>
      <Explore/>
      <MeetIdeologyLeader/>
       <HararData /> 
      <UpcomingEvent/>
      <News/>
      <OnlineService/>
      <CityCouncil/>
      <BottomImages/>
      <Footer/>
    </div>
  )
}

export default App;

