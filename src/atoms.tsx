import { atom, selector } from "recoil";

// type categories = "TO_DO" | "DOING" | "DONE"

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}
// enum은 프로그래머를 도와주기 위해서 일련의 숫자를 문자로 표현해준다.
export interface IToDo{
    text:string;
    id:number;
    category : Categories
}

export const categoryState = atom<Categories>({
    key:"category",
    default : Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: []
})

export const toDoSelector = selector({
    key : "toDoSelector",
    get : ({ get }) =>{ //get은 options라는 인자를 받으면서 호출된다.
        const toDos = get(toDoState);
        const category = get(categoryState);
        // if(category === "TO_DO")
        //     return toDos.filter((toDo) => toDo.category === "TO_DO");
        // if(category === "DOING")
        //     return toDos.filter((toDo) => toDo.category === "DOING");
        // if(category === "DONE")
        //     return toDos.filter((toDo) => toDo.category === "DONE");
        // ->
        return toDos.filter((toDo)=> toDo.category === category);

        // return 
        //[ 
        //     toDos.filter((toDo) => toDo.category === "TO_DO"),
        //     toDos.filter((toDo) => toDo.category === "DOING"),
        //     toDos.filter((toDo) => toDo.category === "DONE")
        // ];
    }
})

/*
Selectors는 파생된 state(derived state)의 일부를 나타낸다.
즉, 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 이용해
새로운 state를 만들어서 반환할 수 있다.
기존 state를 이용만할 뿐 변형시키지 않는다. derived state는 다른 데이터에
의존 하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.
*/