
// var palindromeBtn=document.querySelector('.palindromeBtn')
var bdayDiv=document.querySelector('.bday')
var bdayInput = document.querySelector(".bdayInput");
var checkBtn = document.querySelector(".checkBtn");
var output = document.querySelector(".output");

bdayInput.addEventListener('change', function(e) {
    // bday=bdayInput.value
    bday=e.target.value
})

checkBtn.addEventListener("click", palindrome);

function palindrome() {
  if (bday=="" || bday==undefined) {
    output.innerHTML="<h3>kindly enter input</h3>"
  }

  else {
    // var bdayString = bdayInput.value;
    var bdayString = bday;

    if (bdayString !== "") {
        var date = bdayString.split("-");
        var yyyy = date[0];
        var mm = date[1]; //03
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm), //3
            year: Number(yyyy),
        };

        var dateStr = dateString(date);
        var list = checkPalindromeForAllDateFormats(dateStr);
        var isPalindrome = false;

        for (let i = 0; i < list.length; i++) {
            if (list[i]) {
            isPalindrome = true;
            break;
            }
        }

        if (!isPalindrome) {
            output.innerHTML="<h3>oops...not a palindrome birthday</h3>"
        }
        else {
            output.innerHTML="<h3>yayyy...palindrome birthday</h3>"
        }
    }
  }
}

function stringReverse(str) {
  var listOfChars = str.split("");
  var reversedListOfChar = listOfChars.reverse();
  var stringReversed = reversedListOfChar.join("");
  return stringReversed;
}

function stringDatePalindrome(str) {
  var stringReversed = stringReverse(str);
  return str === stringReversed;
}

function dateString(date) {
  var dateInStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateInStr.day = "0" + date.day;
  } else {
    dateInStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateInStr.month = "0" + date.month;
  } else {
    dateInStr.month = date.month.toString();
  }

  dateInStr.year = date.year.toString();
  return dateInStr;
}

function dateInAllFormats(date) {
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function checkPalindromeForAllDateFormats(date) {
  var dateFormatList = dateInAllFormats(date);
  var palindromeList = [];

  for (var i = 0; i < dateFormatList.length; i++) {
    var result = stringDatePalindrome(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}