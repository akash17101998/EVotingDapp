import CastVote from "../../Components/CastVote";
import MemberList from "../../Components/MemberList";
import VotingInfo from "../../Components/VotingInfo";

export default function User() { 
    const list = [
        'Akash', 
        'Aqeel', 
        'Yousuf',
        'Sheikh'
    ]




    return (
        <div>
            <h1>User Panel</h1>
            <MemberList 
                memberList={list}
            />
            <CastVote 
                voterStatus={""} 
            />
            <VotingInfo 
                votingStatus={""} 
                votingResult={""}
            />
        </div>
    );
}