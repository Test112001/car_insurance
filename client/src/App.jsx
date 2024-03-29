import { React, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Routecardetail from "../components/Cars/Cardetail/Routecardetail";
// import { AddtionalDetails } from "../components/AddtionalDetails/AddtionalDetails";
// import Routecarnumber from "../components/Cars/Carnumber/Routecarnumber";
// import Routeexpiry from "../components/Cars/Expirydate/Routeexpiry";
// import Routepolicy from "../components/Cars/Lastpolicy/Routepolicy";

import Routepincode from "./components/Cars/Pincode/Pincode";
import Routeuseofcar from "./components/Cars/Useofcar/Routeuseofcar";

// import { DifferentPlanOptions } from "../components/PlanOptions/DiffPlanOptions";
// import Routeyear from "../components/Cars/Year/Routeyear";
// import Routemonth from "../components/Cars/Month/Routemonth";
// import Routecartype from "../components/Cars/Cartype/Routecartype";
// import { AdditionalCovers } from "../components/PlanOptions/AdditionalCovers";
// import { FinalDetails } from "../components/FinalDetails/FinalDetails";
import Home from "./components/homepage/Home";
import Login from "./components/Auth/loginpage/Login";
import Register from "./components/Auth/registerpage/Register";
// import Paysuccessfull from "../components/Paysuccessfull/Paysuccessfull";
// import { CardPayment } from "../components/payment/CardPayment";

import "./App.css";

const App = () => {
  const [userstate, setUserState] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <div className="App">
            <Route path="/login" exact>
              <Login setUserState={setUserState} />
            </Route>

            <Route path="/register" exact>
              <Register />
            </Route>
          </div>

          <Route path="/cars/useofcar" exact>
            <Routeuseofcar />
          </Route>

          <Route path="/cars/pincode" exact>
            <Routepincode />
          </Route>

          {/* <Route path="/cars/carnumber" exact>
            <Routecarnumber />
          </Route> */}

          {/* <Route path="/cars/year" exact>
            <Routeyear />
          </Route> */}

          {/* <Route path="/cars/month" exact>
            <Routemonth />
          </Route> */}

          {/* <Route path="/cars/cartype" exact>
            <Routecartype />
          </Route> */}

          {/* <Route path="/cars/expiry" exact>
            <Routeexpiry />
          </Route> */}

          {/* <Route path="/cars/policy" exact>
            <Routepolicy />
          </Route> */}

          {/* <Route path="/cars/cardetail" exact>
            <Routecardetail />
          </Route> */}

          {/* <Route path="/plans">
            <DifferentPlanOptions></DifferentPlanOptions>
          </Route> */}

          {/* <Route path="/additionalCovers">
            <AdditionalCovers></AdditionalCovers>
          </Route> */}

          {/* <Route path="/addtional-details">
            <AddtionalDetails />
          </Route> */}

          {/* <Route path="/final-details">
            <FinalDetails />
          </Route> */}

          {/* <Route path="/cardPayment" exact>
            <CardPayment />
          </Route> */}

          {/* <Route path="/successfull" exact>
            <Paysuccessfull />
          </Route> */}

          <Route>
            <h1>404:Page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
