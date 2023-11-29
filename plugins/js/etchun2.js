
//  function scrollToTop() {
//  window.scrollTo({
//    top: 0,
//    behavior: 'smooth'
//  });
//  };


(function(){
  //获得元素
  var btn = document.getElementById('btn');

  var timer;
  btn.onclick = function(){
    //设表先关，防止定时器冲突
    clearInterval(timer);

    //设置定时器
    timer = setInterval(function(){

      // 更改根元素的scrollTop元素值
      //兼容性问题
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      top = top - 80;
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;

      //判断
      if(top <= 0) {
        //关闭定时器
        clearInterval(timer);
      }
    },20);
  };

  //监听页面滚动
  window.onscroll = function() {
    //得到卷动值
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;

    //当页面没有卷动时，返回顶部 按钮就隐藏
    if(scrollTop == 0) {
      btn.style.display = 'none';
    }else {
        btn.style.display = 'block';
    }
  };
})();