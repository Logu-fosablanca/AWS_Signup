import { CognitoUserPool} from "amazon-cognito-identity-js"

 

const REACT_USER_POOL_ID=process.env.USER_POOL_ID;

const REACT_CLIENT_ID =process.env.CLIENT_ID;

const poolDataLogin= {
    UserPoolId: REACT_USER_POOL_ID,
    ClientId: REACT_CLIENT_ID

}


// const REACT_USER_POOL_ID="ap-south-1_UtPHHMwFK";

// const REACT_CLIENT_ID = "6tkbloei6d89cq9e7pvvjn1t4f";


// const UserPool =new CognitoUserPool(poolDataLogin);

export default new CognitoUserPool(poolDataLogin);

