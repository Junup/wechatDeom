//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {

    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
        {
          "name": "杨国富麻辣烫",
          "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
          "phone": "10842488744",
          "num": "2"
      },
      {
        "name": "好味道火锅",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "72"
      },
      {
        "name": "大肉串烧烤",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "20"
      },
      {
        "name": "我编不出来了",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "25"
      },
      {
        "name": "好味道火锅",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "72"
      },
      {
        "name": "大肉串烧烤",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "20"
      },
      {
        "name": "我编不出来了",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "25"
      },
      {
        "name": "好味道火锅",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "72"
      },
      {
        "name": "大肉串烧烤",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "20"
      },
      {
        "name": "我编不出来了",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "25"
      },
      {
        "name": "好味道火锅",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "72"
      },
      {
        "name": "大肉串烧烤",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "20"
      },
      {
        "name": "我编不出来了",
        "head": "http://preview.quanjing.com/chineseview113/431-2600.jpg",
        "phone": "10842488744",
        "num": "25"
      }
      ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
