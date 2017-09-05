$(document).ready(function() {
	var htmlToAdd = "";
	$.get("http://soccer.sportsopendata.net/v1/leagues/serie-a/seasons/16-17/topscorers", function(data){		
		var finLength = data["data"]["topscorers"].length;
		
		if (finLength > 5) {
			finLength = 5;
		}
		
		for (var i=0; i<finLength; i++) {
			htmlToAdd += "<tr><td>";
			htmlToAdd += data["data"]["topscorers"][i].fullname;
			htmlToAdd += "</td><td>"
			htmlToAdd += data["data"]["topscorers"][i].team;
			htmlToAdd += "</td><td>"
			htmlToAdd += data["data"]["topscorers"][i].goals;
			htmlToAdd += "</td></tr>"
		}
		
		$("#scorerTable").html(htmlToAdd);
    });
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse("09 27 2017"));
initializeClock('clockdiv', deadline);