export default function EachDie({ dice }) {
    return (
        <>
            {dice.map((e, index) => {
                return (
                    <span key={index} className="singleDieDesign">
                        <h1>{e}</h1>
                    </span>
                )
            })}
        </>
    )
}






