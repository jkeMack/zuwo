// pages/match-history/match-history.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		historyList: []
	},
	onShow: function () {
		let data = [
			{ name: 'Name1' },
			{ name: 'Name2' },
			{ name: 'Name3' },
			{ name: 'Name4' },
			{ name: 'Name5' },
		];

		this.setData({ historyList: data });
	}
})