import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './LoginUser.css'
import Validation from "./Validation";
import { Box, Button, Card, Input, Spacer } from "@chakra-ui/react";

const LoginUser = () => {
  const param =useParams();
  console.log(param);

    const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  
  const [data,setData]=useState([])

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.url}/getAllInfluencer`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(data,"data");
console.log(data,"data");
  function handlechange(e) {
    console.log("asdad");
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("run");
    setErrors(Validation(values));
    handleNavigate();
  
  }
  
  // function handleNavigate() {
  //   const nav = useNavigate();
  //   nav("/user");
  // }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.email !== "" &&
      values.password !== ""
    ) {
      const user = data.find((el) => el.email === values.email);

      if (user) {
        if (user.domain=== values.password) {
          alert("Submitted");
          handleNavigate(user.id);
        } else {
          alert("Wrong password");
        }
      } else {
        alert("Email is not registered, you can create a new");
      }
    }
  }, [errors]);

  const nav = useNavigate();

  function handleNavigate(id) {
    console.log(id);
    nav(`/user/${id}`);
    console.log(id);
  };


  return (
    <div className="outerBox">
      <Box className="outerBoxs">
        <Card className="loginBox">
          <h2>My Account</h2>
          <form className="form">
            <label style={{ textAlign: "left" }}>Email</label>
            <br />
            <Input
              type="email"
              focusBorderColor="darkblue"
              placeholder="Email"
              name="email"
              borderRadius="none"
              value={values.email}
              onChange={handlechange}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "10px" }}>{errors.email}</p>
            )}
            <br></br>
            <label style={{ textAlign: "initial" }}>Password</label>
            <br />
            <Input
              type="password"
              focusBorderColor="darkblue"
              placeholder="Password"
              borderRadius="none"
              value={values.password}
              name="password"
              onChange={handlechange}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "10px" }}>
                {errors.password}
              </p>
            )}
            <br />
            <a href="#">ForgetPassword?</a>
            <br />
            <Button
              border="2px"
              className="button"
              color="Black"
              colorScheme="facebook"
              size="md"
              variant="solid"
              w="100%"
              borderRadius="none"
              onClick={handleSubmit}
            >
              LOG IN
            </Button>
            <h4>New here?</h4>
            <br />
            <a href="#">Create an account</a>
          </form>
        </Card>
          <Button
            className="buttonR"
            color="white"
            colorScheme="facebook"
            size="md"
            variant="solid"
            borderRadius="none"
            onClick={handleNavigate}
          >
            CREATE AN ACCOUNT NOW
          </Button>
      </Box>
      </div>
  );
};

export default LoginUser;