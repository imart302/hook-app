export interface ITodoActionReducer {
  type: '[TODO] Add Todo' | '[TODO] Remove' | '[TODO] Toggle' | "";
  payload: any;
}

export const todoReducer = (initialState: any, action: ITodoActionReducer) => {

  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, ...action.payload];
    case '[TODO] Remove':
      return initialState.filter(
        (value: { id: any }) => value.id != action.payload.id
      );

    case '[TODO] Toggle':
      return initialState.map((value: { id: any, done: any}) => {
        if ( value.id == action.payload.id){
          return {
            ...value,
            done: !value.done
          }
        } else {
          return value;
        }
      });
    default:
      return initialState;
  }
};
