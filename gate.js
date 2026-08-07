/*
 * イノベーションライフ プレビュー用パスワードゲート
 * test.kaguraku.jp のみで使用。本番 kaguraku.jp にはこのファイルを含めない。
 */
(function () {
  var STORAGE_KEY = 'il-preview-token';
  var PASSWORD = 'il-preview-2026';
  var TOKEN = 'il-preview-2026-ok';

  // すでに認証済みなら何もしない
  try {
    if (localStorage.getItem(STORAGE_KEY) === TOKEN) return;
  } catch (e) {
    // localStorage 使用不可の環境ではプロンプトを出す
  }

  // 認証前は画面を隠す
  document.documentElement.style.visibility = 'hidden';

  function showGate() {
    var pass = window.prompt('プレビューサイト用のパスワードを入力してください', '');
    if (pass === null) {
      // キャンセル: 画面を空に
      document.body.innerHTML =
        '<div style="padding:60px 20px;text-align:center;font-family:sans-serif;color:#333;">' +
        '<h1 style="font-size:20px;margin-bottom:16px;">プレビューサイト</h1>' +
        '<p style="font-size:14px;color:#666;">パスワードが入力されていません。<br>' +
        'ページを再読み込みしてもう一度お試しください。</p></div>';
      document.documentElement.style.visibility = 'visible';
      return;
    }
    if (pass === PASSWORD) {
      try {
        localStorage.setItem(STORAGE_KEY, TOKEN);
      } catch (e) {}
      document.documentElement.style.visibility = 'visible';
    } else {
      document.body.innerHTML =
        '<div style="padding:60px 20px;text-align:center;font-family:sans-serif;color:#333;">' +
        '<h1 style="font-size:20px;margin-bottom:16px;">プレビューサイト</h1>' +
        '<p style="font-size:14px;color:#666;">パスワードが違います。<br>' +
        'ページを再読み込みしてもう一度お試しください。</p></div>';
      document.documentElement.style.visibility = 'visible';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showGate);
  } else {
    showGate();
  }
})();
