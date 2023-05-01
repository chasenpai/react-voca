import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch'

export default function DayList() {

    //const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);

    // function onClick(){
    //     setCount(count + 1);
    // }

    // function onClick2(){
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day : 1
    //         }
    //     ])
    // }

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[]);

    const days = useFetch("http://localhost:3001/days"); //커스텀 hooks

    if(days.length === 0){
        return <span>Loading...</span>
    } //느릴경우 로딩표시

    //컴포넌트가 렌더링 될 때마다 특정 작업 실행 hook
    //useEffect(() => {
        //console.log("count change");
    //}, [count]) //의존성 배열 - 매개변수로 count가 변경될 때만 실행되게
    //useEffect(() => {

    //}, []) //빈배열 - 딱 한번 실행

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        {/** react router는 a href 대신 Link to 사용 **/}
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>DayChange</button> */}
        </>
    )
}