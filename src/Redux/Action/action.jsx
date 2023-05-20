export const ADD =(item)=>{
    return{
        type: "ADD_CART",
        payload: item
    }
}
//removing iteam
export const RMV =(id)=>{
    return{
        type: "RMV_CART",
        payload: id
    }
}

export const DEC =(iteam)=>{
    console.log("kfbuysgaf",iteam);
    return{
        type: "DEC_COUNT",
        payload: iteam
    }
}


export const CARD=(values)=>{
    console.log("values",values);
    return{
        type:'CARD_DETAILS',
        payload:values
    }
}