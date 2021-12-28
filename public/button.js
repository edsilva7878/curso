export default function Button({title, event, textButton}){
    return(
        <>
            <h1>{title}</h1>
            <button onClick={event}>{textButton}</button>
        </>
    )
}