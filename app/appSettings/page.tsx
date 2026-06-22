import Link from "next/link";

export default function AppSettings(){
    return (<>
    <h2> App Settings</h2>
    <p><Link href="/appSettings/users">User Management</Link></p>
    </>)
}