import styles from "./Style.module.css";

export default function Style() {

    return (
        <div>
            <h1>Style</h1>
            {/** 인라인 스타일 작성은 객체 형태로 **/}
            <h1 style={ 
                {
                    color : "red",
                    border : "2px solid blue",
                    opacity : 0.5,
                }
            }>Hello</h1>
            {/** css 모듈 사용 **/}
            <div className={styles.box}>Hello</div>
        </div>
    )
}