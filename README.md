# 🚀To-Do-List

#### ToDo Componenet 새로운 배열을 추가하는 이론 예시
```
const food = ["pizza","mango","kimchi","kimbab"]

const target = 1;
//undefined

food.slice(0,target)
//['pizza']

food.slice(target+1)
//['kimchi','kimbab']

[...food.slice(0,target),"감",...food.slice(target+1)]
['pizza','감','kimchi','kimbab']

```
