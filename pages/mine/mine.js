// pages/mine/mine.js
Page({
	data: {
		currentTab: 1,
		friendList: []
	},
	onShow: function () {
		let data = [
			{ name: 'Name1' },
			{ name: 'Name2' },
			{ name: 'Name3' },
			{ name: 'Name4' },
			{ name: 'Name5' },
		];

		this.setData({ friendList: data });
	},
	clickTab(e) {
		this.setData({ currentTab: e.target.dataset.tab });
	},
	editLabel() {
		wx.navigateTo({
			url: '../edit-label/edit-label',
		})
	},
	goMyGame() {
		wx.navigateTo({
			url: '../my-game/my-game',
		})
	},
	goRanking() {
		wx.navigateTo({
			url: '../ranking/ranking',
		})
	},
	goMatchHistory(){
		wx.navigateTo({
			url: '../match-history/match-history',
		})
	},
	goSet() {
		wx.navigateTo({
			url: '../set/set',
		})
	}
})