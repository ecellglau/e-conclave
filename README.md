# E-Conclave'18 Certificate Download Portal

## About/Introduction

E-Cell GLAU organized it's annual flagship event Entrepreneurship Conclave '18 "Never Settle For Less" on 16-18 Feb'18. The event held many workshops and competitions which were attended by many students from the university and outside.
This website is a portal for the distribution of digital certificates of the events.

## Usage

- Visit https://nihitjain11.github.com/e-conclave/ 
- Select any of the event
- On the Event page, enter your name/email in the search box given.
- The search box will automatically suggest with names.
- If the queried name is in the suggestion, select it by clicking it.
- The name of the participant, his/her email, and the download link will be displayed below the search box.
- Click the Download Link to download the certificate.

### Contributing

Send in your suggestions at nihitjain11@gmail.com or raise an issue and comment your solution/suggestion.

## Installation

- Update the values and data in js files with filenames auto_[EVENT].js in js folder.
- Use value_gen.py file to generate the values and data for the above file in Generated.txt file by providing an excel sheet with Name, email, and event_name of the participant in a "tab delimited text file" named File.txt.
- Then run value_gen.py with python2 environment.
- Copy the content from Generated.txt to the respective auto_[EVENT].js file and save it. 
- This will update the auto-suggestions in the respective event webpage searchbox.

### Requirements

For generation of Certificates:
- Adobe Photoshop (with Certificate Template)

For generating values and data:
- Python2
- Text Editor (Sublime/Notepad++/Atom)


### Installation

Set up a server and run directly from index.html

## Credits

Certificate Design
- Atul Kumar Maurya | https://www.linkedin.com/in/atul-maurya/

Motivation | Inspiration 
- Anmol K Sachan | https://www.linkedin.com/in/anmolhkr/

Initial Code
- https://designshack.net/articles/javascript/create-a-simple-autocomplete-with-html5-jquery/

## License

MIT License

Copyright (c) 2018 Nihit Jain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
