import * as chatConstants from '../../constants/chat';

const initialState = {
	currentUser: null,
	socket: null,
	messages: []
};

function chatReducer (state = initialState, action) {
	switch (action.type) {
		case chatConstants.ADD_MESSAGE:
			return Object.assign({}, state, {
				messages: state.messages.concat([action.message])
			});
		case chatConstants.SIGNIN_USER:
			return Object.assign({}, state, {
				currentUser: action.user
			});
		default:
			return state;
	}
}

export default chatReducer;