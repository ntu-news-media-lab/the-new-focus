let globalRead = false;
if (chrome.storage) {
  chrome.storage.local.get(['read'], function(result) {
    globalRead = result.read;
    console.log('Value currently is ' + result.read);
  });
  // console.log(globalRead)
}

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let today = new Date();
let currentHour = today.getHours();
currentHour = 15;
let currentMonth = today.getMonth()
let currentDate = today.getDate();
let currentDay = today.getDay();
const placeholder = 'https://www.tnp.sg/sites/all/themes/custom/tnp2016/images/default-thumb--court-crime.jpg';
var allCaughtUp = `
  <div style="color: white; padding-top: 45px;" class='caughtIt'>
    <div style="width: 70px;" class='circle-container'>
      <div class="trigger"></div>
      <svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 37 37" style="enable-background:new 0 0 37 37;" xml:space="preserve">
      <path class="circ path" style="fill:none;stroke:#F58A1f;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;" d="
        M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
      <polyline class="tick path" style="fill:none;stroke:#FFF;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;" points="
        11.6,20 15.9,24.2 26.4,13.8 "/>
      </svg>
    </div>
    <br />
    Great, you're all caught up!
  </div>
`;


// $(function() {
  console.log("home.js");
  
  let greeting;  
  if (currentHour < 12) {
    greeting = 'Morning';
    nextEdi = '12pm';
  } else if (currentHour < 18) {
    greeting = 'Afternoon';
    nextEdi = '6pm';
  } else {
    greeting = 'Evening'
    nextEdi = '9am';
  }

  $('#greeting').text(greeting);
  $('#date').text(currentDate + ' ' + monthNames[currentMonth]);
  $('#day').text(dayNames[currentDay]);
  $('#next-edi-timing').text(nextEdi);

  $('.mood-picker').hide();
  $('#' + greeting).show();

  var n_featured = 3;
  // GET featured
  function loadFeatured(json) {
    var stories = json.slice(0, 5); // take 5 items
    console.log(stories);
    n_featured = stories.length + 1;
    stories.forEach(story => {
      const html = `
        <div class="featured" style="background-image: url(${story.img_src || placeholder})">
          <div class="overlay">
            <div class="category">${story.category}</div>
            <a href="${story.url}" class="news-title" target="_blank">${story.headline}</a>
            <div class="bottom">
              <a href="${story.url}" class="read" target="_blank">READ</a>
              <div class="date">
                ${story.published_date}
                <span class="divider">|</span>
                ${story.tag}
              </div>
            </div>
          </div>
        </div>
      `;
      $(".featured-container").append(html);
    });
    $(".featured-container").append(allCaughtUp);

    // Interactions

    let showing = 0;
    let featuredTiles = $(".featured-container").children();
    toggleTiles();

    function toggleTiles() {
      let target = featuredTiles[showing];
      $(target)
        .show()
        .siblings("div")
        .hide()
        .delay(100)
        .promise()
        .done(function() {
          if (globalRead || showing == n_featured - 1) {
            $(".trigger").addClass("drawn");
          }
        });

      $("#right-arrow, #left-arrow").removeClass("disabled");
      if (showing == 0) {
        $("#left-arrow").addClass("disabled");
      } else if (showing == n_featured - 1) {
        $("#right-arrow").addClass("disabled");
        // globalRead = true;
        chrome.storage.local.set({ 'read': true }, function() {
          console.log('Value is set to ' + true);
        });
      }
    }

    $("#right-arrow").click(function() {
      if (showing < n_featured - 1) showing += 1;
      toggleTiles();
    });

    $("#left-arrow").click(function() {
      if (showing > 0) showing -= 1;
      toggleTiles();
    });
  }

  // $.ajax({
  //   url: "http://127.0.0.1:5000/api/breaking",
  //   method: "GET",
  //   crossDomain: true,
  //   contentType: "application/json",
  //   dataType: "json",
  //   responseType: "application/json",
  //   success: loadFeatured,
  //   error: function(xhr, textStatus, errorThrown) {
  //     console.log(xhr);
  //     console.log(textStatus);
  //     console.log(errorThrown);
  //   }
  // });

  loadFeatured(breaking_json);

  $('.mood').click(function() {
    // console.log(this);
    var mood = $(this).attr('id');
    window.location.href= "stories.html?mood=" + mood;
  })
  
  $('#close-icon').click(function() {
    console.log('close');
    window.close();
  })

// });

// Update badge
if (chrome.browserAction) {
  chrome.browserAction.setBadgeText({text: ""});
}