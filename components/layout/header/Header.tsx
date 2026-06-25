"user client";

import classes from "./styles.module.css";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type User = {
  id: string | undefined;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

const Header: React.FC<{ user: User }> = (props) => {
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);

  const path = usePathname().replace("/", "");
  const appModule = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <header>
      <p>{appModule}</p>
      <div
        className={classes.account}
        onClick={() => {
          setIsAccountPopupOpen(!isAccountPopupOpen);
        }}
      >
        <PersonIcon />
      </div>
      {isAccountPopupOpen && (
        <div className={classes.accountPopup}>
          <CloseIcon
            className={classes.cross}
            onClick={() => {
              setIsAccountPopupOpen(false);
            }}
          />
          <div className={classes.imgHolder}>
            <Image width="45" height="45" src="/icon-user.png" alt="" />
          </div>
          <p className={classes.name}>{props.user.name} </p>
          <p className={classes.email}>{props.user.email} </p>
          {/* <SignOut /> */}
        </div>
      )}
    </header>
  );
};

export default Header;
