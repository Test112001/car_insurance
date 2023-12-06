import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Nav2 = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);

  return (
    <div>
      <div className="nav_collapse">
        <div className="col2 col1">
          <p>Manage your policy</p>

          {isAuthenticated ? (
            <button
              className="collapse_login"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="collapse_login"
              onClick={(e) => loginWithRedirect()}
            >
              login
            </button>
          )}

          <hr></hr>
        </div>

        <div className="col2">
          <p>Raise a claim</p>
          <p>renew policy</p>
          <p>Help</p>
          <hr></hr>
        </div>

        <div className="col2">
          <h5>Have a partner issued policy</h5>
          <button className="collapse_claim">claim</button>
          <hr></hr>
        </div>

        <div className="col2">
          <h5>products</h5>
          <p>Car & taxi</p>
          <p>Bike</p>
          <p>Health</p>
          <p>Electronics</p>
          <hr></hr>
        </div>

        <div className="col2">
          <p style={{ fontSize: "smaller", fontWeight: "normal" }}>
            Trade logo displayed above belongs to ACKO Technology & Services Pvt
            Ltd and used by ACKO General insurance Limited under License.
          </p>
          <p style={{ fontSize: "smaller", fontWeight: "normal" }}>
            For more details on risk factors, terms, conditions and exclusions,
            please read the policy wordings carefully before concluding a sale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
