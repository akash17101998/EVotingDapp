// import Abc from "./abc";
export default function MemberList(props) { 
    console.log("props:", props.memberList.map(
        function(item) {
            return '<li>' + item + '</li>';
        }
    ));
    return (
        <div>
            <h1>List of Registered Members</h1>
            <ul>
                {
                    props.memberList.map(item => <li> {item} </li>)
                }
            </ul>
        </div>
    );
}