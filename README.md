# numkeyBoardtest
## js虚拟数字键盘

 var k = new KeyBoardView(moneyCount);//new一个键盘对象<p/>
 var keyBoardOptions = new KeyBoardOptions();//键盘参数对象，也可以不设置，有默认值，具体可以看js文件<p/>
 keyBoardOptions.width = "300px";//键盘整体布局的宽度<p/>
 keyBoardOptions.height="500px";//键盘整体布局的高度<p/>
 keyBoardOptions.top="100px";//键盘左上角的y值<p/>
 keyBoardOptions.left="200px";//键盘左上角的x值<p/>
 keyBoardOptions.fontSize="#f00";//键盘字体的颜色<p/>
 k.setOptions(keyBoardOptions);//设置参数生效<p/>
 k.show();//显示键盘<p/>
