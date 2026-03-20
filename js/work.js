// スクロールした瞬間にヘッダを出力
window.addEventListener("scroll", function () {
  const header_area = document.querySelector(".header_area");
  if (window.scrollY > 0) {
    header_area.classList.add("visible");
  } else {
    header_area.classList.remove("visible");
  }
});

// スクロールアニメーション関数
function checkNewsAnimation() {
  // ★初めて表示されたときのみ実行される
  // :not(.is-visible) = .is-visibleクラスが無い要素だけ処理
  $(".message_photo_img:not(.is-visible)").each(function () {
    let scroll = $(window).scrollTop(); // スクロールした距離
    let target = $(this).offset().top; // この要素までの距離
    let windowHeight = $(window).height(); // 画面の高さ

    // ★ターゲットがウィンドウの下から200pxの位置に来たらアニメーションを開始
    if (scroll > target - windowHeight + 200) {
      // ★完了済みのクラスを追加。アニメーションを開始。jsでcssのプロパティを変更
      $(this).addClass("is-visible");
      $(this).css({
        opacity: "1",
        transform: "translateY(0)",
      });
    }
  });
}


window.addEventListener('scroll',function(){
  const aaa = document.querySelector("aa");
});


$(function () {
  if(window.innerWidth < 768) {
    // ★スマホの場合は、最初から全ての要素を表示する
    $(".message_photo_img").css({
      opacity: "1",
      transform: "translateY(0)",
    });
    // ★スクロールイベントを解除する

// ★スクロール時
$(window).scroll(checkNewsAnimation);

// ★ページ読込時も実行（最初から見える要素に対応）
$(document).ready(checkNewsAnimation);

// CDNslickのJavaScriptを読み込んでから、slick関数を呼び出す
$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0.3rem",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5rem",
        },
      },
    ],
  });
  // ← ここに追加（slick初期化の後）
  $(".human_view_btn").on("click", function () {
    $(".slider").slick("slickNext");
  });
});
