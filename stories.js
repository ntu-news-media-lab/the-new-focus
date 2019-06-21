const urlParams = new URLSearchParams(window.location.search);
const mood = urlParams.get("mood") || 'breaking';
console.log(mood);
const placeholder = 'https://www.tnp.sg/sites/all/themes/custom/tnp2016/images/default-thumb--court-crime.jpg';

var moodDict = {
  'breaking': {
    edition: 'morning',
    title: "Breaking News",
    description: "Latest news in the past hour, so you can stay in-the-know."
  },
  'trending': {
    edition: 'morning',
    title: "Trending News",
    description: "Read up on the top five most-viewed articles in the past 24 hours."
  },
  'catchup': {
    edition: 'morning',
    title: "Catch Up",
    description: "Missed the news last night? Here's the five top stories when you were sleeping."
  },
  'lunchmunch': {
    edition: 'afternoon',
    title: "Lunch Munch",
    description: "Hungry? Discover the best places to lunch, munch and catch up with friends.",
    json: lunchmunch_json
  },
  'sgfocus': {
    edition: 'afternoon',
    title: "SG Focus",
    description: "Stories from Singapore, for Singaporeans. Catch up with the latest local news.",
    json: sgfocus_json
  },
  'entertainment': {
    edition: 'afternoon',
    title: "For your entertainment",
    description: "From Hollywood to Caldecott. Read up on the updates from around the globe.",
    json: entertainment_json
  },
  'rewind': {
    edition: 'evening',
    title: "Today Rewind",
    description: "Didn't quite catch up on the news today? We've got you covered. Here's all you need to know."
  },
  'dinnerspots': {
    edition: 'evening',
    title: "Dinner Spots",
    description: "Not sure what to eat? Check out some of our picks for an amazing night out."
  },
  'cookittonight': {
    edition: 'evening',
    title: "Cook it tonight",
    description: "Feeling creative? Here's some recipes from our favourite cooks to help you get you in the kitchen."
  }
};

// $(function() {
  console.log("stories.js");

  $('#mood-title').text(moodDict[mood].title);

  // GET featured
  function loadFeatured(stories) {
    console.log(stories);
    // var stories = json.stories;
    // json.stories.forEach(story => {
    const html = `
      <div class="topfont">
        ${moodDict[mood].description}
      </div>
      <hr class="thin"/>
      <div class="row tile">
        <div class="column left portrait" style="background-image: url(${stories[0].img_src || placeholder})"></div>
        <div class="column right">
          <a href="${stories[0].url}" class="headline-large" target="_blank">
            ${stories[0].headline}
          </a>
          <div class="lead-large">
            ${stories[0].standfirst || stories[0].lead}
          </div>
        </div>
        <div class="tile-btm">
          <div class="date-large pull-left">
            ${stories[0].published_date} | ${stories[0].category}
          </div>
          <a href="${stories[0].url}" class="read small pull-right" target="_blank">READ</a>
        </div>
      </div>
      <hr class="thin"/>

      <div class="row">
        <div class="column left small">
          <div class="tile">
            <img src="${stories[1].img_src || placeholder}">
            <a href="${stories[1].url}" class="headline-small" target="_blank">
              ${stories[1].headline}
            </a>
            <div class="lead-small">
              ${stories[1].standfirst || stories[1].lead}
            </div>
            <div class="date-small">
              ${stories[1].published_date} | ${stories[1].category}
            </div>
            <a href="${stories[1].url}" class="read small margin-top" target="_blank">READ</a>
          </div>
          <div class="tile">
            <img src="${stories[3].img_src || placeholder}">
            <a href="${stories[3].url}" class="headline-small" target="_blank">
              ${stories[3].headline}
            </a>
            <div class="lead-small">
              ${stories[3].standfirst || stories[3].lead}
            </div>
            <div class="date-small">
              ${stories[3].published_date} | ${stories[3].category}
            </div>
            <a href="${stories[3].url}" class="read small margin-top" target="_blank">READ</a>
          </div>
        </div>
        <div class="verticle-line"></div>
        <div class="column right small">
          <div class="tile">
            <img src="${stories[2].img_src || placeholder}">
            <a href="${stories[2].url}" class="headline-small" target="_blank">
              ${stories[2].headline}
            </a>
            <div class="lead-small">
              ${stories[2].standfirst || stories[2].lead}
            </div>
            <div class="date-small">
              ${stories[2].published_date} | ${stories[2].category}
            </div>
            <a href="${stories[2].url}" class="read small margin-top" target="_blank">READ</a>
          </div>
          <div class="tile">
            <img src="${stories[4].img_src || placeholder}">
            <a href="${stories[4].url}" class="headline-small" target="_blank">
              ${stories[4].headline}
            </a>
            <div class="lead-small">
              ${stories[4].standfirst || stories[4].lead}
            </div>
            <div class="date-small">
              ${stories[4].published_date} | ${stories[4].category}
            </div>
            <a href="${stories[4].url}" class="read small margin-top" target="_blank">READ</a>
          </div>
        </div>
      </div>

      <hr class="thin" />

      <div class="row tile">
        <div class="column left side portrait" style="background-image: url(${stories[5].img_src || placeholder})"></div>
        <div class="column main right">
          <a href="${stories[5].url}" class="headline-large" target="_blank">
            ${stories[5].headline}
          </a>
          <div class="lead-large margin-btm">
            ${stories[5].standfirst || stories[5].lead}
          </div>
          <div class="date-large pull-left">
            ${stories[5].published_date} | ${stories[5].category}
          </div>
          <a href="${stories[5].url}" class="read small pull-right" target="_blank">READ</a>
        </div>
      </div>
    `;
    $("#content").append(html);
    // });
  }

  // $.ajax({
  //   url: "http://127.0.0.1:5000/api/" + mood,
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

  loadFeatured(moodDict[mood].json);

  $('#' + mood).hide();
  // $('#' + moodDict[mood].edition + '-moods').show();
  $('#' + moodDict[mood].edition + '-moods').css('display', 'flex');

  $('.mood-cards-btm > div').click(function() {
    var id = $(this).attr('id');
    window.location.href= "stories.html?mood=" + id;
  })

  $("#back-icon").click(function() {
    window.location.href = "home.html";
    // window.history.back();
  });

  $("#close-icon").click(function() {
    console.log("close");
    window.close();
  });
// });
