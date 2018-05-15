// pages/choose-game/choose-game.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		gameList: []
	},
	onShow: function () {
		let data = [
			{ name: '绝地求生', gamename: 'Mark.L', contact: 'YY频道123456', active: 1 },
			{ name: '梦幻西游', gamename: 'Mark.H', contact: 'YY频道123456', active: 0 },
			{ name: '守望先锋', gamename: 'Mark.C', contact: 'YY频道123456', active: 0 },
		];

		this.setData({ gameList: data });
	},
	chooseItem(){
		wx.navigateBack({});
	}
})