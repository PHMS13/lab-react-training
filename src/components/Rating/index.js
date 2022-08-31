const star = '★';
const empty = '☆';

function Rating({children}) {
  
    return(
        <>
        <p>{star.repeat(Math.round(children)).padEnd(5,empty)}</p>
        </>
    )
}

export default Rating;
