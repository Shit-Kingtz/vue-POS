const XiaoJieJies : string [] = ['111', '222']                                  // 数组静态类型
const XiaoJieJie : { name: string, age: number } = { name: '111', age: 18 }     // 对象静态类型

class person {}
const yy: person = new person()         // 类静态类型

const jianXiaoJieJie : () => string = () => {       // 函数静态类型
    return '111'
} 

let count: number
count = 123

let countInference = { name: '123', age: 18 }
let countInferences = { name: 123, age: '18' }

function getTotal(one: number, two: number): number {
    return one + two
}
const three = getTotal(1,2)

function sayHello(): void {
    console.log(123)
}

function add({ one, two }: { one: number, two: number }) {
    return one + two
}
const three2 = add({one: 1, two: 2})