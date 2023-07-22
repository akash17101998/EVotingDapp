// import Abc from "./abc";
export default function MemberList(props) { 
    
    return (
        <div>
            <h1>List of Registered Members</h1>
            <ul>
                {
                    props.memberList.map((item, i) => <li key={i}> {item} </li>)
                }
            </ul>
        </div>
    );
}