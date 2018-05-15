// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		feedback:''
  },

  onShow: function () {
  
  },
	// 监听文本域改变
	feedbackChange(e){
		this.setData({feedback:e.detail.value});
	}
})