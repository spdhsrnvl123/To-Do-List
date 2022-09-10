# 🚀To-Do-List

## ToDo Component에서 button태그를 클릭시 전달해 주고 싶은 데이터를 onClick함수에 전달해 주는 방법

### first) onClick함수에 인자 넣기

```tsx
import React from "react";
import {IToDo} from "../atoms";

function ToDo({text,category} : IToDo{
  
  const onClick = (newCategory::IToDo["category"]) =>{
    console.log("i wanna to",newCategory);
  };
  
  return(
      <li>
        <span>{text}</span>
        {category !== "DOING" && <button onClick={()=>onClick("DOING")}>Doing</button>}
        {/* category가 DOING 이 아닐 경우 오른쪽 버튼태그를 보여준다. */}
        {category !== "TO_DO" && <button onClick={()=>onClick("TO_DO")}>To Do</button>}
        {category !== "DONE" && <button onClick={()=>onClick("DONE")}>DONE</button>}
      </li>
  )
}
```

### second) event를 활용하기

```tsx
import React from "react";
import {IToDo} from "../atoms";

function ToDo({text,category} : IToDo{
  
  const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
      console.log(event.currentTarget.name);
  }

  return(
      <li>
        <span>{text}</span>
        {category !== "DOING" && <button name="DOING" onClick = {onClick}>Doing</button>}
        {category !== "TO_DO" && <button name="TO_DO" onClick = {onClick}>To Do</button>}
        {category !== "DONE" && <button name="DONE" onClick = {onClick}>DONE</button>}
      </li>
  )
})
```
