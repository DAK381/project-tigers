import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Layout from './component/layout/Layout';
import LogInPage from './component/Forms/LogInForm';
import SignUpForm from './component/Forms/SignUpForm';
import ForgetPasswordPage from './component/Forms/Forget';
import NewUserInfo from './component/NewUserInfo';
import Scholarship from './pages/Scholarships';
import EventPage from './pages/EventsPage';
import Contact from './pages/ContactUs';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './pages/Footer';
import AdminHome from './component/Admin/AdminHome';
import AdminMemberAdd from './component/Admin/AdminMemberAdd';
import AdminMembers from './component/Admin/AdminMembers';
import AdminMemberSearch from './component/Admin/AdminMemberSearch';
import AdminNavigation from './component/Admin/AdminNavigation';
import AdminProfile from './component/Admin/AdminProfile';
import AdminRemoveMember from './component/Admin/AdminRemoveMember';
import AdminContact from './component/Admin/AdminContact';
import AdminEventAdd from './component/Admin/AdminEventAdd';
import AdminEventView from './component/Admin/AdminEventsView';
import AdminMemberView from './component/Admin/AdminMemberView';
import AdminScholarshipAdd from './component/Admin/AdminScholarshipAdd';
import { Dashboard } from './dashboard';
import Profile from './pages/Profile/Profile';
import React, { useState } from 'react';
import { fetchUserData } from './authenticationService';
import EventDetails from './pages/EventDetails';
import AdminEventUpdate from './component/Admin/AdminEventUpdate';
import AdminScholarshipUpdate from './component/Admin/AdminScholarshipUpdate';
import AdminScholarshipView from './component/Admin/AdminScholarshipView';
import AdminMemberProfile from './component/Admin/AdminMember/AdminMemberProfile';
import ProfileEdit from './pages/Profile/UserEdit';
import UpdatedProfile from './pages/Profile/UpdatedProfile';
import AdminMemberEmail from './component/Admin/AdminMember/AdminMemberEmail';
import EventRegistration from './component/Forms/EventRegistration';
import AdminMemberAll from './component/Admin/AdminMember/AdminMemberAll';
import AdminMemberRSVP from './component/Admin/AdminMember/AdminMemberRSVP';
import EventCalendar from './pages/EventCalendar';



function App() {

  const token = localStorage.getItem('USER_KEY');
  const [userData,setUserData]=useState({});
  const notLoggedIn = {
    role: 'Na'
  }

  React.useEffect(()=>{
    fetchUserData().then((response)=>{
        setUserData(response.data);
    }).catch((e)=>{
        localStorage.clear();
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
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>

        { userData.role === "ADMIN" && <Route path="/admin" element={<AdminHome/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member" element={<AdminMemberAll/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member-add" element={<AdminMemberAdd/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member-search" element={<AdminMemberSearch/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-profile" element={<AdminProfile/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-contact" element={<AdminContact/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-event-view" element={<AdminEventView/>} /> }
 
        { userData.role === "ADMIN" && <Route path="/admin-scholarship-view" element={<AdminScholarshipView/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-event-update" element={<AdminEventUpdate/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-event-add" element={<AdminEventAdd/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-scholarship-add" element={<AdminScholarshipAdd/>} /> }
        { userData.role === "ADMIN" && <Route path="/admin-member-view" element={<AdminMemberView/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-member-profile" element={<AdminMemberProfile/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-scholarship-update" element={<AdminScholarshipUpdate/>} /> }


        { userData.role === "ADMIN" && <Route path="/admin-member-event-rsvp" element={<AdminMemberRSVP/>} /> }

        { userData.role === "ADMIN" && <Route path="/admin-member-email" element={<AdminMemberEmail/>} /> }

        { token && <Route path="/user-profile" element={<Profile userData={userData}/>} /> }

        {/* { token && userData.role === "ADMIN" && <Route path="/admin-user-profile" element={<Profile />} /> } */}

        { token && <Route path="/profile-edit" element={<ProfileEdit/>} /> }

        { token && <Route path="/user-updated-profile" element={<Profile userData={userData}/>} /> }


    	  { token && <Route path="/event-signup" element={<EventRegistration />}/> }

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
