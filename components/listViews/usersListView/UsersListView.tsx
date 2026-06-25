"user client";

import User from "@/lib/classes/cl_user";
import classes from "./UsersListView.module.css";

import { Suspense, useState } from "react";
import { Button, TextField } from "@mui/material"

type Users = {
  users: User[];
};
export default function UsersTable({ users }: Users) {
    const [isRegFormOpen, setIsRegFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user)=>{
        const search = searchTerm.toLowerCase();

        return(
            user.id?.toString().toLocaleLowerCase().includes(search) ||
            user.name?.toLowerCase().includes(search) ||
            user.email?.toLowerCase().includes(search)
        )
    })

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={classes.usersTableContainer}>
        {/* {isRegFormOpen && <UserForm setIsFormOpen={setIsRegFormOpen} />} */}
        <div className={classes.tableToolbar}>
        <TextField 
        id="outlined-search"
        label="Search"
        type="search"
        size="small"
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <Button 
        variant="contained"
        sx={{ textTransform: "none", backgroundColor: "#143363"}}
        onClick={() => setIsRegFormOpen(true)}
        >Add User</Button>

        </div>
        {/* <UserList rows={filteredUsers} /> */}
      </div>
    </Suspense>
  );
}
