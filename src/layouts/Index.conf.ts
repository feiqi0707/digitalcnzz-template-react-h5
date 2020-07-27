/**
 * 不需要公共导航
 */
export const UnNeedNavBar = (): boolean => {
	// 路由列表
	// const routerList: string[] = ['login', 'register'];
	const routerList: string[] = [ 'login' ]

	return !new RegExp(routerList.join('|'), 'gi').test(location.pathname)
}
