// pages/my-game/my-game.js
Page({

	data: {
		gameList: []
	},
	onShow: function () {
		let data = [
			{ name: '绝地求生' },
			{ name: '穿越火线' },
			{ name: '守望先锋' },
			{ name: '英雄联盟' },
			{ name: '荒野行动' }
		];

		this.setData({ gameList: data });
	},
	editMessage(){
		wx.navigateTo({
			url: '../edit-message/edit-message',
		})
	}
})