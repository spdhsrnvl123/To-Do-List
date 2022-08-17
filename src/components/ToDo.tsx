import React from "react"
import { useSetRecoilState } from "recoil"
import { IToDo,toDoState } from "../atoms"

/*
newCategory:"TO_DO | "DOING" \ "DONE"을 써줄 수 있지만 썻던 걸 다시 사용하고 싶지 않으니 아래와 같은 방법 사용
newCategory:IToDo["category"]
*/

function ToDo({text,category,id}:IToDo){
    const setToDos = useSetRecoilState(toDoState)
    // 인자를 받는 onClick 함수
    // const onClick = (newCategory:IToDo["category"])=>{
    //     console.log("i wanna to",newCategory)
    // }
    // console.log(setToDos)

    const onClick = (event : React.MouseEvent<HTMLButtonElement>)=>{
        const name = event.currentTarget.name;
        //버튼 클릭 시 setToDos를 이용하여 toDoState Atom state 변경 
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)     
            //toDo의 id와 props에서 오는 id가 같은지 비교하면 된다.
            // const oldToDo = oldToDos[targetIndex];
            const newToDo = {text,id,category:name as any};
            //category:name은 버튼에 클릭된 값을 가져야된다.
            //as any라고 적으면, 타입스크립트에게 체크하지 말라고 하는 뜻
            console.log(
                "replace the to do in the index",
                targetIndex,
                "with",
                newToDo
            )
            
            // newToDo로 업데이트 하여 렌더링
            return [
                ...oldToDos.slice(0,targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1)
            ]
        })
    }
    return <li>
        <span>{text}</span>
        {/*
         <button onClick={onClick}>Doing</button>
         이 방식이 일반적이지만 인자가 넘겨지지 않는다. 
         */}
        {/*  //인자를 넘겨주는 방식
        {category !== "DOING" && <button onClick={()=> onClick("DOING")}>Doing</button>}
        {category !== "TO_DO" && <button onClick={()=> onClick("TO_DO")}>To Do</button>}
        {category !== "DONE" && <button onClick={()=> onClick("DONE")}>Done</button>}
         */}
         
         {/* 버튼 3개 중 2개만 보이는 조건식 */}
        {category !== "DOING" && (<button name="DOING" onClick={onClick} >Doing</button>)}
        {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick} >To Do</button>)}
        {category !== "DONE" && (<button name="DONE" onClick={onClick} >Done</button>)}
        
        </li>
// ex) "DONE"이 아닐 때만, "Done"버튼을 보여줄 것이다.
}

export default ToDo;