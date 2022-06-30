import "./App.css";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Alert,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import illustration from "./images/illustration_image.png";
import { useState } from "react";
import axios from "axios";

function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

    if(!(email.length>0 && firstName.length>0 && lastName.length>0 && address.length>0)) {
      alert('Fill Up the details correctly');
      return;
    }

    console.log({
      email: email,
      firstname: firstName,
      lastname: lastName,
      address: address,
    });

    axios
      .post("http://localhost:5000/formSubmission", {
        email: email,
        firstname: firstName,
        lastname: lastName,
        address: address,
      })
      .then((res) => {
        setInfo(true);
        setEmail("");
        setFirstName("");
        setLastName("");
        setAddress("");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="outer">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={handleOpen} variant="contained">
          Open Form
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{overflow:'scroll'}}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { lg: 1000, xs: 300 },
              boxShadow: 24,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: { xs:"column",  md:"column", lg:"row"},
              marginTop:{xs:"60%", lg:"0%"}
            }}
          >
            <Box
              sx={{width: {lg:"60%", sm:"100%"},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }} 
            >
              <Typography
                component="div"
                variant="h4"
                fontFamily="Poppins"
                fontWeight={600}
                sx={{
                  width: "80%",
                  textAlign: "center",
                  mt: {lg:3, md:3, xs:5},
                  color: "#2A398C",
                }}
              >
                Get Everything You Need For Creating WordPress Websites
              </Typography>
              <img alt="illustration_image" src={illustration} style={{ width: "70%", height: "70%" }} />
              <Typography
                component="div"
                variant="h6"
                fontFamily="Poppins"
                fontWeight={100}
                sx={{ width: "80%", textAlign: "center", mb: 3 }}
              >
                All in one Multifunctional Subscribe Service Perfect for
                Launching All Kinds WordPress Projects
              </Typography>
            </Box>

            <Box
              sx={{
                width: {lg:"40%", md:"100%", sm:"100%"},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#363848",
              }}
            >
              <CloseIcon
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: {lg:"5px", md:"15px", sm:"15px", xs:"15px"},
                  right: {lg:"5px", md:"15px", sm:"15px", xs:"15px"},
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#53D6B0",
                  width: "80%",
                  mb: 4,
                  mt: {lg:1, md:1, sm:3, xs:3},
                  fontWeight: "800",
                }}
                fontFamily="Poppins"
              >
                SUBSCRIBE AND GET YOUR BONUS!
              </Typography>

              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                sx={{
                  width: "80%",
                  backgroundColor: "#494D5C",
                  color: "#E9E9F0",
                  mt: 1,
                  Input: {
                    color:'#fff'
                  }
                }}
                fontFamily="Poppins"
              />

              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                type="text"
                sx={{
                  width: "80%",
                  backgroundColor: "#494D5C",
                  color: "#E9E9F0",
                  mt: 2,
                  Input: {
                    color:'#fff'
                  }
                }}
                fontFamily="Poppins"
              />

              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
                sx={{
                  width: "80%",
                  backgroundColor: "#494D5C",
                  color: "#E9E9F0",
                  mt: 2,
                  Input: {
                    color:'#fff'
                  }
                }}
                fontFamily="Poppins"
              />

              <TextField
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                type="text"
                sx={{
                  width: "80%",
                  backgroundColor: "#494D5C",
                  color: "#E9E9F0",
                  mt: 2,
                  Input: {
                    color:'#fff'
                  }
                }}
                fontFamily="Poppins"
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#53D6B0",
                  color: "#fff",
                  mt: 4,
                  mb: 1,
                  ml: 3,
                  mr: 3,
                  width: "80%",
                  height: "50px",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
                onClick={handleSubmit}
              >
                STAY UPDATED
              </Button>

              {info === true ? (
                <Alert severity="success" onClose={() => setInfo(false)}>
                  Form Submited Successfully
                </Alert>
              ) : null}

              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  alignItems: "flex-start",
                  mt: 2,
                }}
              >
                <LockIcon sx={{ color: "#fff", mr: 1 }} />
                <Typography
                  complement="div"
                  sx={{
                    width: "90%",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    mb:3
                  }}
                >
                  Your Information will never be shared with any third party.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default App;
