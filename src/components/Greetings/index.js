function Greetings(props){


    
    return(
        <>
        <div>
            <p lang={props.lang}>{props.children}</p>
        </div>
        </>
    )
}

export default Greetings