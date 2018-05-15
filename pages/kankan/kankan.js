Page({
	data: {
		swiperImages: [],
		// 资讯列表
		articleList: []
	},
	onShow: function () {
		let data = [
			'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg',
			'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=881638803,1075513620&fm=27&gp=0.jpg'
		];

		let list = [
			{ name: '高开低走，谈谈吃鸡的十大窍门，教你如何成为大神', info: '房间爱上了咖啡就爱上了咖啡就爱上飞机啊', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
			{ name: '高开低走，谈谈吃鸡的十大窍门，教你如何成为大神', info: '健康科技馆卡士大夫', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
			{ name: '高开低走，谈谈吃鸡的十大窍门，教你如何成为大神', info: '几千万人均期望我乳胶漆围绕加强五福卡数据发生', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
			{ name: '高开低走，谈谈吃鸡的十大窍门，教你如何成为大神', info: '456454wddddddddddddddfasdafs', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
			{ name: '高开低走，谈谈吃鸡的十大窍门，教你如何成为大神', info: 'fjaslkfjaslkfjaskfj11211212', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
		];
		this.setData({ swiperImages: data, articleList: list });
	},
	goDetail() {
		wx.navigateTo({
			url: '../kankan-detail/kankan-detail',
		})
	}
})