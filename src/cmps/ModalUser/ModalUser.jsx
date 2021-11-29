import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function ModalUser({ addEmployee }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handle = () => setIsOpen(!isOpen);

  const onSaveUser = (ev) => {
    ev.preventDefault();
    const fullname = ev.target.querySelector("#fullname").value;
    const passHash = ev.target.querySelector("#pass-hash").value;
    const phone = ev.target.querySelector("#phone").value;
    const userCred = { fullname, passHash, phone };

    console.log({ userCred });
    addEmployee(userCred);
    setIsOpen(false);
  };

  return (
    <div className="modal-user">
      <Button variant="outlined" onClick={handle}>Add Employee</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <form onSubmit={onSaveUser}>
              <h2>Add Employee</h2>
              <label htmlFor="fullname">Fullname</label>
              <input required type="text" id="fullname" name="fullname" />

              <label htmlFor="pass-hash">Password</label>
              <input
                required
                type="password"
                id="pass-hash"
                name="pass-hash"
                placeholder="Ex.. !#@fdsf54%"
              />

              <label htmlFor="phone">Phone Number</label>
              <input required type="text" id="phone" name="phone" />

              <button>save</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
