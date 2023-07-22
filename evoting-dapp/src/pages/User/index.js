import CastVote from "../../Components/CastVote";
import MemberList from "../../Components/MemberList";
import VotingInfo from "../../Components/VotingInfo";
import Contract from "../../Extra/contracts";

import {useRef, useEffect, useState} from 'react';

export default function User() { 
    const mContract = new Contract();
    const list1 = [
        'Akash', 
        'Aqeel', 
        'Yousuf',
        'Sheikh'
    ]

    const [regList, setregList] = useState([]);

    const lock = useRef(true);

    useEffect(() => {
        (async _ => {
            await mContract.init()
            const list = await mContract.getRegList()
            console.log('got list', list);
            setregList(list1);
        })().then()
    }, [])

    async function castVote(memAddr) {
        await mContract.castVote(memAddr)
        alert('vote done');
    }

    return (
        <div>
            <h1>User Panel</h1>
            <MemberList 
                memberList={regList}
            />
            <CastVote 
                voterStatus={""}
                castVoteClickHandler={castVote} 
            />
            <VotingInfo 
                votingStatus={""} 
                votingResult={""}
            />
        </div>
    );
}