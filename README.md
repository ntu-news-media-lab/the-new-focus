# The New Focus

The New Focus is a Chrome extension that allows readers to cut through the clutter of endless news updates and discover what matters, when it matters – to read with a new focus.

We wanted to solve the issue of news being overwhelmed through an extension that provides users with different editions of news to read at different times of the day – 9am, 12pm and 6pm. 

The Chrome extension would be useful to immediately streamline what is relevant for users at certain times of the day. It also allows readers to access news without having to go the news site directly, and solves the issue of getting bombarded by notifications when it comes to news apps.

![Screenshots](/screenshot.png?raw=true "Screenshots")

Watch a demo of The New Focus [here](https://www.youtube.com/watch?v=_lQx1N6UFt0).

## Installation

1. Download and unzip this code repository
2. In Google Chrome, open the chrome menu by clicking on the 3 dots at the top right hand corner. Go to More tools > Extensions. (Or go to this [link](chrome://extensions/))
3. Enable 'Developer mode' in the top right hand corner
4. Click on 'Load unpacked'
5. Select the code repository folder
6. You should see 'The New Focus' as a chrome extension

## Linking API to The New Focus

To link your articles to TNF, you will need to have a set of APIs that serve different 'playlists' of new stories. E.g. 'Breaking News', 'Entertainment', 'Food' etc. The APIs should return an array of articles in JSON format.

Every news article should have the following information:
- `headline`
- `img_src`
- `lead`
- `published_date`
- `category`
- `url`

Replace the default playlists with your APIs.

---

### Team members
Journalists: Kyle Malinda-White and Claudia Tan

Designers: Jonathan Goh and Elizabeth Wun

Developers: Varick Lim and Nithyasri Manikandan

### Acknowledgements
Ms Jessica Tan and Miss Joan Kelly for the guidance and for giving us the opportunity to embark on the News Media Lab course.

Alan Soon and Rishad Patel from The Splice Newsroom for the kind guidance and advice.

Jonathan Roberts from The New Paper for the continuous support and feedback.
