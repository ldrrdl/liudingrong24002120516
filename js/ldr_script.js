/* ============================================
   作者：刘定荣(liudingrong)
   说明：电视剧排行榜选项卡逻辑，一比一还原效果图
   规则：所有 JS 变量均以 ldr_ 开头
   ============================================ */

// 四个选项卡对应的榜单数据（来自四张效果图）
var ldr_rank_data = {
    "每日": [
        "最美的时光", "咱们结婚吧", "渗透", "继承者们", "烽火佳人",
        "极品女士第2季", "爱闪亮", "狼烟（2013）", "钱多多炼爱记", "苍狼"
    ],
    "每周": [
        "咱们结婚吧", "继承者们", "最美的时光", "爱闪亮", "渗透",
        "狼烟（2013）", "三十岁，你好", "钱多多炼爱记", "特种兵之火凤凰", "极品女士第2季"
    ],
    "每月": [
        "特种兵之火凤凰", "咱们结婚吧", "继承者们", "金玉满堂", "王的女人",
        "爱闪亮", "爱情面前谁怕谁", "英雄联盟", "小爸爸", "我们这拨人"
    ],
    "全部": [
        "永不磨灭的番号", "特种兵之火凤凰", "新还珠格格", "咱们结婚吧", "小爸爸",
        "心术", "乡村爱情5", "天天有喜", "一不小心爱上你", "夏日甜心"
    ]
};

// 获取选项卡列表与榜单容器
var ldr_tab_items = document.querySelectorAll("#ldr_tab_nav .ldr_tab_item");
var ldr_list_box = document.getElementById("ldr_rank_list");

// 渲染榜单：前 5 名左列，后 5 名右列
function ldr_render_list(ldr_key) {
    var ldr_arr = ldr_rank_data[ldr_key];
    var ldr_html = "";

    // 左列（第 1-5 名）
    ldr_html += '<div class="ldr_rank_col">';
    for (var ldr_i = 0; ldr_i < 5; ldr_i++) {
        ldr_html += ldr_build_item(ldr_i, ldr_arr[ldr_i]);
    }
    ldr_html += '</div>';

    // 右列（第 6-10 名）
    ldr_html += '<div class="ldr_rank_col">';
    for (var ldr_j = 5; ldr_j < 10; ldr_j++) {
        ldr_html += ldr_build_item(ldr_j, ldr_arr[ldr_j]);
    }
    ldr_html += '</div>';

    ldr_list_box.innerHTML = ldr_html;
}

// 拼接单条榜单 HTML，前三名加红色序号样式
function ldr_build_item(ldr_index, ldr_name) {
    var ldr_no = ldr_index + 1;
    var ldr_cls = ldr_no <= 3 ? "ldr_rank_num ldr_top3" : "ldr_rank_num";
    return '<div class="ldr_rank_item">'
         + '<span class="' + ldr_cls + '">' + ldr_no + '</span>'
         + '<span class="ldr_rank_title">' + ldr_name + '</span>'
         + '</div>';
}

// 给每个选项卡绑定点击事件
for (var ldr_k = 0; ldr_k < ldr_tab_items.length; ldr_k++) {
    ldr_tab_items[ldr_k].onclick = function () {
        // 清除所有选中状态，再给当前项加选中
        for (var ldr_m = 0; ldr_m < ldr_tab_items.length; ldr_m++) {
            ldr_tab_items[ldr_m].className = "ldr_tab_item";
        }
        this.className = "ldr_tab_item ldr_active";
        // 按选项卡文字渲染对应榜单
        ldr_render_list(this.innerHTML);
    };
}

// 页面加载后默认渲染“每日”榜单（与效果图 1 一致）
ldr_render_list("每日");
