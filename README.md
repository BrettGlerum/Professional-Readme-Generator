# Professional-Readme-Generator

# Description

The Professional Readme Generator is a mini-application written within VS code that uses Node.js to create a readme for a repository or project. The Professional Readme Generator uses simple Node commands using Inquirer to create and append the readme. The index.js consists most of the code that works with inquirer; starting out with multiple input and confirm statements. These questions ask the title of the repository, the description, installation, usage, and contact information. After all of that, there is a promisify function to create the initializtion process within Node. There is also a generateMarkdown.js file that then creates and appends the readme to the repo or project. It starts with a conditional statement to let the user choose their license, then goes to another conditional statement to verify all the correct responses to the confirm prompts. Then all of this is appended to the readme and the readme is generated

# Usage 

The application is intended to be used entirely through Node.js with the inquirer package. The user must navigate to the index.js in their command line and run "npm i" to install inquirer and successfully use this application. Once they get it installed, they can then run "Node index.js" to begin the application. They will be prompted to type the name of the repository, to which they will then type and press enter. They will then be asked the description of the project, the installation process, application instructions, other contributors or contributions, test instructions, what license they will be using, their github username and email address, and any other contact information they would like to include. If the user chooses not to include any section in their readme, they will not be required to answer the corresponding question and it will be skipped automatically. 

Video: https://github.com/BrettGlerum/Professional-Readme-Generator/blob/main/images/index.js%20-%20professional-readme-generator%20-%20Visual%20Studio%20Code%202022-11-27%2017-02-48.mp4

# License

MIT License

Copyright (c) 2022 BrettGlerum

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
