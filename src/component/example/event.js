export default function Event() {

    function showName() {
        alert("junwvwv");
    }
    
    function showAge(age) {
        alert(age);
    }

    function showText(text) {
        alert(text);
    }

    return (
        <div>
            <h1>Event</h1>
            {/** 이벤트 처리 **/}
            <button onClick={showName}>show name</button>

            <button onClick={() => {
                    showAge(27);
                }}
            >show age</button>

            <input type="text" onChange={(e) => {
                alert(e.target.value)
            }}/>  

            <input type="text" onChange={(e) => {
                const text = e.target.value;
                showText(text);
            }}/>

        </div>
    )
}