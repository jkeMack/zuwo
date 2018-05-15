// pages/match-success/match-success.js
Page({
	data: {
		// 组队数据
		groupData: [],
		// 聊天数据
		chatList: [],
		// 聊天模板选项
		pickList: []
	},
	onShow: function () {
		let pickList = ['等我五分钟', 'OK，我现在进游戏', '我有事，你们另外组人吧'];

		let data = [
			{ name: 'Name1' },
			{ name: 'Name2' },
			{ name: 'Name3' },
			{ name: 'Name4' },
		];

		let chatData = [
			{
				date: '16:28', list: [
					{ content: '你好啊，小姐姐' },
					{ content: '你好啊，小哥哥' },
				]
			},
			{
				date: '16:32', list: [
					{ content: '谁是你家小姐姐小哥哥的！！！' },
					{ content: '我们玩什么呢，是单排还是双排？绝地求生还是说玩英雄联盟？' },
					{ content: '最近盲僧玩的贼溜' },
				]
			},
			{
				date: '16:35', list: [
					{ content: '1111！' },
					{ content: 'gasgasgasga' },
					{ content: 'hahha,,,,' },
				]
			},
			{
				date: '16:41', list: [
					{ content: '不玩了，先下了' },
					{ content: '拜拜' },
					{ content: '886' },
				]
			}
		];

		this.setData({ groupData: data, chatList: chatData, pickList: pickList });
	},
	bindPickerChange() {

	}
})