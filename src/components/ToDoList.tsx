import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

/*
setToDos 함수는 두개의 동작을 수행할 수 있다.
state를 직접적으로 설정해 줄 수도 있고 아니면 다른 함수를 받을 수 있다.
setTodDos함수에 함수를 쓴다면, 함수의 리턴값이 새로 운 state가 될 것이다. -> 현재 state에 접근 가능
*/

function ToDoList(){

    // const [x,setX] = useState()
    // const toDos = useRecoilValue(toDoState);
    // const value = useRecoilValue(toDoState)
    // const modFn = useSetRecoilState(toDoState)
    // const { register, handleSubmit, setValue } = useForm<IForm>();
    // console.log(toDos)
    const toDos = useRecoilValue(toDoSelector)

    // const [toDo,doing,done] = useRecoilValue(toDoSelector)
    //useRecoilValue(toDoSelector)의 return값은 배열이다.

    // console.log(toDo,doing,done)
    // 타겟이 변경될 때 categoryState값으로 갱신
    const [category,setCategory] = useRecoilState(categoryState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>)=>{
        setCategory(event.currentTarget.value as any)
    };
    console.log(toDos)
    return(
        <div>
            <h1>To Dos</h1>
            <hr />
            {/* 옵션 값이 변경될 때 마다 onInput값이 실행 */}
            {/*
            타입스크립트는 관점에서는 value는 그냥 string이다. 
            타입스크립트는 option의 value가 categories 타입과 같다는 걸 알지 못한다.
            */}
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
            {/* 기존 */}
            {/* <ul> */}
                {/* {toDos.map((toDo)=> ( */}
                    {/* // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} /> */}
                    {/* <ToDo key={toDo.id} {...toDo} /> */}
                    {/* 이렇게 사용해도 작동하는 이유는 , toDos 배열의 toDo 원소 하나하나가 */}
                    {/* ToDo컴포넌트에 필요한 props와 같은 모양이기 때문이다. */}
                    {/* 둘다 같은 타입이기 떄문 */}
                {/* ))} */}                
            {/* </ul> */}
            {/* 나눔  */}
            {/* <h2>To Do</h2>
            <ul>
                {toDo.map((toDo)=>(
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>DOING</h2>
            <ul>
                {doing.map((toDo)=>(
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>DONE</h2>
            <ul>
                {done.map((toDo)=>(
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul> */}
            {/* ->const [toDo,doing,done] = useRecoilValue(toDoSelector) 배열을 받을 때

             {category === "TO_DO" &&
                toDo.map((aToDo)=> <ToDo key={aToDo.id} {...aToDo}/>)}
            {category === "DOING" &&
                doing.map((aToDo)=> <ToDo key={aToDo.id} {...aToDo}/>)}
            {category === "DONE" &&
                done.map((aToDo)=> <ToDo key={aToDo.id} {...aToDo}/>)} 
            */}
        </div>
    )
}

export default ToDoList;