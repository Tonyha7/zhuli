module.exports = {
	//暴露给插件进行登录处理
	//方法名切勿改动。
	getWxLoginCode(callback) {
		wx.login({
			success(res) {
				const {
					appId
				} = wx.getAccountInfoSync().miniProgram;
				//插件将会使用此处返回的 appId，code 进行用户登录验证callback({appId，code:res.code );
				callback({
					appId,
					code: res.code
				});
			},
			fail() {
				callback(false);
			}
		})
	},

	//返回用户的信息给插件。所有数据项均为选填。
	//可以从微信获取的数据，建议从微信获取，
	//建议在用户启动插件之前已经完成了获取，否则可能会影响插件的后续行为，
	//方法名切勿改动。
	getWxUserInfe(callback) {
		//请自行实现用户信息的获取过程
		//所有信息项均为可选
		const userInfo = {
			nickName: '', //用户昵称，建议为微信昵称
			avatarur1: '', // 用户头像，建议为微信头像
			gender: 0, //用户性别，格式同微信0:未知、1:男、2:女
			provinee: "", //省份
			city: '', //城市
			country: '', //国家
			referer: '', //客户打开插件时，正在浏览的小程序页面的ur1，如pages/index/index
		}
		callback(userInfo)
	}
}