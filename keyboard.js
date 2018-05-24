/**
 * 自定义数字键盘
 * @param input 触发键盘的控件
 * @param input  触发键盘的控件的id
 * @param options   键盘的属性
 * @constructor
 */
function KeyBoardView(input) {

    var KEYBOARD_DIV_ID = 'keyboard_div_0x0001';//keyboard的id
    var KEYBOARD_TABLE_ID = 'keyboard_table_x00002';//keyboard的内部table的id
    var KEYBOARD_DIV_TOP = 'keyboard_div_top_0x0003';//清空和确认所在div的外层
    var KEYBOARD_OK = 'keyboard_ok_0x0004';//确认按钮
    var KEYBOARD_CLEAR = 'keyboard_clear_0x0005';//清除按钮


    var inputAbsLeft = getAbsoluteLeft(input);//触发键盘的控件的左部位置
    var inputAbsTop = getAbsoluteTop(input) + getElementHeight(input);//触发键盘的控件的顶部位置
    var inputWidth = getElementWidth(input);//触发键盘的控件的宽度
    var keyboard = document.createElement('div');//创建一个div

    var divWidth = inputWidth + 'px';
    var divHeight = inputWidth * 1.5 + 'px';
    var fontSize = '15px';
    var left = inputAbsLeft + "px";
    var top = inputAbsTop + "px";
    var afterPointNumCounts = 2;

    var onOk;
    var onClear;

    this.setOptions = function (options) {
        divWidth = options.width;
        divHeight = options.height
        fontSize = options.fontSize;
        left = options.left;
        top = options.top;
        afterPointNumCounts = options.afterPointNumCounts;
    }

    this.show = function () {
        if (document.getElementById(KEYBOARD_DIV_ID)) {
            document.getElementsByTagName('body')[0].removeChild(document.getElementById(KEYBOARD_DIV_ID));
        }


        keyboard.id = KEYBOARD_DIV_ID;
        keyboard.style.position = 'absolute';
        keyboard.style.left = left;
        keyboard.style.top = top;
        keyboard.style.width = divWidth;
        keyboard.style.height = divHeight;
        keyboard.style.color = fontSize;
        keyboard.style.marginTop = "2px";
        keyboard.style.backgroundColor = "#756542"


        //样式
        var cssStr =
            '<style type="text/css">' +
            '#' + KEYBOARD_TABLE_ID + '{text-align:center;width:100%;height:100%;border-top:1px solid #CECDCE;background-color:#FFF;}' +
            '#' + KEYBOARD_TABLE_ID + ' td{width:33%;border:1px solid #ddd;border-right:0;border-top:0;}' +
            '#' + KEYBOARD_TABLE_ID + ' td:hover{background-color:#1FB9FF;color:#FFF;}' +
            '#' + KEYBOARD_DIV_TOP + ' div:hover{background-color:#1FB9FF;color: #ffffff;}' +
            '</style>';

        //清空和确认
        var btnStr =
            '<div id=' + KEYBOARD_DIV_TOP + ' style="width: 100%;">' +
            '<div id=' + KEYBOARD_OK + ' style="width: 30%;height: 30px;float: left;' +
            'background-color:#1FB9FF;text-align:center;line-height:28px;margin-bottom: 1px">确认</div>' +
            '<div id=' + KEYBOARD_CLEAR + ' style="width: 30%;height: 30px;float: right;' +
            'background-color:#1FB9FF;text-align:center;line-height:28px;margin-bottom: 1px">清空</div>' +
            '</div>';

        //表格，包含数字、小数点和退格键
        var tableStr =
            '<table id="' + KEYBOARD_TABLE_ID + '" border="1px" cellspacing="0" cellpadding="0" style="margin-top: 2px">' +
            '<tr><td>1</td><td>2</td><td>3</td></tr>' +
            '<tr><td>4</td><td>5</td><td>6</td></tr>' +
            '<tr><td>7</td><td>8</td><td>9</td></tr>' +
            '<tr><td style="background-color:#D3D9DF;">.</td><td>0</td>' +
            '<td style="background-color:#D3D9DF;">删除</td></tr>' +
            '</table>';
        keyboard.innerHTML = cssStr + btnStr + tableStr;//将css样式，按钮、表格写入keyboard的div
        keyboard.onclick = addEvent;//设置点击处理事件
        document.getElementsByTagName('body')[0].appendChild(keyboard);//显示键盘
    }
    this.onOK = function (eOK) {
        onOk = eOK;
    }
    this.onClear = function (eClear) {
        onClear = eClear;
    }

    this.close = function () {
        if (document.getElementById(KEYBOARD_DIV_ID)) {
            document.getElementsByTagName('body')[0].removeChild(document.getElementById(KEYBOARD_DIV_ID));
        }
    }

    function addEvent(e) {
        var ev = e || window.event;
        var clickEl = ev.element || ev.target;
        var value = clickEl.textContent || clickEl.innerText;
        if (clickEl.tagName.toLocaleLowerCase() === 'td' && value !== "删除") {
            if (value == ".") {
                if (input.value == null || input.value == "" || input.value.length == 0) {
                    input.value += "0.";
                } else if (input.value.indexOf(".") >= 0) {
                } else {
                    input.value += value;
                }
            } else {
                if (input.value == null || input.value == "" || input.value.length == 0) {
                    input.value += value;
                } else if (input.value.length == 1 && input.value == 0) {
                    if (value !== null) {
                        input.value = value;
                    }
                } else {
                    if (input.value.indexOf(".") >= 0 && input.value.substring(input.value.indexOf(".") + 1, input.value.length).length >= afterPointNumCounts) {

                    } else {
                        input.value += value;
                    }
                }
            }
        } else if (clickEl.tagName.toLocaleLowerCase() === 'div' && value === "清空") {
            if (input.value !== null) {
                input.value = "";
            }
            if (onClear!=null) {
                onClear();
            }
        } else if (clickEl.tagName.toLocaleLowerCase() === 'div' && value === "确认") {
            document.getElementsByTagName('body')[0].removeChild(keyboard);
            if (input.value.indexOf(".") >= 0) {
                while (input.value.lastIndexOf("0") == input.value.length - 1) {
                    input.value = input.value.substr(0, input.value.lastIndexOf("0"));
                }
                if (input.value.indexOf(".") == input.value.length - 1) {
                    input.value = input.value.substr(0, input.value.lastIndexOf("."));
                }
            }
            if (onOk!=null) {
                onOk(input.value);
            }
        } else if (clickEl.tagName.toLocaleLowerCase() === 'td' && value === "删除") {
            var num = input.value;
            if (num) {
                var newNum = num.substr(0, num.length - 1);
                if (newNum.lastIndexOf(".") == newNum.length - 1) {
                    newNum = num.substr(0, newNum.length - 1);
                }
                input.value = newNum;
            }
        }
    }
}

/**
 * 数字键盘的参数
 * @constructor
 */
function KeyBoardOptions() {
    var width;//软件盘宽度
    var height;//软键盘高度
    var fontSize;//软键盘数字大小
    var left;//软键盘x坐标
    var top;//软键盘y间隙
    var afterPointNumCounts;//小数点后面的位数
}

