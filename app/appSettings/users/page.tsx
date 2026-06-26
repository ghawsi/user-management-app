"use server";

import classes from "./styles.module.css";
import UsersListView from "@/components/listViews/usersListView/UsersListView";

export default async function UsersPage() {
  return (
    <>
      <div className={classes.mainSection}>
        <UsersListView />
      </div>
    </>
  );
}
