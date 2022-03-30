/**
 * 使用js仿标签云
 * @param tagName 选中标签名称
 * @constructor
 */

function TagListShow(tagName)
{
    $(".tags").addClass("sr-only"); // 追加样式

    $(".archive").removeClass("sr-only"); //移除

    $("."+tagName).removeClass("sr-only"); //移除

}

