// pages/edit-label/edit-label.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		// 用于选择的标签
		labelList: [],
		// 用来标记删除的标签
		editLabelList: [],
		// 是否编辑状态，默认否
		isEdit: false
	},
	onShow: function () {
		let data = [
			{ id: 1, name: '神枪手' },
			{ id: 2, name: '天天吃鸡' },
			{ id: 3, name: '职业玩家' },
			{ id: 4, name: '带妹妹上分' },
			{ id: 5, name: '单身狗' },
			{ id: 6, name: '落地成盒' },
			{ id: 7, name: '典型喷子' }
		];

		this.setData({ labelList: data, editLabelList: data });
	},
	clickItem(e) {
		if (this.data.isEdit) {
			this.data.editLabelList.forEach(item => {
				(item.id === e.target.dataset.id) && (item.checked = !item.checked);
			})
		}
		else{
			this.data.labelList.forEach(item => {
				(item.id === e.target.dataset.id) && (item.checked = !item.checked);
			})
		}

		this.setData({ labelList: this.data.labelList, editLabelList: this.data.editLabelList });
	},
	clickEdit() {
		this.setData({ isEdit: !this.data.isEdit });
	},
	addLabel(){
		wx.navigateTo({
			url: './add-label-item/add-label-item',
		})
	}
})