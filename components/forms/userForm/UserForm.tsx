"use client";

import classes from "./UserForm.module.css";
import { RegisterUser } from "@/lib/serverActions/userActions/RegisterUser";
// import { UpdateUser } from "@/lib/serverActions/userActions/UpdateUser";
import { useActionState, useEffect } from "react";

import TextField from "@/components/common/textField/TextField";
import EmailField from "@/components/common/emailField/EmailField";
import PasswordField from "@/components/common/passwordField/PasswordField";
import User from "@/lib/classes/cl_user";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
// import { useToast } from "@/components/layout/toast/ToastContext";

const UserForm: React.FC<{
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user?: React.RefObject<User | undefined>;
}> = (props) => {
  const router = useRouter();
  //   const { showToast } = useToast();
  const [
    UserRegistrationState,
    UserRegistrationAction,
    UserRegistrationIsPending,
  ] = useActionState(RegisterUser, { success: false, error: "" });

  //   const [UpdateState, UpdateAction, UpdatePending] = useActionState(UpdateUser, {
  //     success: false,
  //     error: "",
  //   });

  //   useEffect(() => {
  //     if (props.user) {
  //       if (UpdateState.success) {
  //         showToast("User updated successfully", "success");
  //         props.setIsFormOpen(false);
  //         router.push("/appSettings/users");
  //       }
  //       if (UpdateState.error) {
  //         showToast(`Update failed: ${UpdateState.error}`, "error");
  //       }
  //       return;
  //     }

  //     if (RegisterState.success) {
  //       showToast("User registered successfully", "success");
  //       props.setIsFormOpen(false);
  //       router.push("/appSettings/users");
  //     }
  //     if (RegisterState.error) {
  //       showToast(`Registration failed: ${RegisterState.error}`, "error");
  //     }
  //   }, [
  //     props,
  //     RegisterState,
  //     UpdateState,
  //     showToast,
  //     RegisterState.success,
  //     UpdateState.success,
  //     router,
  //   ]);

  return (
    <div className={classes.regFormLayer}>
      <div className={classes.regContainer}>
        {/* <form action={props.user ? UpdateAction : RegisterAction}> */}
        <form action={UserRegistrationAction}>
        
          <p>{props.user ? "Update User" : "Add new User"}</p>
          <input type="hidden" name="id" value={props.user?.current?.id} />

          <TextField
            id="outlined-basic"
            name={"name"}
            label="Name"
            helperText="Enter a valid name"
            defaultValue={props.user?.current?.name || ""}
          />

          <EmailField
            id="outlined-email"
            name="email"
            label="Email"
            helperText="Enter a valid email"
            defaultValue={props.user?.current?.email || ""}
          />

          {props.user ? (
            <>
              <PasswordField
                id="outlined-current-password"
                name="previousPassword"
                label="Previous Password"
                defaultValue=""
              />
              <PasswordField
                id="outlined-password"
                name="password"
                label="New Password"
                defaultValue=""
              />
              <PasswordField
                id="outlined-confirm-new-password"
                name="confirmPassword"
                label="Confirm New Password"
                defaultValue=""
              />
            </>
          ) : (
            <>
              <PasswordField
                id="outlined-password"
                name="password"
                label="Password"
                defaultValue=""
              />
              <PasswordField
                id="outlined-confirm-password"
                name="confirmPassword"
                label="Confirm Password"
                defaultValue=""
              />
            </>
          )}

          <div className={classes.formButtons}>
            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#143363" }}
              onClick={() => props.setIsFormOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#143363" }}
              type="submit"
            >
              {/* {props.user
                ? UpdatePending
                  ? "Updating..."
                  : "Update"
                : RegisterPending
                  ? "Registering..."
                  : "Register"} */}
              {"Register"}
            </Button>
          </div>

          {/* {props.user
            ? UpdateState.error && <p>Update failed: {UpdateState.error}</p>
            : RegisterState.error && <p>Registration failed: {RegisterState.error}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default UserForm;
