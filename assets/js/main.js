$(document).ready(function () {
  var serial = 0,
    resultCount = 0,
    i = 0,
    timer = 0,
    counQuestion = 0,
    countDownId;
  var gameId;
  var quesArray;
  var bar;
  var pName;

  let game = {
    name: "game6",
    title: "আমাদের মুক্তিসংগ্রাম",
    cover: "assets/images/gameThree.jpg",
    id: "A1",
    type: "Advance Quiz",
    questions: [
      {
        title: "বাংলাদেশের জাতির জনকের নাম কী??",
        option: [
          "তাজউদ্দিন আহমেদ",
          "সৈয়দ নজরুল ইসলাম",
          "বঙ্গবন্ধু শেখ মুজিবুর রহমান",
          "মেজর খালেদ মোশারফ",
        ],
        correct: "বঙ্গবন্ধু শেখ মুজিবুর রহমান",
      },
      {
        title: "বাংলাদেশের মুক্তিযুদ্ধের সময় ঢাকা কোন সেক্টরের অধীনে ছিলো?",
        option: [
          "তিন নম্বর সেক্টর",
          "দুই নম্বর সেক্টর",
          "পাঁচ নম্বর সেক্টর",
          "এক নম্বর সেক্টর",
        ],
        correct: "দুই নম্বর সেক্টর",
      },
      {
        title: "অপারেশন সার্চলাইটের পরিকল্পনাকারী কে ছিল?",
        option: [
          "ইয়াহিয়া খান",
          "জুলফিকার আলী ভুট্ট",
          "সাইমন ড্রিং",
          "মেজর জেনারেল জ্যাকব",
        ],
        correct: "ইয়াহিয়া খান",
      },
      {
        title: "সর্ব কনিষ্ঠ খেতাবধারী মুক্তিযোদ্ধার নাম কী?",
        option: ["আবুল হাসান", "কাদের মিয়া", "মিজানুর রহমান", "শহীদুল ইসলাম"],
        correct: "শহীদুল ইসলাম",
      },
      {
        title: "৭ই মার্চ রেসকোর্স ময়দানে উপস্থিত লোকসংক্ষা কত ছিলো?",
        option: [
          "প্রায় দুই লক্ষ",
          "প্রায় দশ লক্ষ",
          "প্রায় ছয় লক্ষ",
          "প্রায় এক লক্ষ",
        ],
        correct: "প্রায় দশ লক্ষ",
      },
      {
        title: "সাইমন ড্রিং কে ছিলেন?",
        option: ["নাট্যকার", "ব্রিটিশ সাংবাদিক", "ঐতিহাসিক", "শিক্ষক"],
        correct: "ব্রিটিশ সাংবাদিক",
      },
      {
        title:
          "মুক্তিযুদ্ধের সময় ব্রিগেড আকারে মোট কয়টি ফোর্স গঠিত হয়েছিল ?",
        option: ["১০ টি", "৫ টি", "৩ টি", "৭ টি"],
        correct: "৩ টি",
      },
      {
        title: "কে ভারত থেকে আত্মসমর্পন দলিল নিয়ে আসেন?",
        option: [
          "শহীদুল ইসলাম",
          "মেজর খালেদ মোশারফ",
          "সৈয়দ নজরুল ইসলাম",
          "মেজর জেনারেল জ্যাকব",
        ],
        correct: "মেজর জেনারেল জ্যাকব",
      },
      {
        title: "এম. ভি. সোয়াত চট্টগ্রামে পৌছে কত তারিখে?",
        option: ["১লা মার্চ", "৩রা জুন", "৩রা মার্চ", "২রা জুলাই"],
        correct: "৩রা মার্চ",
      },
      {
        title: "অপারেশন জ্যাকপটে মোট কতটি পাকিস্তানী জাহাজ ধ্বংস করে?",
        option: ["৬০ টি", "৭০ টি", "১১ টি", "৫ টি"],
        correct: "৬০ টি",
      },
    ],
    result: [
      "মুক্তিযুদ্ধ সম্পর্কে আপনার জ্ঞান অনেক কম । দেশ সম্পর্কে জানুন ,দেশকে ভালোবাসুন",
      "মুক্তিযুদ্ধ সম্পর্কে আপনার জ্ঞান মার্জিত । দেশ সম্পর্কে আরো জানার চেষ্টা করুন",
      "আপনি সত্যিকারের একজন দেশ প্রেমিক",
    ],
    color: [
      "rgba(0, 132, 255, 0.69)",
      "rgba(0, 128, 0, 0.685)",
      "rgba(166, 255, 0, 0.69)",
      "rgba(255, 0, 212, 0.69)",
      "rgba(142, 98, 11, 0.69)",
    ],
    bgImg: [
      "assets/images/bg1.png",
      "assets/images/bg2.png",
      "assets/images/bg3.png",
    ],
    bg: ["assets/images/quesbg.png"],
  };

  var s = 0;
  console.log("Advance quiz");
  $("#gameResult").css(
    "background-image",
    `linear-gradient(green 40%, rgba(255, 255, 255, 0.226) 100%),
  url(${game.bgImg[0]})`
  );

  // $("#imgAndQAfter").after().css("background-image", `url(${game.bg[0]})`);
  quesArray = [...shuffle(game.questions)];
  showAdvanceQues(s, quesArray);
  startInterval(10000);

  $("#rePlayGame").click(function () {
    serial = 0;
    resultCount = 0;
    i = 0;
    $("#gameResult").hide();
    var s = 0;
    console.log("Advance quiz");
    quesArray = [...shuffle(game.questions)];
    showAdvanceQues(s, quesArray);
    startInterval(10000);
  });

  function startInterval(_interval) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(function () {
      if (i > quesArray.length - 1) {
        clearInterval(intervalId);
        advQuizResult();
      } else {
        serial++;
        console.log(i);
        bar.destroy();
        showAdvanceQues(serial, quesArray);
      }
    }, _interval);
  }

  $(".opt").click(function () {
    bar.stop();
    $("button.opt").addClass("disableBtn");
    interval = 10000;
    clickedOptId = $(this).attr("id");
    console.log(clickedOptId);
    //reset countdown
    clearInterval(countDownId);
    // clear the existing interval
    clearInterval(intervalId);
    // just start a new one
    // startInterval(interval);

    for (x = 1; x <= 4; x++) {
      if ($(`#opt${x}`).text() === quesArray[serial].correct) {
        $(`#option${x}`).addClass("correctOpt");
      }
    }

    if ($(`#${clickedOptId} > .optSpan`).text() === quesArray[serial].correct) {
      console.log("correct");
      $(`#${clickedOptId}`).addClass("correctOpt");
      resultCount += 1;
      console.log(resultCount);
    } else {
      console.log("wrong");
      $(`#${clickedOptId}`).addClass("wrongOpt");
    }
    // console.log($(this).text());
    serial++;
    $(".opt").css("box-shadow", "none");
    // $(".opt").addClass("correctOpt");
    if (i < quesArray.length) {
      setTimeout(() => {
        $(`.opt`).removeClass("correctOpt");
        $(`.opt`).removeClass("wrongOpt");
        $("button.opt").removeClass("disableBtn");
        bar.destroy();
        showAdvanceQues(serial, quesArray);
        startInterval(interval);
      }, 2000);
    } else {
      setTimeout(() => {
        console.log("Quiz Done and score" + resultCount);
        advQuizResult();
      }, 2000);
    }
    console.log(`${serial} from click`);
  });
  function countDown() {
    c = 10;
    $("#stopWatch").html(c.toLocaleString("bn-BD"));
    $("#stopWatch").show();
    countDownId = setInterval(function () {
      c >= 0
        ? $("#stopWatch").html(c.toLocaleString("bn-BD"))
        : $("#stopWatch").hide();
      --c;
    }, 840);
  }

  function showAdvanceQues(serial, qArray) {
    clearInterval(countDownId);
    countDown();
    ++i;
    counQuestion++;
    timeLoader();

    $("#gameQuiz").show();
    count = serial;
    console.log(qArray[count].title);

    $("#imgAndQ").css(
      "background-image",
      `linear-gradient(
     ${game.color[Math.floor(Math.random() * game.color.length)]} 0%,
      rgb(0, 0, 0) 75%
    ),
    url(${game.bgImg[Math.floor(Math.random() * game.bgImg.length)]})`
    );

    // $("#gameQuiz #currentQue").text((serial + 1).toLocaleString("bn-BD"));
    $("#gameQuiz #totalQues").text(qArray.length.toLocaleString("bn-BD"));

    $("#gameQuiz h6").text(qArray[count].title);
    $("#opt1").text(qArray[count].option[0]);
    $("#opt2").text(qArray[count].option[1]);
    $("#opt3").text(qArray[count].option[2]);
    $("#opt4").text(qArray[count].option[3]);
  }

  function advQuizResult() {
    $(`.opt`).removeClass("correctOpt");
    $(`.opt`).removeClass("wrongOpt");
    $("button.opt").removeClass("disableBtn");
    bar.destroy();
    counQuestion = 0;

    $("#playerName").text(FBInstant.player.getName());
    console.log(FBInstant.player.getName());

    $("#score").text(
      `${resultCount.toLocaleString(
        "bn-BD"
      )} / ${quesArray.length.toLocaleString("bn-BD")}`
    );
    $("#gameQuiz").hide();
    $("#gameResult").show();

    if (resultCount === quesArray.length) {
      $("#gameResult p").text(game.result[2]);
    } else if (resultCount > quesArray.length / 2) {
      $("#gameResult p").text(game.result[1]);
    } else {
      $("#gameResult p").text(game.result[0]);
    }

    clearInterval(countDownId);
    // clear the existing interval
    clearInterval(intervalId);
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function timeLoader() {
    bar = new ProgressBar.Circle(currentQue, {
      color: "#F7FF11",
      strokeWidth: 8,
      trailWidth: 1,
      easing: "linear",
      duration: 10000,
      text: {
        autoStyleContainer: false,
      },
      from: { color: "#fff", width: 8 },
      to: { color: "#fff", width: 8 },
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        circle.setText(counQuestion.toLocaleString("bn-BD"));
      },
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = "25px";
    bar.text.style.fontWeight = "bold";

    bar.animate(1.0); // Number from 0.0 to 1.0
  }
});

FBInstant.initializeAsync().then(function () {
  var p = 0;
  var interval = setInterval(function () {
    p += 50;
    FBInstant.setLoadingProgress(p);

    if (p >= 95) {
      clearInterval(interval);
      FBInstant.startGameAsync().then(function () {
        console.log("game started");

        //   waitPageCall();

        //   var contextType = FBInstant.context.getType();
        //   var contextId = FBInstant.context.getID();
        pName = FBInstant.player.getName();
        //   var playerPic = FBInstant.player.getPhoto();
        //   var playerId = FBInstant.player.getID();
      });
    }
  }, 100);

  console.log("game initialized");
});
