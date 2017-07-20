function reducer (state,action){
    switch(action.type){
        case 'qw':
            return Object.assign({},state,{

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
    default:
        return state;
    }
}
export default reducer;