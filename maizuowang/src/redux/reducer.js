function reducer (state,action){
    switch(action.type){
        case 'HEADER':
            return Object.assign({},state,{
                title:action.title
            })
       case 'LIST':
            return Object.assign({},state,{
                data:action.data
            })
        case 'LOGIN':
            return Object.assign({},state,{
                name:action.name
            })
        case 'CINEMA':
            return Object.assign({},state,{
                cinema:action.cinema
            })   
        case 'MYPAGE':
            return Object.assign({},state,{
                txt:action.txt
            })
    default:
        return state;
    }
}
export default reducer;