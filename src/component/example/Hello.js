import World from "./World";

export default function Hello() {
    
    return (
        <div>{/** div 로 감싸지 않으면 에러**/}
            <h1>Hello</h1>
            <World/>
        </div>
    )
}