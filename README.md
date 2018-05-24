# numkeyBoardtest
## js虚拟数字键盘

 var k = new KeyBoardView(moneyCount);//new一个键盘对象<p/>
 var keyBoardOptions = new KeyBoardOptions();//键盘参数对象，也可以不设置，有默认值，具体可以看js文件<p/>
 keyBoardOptions.width = "300px";//键盘整体布局的宽度<p/>
 keyBoardOptions.height="500px";//键盘整体布局的高度<p/>
 keyBoardOptions.top="100px";//键盘左上角的y值<p/>
 keyBoardOptions.left="200px";//键盘左上角的x值<p/>
 keyBoardOptions.fontSize="#f00";//键盘字体的颜色<p/>
 keyBoardOptions.afterPointNumCounts = 5;//小数位数控制<p/>
 k.setOptions(keyBoardOptions);//设置参数生效
 k.onOK(function (value) {//确认按钮的回调<p/>
     document.getElementById("div1").innerText = value;
 })
 k.onClear(function () {//清空按钮的回调<p/>
     moneyCount.value = "";
     k.close();
 })
 k.show();//显示键盘<p/>
