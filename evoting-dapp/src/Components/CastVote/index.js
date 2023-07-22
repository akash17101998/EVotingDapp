import { useState } from "react";
import "./style.css";

export default function CastVote(props) { 
    const [memAddr, setMemAddr] = useState('');
    function onClick(e) {
        if(
            memAddr.length != 42 || 
            memAddr.substring(0,2) != '0x'
        ) {
            alert('invalid address')
            console.log('invalid address')
            return;
        }
        props.castVoteClickHandler(memAddr)
    }
    function onChange(e) {
        setMemAddr(e.target.value)
    }

    return (
        <div className="cast-vote">
            <h1>Vote Casting Section</h1>
            <div className="cast-vote--inner">
                <div>
                    <input 
                        type="text" 
                        className="address-input"
                        placeholder="addr 0x.."
                        onChange={onChange}
                    />
                    <button
                        onClick={onClick}
                    >
                        Cast</button>
                </div>

                <p>
                    Status <span>--NA--</span>
                </p>
            </div>
        </div>

    );
}