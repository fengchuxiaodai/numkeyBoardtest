/**
 * 获取控件左部的绝对位置
 * @param object  控件对象
 * @returns {number}    左部位置px数值，需要拼接  "px"
 */
function getAbsoluteLeft(object) {
    var o = object;
    oLeft = o.offsetLeft
    while (o.offsetParent != null) {
        oParent = o.offsetParent
        oLeft += oParent.offsetLeft
        o = oParent
    }
    return oLeft
}

/**
 * 获取控件顶部的绝对位置
 * @param object  控件对象
 * @returns {number}    顶部位置px数值，需要拼接  "px"
 */
function getAbsoluteTop(object) {
    var o = object;
    oTop = o.offsetTop;
    while (o.offsetParent != null) {
        oParent = o.offsetParent
        oTop += oParent.offsetTop  // Add parent top position
        o = oParent
    }
    return oTop
}


/**
 * 获取控件宽度
 * @param object  控件对象
 * @returns {number}    宽度px数值，需要拼接  "px"
 */
function getElementWidth(object) {
    x = object;
    return x.offsetWidth;
}

/**
 * 获取控件高度
 * @param object  控件对象
 * @returns {number}    高度px数值，需要拼接  "px"
 */
function getElementHeight(object) {
    x = object;
    return x.offsetHeight;
}
