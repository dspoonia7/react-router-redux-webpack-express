
export const initialState = {
  name: 'user'
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.data,
      }
  }

  return state
}
