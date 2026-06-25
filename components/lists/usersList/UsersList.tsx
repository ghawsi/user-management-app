"use client";

// import { GridColDef } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import User from "@/lib/classes/cl_user";
// import DataTable from "@/components/common/dataTable/DataTable";
// import IconButton from "@/components/common/buttons/IconButton";
// import AlertDialog from "@/components/common/alertDialog/AlertDialog";
// import UserForm from "@/components/forms/userForm/UserForm";
// import GetUser from "@/lib/serverActions/userActions/GetUser";
// import DeleteUser from "@/lib/serverActions/userActions/DeleteUser";
// import { useToast } from "@/components/layout/toast/ToastContext";

const user: User = {
  id: "",
  name: "",
  email: "",
  password: "",
  emailVerified: null,
  image: null,
};

const UsersList: React.FC<{ rows: Array<object> }> = (props) => {
  const router = useRouter();
  const { showToast } = useToast();
  const lo_user = useRef<User | undefined>(user);
  const [showAlert, setShowAlert] = useState(false);
  const [userId, setUserId] = useState<string>();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  async function handleEdit(selectedUserId: string) {
    lo_user.current = await GetUser(selectedUserId);
    setIsEditFormOpen(true);
  }

  async function handleDelete(selectedUserId: string) {
    if ((await DeleteUser(selectedUserId)).result) {
      showToast("User deleted successfully", "success");
      setShowAlert(false);
      router.push("/appSettings/users");
      return;
    }
    showToast("Deletion failed", "error");
  }

  const UsersDataTableColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 170 },
    { field: "email", headerName: "Email", width: 260 },
    {
      field: "edit",
      headerName: "Edit",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton Icon={EditIcon} onClick={() => handleEdit(String(params.id))} />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton
          Icon={DeleteIcon}
          onClick={() => {
            setUserId(String(params.id));
            setShowAlert(true);
          }}
        />
      ),
    },
  ];

  return (
    <>
      {isEditFormOpen && <UserForm setIsFormOpen={setIsEditFormOpen} user={lo_user} />}
      <AlertDialog
        showAlert={showAlert}
        handleProceed={() => {
          if (userId) {
            handleDelete(userId);
          }
        }}
        setShowAlert={setShowAlert}
        textMessage="Do you want to delete the selected user record?"
      />
      <DataTable ColDefinination={UsersDataTableColumns} rows={props.rows}></DataTable>
    </>
  );
};

export default UsersList;
