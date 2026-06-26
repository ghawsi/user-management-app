import AppTile from "@/components/common/appTile/AppTile";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

export default function AppSettings(){
    return (<>
    <AppTile title="User Management" description="User Management" icon={<PeopleAltIcon fontSize="inherit"/>} href="/appSettings/users" size="s"/>
    </>)
}