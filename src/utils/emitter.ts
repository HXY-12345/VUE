// 引入mitt
import mitt from "mitt"

// 调用mitt得到emitter，emitter可以：绑定事件、触发事件
const emitter = mitt()

// 调用事件
emitter.on('test1',()=>{
    console.log('test1被调用了')
})

// 触发事件
emitter.emit('test1')

// 解绑事件
emitter.off('test1')

// 清空全部
// emitter.all.clear

//暴露emitter
export default emitter