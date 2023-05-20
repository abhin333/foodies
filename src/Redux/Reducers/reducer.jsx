const INIT_STATE={
    carts :[],
    payments_details:[]
}

export const cartreducer=(state =INIT_STATE,action)=>{
    switch (action.type) {
        case "ADD_CART":
            const index = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if(index>=0){
                state.carts[index].qnty +=1;
            }else{
                const temp={...action.payload,qnty:1}
                return{
                    ...state,
                    carts:[...state.carts,temp]
                }
            }

            
        case "RMV_CART" :
            const data=state.carts.filter((element)=>element.id !== action.payload)
            return{
                ...state,
                carts:data
            }

        case "DEC_COUNT":
            const dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if(state.carts[dec].qnty >1){

                const dltiteam= state.carts[dec ].qnty -=1;
            }
            else{
                alert("invalid count number atleast one number should be purchase")
            }
            return {
                ...state,
                carts:[...state.carts]
            }
        case "CARD_DETAILS":   
        const payment_data=action.payload        
            return{
                ...state,
                payments_details:payment_data
            }
            default:
                return  state
            }
        }