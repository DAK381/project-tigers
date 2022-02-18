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
import Profile from './pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';



function App() {
  return (

   <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/new-user-info" element={<NewUserInfo/>} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>

      </Layout>
  );
}
export default App;
