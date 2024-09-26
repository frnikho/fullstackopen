import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    if (props.good <= 0 && props.neutral <= 0 && props.bad <= 0) {
        return (<p>No feedback given</p>)
    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={props.good + props.bad + props.neutral}/>
                <StatisticLine text="average" value={(props.good + (props.bad * -1)) / (props.good + props.bad + props.neutral)}/>
                <StatisticLine text="positive" value={`${(props.good / (props.good + props.neutral + props.bad)) * 100} %`}/>
            </tbody>
        </table>
    )
}

export default Statistics;