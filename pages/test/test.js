// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  turnToPage : function (event){
    console.log(event)
    wx.redirectTo({
      url: '/pages/number/'+event.target.id
    })
  },
  add: function (e) {
    this.data.temp = this.data.staffA
    this.data.temp.firstName = 'aaron'
    this.data.temp.lastName = this.data.count
    this.setData({
      count: this.data.count + 1,
      staffA: this.data.temp
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeTabBarBadge({
      index: 2
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})