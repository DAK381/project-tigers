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
import { useState } from 'react';
import { fetchUserData } from './authenticationService';

function App() {

  const token = localStorage.getItem('USER_KEY');
  const [data,setData]=useState({});

  fetchUserData().then((response)=>{
    setData(response.data);
  }).catch((e)=>{
    localStorage.clear();
    // props.history.push('/');
  })

  return (

  <div>
   <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        { !token && <Route path="/log-in" element={<LogInPage />} /> }
        { !token && <Route path="/sign-up" element={<SignUpForm />} /> }
        { !token && <Route path="/forget-password" element={<ForgetPasswordPage />} /> }
        <Route path="/events" element={<EventPage/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>

        { data.role === "ADMIN" && <Route path="/admin" element={<AdminHome/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-member" element={<AdminMembers/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-member-add" element={<AdminMemberAdd/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-member-search" element={<AdminMemberSearch/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-profile" element={<AdminProfile/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-contact" element={<AdminContact/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-event-view" element={<AdminEventView/>} /> }

        { data.role === "ADMIN" && <Route path="/admin-event-add" element={<AdminEventAdd/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-scholarship-add" element={<AdminScholarshipAdd/>} /> }
        { data.role === "ADMIN" && <Route path="/admin-member-view" element={<AdminMemberView/>} /> }

        { token && data.role !== "ADMIN" && <Route path="/user-profile" element={<Profile/>} /> }




      </Routes>

      </Layout>

      <Footer />
      </div>
  );
}
export default App;
