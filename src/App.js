import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./Pages/About/About";
import Home from "./Pages/Home";
// import Service from "./Pages/Service/Service";
// import Services from "./Pages/Services/Services";
// import NotFound from "./Pages/NotFound/NotFound";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import TopNav from "./Pages/Utilities/TopNav";
// import Footer from "./Pages/Utilities/Footer";
// import PrivateRoute from "./Components/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import { GlobalStyle } from "./Styles/Global.styles";
// import Teacher from "./Pages/Teacher/Teacher";

function App() {
	return (
		<AuthProvider>
			<GlobalStyle />
			<Router>
				{/* <TopNav /> */}
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					{/* <PrivateRoute exact path='/about'>
						<About />
					</PrivateRoute>
					<Route exact path='/services'>
						<Services />
					</Route>
					<PrivateRoute exact path='/service/:id'>
						<Service />
					</PrivateRoute>
					<PrivateRoute exact path='/teacher'>
						<Teacher />
					</PrivateRoute>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route> */}
				</Switch>
				{/* <Footer /> */}
			</Router>
		</AuthProvider>
	);
}

export default App;
