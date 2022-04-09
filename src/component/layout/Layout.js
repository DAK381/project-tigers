
import classes from './Layout.module.css';
import NavigationBar from './NavigationBar';


function Layout(props){
  const userData = props.userData;
  const token = props.token;

return(
  <div>
      <NavigationBar userData={userData} token={token}/>

      <main>
      {props.children}
      </main>
  </div>
  
)
};

export default Layout;