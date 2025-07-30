import { ref, customRef } from 'vue';

export default function useMsg(initValue:string, delay:number){
    
    let timer: number
 
    let msg = customRef((track,trigger)=>{
     return{
         get(){
             track()
             return  initValue
         },
         set(value){
             clearTimeout(timer)
             timer = setTimeout(() => {
                 initValue = value
             trigger()
             }, delay);
         }
 
     }
    })

    return {msg}
}

   
