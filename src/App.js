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

function App() {

  const[token, setToken] = useState(localStorage.getItem('USER_KEY'))

  return (

  <div>
   <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>

        <Route path="/admin-member" element={<AdminMembers/>} />
        <Route path="/admin-member-add" element={<AdminMemberAdd/>} />
        <Route path="/admin-member-search" element={<AdminMemberSearch/>} />
        <Route path="/admin-profile" element={<AdminProfile/>} />
        <Route path="/admin-contact" element={<AdminContact/>} />
        <Route path="/admin-event-view" element={<AdminEventView/>} />

        <Route path="/admin-event-add" element={<AdminEventAdd/>} />
        <Route path="/admin-scholarship-add" element={<AdminScholarshipAdd/>} />
        <Route path="/admin-member-view" element={<AdminMemberView/>} />

        <Route path="/user-profile" element={<Profile/>} />




      </Routes>

      </Layout>

      <Footer />
      </div>
  );
}
export default App;
