import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Layout from './component/layout/Layout';
import LogInPage from './component/Forms/LogInForm';
import SignUpForm from './component/Forms/SignUpForm';
import ForgetPasswordPage from './component/Forms/Forget';
import NewUserInfo from './component/NewUserInfo';
import Scholarship from './pages/Scholarship/Scholarships';
import EventPage from './pages/Events/EventsPage';
import Contact from './pages/ContactUs';
import About from './pages/AboutUs/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './pages/Footer';
import AdminHome from './component/Admin/AdminHome';
import AdminMemberAdd from './component/Admin/AdminMember/AdminMemberAdd';
import AdminNavigation from './component/Admin/AdminNavigation';
import AdminContact from './component/Admin/AdminMember/AdminContact';
import AdminEventAdd from './component/Admin/AdminEvent/AdminEventAdd';
import AdminScholarshipAdd from './component/Admin/AdminScholarship/AdminScholarshipAdd';
import { Dashboard } from './dashboard';
import Profile from './pages/Profile/Profile';
import React, { useState } from 'react';
import { fetchUserData } from './authenticationService';
import EventDetails from './pages/Events/EventDetails';
import AdminEventUpdate from './component/Admin/AdminEvent/AdminEventUpdate';
import AdminScholarshipUpdate from './component/Admin/AdminScholarship/AdminScholarshipUpdate';
import AdminMemberProfile from './component/Admin/AdminMember/AdminMemberProfile';
import ProfileEdit from './pages/Profile/UserEdit';
import AdminMemberEmail from './component/Admin/AdminMember/AdminMemberEmail';
import EventRegistration from './pages/Events/EventRegistration';
import AdminMemberAll from './component/Admin/AdminMember/AdminMemberAll';
import AdminMemberRSVP from './component/Admin/AdminEvent/AdminMemberRSVP';
import EventCalendar from './pages/Events/EventCalendar';
import AdminGroupCreate from './component/Admin/AdminGroup/AdminGroupCreate';
import AdminGroupSearch from './component/Admin/AdminGroup/AdminGroupSearch';
import AdminAllGroup from './component/Admin/AdminGroup/AdminAllGroup';
import AdminGroupMemberList from './component/Admin/AdminGroup/AdminGroupMemberList';
import AdminAddMemberToGroup from './component/Admin/AdminMember/AdminAddMemberToGroup';
import ShowLabels from './component/Admin/AdminLabels/ShowLabels';
import CreateLabel from './component/Admin/AdminLabels/CreateLabel';
import LabelMembers from './component/Admin/AdminLabels/LabelMembers';
import AddCampaign from './component/Admin/AdminCampaign/AddCampaign';
import CampaignPage from './pages/Campaigns/CampaignPage';
import UpdateCampaign from './component/Admin/AdminCampaign/UpdateCampaign';

import GuestRSVP from './component/Admin/AdminEvent/GuestRSVP.js';
function App() {

  const token = localStorage.getItem('USER_KEY');
  const [userData,setUserData]=useState({});
  const[isLoading, setLoading] = useState(false);

  const notLoggedIn = {
    role: 'Na'
  }

  React.useEffect(()=>{
    fetchUserData().then((response)=>{
        setUserData(response.data);
    }).catch((e)=>{
        localStorage.clear();
        setLoading(true)
    })
  },[])


  return (

  <div>
    { userData.role === "ADMIN" && <AdminNavigation />}
   <Layout userData={userData || notLoggedIn} token={token}>
      
      <Routes>
        <Route path="/" element={<Home userData={userData}/>} />
        { !token && <Route path="/log-in" element={<LogInPage />} /> }
        { !token && <Route path="/sign-up" element={<SignUpForm />} /> }
        { !token && <Route path="/forget-password" element={<ForgetPasswordPage />} /> }

        <Route path="/events" element={<EventPage userData = {userData}/>} />
        <Route path="/scholarship" element={<Scholarship userData = {userData}/>} />
        <Route path="/campaign" element={<CampaignPage userData = {userData}/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About  userData = {userData}/>}/>

        { userData.role === "ADMIN" && <Route path="/admin" element={<AdminHome/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member" element={<AdminMemberAll/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member-add" element={<AdminMemberAdd/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-contact" element={<AdminContact/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-event-update" element={<AdminEventUpdate/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-event-add" element={<AdminEventAdd/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-scholarship-add" element={<AdminScholarshipAdd/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-member-profile" element={<AdminMemberProfile/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-scholarship-update" element={<AdminScholarshipUpdate/>} /> }


        { userData.role === "ADMIN" && <Route path="/admin-member-event-rsvp" element={<AdminMemberRSVP/>} /> }

        { userData.role === "ADMIN" && <Route path="/guest-rsvp" element={<GuestRSVP/>} /> }


        { userData.role === "ADMIN" && <Route path="/admin-member-email" element={<AdminMemberEmail/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-group-create" element={<AdminGroupCreate/>} /> }


        { userData.role === "ADMIN" && <Route path="/admin-group-search" element={<AdminGroupSearch/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-group-all" element={<AdminAllGroup/>} /> }


        { userData.role === "ADMIN" && <Route path="/admin-group-member" element={<AdminGroupMemberList/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-add-member-group" element={<AdminAddMemberToGroup/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-add-label" element={<CreateLabel/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-show-label" element={<ShowLabels/>} /> }
        { userData.role === "ADMIN" && <Route path="/label-members" element={<LabelMembers/>} /> }

        { userData.role === "ADMIN" && <Route path="/add-campaign" element={<AddCampaign/>} /> }
        { userData.role === "ADMIN" && <Route path="/update-campaign" element={<UpdateCampaign/>} /> }


        { token && <Route path="/user-profile" element={<Profile userData={userData} isloading = {isLoading}/>} /> }

        {/* { token && userData.role === "ADMIN" && <Route path="/admin-user-profile" element={<Profile />} /> } */}

        { token && <Route path="/profile-edit" element={<ProfileEdit/>} /> }

        { token && <Route path="/user-updated-profile" element={<Profile userData={userData}/>} /> }


    	  { <Route path="/event-signup" element={<EventRegistration />}/> }

        <Route path="/event-calendar" element={<EventCalendar />}/>




        <Route path="/eventInfo" element={<EventDetails />}/>


        {/* <Route path="/member-info" element={<AdminMemberList />}/> */}



      </Routes>

      </Layout>

      <Footer />
      </div>
  );

}
export default App;
