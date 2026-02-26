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
  $(".company_photo_img:not(.is-visible)").each(function () {
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

// ★スクロール時
$(window).scroll(checkNewsAnimation);

// ★ページ読込時も実行（最初から見える要素に対応）
$(document).ready(checkNewsAnimation);
