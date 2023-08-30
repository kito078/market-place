import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../src/assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../src/assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  return (
    <div>
      <h1 class="text-3xl font-bold underline">SignIn!</h1>
    </div>
  );
}

export default SignIn;
