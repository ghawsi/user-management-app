"use client"

import classes from "./sidebar.module.css";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Stack from "@mui/material/Stack";

// navItems
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospitalOutlined";
import EventIcon from "@mui/icons-material/EventOutlined";

// utilItems
import TuneIcon from "@mui/icons-material/TuneOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton } from "@mui/material";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: <HomeIcon /> },
  { href: "/patients", label: "Patients", icon: <PeopleIcon /> },
  { href: "/doctors", label: "Doctors", icon: <LocalHospitalIcon /> },
  { href: "/appointments", label: "Appointments", icon: <EventIcon /> },
];

const utilItems = [
  { href: "/orgSettings", label: "Organization", icon: <TuneIcon /> },
  { href: "/appSettings", label: "App Settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.sidebar_brand}>
          <Image
            src="/logo.png"
            width="45"
            height="45"
            loading="eager"
            alt="Brand"
          ></Image>
        </div>
        <div className={classes.sidebar_navigation}>
          <Stack
            direction="column"
            spacing={1}
            sx={{ alignItems: "center", paddingTop: "1rem" }}
          ></Stack>
        </div>
        <div className={classes.sidebar_utilities}>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            {utilItems.map((item) => (
              <IconButton
                key={item.label}
                aria-label={item.label}
                href={item.href}
                sx={{
                  color: pathname === item.href ? "var(--primary)" : "default",
                  backgroundColor:
                    pathname === item.href ? "action.selected" : "transparent",
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </div>
      </div>
    </>
  );
}
