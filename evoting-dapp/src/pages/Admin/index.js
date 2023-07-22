import MemberList from "../../Components/MemberList";
import Registration from "../../Components/Registration";
import VotingStatus from "../../Components/VotingStatus";

export default function Admin() { 

    return (
        <div>
            <h1>Admin Panel</h1>
            <MemberList />
            <Registration />
            <VotingStatus />
        </div>

    );
}