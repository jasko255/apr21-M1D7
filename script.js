 /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      const changeTitle = function (newTitle) {
      let myTitle = document.querySelectorAll('h1')
      myTitle[0].innerHTML = 'Something new'
    
      };
      changeTitle()

 
      
      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {
       let newClass = document.getElementsByTagName('h1')
       newClass[0].setAttribute('class', 'myHeading')

      };
      addClassToTitle()
      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        let myP = document.querySelectorAll('div p')
        myP[0].innerText = 'content changed'
        
        console.log('shoooow myp', myP);
      };
      changePcontent()

      /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

      const changeUrls = function () {
        let myUrl = document.getElementsByTagName('a')
        for(let i = 0; i < myUrl.length; i++){
          myUrl[i].href = 'https://www.google.com'
        }

      };
      changeUrls()

      /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

      const addToTheSecond = function (content) {
        let newLi = document.createElement('li')
        newLi.innerText = 'Im new here'
        let parent = document.getElementById('secondList')
        parent.appendChild(newLi)
      };

      addToTheSecond()

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      const addParagraph = function (content) {
        let newP = document.createElement('p')
        newP.innerHTML = content
        let parent = document.querySelectorAll('div')
        parent[0].appendChild(newP)
      };
      addParagraph('')

      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      const firstUlDisappear = function () {
        
        let x = document.getElementById("firstList");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        
      }; firstUlDisappear()

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      const paintItGreen = function () {
        let greenAll = document.querySelectorAll('ul')
        greenAll.style.bgcolor = 'green'
      };
      paintItGreen()

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        //
      };

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function () {
        //
      };

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");
      // ...

      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        alert('Hello')
      };
      


      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */