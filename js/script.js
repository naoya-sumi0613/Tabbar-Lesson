//tab1以外のタブを非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function() {
	//タブがクリックされたとき、いったん全てのタブを非表示にする
  $("#tab-contents .tab").hide();

  //class activeを削除する
	$("#tab-menu .active").removeClass("active");

	//クリックした要素にclass activeを追加する
  $(this).addClass("active");

  //attr()はHTML要素の属性を取得したり設定できるメソッド
  //href属性を取得　showで取得したhref属性の中身が表示される
	$($(this).attr("href")).show();
	event.preventDefault();
});