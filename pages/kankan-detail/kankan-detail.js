// pages/kankan-detail/kankan-detail.js
Page({

  /**
   * 页面的初始数据
   */
	data: {
		// 文章正文，可能是图片和文字交叉的数组
		articleContent: [],
		// 评论列表
		commentList: []
	},
	onShow: function () {
		let data = [
			{ type: 'text', content: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊' },
			{ type: 'img', content: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525759511&di=1158211732875338a76a7aab64ca8817&src=http://img.youxiguancha.com/game/2017/12/11/1512986621_9.jpg' },
			{ type: 'text', content: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊' },
		];

		let comment = [
			{ name: '简书小刘', avtar: '', gamename: 'Mr.liu', date: '2018/04/20 16:00', comment: '这波操作6呀' },
			{ name: '简书小刘', avtar: '', gamename: 'Mr.liu', date: '2018/04/20 16:00', comment: '主播小姐姐好帅呀' },
			{ name: '简书小刘', avtar: '', gamename: 'Mr.liu', date: '2018/04/20 16:00', comment: '6666' },
			{ name: '简书小刘', avtar: '', gamename: 'Mr.liu', date: '2018/04/20 16:00', comment: '队形走起' },
		];

		this.setData({ articleContent: data, commentList: comment });
	}
})