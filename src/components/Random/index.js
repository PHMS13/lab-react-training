function Random({min, max}){
    return(
        <>
        <p>Random Value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}</p>

        </>
    )
}

export default Random