import './chat.scss';

const chatdata = [
    {
        name: "Darkseid",
        time: "09:55",
        msg: "Hello whats up"
    },
    {
        name: "Doom",
        time: "09:55",
        msg: "Hello"
    },
    {
        name: "Thanos",
        time: "09:55",
        msg: "World peace <<<<<<"
    },
    {
        name: "Joker",
        time: "09:55",
        msg: "Am i even in the right place?"
    },
    {
        name: "Superman",
        time: "09:55",
        msg: "Okay game over"
    },
    {
        name: "Chucky",
        time: "09:55",
        msg: "..."
    },
]

const Chat = () => {
    return (
        <div className="chat">
            <div className="con">
                {chatdata.map(({time, msg, name}, index) => {
                    return (
                        <div key={index} className="msgx">
                            <p><span className="time">{time}</span><span className='name'>{name}:</span><span className='msg'>{msg}</span></p>
                        </div>
                    )
                })}
            </div>
            <div className="input">
                <input type="text" placeholder='You must be logged in to chat'/>
            </div>
        </div>
    )
}

export default Chat;