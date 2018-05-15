// pages/set/set.js
Page({

	data: {

	},
	onShow: function () {

	},
	switchChange(e) {
		console.log('选择修改');
	},
	goInfo(){
		wx.navigateTo({
			url: '../app-info/app-info',
		})
	},
	goFeedback(){
		wx.navigateTo({
			url: '../feedback/feedback',
		})
	}
})