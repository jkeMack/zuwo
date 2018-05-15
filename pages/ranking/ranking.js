// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		rankList: []
	},
	onShow: function () {
		let data = [
			{ name: 'Name1' },
			{ name: 'Name2' },
			{ name: 'Name3' },
			{ name: 'Name4' },
			{ name: 'Name5' },
			{ name: 'Name6' },
			{ name: 'Name7' },
			{ name: 'Name8' },
			{ name: 'Name9' },
			{ name: 'Name10' },
			{ name: 'Name11' },
			{ name: 'Name12' }
		];

		this.setData({ rankList: data });
	}
})