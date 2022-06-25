/*
    MIT License

    Copyright (c) 2022 vinzznv

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
*/

import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import ExperienceComponent from './page/homepage/experience/experience.component';
import { HomeVideo } from './page/homepage/home-video/home-video.component';
import { MessageComponent } from './page/homepage/message/message.component';
import ProjectComponent from './page/homepage/project/project.component';


const firebaseConfig = {
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);


function App() {
  return (
    <div className="App">
      <MessageComponent/>
      <ExperienceComponent/>
      <ProjectComponent/>
      <HomeVideo/>
    </div>
  );
}

export default App;
