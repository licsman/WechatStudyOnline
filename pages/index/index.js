//index.js
//获取应用实例
Page({
  data: {
    screenWidth: "",
    indicatordots: true,
    indicatorcolor: "rgba(255,255,255,0.4)",
    indicatoractivecolor: "#336699",
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
  },
  tab2: function (options) {
    wx.switchTab({
      url: '../tab2/tab2',
    })
  },
  tab3: function (options) {
    wx.switchTab({
      url: '../tab3/tab3',
    })
  },
  yunjisuan: function (options) {
    wx.navigateTo({
      url: '../course/course',
    })
  },
  qiantai: function (options) {
    wx.navigateTo({
      url: '../qiantai/qiantai',
    })
  },
  java: function (options) {
    wx.navigateTo({
      url: '../java/java',
    })
  },
  jiaozhi: function (options) {
    wx.navigateTo({
      url: '../jiaozhi/jiaozhi',
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.screenWidth*0.37
        })
      },
    })
  },
})