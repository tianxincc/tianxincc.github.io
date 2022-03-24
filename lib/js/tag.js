/**
 * 使用js仿标签云
 * @param tagName 选中标签名称
 * @constructor
 */

function TagListShow(tagName)
{
    // alert(tagName);

    $(".tags").addClass("sr-only"); // 追加样式

    $(".archive").removeClass("sr-only"); //移除

    $("."+tagName).removeClass("sr-only"); //移除

}

function secondToDate(second) {
    if (!second) {
        return 0;
    }
    const time = new Array(0, 0, 0, 0, 0);
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
}

function setTime() {
    // 博客创建时间秒数，时间格式中，月比较特殊，是从0开始的，所以想要显示5月，得写4才行，如下
    var create_time = Math.round(new Date(Date.UTC(2020, 9, 26, 0, 0, 0))
        .getTime() / 1000);
    // 当前时间秒数,增加时区的差异
    var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
    currentTime = secondToDate((timestamp - create_time));
    currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
        + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
        + '秒';
    document.getElementById("htmer_time").innerHTML = currentTimeHtml;
}
setInterval(setTime, 1000);