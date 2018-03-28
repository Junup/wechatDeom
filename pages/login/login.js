
const app = getApp()

Page({
  data: {
    phonepla: '手机号',
    passwordpla: '验证码',
    time: '获取验证码',
    timeOpen: true,
    timeNum : 30,
    reg: false,
    _num: 1,
    inputType: false
  },
  pasortext: function (event){
    this.setData({
      inputType : !this.data.inputType
    });
  },
  validate: function (event) {
    this.data.validate = event.detail.value
  },
  passwordBtn: function (event){
    this.setData({
      _num: event.target.dataset.num,
      inputType: false
    })
    if (event.target.dataset.num == 2){
      this.setData({
        phonepla: '手机/邮箱/用户名',
        passwordpla: '密码',
      }) 
    }else{
      this.setData({
        phonepla: '手机号',
        passwordpla: '验证码',
      }) 
    }
  },
  phone: function (event) {
    this.data.phone = event.detail.value
  },
  downtime: function (event){
    (this.data.timeOpen) ? countdown(this) : ''
  },
  login: function (event) {
    var $this = this.data
    wx.request({
      url: 'http://172.16.204.196:808/mock/5a03fff1d3cd4504120654cd/wechat/login', 
      data: {
        account: $this.phone,
        password: $this.validate,
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.showToast({
          title: res.data.data,
          icon: 'download',
          duration: 2000
        })  
      }
    })
  }
})


function countdown(that) {
  var second = that.data.timeNum
  that.data.timeOpen = false
  that.setData({ time : second + '秒后重新发送' })
  var time = setInterval(function () {
    second--
    if (second !== 0){
      that.setData({
        time: second + '秒后重新发送'
      });
    }else{
      that.setData({
        time: '重新发送'
      });
      clearInterval(time);
      second = that.timeNum;
      that.data.timeOpen = true
    }

  }, 1000)
}  