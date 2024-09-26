import Part from "./Part";

const Content = (props) => {
    return (
       <>
        {props.parts.map((p) => {
            return (<Part name={p.name} exercice={p.exercice}/>)
        })}
       </>
    )
}

export default Content;