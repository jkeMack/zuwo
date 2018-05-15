// pages/match/match.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		interval: null,
		matchStatus: 0,
		countTime: {},
	},
	onShow: function () {

	},
	beginMatch() {
		if (this.data.matchStatus === 0) {
			// 开始匹配将状态设为1
			this.setData({ matchStatus: 1 });
			this.getCountTime();
		}
		else {
			// 开始匹配将状态设为0
			this.setData({ matchStatus: 0, countTime: {} });
			clearInterval(this.data.interval);
		}

	},
	getCountTime() {
		let s = 0, m = 0, h = 0;
		let interval = setInterval(() => {
			s++;
			if (s === 60) {
				m++;
				s = 0;
				if (m === 60) {
					h++;
					m = 0;
				}
			}

			let data = { s: s, m: m, h: h };
			data.s < 10 && (data.s = '0' + s);
			data.s < 10 && (data.m = '0' + m);
			data.s < 10 && (data.h = '0' + h);

			this.setData({ countTime: data });
		}, 1000);

		this.setData({ interval: interval });
	},
	// 选择匹配模式
	matchType() {
		// 如果正在匹配，不能进行该操作
		if (this.data.matchStatus === 1) {
			return;
		}
		console.log('选择匹配模式');
		wx.navigateTo({
			url: '../match-type/match-type',
		})
	},
	// 选择游戏
	chooseGame(){
		wx.navigateTo({
			url: '../choose-game/choose-game',
		})
	},
	goMatchSuccess(){
		wx.navigateTo({
			url: '../match-success/match-success',
		})
	}
})