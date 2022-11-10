
//アラート表示のscript
// if (window.confirm("今日勉強がんばりますか？")) {
//   alert("では、頑張りましょう！！！");
// } else {
//   alert("時間あるので、頑張りましょうね！！！");
// }

//hiddenのscript
// $('.btn button').on('click', function () {
//   $(this).next().toggleClass('hidden');
// });

// $(function(){
//   $(".btn button").click(function(){
//     $("#toi-a").toggle();
//   });
// });


//初期設定で問題の非表示
$("#toi-a").hide();
$("#toi-b").hide();
$("#toi-c").hide();
$(".result").hide();

//問題を選ぶscript
$("#select").on("click", function () {
  $(".hedden-next h1").hide();

  const min = 0;
  const max = 2;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomNumber === 0) {
    $("#quizu").text("Aタイプ");
    $('#toi-a').show(1000);
    $('#toi-b').hide(0);
    $('#toi-c').hide(0);

  } else if (randomNumber === 1) {
    $("#quizu").text("Bタイプ");
    $('#toi-a').hide(0);
    $('#toi-b').show(1000);
    $('#toi-c').hide(0);


  } else if (randomNumber === 2) {
    $("#quizu").text("Cタイプ");
    $('#toi-a').hide(0);
    $('#toi-b').hide(0);
    $('#toi-c').show(1000);
  }
});

// 全てのチェックボックスからチェックを外す
$('#select').on('click', function () {
  $('.toi-inner input[type=checkbox]').removeAttr("checked").prop("checked", false).change();
});

//チェックボックス1つだけ選択できるようにする
$(function () {
  $('.toi-inner input[type=checkbox]').on('click', function () {
    if ($(this).prop('checked')) {
      // 一旦全てをクリアして再チェックする
      $('.toi-inner input[type=checkbox]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});

//回答についてのscript
//1問目

$("#btn-check-a").click(function () {
  $(".result").hide();
  $(".result").show(1000);
  if ($("#ansa-a").prop("checked")) {
    $(".result-a").text("正解です");
  } else {
    $(".result-a").text("不正解です");
  }
});

//2問目
$("#btn-check-b").click(function () {
  $(".result").hide();
  $(".result").show(1000);
  if ($("#ansb-b").prop("checked")) {
    $(".result-b").text("正解です");
  } else {
    $(".result-b").text("不正解です");
  }
});

//3問目
$("#btn-check-c").click(function () {
  $(".result").hide();
  $(".result").show(1000);
  if ($("#ansc-b").prop("checked")) {
    $(".result-c").text("正解です");
  } else {
    $(".result-c").text("不正解です");
  }
});


// 参考サイト https://www.kuuneruch.com/javascript01/

//問題の答えについてのscript
// $(".result").hide();
// $(function () {
//   $("#btn-check").click(function () {

//     const qNum = $("ul li").length;
//     if ($("ul li input:checked").length < qNum) {
//       alert("未回答です");
//     } else {
//       const typeANum = $(".ans-a:checked").length,
//         typeBNum = $(".ans-b:checked").length;
//       if (typeANum > typeBNum) {
//         $(".toia-a").fadeIn();
//       } else if (typeANum < typeBNum) {
//         $(".toia-b").fadeIn();
//       }
//     }
//   });
// });

// $("#toia-a").hide();
// $("#toia-b").hide();

// $("#btn-check").click(function () {
//   if ($("#ansa-a").prop("checked")) {
//     $("#toia-a").text("正解です");
//   } else {
//     $("#toia-a").text("不正解です");
//   }
// });
//参考サイト： https://itsakura.com/jquery-checkbox
//サイト：　https://qiita.com/bstyle6130/items/c3dfebdceaaef8e3860d

//length参考サイト：https://www.sejuku.net/blog/34465
//参考サイト https://sole-color-blog.com/blog/1060/


//テキストモーダル　https://coco-factory.jp/ugokuweb/move01/9-6-3/
$(".hinto").modaal({
  overlay_close: true,//モーダル背景クリック時に閉じるか
  before_open: function () {// モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
  },
  after_close: function () {// モーダルが閉じた後に行う動作
    $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
  }
});

//画像のモーダル
$(".gallery").modaal({
  type: 'image',
  overlay_close: true,//モーダル背景クリック時に閉じるか
  before_open: function () {// モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
  },
  after_close: function () {// モーダルが閉じた後に行う動作
    $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
  }
});

//topkadai　カウントダウン

let countdown = setInterval(function () {
  document.querySelectorAll('.countdown').forEach(function (elem) {
    const now = new Date()  //今の日時
    const targetTime = new Date(elem.getAttribute("data-target-time"))  //ターゲット日時を取得
    const remainTime = targetTime - now  //差分を取る（ミリ秒で返ってくる

    // 指定の日時を過ぎていたらスキップ
    if (remainTime < 0) return true

    // //差分の日・時・分・秒を取得
    //const difYear = Math.floor(remainTime / 1000 / 60 / 60 / 24 / 365) 
    const difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24) % 365
    const difHour = Math.floor(remainTime / 1000 / 60 / 60) % 24
    const difMin = Math.floor(remainTime / 1000 / 60) % 60
    const difSec = Math.floor(remainTime / 1000) % 60

    // //残りの日時を上書き
    //elem.querySelectorAll('.countdown-year')[0].textContent = difYear
    elem.querySelectorAll('.countdown-day')[0].textContent = difDay
    elem.querySelectorAll('.countdown-hour')[0].textContent = difHour
    elem.querySelectorAll('.countdown-min')[0].textContent = difMin
    //elem.querySelectorAll('.countdown-sec')[0].textContent = difSec
  });
}, 1000)    //1秒間に1度処理

//参考　https://mgmgblog.com/?p=2595


  // ちこちゃん登場10秒後
$(function () {
  const str = '<img src="img/chikochan.jpg">';
  setTimeout(function () {
    $('.output').append(str);
  }, 10000);
});

$(function () {
  const str = '<html src ="kadai.html" >';
  setTimeout(function () {
    $('.kadaihe').append(str);
  }, 10000);
});