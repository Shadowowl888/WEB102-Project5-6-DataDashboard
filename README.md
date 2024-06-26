# Web Development Project 6 - *BrewFinder*

Submitted by: **Devin Khun**

This web app: **Displays a list of breweries with the address and website link. A map is displayed showing the breweries within the United States. The user is able to filter the breweries list by name search, city, or state.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [ ] Navigation bar leads to different sections
* [ ] Slider to filter by brewery types
* [ ] Add more detailed information on map window

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/43QAPbR.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I encountered with the app is organize the routing of the different pages so that it would be easy to navigate for the user. I also realized that each routing link had to be unique for each brewery which was done by using the unique id for brewery in the database API.

## License

    Copyright [2024] [Devin Khun]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


# Web Development Project 5 - *BrewFinder*

Submitted by: **Devin Khun**

This web app: **Displays a list of breweries with the address and website link. The user is able to filter the breweries list by name search, city, or state.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] **Top brewery location**
  - [x] **Most common city**
  - [x] **Most common country**
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] Navigation bar leads to different sections
* [ ] Slider to filter by brewery types

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/5a8kFjo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I encountered were taking in the multiple search filters and having them applied simulatenously. I figured that the easiest way to do this was to include this within the useEffect hook function to fetch the data and filter based on is the search filteres were present.

## License

    Copyright [2024] [Devin Khun]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

