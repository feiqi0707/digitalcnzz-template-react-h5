export interface IGlobalInfo {
	userName: string
	isLogin: boolean
}

const defaultState: IGlobalInfo = {
	userName: 'noName',
	isLogin: false
}

const setuphandle = (dispatch, history) => {
	const { location } = history
	const { pathname } = location
	if (window.AlipayJSBridge) {
		window.AlipayJSBridge.call('getAppUserInfo', (res) => {
			// console.log(res)
			const { success } = res
			if (success === 'false') {
				window.AlipayJSBridge.call('login', function(res) {
					setuphandle(dispatch, history)
				})
			} else {
				const { userInfo } = res
				const { accessToken } = userInfo
				dispatch({
					type: 'setState',
					payload: {
						userInfo: userInfo
					}
				})

				dispatch({
					type: 'myFeedback/getFeedbackList',
					payload: {
						idCard: userInfo.idCode,
						pageNo: 1,
						pageSize: 20
					},
					loadMoreFlag: false
				})

				dispatch({
					type: 'fillinfoModel/getOssParams',
					payload: {}
				})
			}
		})
	} else {
		const testToken = 'testToken'
		dispatch({
			type: 'login',
			payload: testToken
		}).then(() => {})
	}
}

export default {
	namespace: 'globalModel',
	state: {
		...defaultState,
		hasToken: false,
		userInfo: {}
	},
	subscriptions: {
		// ({ dispatch, history }, done)
		setup({ dispatch, history }) {
			setuphandle(dispatch, history)
		}
	},
	reducers: {
		// 保存
		changeGlobalInfo(state: IGlobalInfo, { data }) {
			return {
				...state,
				...data
			}
		},
		setState: (state, { payload }) => ({
			...state,
			...payload
		}),
		clearData: () => ({})
	},
	effects: {
		*login({ payload }, { call, put }) {
			// const { data } = yield call(login, {
			//   accessToken: payload,
			// });
			// setToken(data);
		}
	}
}
