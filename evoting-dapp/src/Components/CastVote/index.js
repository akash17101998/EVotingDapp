import "./style.css";

export default function CastVote() { 

    return (
        <div className="cast-vote">
            <h1>Vote Casting Section</h1>
            <div className="cast-vote--inner">
                <div>
                    <input 
                        type="text" 
                        className="address-input"
                        placeholder="addr 0x.."
                    />
                    <button>Cast</button>
                </div>

                <p>
                    Status <span>--NA--</span>
                </p>
            </div>
        </div>

    );
}