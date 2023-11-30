import { MadeGoal, MissedGoal } from './GoalResult'

export {MissedGoal, MadeGoal} from './GoalResult'

export default function Football(props){
    const shoot = (x, e) =>{
        alert(x +' ' + e.type)
    }
    return(
        <>
        <button onClick={(event) => shoot('Goal', event )}>Take the shoot.</button>
        {props.isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    )
}