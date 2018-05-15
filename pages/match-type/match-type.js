// pages/match-type/match-type.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		// 选择的源数据
		chooseData: []
	},
	onShow: function () {
		let testData = [
			{
				type: '1', name: '需匹配人数', data: [
					{ id: 1, name: '1人' },
					{ id: 2, name: '2人' },
					{ id: 3, name: '3人' },
				]
			},
			{
				type: '2', name: '匹配时间', data: [
					{ id: 1, name: '10分钟' },
					{ id: 2, name: '30分钟' },
					{ id: 3, name: '60分钟' },
					{ id: 4, name: '120分钟' }
				]
			},
			{
				type: '3', name: '匹配范围', multiple: true, data: [
					{ id: 1, name: '仅好友' },
					{ id: 2, name: '包括朋友的朋友' }
				]
			},
			{
				type: '4', name: '大区', data: [
					{ id: 1, name: '华东大区' },
					{ id: 2, name: '华北大区' },
					{ id: 3, name: '华南大区' },
					{ id: 4, name: '西南大区' },
					{ id: 5, name: '西北大区' },
				]
			}
		];

		this.setData({ chooseData: testData });
	},
	// 点击选中项
	chooseItem(event) {
		let id = event.target.dataset.id;
		let type = event.target.dataset.type;
		let multiple = event.target.dataset.multiple;
		this.data.chooseData.forEach((item) => {
			if (item.type == type) {
				item.data.forEach((s) => {
					if (s.id == id) {
						s.checked = !s.checked;
					} else {
						// 如果是多选，就不需要将其余项取消选中
						!multiple && (s.checked = false);
					}
				})
			}
		});

		this.setData({ chooseData: this.data.chooseData });
	},
	editMessage() {
		wx.navigateTo({
			url: '../edit-message/edit-message',
		})
	}
})