export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
          touched : !state.touched
        }
    case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions : [action.payload, ...state.transactions],
            touched : !state.touched
        }
    case 'RESET':
      return{
        ...state,
        transactions : [],
        income :0,
        expense : 0,
        touched : false
      }
   case 'INCOME':
          return{
              ...state,
              income : action.payload
          }    
    case 'EXPENSE' :
      return {
        ...state,
             expense : action.payload
      }
    case 'TOUCH' :
      return {
        ...state,
              touched : !state.tocuhed
      }
    
      default:
        return state;
    }
  }
  