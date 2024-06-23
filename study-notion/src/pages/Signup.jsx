import React from "react"
import signupimg from "../assets/signup.png"
import Template from "../components/Template";

const Signup = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tommorow and beyond."
      desc2="Education to future-proof your carrer."
      image={signupimg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
};

export default Signup;
