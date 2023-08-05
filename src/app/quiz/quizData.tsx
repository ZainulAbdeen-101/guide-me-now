  // (~~~~~~~~~~~~~~~~~~~~~~) Web Developement ~~~~~~~~~~~~~~~~~~~~~~)

//  ::::::::::::Frontend ------ 
const frontend_basic_quiz = [


// HTML
    
[
    // Question 1
    {
      question: "What does HTML stand for?",
      options: [
        { id: 0, ans: "Hyperlinks and Text Markup Language", isCorrect: false },
        { id: 1, ans: "Hyper Text Markup Language", isCorrect: true },
        { id: 2, ans: "Home Tool Markup Language", isCorrect: false },
        { id: 3, ans: "Hyper Tool Markup Language", isCorrect: false },
      ],
    },
    // Question 2
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: [
        { id: 0, ans: "<link>", isCorrect: false },
        { id: 1, ans: "<href>", isCorrect: false },
        { id: 2, ans: "<a>", isCorrect: true },
        { id: 3, ans: "<hyperlink>", isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "What is the correct way to create a heading level 1 (h1) in HTML?",
      options: [
        { id: 0, ans: "<heading>", isCorrect: false },
        { id: 1, ans: "<h1>", isCorrect: true },
        { id: 2, ans: "<head>", isCorrect: false },
        { id: 3, ans: "<h>", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "Which HTML tag is used to add an image to a webpage?",
      options: [
        { id: 0, ans: "<img>", isCorrect: true },
        { id: 1, ans: "<image>", isCorrect: false },
        { id: 2, ans: "<picture>", isCorrect: false },
        { id: 3, ans: "<src>", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "How do you create a line break in HTML?",
      options: [
        { id: 0, ans: "<break>", isCorrect: false },
        { id: 1, ans: "<lb>", isCorrect: false },
        { id: 2, ans: "<br>", isCorrect: true },
        { id: 3, ans: "<newline>", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "What is the correct HTML element for inserting a horizontal rule?",
      options: [
        { id: 0, ans: "<line>", isCorrect: false },
        { id: 1, ans: "<hrule>", isCorrect: false },
        { id: 2, ans: "<break>", isCorrect: false },
        { id: 3, ans: "<hr>", isCorrect: true },
      ],
    },
    // Question 7
    {
      question: "Which HTML attribute is used to specify the URL of the linked resource?",
      options: [
        { id: 0, ans: "src", isCorrect: false },
        { id: 1, ans: "link", isCorrect: false },
        { id: 2, ans: "href", isCorrect: true },
        { id: 3, ans: "url", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "What is the purpose of the <meta> tag in HTML?",
      options: [
        { id: 0, ans: "To define a paragraph of text", isCorrect: false },
        { id: 1, ans: "To create a list of items", isCorrect: false },
        { id: 2, ans: "To specify metadata about an HTML document", isCorrect: true },
        { id: 3, ans: "To define a table in HTML", isCorrect: false },
      ],
    },
    // Question 9
    {
      question: "Which HTML element is used to define a table row?",
      options: [
        { id: 0, ans: "<td>", isCorrect: false },
        { id: 1, ans: "<tr>", isCorrect: true },
        { id: 2, ans: "<table>", isCorrect: false },
        { id: 3, ans: "<th>", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "How do you create an unordered list in HTML?",
      options: [
        { id: 0, ans: "<ul>", isCorrect: true },
        { id: 1, ans: "<list>", isCorrect: false },
        { id: 2, ans: "<ol>", isCorrect: false },
        { id: 3, ans: "<unordered>", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "What is the correct way to add a comment in HTML?",
      options: [
        { id: 0, ans: "<!-- This is a comment -->", isCorrect: true },
        { id: 1, ans: "// This is a comment", isCorrect: false },
        { id: 2, ans: "/* This is a comment */", isCorrect: false },
        { id: 3, ans: "<comment>This is a comment</comment>", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "Which HTML attribute is used to define inline styles for an element?",
      options: [
        { id: 0, ans: "style", isCorrect: true },
        { id: 1, ans: "css", isCorrect: false },
        { id: 2, ans: "class", isCorrect: false },
        { id: 3, ans: "inline", isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "What does the <iframe> element in HTML do?",
      options: [
        { id: 0, ans: "Defines an inline frame for embedding external content", isCorrect: true },
        { id: 1, ans: "Creates a floating image on the webpage", isCorrect: false },
        { id: 2, ans: "Defines an image gallery", isCorrect: false },
        { id: 3, ans: "Defines a video player", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "Which HTML element is used to define a navigation menu?",
      options: [
        { id: 0, ans: "<nav>", isCorrect: true },
        { id: 1, ans: "<navigation>", isCorrect: false },
        { id: 2, ans: "<menu>", isCorrect: false },
        { id: 3, ans: "<navbar>", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "How do you create a checkbox input in HTML?",
      options: [
        { id: 0, ans: "<input type=\"checkbox\">", isCorrect: true },
        { id: 1, ans: "<checkbox>", isCorrect: false },
        { id: 2, ans: "<input type=\"input\">", isCorrect: false },
        { id: 3, ans: "<check>", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "What is the correct HTML element for inserting a video on a webpage?",
      options: [
        { id: 0, ans: "<movie>", isCorrect: false },
        { id: 1, ans: "<video>", isCorrect: true },
        { id: 2, ans: "<media>", isCorrect: false },
        { id: 3, ans: "<vid>", isCorrect: false },
      ],
    },
    // Question 17
    {
      question: "Which HTML element is used to define the document's header section?",
      options: [
        { id: 0, ans: "<header>", isCorrect: false },
        { id: 1, ans: "<head>", isCorrect: true },
        { id: 2, ans: "<top>", isCorrect: false },
        { id: 3, ans: "<head-section>", isCorrect: false },
      ],
    },
  ]
        ,


    // CSS
    [
        {
          question: "What does CSS stand for?",
          options: [
            { id: 0, ans: "Cascading Style Sheets", isCorrect: true },
            { id: 1, ans: "Creative Style Sheets", isCorrect: false },
            { id: 2, ans: "Computer Style Sheets", isCorrect: false },
            { id: 3, ans: "Colorful Style Sheets", isCorrect: false },
          ],
        },
        {
          question: "How do you apply inline CSS to an HTML element?",
          options: [
            { id: 0, ans: "<style>...</style>", isCorrect: false },
            { id: 1, ans: "<css>...</css>", isCorrect: false },
            { id: 2, ans: "<inline>...</inline>", isCorrect: false },
            { id: 3, ans: 'style="..."', isCorrect: true },
          ],
        },
        {
          question: "What is the correct CSS syntax to select an element with ID 'myElement'?",
          options: [
            { id: 0, ans: ".myElement", isCorrect: false },
            { id: 1, ans: "#myElement", isCorrect: true },
            { id: 2, ans: "<myElement>", isCorrect: false },
            { id: 3, ans: "element.myElement", isCorrect: false },
          ],
        },
        {
          question: "How do you group multiple CSS selectors to apply the same styles to all of them?",
          options: [
            { id: 0, ans: "Separate each selector with a comma (,).", isCorrect: true },
            { id: 1, ans: "Group them inside a <group> element.", isCorrect: false },
            { id: 2, ans: "Enclose them in square brackets ([]).", isCorrect: false },
            { id: 3, ans: "Use the & symbol between selectors.", isCorrect: false },
          ],
        },
        {
          question: "Which CSS property is used to change the text color of an element?",
          options: [
            { id: 0, ans: "text-color", isCorrect: false },
            { id: 1, ans: "font-color", isCorrect: false },
            { id: 2, ans: "color", isCorrect: true },
            { id: 3, ans: "text-style", isCorrect: false },
          ],
        },
        {
          question: "How do you center an element horizontally in CSS?",
          options: [
            { id: 0, ans: "align: center;", isCorrect: false },
            { id: 1, ans: "margin: auto;", isCorrect: true },
            { id: 2, ans: "horizontal-align: center;", isCorrect: false },
            { id: 3, ans: "text-align: center;", isCorrect: false },
          ],
        },
        {
          question: "What is the purpose of the CSS z-index property?",
          options: [
            { id: 0, ans: "To set the font size of an element", isCorrect: false },
            { id: 1, ans: "To control the transparency of an element", isCorrect: false },
            { id: 2, ans: "To specify the stacking order of elements", isCorrect: true },
            { id: 3, ans: "To change the width of an element", isCorrect: false },
          ],
        },
        {
          question: "How do you create a CSS class rule that applies to all <p> elements with class 'special'?",
          options: [
            { id: 0, ans: "p.special { ... }", isCorrect: true },
            { id: 1, ans: ".special p { ... }", isCorrect: false },
            { id: 2, ans: "special.p { ... }", isCorrect: false },
            { id: 3, ans: "#special { ... }", isCorrect: false },
          ],
        },
        {
          question: "Which CSS property is used to add rounded corners to an element?",
          options: [
            { id: 0, ans: "border-style", isCorrect: false },
            { id: 1, ans: "border-radius", isCorrect: true },
            { id: 2, ans: "corner-style", isCorrect: false },
            { id: 3, ans: "border-curve", isCorrect: false },
          ],
        },
        {
          question: "How do you add a background image to an element in CSS?",
          options: [
            { id: 0, ans: "background: image(url);", isCorrect: false },
            { id: 1, ans: 'background-image: url("image.jpg");', isCorrect: true },
            { id: 2, ans: 'background-source: url("image.jpg");', isCorrect: false },
            { id: 3, ans: "background-url: image.jpg;", isCorrect: false },
          ],
        },
        {
          question: "What is the CSS property used to change the spacing between lines of text?",
          options: [
            { id: 0, ans: "line-spacing", isCorrect: false },
            { id: 1, ans: "line-height", isCorrect: true },
            { id: 2, ans: "text-spacing", isCorrect: false },
            { id: 3, ans: "line-spacing-height", isCorrect: false },
          ],
        },
        {
          question: "How do you hide an element completely using CSS?",
          options: [
            { id: 0, ans: "display: none;", isCorrect: true },
            { id: 1, ans: "visibility: hidden;", isCorrect: false },
            { id: 2, ans: "opacity: 0;", isCorrect: false },
            { id: 3, ans: "hidden: true;", isCorrect: false },
          ],
        },
        {
          question: "What is the purpose of the CSS box-sizing property?",
          options: [
            { id: 0, ans: "To set the size of an HTML box element", isCorrect: false },
            { id: 1, ans: "To control the spacing between elements", isCorrect: false },
            { id: 2, ans: "To specify the box model for an element", isCorrect: true },
            { id: 3, ans: "To create a 3D box effect on an element", isCorrect: false },
          ],
        },
        {
          question: "How do you create a CSS rule that applies only to screens with a maximum width of 768 pixels?",
          options: [
            { id: 0, ans: '@media screen and (max-width: 768px) { ... }', isCorrect: true },
            { id: 1, ans: "@screen and (max-width: 768px) { ... }", isCorrect: false },
            { id: 2, ans: "@media (max-width: 768px) { ... }", isCorrect: false },
            { id: 3, ans: "@max-width 768px { ... }", isCorrect: false },
          ],
        },
        {
          question: "Which CSS property is used to create a shadow effect around an element?",
          options: [
            { id: 0, ans: "box-shadow", isCorrect: true },
            { id: 1, ans: "element-shadow", isCorrect: false },
            { id: 2, ans: "shadow-effect", isCorrect: false },
            { id: 3, ans: "element-effect", isCorrect: false },
          ],
        },
        {
          question: "What does the CSS position: relative; do to an element?",
          options: [
            { id: 0, ans: "Makes the element position itself relative to its parent element", isCorrect: true },
            { id: 1, ans: "Aligns the element to the right side of the screen", isCorrect: false },
            { id: 2, ans: "Moves the element to the top of the stacking order", isCorrect: false },
            { id: 3, ans: "Centers the element horizontally and vertically", isCorrect: false },
          ],
        },
        {
          question: "How do you create a CSS animation?",
          options: [
            { id: 0, ans: "animate: keyframes { ... }", isCorrect: false },
            { id: 1, ans: "animation: keyframes { ... }", isCorrect: false },
            { id: 2, ans: "@keyframes animation { ... }", isCorrect: true },
            { id: 3, ans: "@animate keyframes { ... }", isCorrect: false },
          ],
        },
      ],


    //  JS 
    [
        {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: [
        { id: 0, ans: "variable num = 10;", isCorrect: false },
        { id: 1, ans: "var num = 10;", isCorrect: true },
        { id: 2, ans: "int num = 10;", isCorrect: false },
        { id: 3, ans: "let num = 10;", isCorrect: false },
        ],
        },
        {
        question: "How do you write an inline comment in JavaScript?",
        options: [
        { id: 0, ans: "/* This is a comment */", isCorrect: false },
        { id: 1, ans: "<!-- This is a comment -->", isCorrect: false },
        { id: 2, ans: "// This is a comment", isCorrect: true },
        { id: 3, ans: "# This is a comment", isCorrect: false },
        ],
        },
        {
        question: "What is the result of the expression: 5 + '5' in JavaScript?",
        options: [
        { id: 0, ans: "55", isCorrect: false },
        { id: 1, ans: "10", isCorrect: false },
        { id: 2, ans: "5", isCorrect: false },
        { id: 3, ans: "'55'", isCorrect: true },
        ],
        },
        {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: [
        { id: 0, ans: "array.pop()", isCorrect: true },
        { id: 1, ans: "array.push()", isCorrect: false },
        { id: 2, ans: "array.shift()", isCorrect: false },
        { id: 3, ans: "array.unshift()", isCorrect: false },
        ],
        },
        {
        question: "What is the purpose of the querySelector() method in JavaScript?",
        options: [
        { id: 0, ans: "To select and manipulate DOM elements based on their class names", isCorrect: false },
        { id: 1, ans: "To select and manipulate DOM elements based on their IDs", isCorrect: false },
        { id: 2, ans: "To select and manipulate DOM elements based on CSS selectors", isCorrect: true },
        { id: 3, ans: "To select and manipulate DOM elements based on their tag names", isCorrect: false },
        ],
        },
        {
        question: "How do you check if a variable is of type 'function' in JavaScript?",
        options: [
        { id: 0, ans: "typeof func === 'function'", isCorrect: true },
        { id: 1, ans: "func instanceof Function", isCorrect: false },
        { id: 2, ans: "isFunction(func)", isCorrect: false },
        { id: 3, ans: "func.isFunction()", isCorrect: false },
        ],
        },
        {
        question: "What is the correct way to create a function named multiply that takes two parameters and returns their product?",
        options: [
        { id: 0, ans: "function multiply(num1, num2) { return num1 * num2; }", isCorrect: true },
        { id: 1, ans: "func multiply(num1, num2) => num1 * num2;", isCorrect: false },
        { id: 2, ans: "func multiply(num1, num2) { return num1 * num2; }", isCorrect: false },
        { id: 3, ans: "const multiply = (num1, num2) => { return num1 * num2; }", isCorrect: false },
        ],
        },
        {
        question: "Which built-in function is used to convert a string to an integer in JavaScript?",
        options: [
        { id: 0, ans: "parseInt()", isCorrect: true },
        { id: 1, ans: "stringToInteger()", isCorrect: false },
        { id: 2, ans: "toInteger()", isCorrect: false },
        { id: 3, ans: "strToNum()", isCorrect: false },
        ],
        },
        {
        question: "What does the push() method do in JavaScript arrays?",
        options: [
        { id: 0, ans: "Adds a new element to the beginning of the array", isCorrect: false },
        { id: 1, ans: "Removes the first element of the array", isCorrect: false },
        { id: 2, ans: "Adds a new element to the end of the array", isCorrect: true },
        { id: 3, ans: "Removes the last element of the array", isCorrect: false },
        ],
        },
        {
        question: "What is the purpose of the typeof operator in JavaScript?",
        options: [
        { id: 0, ans: "To check if a variable is defined", isCorrect: false },
        { id: 1, ans: "To determine the data type of a variable or expression", isCorrect: true },
        { id: 2, ans: "To convert a value to a string", isCorrect: false },
        { id: 3, ans: "To compare two values for equality", isCorrect: false },
        ],
        },
        {
        question: "How do you round a number to the nearest integer in JavaScript?",
        options: [
        { id: 0, ans: "Math.floor()", isCorrect: false },
        { id: 1, ans: "Math.round()", isCorrect: true },
        { id: 2, ans: "Math.ceil()", isCorrect: false },
        { id: 3, ans: "Math.random()", isCorrect: false },
        ],
        },
        {
        question: "What does the innerHTML property do in JavaScript?",
        options: [
        { id: 0, ans: "It changes the CSS styling of an element", isCorrect: false },
        { id: 1, ans: "It gets or sets the HTML content within an element", isCorrect: true },
        { id: 2, ans: "It creates a new HTML element", isCorrect: false },
        { id: 3, ans: "It removes an element from the DOM", isCorrect: false },
        ],
        },
        {
        question: "How do you check if an element has a specific CSS class in JavaScript?",
        options: [
        { id: 0, ans: "element.hasClass(className)", isCorrect: false },
        { id: 1, ans: "element.className.contains(className)", isCorrect: false },
        { id: 2, ans: "element.classList.contains(className)", isCorrect: true },
        { id: 3, ans: "element.containsClass(className)", isCorrect: false },
        ],
        },
        {
        question: "What is the purpose of the JSON.stringify() method in JavaScript?",
        options: [
        { id: 0, ans: "To convert a JavaScript object to a JSON string", isCorrect: true },
        { id: 1, ans: "To parse a JSON string and create a JavaScript object", isCorrect: false },
        { id: 2, ans: "To convert a JavaScript array to a JSON string", isCorrect: false },
        { id: 3, ans: "To convert a JSON string to a JavaScript object", isCorrect: false },
        ],
        },
        {
        question: "How do you select all elements with the class 'item' using querySelectorAll()?",
        options: [
        { id: 0, ans: "document.querySelectorAll('item')", isCorrect: false },
        { id: 1, ans: "document.querySelector('.item')", isCorrect: false },
        { id: 2, ans: "document.querySelectorAll('.item')", isCorrect: true },
        { id: 3, ans: "document.querySelector('item')", isCorrect: false },
        ],
        },
        {
        question: "What is the purpose of the addEventListener() method in JavaScript?",
        options: [
        { id: 0, ans: "To add a new element to the DOM", isCorrect: false },
        { id: 1, ans: "To register an event handler for a specified event on a DOM element", isCorrect: true },
        { id: 2, ans: "To create a new event in the browser", isCorrect: false },
        { id: 3, ans: "To style HTML elements dynamically", isCorrect: false },
        ],
        },
        {
        question: "What is the result of the expression: typeof NaN in JavaScript?",
        options: [
        { id: 0, ans: "'undefined'", isCorrect: false },
        { id: 1, ans: "'number'", isCorrect: true },
        { id: 2, ans: "'NaN'", isCorrect: false },
        { id: 3, ans: "'string'", isCorrect: false },
        ],
        },
        ],

]

const frontend_intermediate_quiz=[

    // ReactJS
    [
        // Question 1
        {
          question: "What is React JS?",
          options: [
            { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: true },
            { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
            { id: 2, ans: "A database management system for storing data", isCorrect: false },
            { id: 3, ans: "A programming language for building mobile applications", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "Which command is used to create a new React app using Create React App (CRA)?",
          options: [
            { id: 0, ans: "create-react-app my-app", isCorrect: true },
            { id: 1, ans: "react create my-app", isCorrect: false },
            { id: 2, ans: "new-react-app my-app", isCorrect: false },
            { id: 3, ans: "npm init react-app my-app", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "In React, what is the purpose of the useState hook?",
          options: [
            { id: 0, ans: "To fetch data from an API", isCorrect: false },
            { id: 1, ans: "To handle user events like clicks and form submissions", isCorrect: false },
            { id: 2, ans: "To add styling to components", isCorrect: false },
            { id: 3, ans: "To add stateful logic to functional components", isCorrect: true },
          ],
        },
        // Question 4
        {
          question: "How do you render a React component inside another component?",
          options: [
            { id: 0, ans: "<MyComponent />", isCorrect: true },
            { id: 1, ans: "render(MyComponent)", isCorrect: false },
            { id: 2, ans: "renderComponent(MyComponent)", isCorrect: false },
            { id: 3, ans: "MyComponent.render()", isCorrect: false },
          ],
        },
        // Question 5
        {
          question: "What is the purpose of the useEffect hook in React?",
          options: [
            { id: 0, ans: "To handle component rendering", isCorrect: false },
            { id: 1, ans: "To handle HTTP requests", isCorrect: false },
            { id: 2, ans: "To handle state updates", isCorrect: false },
            { id: 3, ans: "To perform side effects in functional components", isCorrect: true },
          ],
        },
        // Question 6
        {
          question: "In React, how do you pass data from a parent component to a child component using props?",
          options: [
            { id: 0, ans: "<ChildComponent data={data} />", isCorrect: true },
            { id: 1, ans: "<ChildComponent this.props={data} />", isCorrect: false },
            { id: 2, ans: "<ChildComponent props={data} />", isCorrect: false },
            { id: 3, ans: "<ChildComponent data={this.props} />", isCorrect: false },
          ],
        },
        // Question 7
        {
          question: "How do you conditionally render content in JSX based on a variable showContent?",
          options: [
            { id: 0, ans: "{showContent && <div>Content</div>}", isCorrect: true },
            { id: 1, ans: "{showContent ? <div>Content</div> : null}", isCorrect: false },
            { id: 2, ans: "{if (showContent) { <div>Content</div> }}", isCorrect: false },
            { id: 3, ans: "{showContent || <div>Content</div>}", isCorrect: false },
          ],
        },
        // Question 8
        {
          question: "What is the purpose of the Fragment component in React?",
          options: [
            { id: 0, ans: "To create reusable React components", isCorrect: false },
            { id: 1, ans: "To group multiple components together", isCorrect: true },
            { id: 2, ans: "To apply animations and transitions to components", isCorrect: false },
            { id: 3, ans: "To render a list of items", isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "How do you update the state using the useState hook in a functional component?",
          options: [
            { id: 0, ans: "this.setState(newValue)", isCorrect: false },
            { id: 1, ans: "setState(newValue)", isCorrect: false },
            { id: 2, ans: "set(newValue)", isCorrect: true },
            { id: 3, ans: "setNewValue(newValue)", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "What is the purpose of the useEffect hook's second argument?",
          options: [
            { id: 0, ans: "To specify the dependencies for the effect", isCorrect: true },
            { id: 1, ans: "To provide a cleanup function for the effect", isCorrect: false },
            { id: 2, ans: "To handle errors within the effect", isCorrect: false },
            { id: 3, ans: "To control the timing of the effect", isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "How do you create a new React element using JSX?",
          options: [
            { id: 0, ans: "<ReactElement type='div' props={{className: 'box'}}>", isCorrect: false },
            { id: 1, ans: "<ReactElement.div className='box' />", isCorrect: false },
            { id: 2, ans: "<React.div className='box' />", isCorrect: false },
            { id: 3, ans: "<div className='box' />", isCorrect: true },
          ],
        },
        // Question 12
        {
          question: "What is the correct way to handle events in React using JSX?",
          options: [
            { id: 0, ans: "<button onClick={this.handleClick}>Click Me</button>", isCorrect: false },
            { id: 1, ans: "<button onClick={() => handleClick()}>Click Me</button>", isCorrect: false },
            { id: 2, ans: "<button onClick={handleClick}>Click Me</button>", isCorrect: true },
            { id: 3, ans: "<button onClick={this.handleClick()}>Click Me</button>", isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "In React, how do you pass data from a child component to a parent component?",
          options: [
            { id: 0, ans: "By using the props object", isCorrect: false },
            { id: 1, ans: "By using the state object", isCorrect: false },
            { id: 2, ans: "By using the sendData method", isCorrect: true },
            { id: 3, ans: "By using the return statement", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "What is the purpose of the useReducer hook in React?",
          options: [
            { id: 0, ans: "To manage component state in class components", isCorrect: false },
            { id: 1, ans: "To handle asynchronous operations in functional components", isCorrect: false },
            { id: 2, ans: "To reduce the size of the React bundle", isCorrect: false },
            { id: 3, ans: "To manage complex state logic in functional components", isCorrect: true },
          ],
        },
        // Question 15
        {
          question: "How do you create a ref in React using hooks?",
          options: [
            { id: 0, ans: "const ref = createRef();", isCorrect: false },
            { id: 1, ans: "const ref = useRef();", isCorrect: true },
            { id: 2, ans: "const ref = newRef();", isCorrect: false },
            { id: 3, ans: "const ref = useRef.current();", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "What is the purpose of the key prop in a list of React elements?",
          options: [
            { id: 0, ans: "To set a unique identifier for each element in the list", isCorrect: true },
            { id: 1, ans: "To determine the order of elements in the list", isCorrect: false },
            { id: 2, ans: "To style the elements differently", isCorrect: false },
            { id: 3, ans: "To conditionally render elements in the list", isCorrect: false },
          ],
        },
        // Question 17
        {
          question: "How do you render a component conditionally based on the value of showComponent?",
          options: [
            { id: 0, ans: "{showComponent && <MyComponent />}", isCorrect: true },
            { id: 1, ans: "{if (showComponent) { <MyComponent /> }}", isCorrect: false },
            { id: 2, ans: "{<MyComponent show={showComponent} />}", isCorrect: false },
            { id: 3, ans: "{showComponent ? <MyComponent /> : null}", isCorrect: false },
          ],
        },
      ],

    //   Angular
    [
        // Question 1
        {
          question: "What is Angular?",
          options: [
            { id: 0, ans: "A back-end framework for building APIs", isCorrect: false },
            { id: 1, ans: "A front-end JavaScript library for user interfaces", isCorrect: false },
            { id: 2, ans: "A complete platform for building web applications", isCorrect: true },
            { id: 3, ans: "A programming language for building mobile apps", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "In Angular, what is the purpose of the NgModule?",
          options: [
            { id: 0, ans: "To define a module's routing configuration", isCorrect: false },
            { id: 1, ans: "To define a module's component templates", isCorrect: false },
            { id: 2, ans: "To import other modules and services into a module", isCorrect: true },
            { id: 3, ans: "To handle HTTP requests in a module", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "Which command is used to create a new Angular project?",
          options: [
            { id: 0, ans: "ng new my-app", isCorrect: true },
            { id: 1, ans: "ng create my-app", isCorrect: false },
            { id: 2, ans: "ng generate my-app", isCorrect: false },
            { id: 3, ans: "create-angular my-app", isCorrect: false },
          ],
        },
        // Question 4
        {
          question: "In Angular, what is the purpose of the template?",
          options: [
            { id: 0, ans: "To define the component's CSS styles", isCorrect: false },
            { id: 1, ans: "To define the component's HTML structure", isCorrect: true },
            { id: 2, ans: "To define the component's TypeScript code", isCorrect: false },
            { id: 3, ans: "To define the component's unit tests", isCorrect: false },
          ],
        },
        // Question 5
        {
          question: "How do you bind a component property to its template in Angular?",
          options: [
            { id: 0, ans: "<div>{{myProperty}}</div>", isCorrect: true },
            { id: 1, ans: "<div [myProperty]=\"myValue\"></div>", isCorrect: false },
            { id: 2, ans: "<div (myProperty)=\"myValue\"></div>", isCorrect: false },
            { id: 3, ans: "<div @myProperty=\"myValue\"></div>", isCorrect: false },
          ],
        },
        // Question 6
        {
          question: "What is the purpose of Angular's HttpClientModule?",
          options: [
            { id: 0, ans: "To manage the application's navigation and routing", isCorrect: false },
            { id: 1, ans: "To handle HTTP requests and responses in Angular", isCorrect: true },
            { id: 2, ans: "To define a module's services and dependencies", isCorrect: false },
            { id: 3, ans: "To provide animations and transitions for components", isCorrect: false },
          ],
        },
        // Question 7
        {
          question: "How do you define a two-way data binding in Angular?",
          options: [
            { id: 0, ans: "[property]=\"value\"", isCorrect: false },
            { id: 1, ans: "(event)=\"method()\"", isCorrect: false },
            { id: 2, ans: "{{expression}}", isCorrect: false },
            { id: 3, ans: "[(ngModel)]=\"property\"", isCorrect: true },
          ],
        },
        // Question 8
        {
          question: "What is the purpose of the *ngFor directive in Angular?",
          options: [
            { id: 0, ans: "To conditionally render elements in the template", isCorrect: false },
            { id: 1, ans: "To loop through an array and generate HTML elements", isCorrect: true },
            { id: 2, ans: "To handle user interactions and events", isCorrect: false },
            { id: 3, ans: "To define a module's routing configuration", isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "How do you handle user events (e.g., click) in Angular?",
          options: [
            { id: 0, ans: "[click]=\"handleClick()\"", isCorrect: false },
            { id: 1, ans: "(event)=\"handleClick()\"", isCorrect: true },
            { id: 2, ans: "@click=\"handleClick()\"", isCorrect: false },
            { id: 3, ans: "(handleClick)=\"event\"", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "In Angular, how do you define a route path for a component?",
          options: [
            { id: 0, ans: "<router-path>", isCorrect: false },
            { id: 1, ans: "<route-path>", isCorrect: false },
            { id: 2, ans: "<path>", isCorrect: true },
            { id: 3, ans: "<router-outlet>", isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "What is Angular's ngOnInit lifecycle hook used for?",
          options: [
            { id: 0, ans: "To initialize a component's properties and dependencies", isCorrect: true },
            { id: 1, ans: "To handle HTTP requests in a component", isCorrect: false },
            { id: 2, ans: "To create a new instance of a component", isCorrect: false },
            { id: 3, ans: "To define the component's template", isCorrect: false },
          ],
        },
        // Question 12
        {
          question: "How do you pass data from a parent component to a child component using @Input() in Angular?",
          options: [
            { id: 0, ans: "@Input() data = myData;", isCorrect: true },
            { id: 1, ans: "@Input() myData = data;", isCorrect: false },
            { id: 2, ans: "@Input() data: myData;", isCorrect: false },
            { id: 3, ans: "@Input() myData: data;", isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "What is the purpose of Angular's FormsModule?",
          options: [
            { id: 0, ans: "To manage the application's navigation and routing", isCorrect: false },
            { id: 1, ans: "To handle form-related operations and validations", isCorrect: true },
            { id: 2, ans: "To define a module's services and dependencies", isCorrect: false },
            { id: 3, ans: "To provide animations and transitions for components", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "How do you handle form submissions in Angular?",
          options: [
            { id: 0, ans: "(onSubmit)=\"handleSubmit()\"", isCorrect: false },
            { id: 1, ans: "[submit]=\"handleSubmit()\"", isCorrect: false },
            { id: 2, ans: "<form (submit)=\"handleSubmit()\">", isCorrect: true },
            { id: 3, ans: "(formSubmit)=\"handleSubmit()\"", isCorrect: false },
          ],
        },
        // Question 15
        {
          question: "What is Angular's ngIf directive used for?",
          options: [
            { id: 0, ans: "To define a module's routing configuration", isCorrect: false },
            { id: 1, ans: "To conditionally render elements in the template", isCorrect: true },
            { id: 2, ans: "To loop through an array and generate HTML elements", isCorrect: false },
            { id: 3, ans: "To handle user interactions and events", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "How do you style an Angular component using CSS?",
          options: [
            { id: 0, ans: "By adding styles directly to the component's template", isCorrect: false },
            { id: 1, ans: "By importing an external CSS file into the component", isCorrect: false },
            { id: 2, ans: "By defining styles in the @Component decorator", isCorrect: true },
            { id: 3, ans: "By using the style attribute in the component's template", isCorrect: false },
          ],
        },
        // Question 17
        {
          question: "What is the purpose of Angular's ViewChild decorator?",
          options: [
            { id: 0, ans: "To access child elements within the component's template", isCorrect: true },
            { id: 1, ans: "To handle HTTP requests in a component", isCorrect: false },
            { id: 2, ans: "To create a new instance of a component", isCorrect: false },
            { id: 3, ans: "To define the component's template", isCorrect: false },
          ],
        },
      ],

    //jQuery
    [
        // Question 1
        {
          question: "What is jQuery?",
          options: [
            { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: true },
            { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
            { id: 2, ans: "A database management system for storing data", isCorrect: false },
            { id: 3, ans: "A programming language for building mobile apps", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "Which symbol is used as a shorthand for jQuery?",
          options: [
            { id: 0, ans: "$", isCorrect: true },
            { id: 1, ans: "#", isCorrect: false },
            { id: 2, ans: "@", isCorrect: false },
            { id: 3, ans: "&", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "How do you include jQuery in an HTML file?",
          options: [
            { id: 0, ans: "<script src=\"jquery.js\"></script>", isCorrect: true },
            { id: 1, ans: "<script href=\"jquery.js\"></script>", isCorrect: false },
            { id: 2, ans: "<link rel=\"jquery.js\">", isCorrect: false },
            { id: 3, ans: "<link href=\"jquery.js\">", isCorrect: false },
          ],
        },
        // Question 4
        {
          question: "What is the purpose of the $(document).ready() function in jQuery?",
          options: [
            { id: 0, ans: "To specify the document's dimensions", isCorrect: false },
            { id: 1, ans: "To handle AJAX requests", isCorrect: false },
            { id: 2, ans: "To execute code when the DOM is fully loaded", isCorrect: true },
            { id: 3, ans: "To animate elements on the page", isCorrect: false },
          ],
        },
        // Question 5
        {
          question: "How do you select an element with the ID \"myElement\" in jQuery?",
          options: [
            { id: 0, ans: "#myElement", isCorrect: true },
            { id: 1, ans: ".myElement", isCorrect: false },
            { id: 2, ans: "<myElement>", isCorrect: false },
            { id: 3, ans: "element.myElement", isCorrect: false },
          ],
        },
        // Question 6
        {
          question: "Which jQuery method is used to hide an element?",
          options: [
            { id: 0, ans: ".hide()", isCorrect: true },
            { id: 1, ans: ".remove()", isCorrect: false },
            { id: 2, ans: ".display()", isCorrect: false },
            { id: 3, ans: ".hidden()", isCorrect: false },
          ],
        },
        // Question 7
        {
          question: "How do you animate an element with jQuery?",
          options: [
            { id: 0, ans: ".move()", isCorrect: false },
            { id: 1, ans: ".animate()", isCorrect: true },
            { id: 2, ans: ".transition()", isCorrect: false },
            { id: 3, ans: ".slide()", isCorrect: false },
          ],
        },
        // Question 8
        {
          question: "What is the purpose of the addClass() method in jQuery?",
          options: [
            { id: 0, ans: "To remove a class from an element", isCorrect: false },
            { id: 1, ans: "To add a class to an element", isCorrect: true },
            { id: 2, ans: "To toggle between two classes", isCorrect: false },
            { id: 3, ans: "To check if an element has a specific class", isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "How do you change the text content of an element with the class \"myClass\" in jQuery?",
          options: [
            { id: 0, ans: "$(\".myClass\").changeText(\"New Text\");", isCorrect: false },
            { id: 1, ans: "$(\".myClass\").updateText(\"New Text\");", isCorrect: false },
            { id: 2, ans: "$(\".myClass\").text(\"New Text\");", isCorrect: true },
            { id: 3, ans: "$(\".myClass\").textContent(\"New Text\");", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "Which jQuery method is used to make an AJAX request?",
          options: [
            { id: 0, ans: ".ajax()", isCorrect: true },
            { id: 1, ans: ".get()", isCorrect: false },
            { id: 2, ans: ".fetch()", isCorrect: false },
            { id: 3, ans: ".post()", isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "How do you select all elements with a specific class in jQuery?",
          options: [
            { id: 0, ans: "$(class)", isCorrect: false },
            { id: 1, ans: "$(\"class\")", isCorrect: false },
            { id: 2, ans: "#class", isCorrect: false },
            { id: 3, ans: "$(\".class\")", isCorrect: true },
          ],
        },
        // Question 12
        {
          question: "What does $(this) refer to in a jQuery event handler?",
          options: [
            { id: 0, ans: "The current page", isCorrect: false },
            { id: 1, ans: "The selected element that triggered the event", isCorrect: true },
            { id: 2, ans: "The parent element of the selected element", isCorrect: false },
            { id: 3, ans: "The window object", isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "How do you remove an element from the DOM using jQuery?",
          options: [
            { id: 0, ans: ".remove()", isCorrect: true },
            { id: 1, ans: ".hide()", isCorrect: false },
            { id: 2, ans: ".detach()", isCorrect: false },
            { id: 3, ans: ".empty()", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "What is the purpose of the fadeIn() and fadeOut() methods in jQuery?",
          options: [
            { id: 0, ans: "To toggle an element's visibility", isCorrect: false },
            { id: 1, ans: "To add or remove classes from an element", isCorrect: false },
            { id: 2, ans: "To animate an element's opacity", isCorrect: true },
            { id: 3, ans: "To move an element on the page", isCorrect: false },
          ],
        },
        // Question 15
        {
          question: "How do you get or set the value of an input element using jQuery?",
          options: [
            { id: 0, ans: ".value()", isCorrect: false },
            { id: 1, ans: ".val()", isCorrect: true },
            { id: 2, ans: ".text()", isCorrect: false },
            { id: 3, ans: ".input()", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "What is the purpose of the .each() method in jQuery?",
          options: [
            { id: 0, ans: "To iterate over a collection of elements and apply a function to each one", isCorrect: true },
            { id: 1, ans: "To filter elements based on a specific condition", isCorrect: false },
            { id: 2, ans: "To sort elements in a specific order", isCorrect: false },
            { id: 3, ans: "To hide elements that meet a certain criteria", isCorrect: false },
          ],
        },
        // Question 17
        {
          question: "How do you stop the default behavior of an event in jQuery?",
          options: [
            { id: 0, ans: ".preventDefault()", isCorrect: true },
            { id: 1, ans: ".stopPropagation()", isCorrect: false },
            { id: 2, ans: ".cancelEvent()", isCorrect: false },
            { id: 3, ans: ".defaultAction()", isCorrect: false },
          ],
        },
      ],

      //TypeScript
      [
        // Question 1
        {
          question: "What is TypeScript?",
          options: [
            { id: 0, ans: "A programming language for building web applications", isCorrect: false },
            { id: 1, ans: "A superset of JavaScript that adds static typing", isCorrect: true },
            { id: 2, ans: "A back-end framework for handling server-side logic", isCorrect: false },
            { id: 3, ans: "A front-end library for building user interfaces", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "Which extension is used for TypeScript files?",
          options: [
            { id: 0, ans: ".js", isCorrect: false },
            { id: 1, ans: ".ts", isCorrect: true },
            { id: 2, ans: ".jsx", isCorrect: false },
            { id: 3, ans: ".tsx", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "How do you define a variable with a specific type in TypeScript?",
          options: [
            { id: 0, ans: "const myVar: type = value;", isCorrect: true },
            { id: 1, ans: "let myVar = value;", isCorrect: false },
            { id: 2, ans: "var myVar: type;", isCorrect: false },
            { id: 3, ans: "type myVar = value;", isCorrect: false },
          ],
        },
        // Question 4
        {
          question: "What is the purpose of TypeScript's interface?",
          options: [
            { id: 0, ans: "To create classes with predefined properties and methods", isCorrect: false },
            { id: 1, ans: "To define the shape of an object and its properties", isCorrect: true },
            { id: 2, ans: "To handle HTTP requests and responses", isCorrect: false },
            { id: 3, ans: "To declare variables with specific types", isCorrect: false },
          ],
        },
        // Question 5
        {
          question: "How do you define a function with a return type in TypeScript?",
          options: [
            { id: 0, ans: "function myFunc(): returnType { ... }", isCorrect: true },
            { id: 1, ans: "const myFunc(): returnType => { ... }", isCorrect: false },
            { id: 2, ans: "function myFunc(): { ... }", isCorrect: false },
            { id: 3, ans: "function myFunc(returnType): { ... }", isCorrect: false },
          ],
        },
        // Question 6
        {
          question: "What is the purpose of TypeScript's type keyword?",
          options: [
            { id: 0, ans: "To define interfaces with optional properties", isCorrect: false },
            { id: 1, ans: "To create aliases for specific data types", isCorrect: true },
            { id: 2, ans: "To add new methods to existing classes", isCorrect: false },
            { id: 3, ans: "To define the shape of a React component", isCorrect: false },
          ],
        },
        // Question 7
        {
          question: "How do you declare an optional property in a TypeScript interface?",
          options: [
            { id: 0, ans: "propertyName?: type;", isCorrect: true },
            { id: 1, ans: "type propertyName?;", isCorrect: false },
            { id: 2, ans: "propertyName: type?;", isCorrect: false },
            { id: 3, ans: "type? propertyName: type;", isCorrect: false },
          ],
        },
        // Question 8
        {
          question: "What is the purpose of TypeScript's class?",
          options: [
            { id: 0, ans: "To create objects with predefined properties and methods", isCorrect: true },
            { id: 1, ans: "To define CSS styles for HTML elements", isCorrect: false },
            { id: 2, ans: "To add new elements to the DOM", isCorrect: false },
            { id: 3, ans: "To handle form submissions in Angular", isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "How do you extend a class in TypeScript?",
          options: [
            { id: 0, ans: "class SubClass extends BaseClass { ... }", isCorrect: true },
            { id: 1, ans: "subclass(BaseClass) { ... }", isCorrect: false },
            { id: 2, ans: "class SubClass(BaseClass) { ... }", isCorrect: false },
            { id: 3, ans: "subclass(BaseClass): SubClass { ... }", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "What is the purpose of TypeScript's enum?",
          options: [
            { id: 0, ans: "To define a set of related constants", isCorrect: true },
            { id: 1, ans: "To import and export modules in different files", isCorrect: false },
            { id: 2, ans: "To handle asynchronous operations in Angular", isCorrect: false },
            { id: 3, ans: "To create interfaces for API responses", isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "How do you specify that a parameter in a TypeScript function is optional?",
          options: [
            { id: 0, ans: "function myFunc(param: type?) { ... }", isCorrect: false },
            { id: 1, ans: "function myFunc(param?: type) { ... }", isCorrect: true },
            { id: 2, ans: "function myFunc(param?: type?) { ... }", isCorrect: false },
            { id: 3, ans: "function myFunc(param?: type { ... }", isCorrect: false },
          ],
        },
        // Question 12
        {
          question: "What is the purpose of the readonly keyword in TypeScript?",
          options: [
            { id: 0, ans: "To prevent a property from being accessed outside of its class", isCorrect: false },
            { id: 1, ans: "To define a constant property that can't be changed", isCorrect: true },
            { id: 2, ans: "To add a new method to an existing class", isCorrect: false },
            { id: 3, ans: "To specify that a property is optional", isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "How do you import a TypeScript module into another file?",
          options: [
            { id: 0, ans: "import MyModule from './myModule';", isCorrect: false },
            { id: 1, ans: "import { MyModule } from './myModule';", isCorrect: true },
            { id: 2, ans: "import MyModule from 'myModule';", isCorrect: false },
            { id: 3, ans: "import { MyModule } from 'myModule';", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "What is the purpose of TypeScript's namespace?",
          options: [
            { id: 0, ans: "To define interfaces for React components", isCorrect: false },
            { id: 1, ans: "To organize code into logical groups and prevent naming conflicts", isCorrect: true },
            { id: 2, ans: "To handle form submissions in Angular", isCorrect: false },
            { id: 3, ans: "To create aliases for specific data types", isCorrect: false },
          ],
        },
        // Question 15
        {
          question: "How do you define a union type in TypeScript?",
          options: [
            { id: 0, ans: "type myType = type1 & type2;", isCorrect: false },
            { id: 1, ans: "type myType = type1 | type2;", isCorrect: true },
            { id: 2, ans: "type myType = type1 + type2;", isCorrect: false },
            { id: 3, ans: "type myType = type1 || type2;", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "What is the purpose of TypeScript's unknown type?",
          options: [
            { id: 0, ans: "To define variables with unknown values", isCorrect: true },
            { id: 1, ans: "To handle asynchronous operations", isCorrect: false },
            { id: 2, ans: "To declare properties with unknown types", isCorrect: false },
            { id: 3, ans: "To handle HTTP requests and responses", isCorrect: false },
          ],
        },
        // Question 17
        {
          question: "How do you explicitly specify the type of a variable in TypeScript?",
          options: [
            { id: 0, ans: "const myVar = value;", isCorrect: false },
            { id: 1, ans: "const myVar: type = value;", isCorrect: true },
            { id: 2, ans: "const type = value;", isCorrect: false },
            { id: 3, ans: "type myVar = value;", isCorrect: false },
          ],
        },
      ],

     //Bootstrap
     [
        // Question 1
        {
          question: "What is Bootstrap?",
          options: [
            { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: true },
            { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
            { id: 2, ans: "A database management system for storing data", isCorrect: false },
            { id: 3, ans: "A programming language for building mobile apps", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "Which CSS class is used to create a responsive, mobile-first layout in Bootstrap?",
          options: [
            { id: 0, ans: ".container", isCorrect: false },
            { id: 1, ans: ".row", isCorrect: true },
            { id: 2, ans: ".col", isCorrect: false },
            { id: 3, ans: ".grid", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "How do you include Bootstrap in an HTML file?",
          options: [
            { id: 0, ans: '<link rel="stylesheet" href="bootstrap.css">', isCorrect: true },
            { id: 1, ans: '<link rel="stylesheet" href="bootstrap.js">', isCorrect: false },
            { id: 2, ans: '<script src="bootstrap.js"></script>', isCorrect: false },
            { id: 3, ans: '<script src="bootstrap.css"></script>', isCorrect: false },
          ],
        },
        // Question 4
        {
          question: "What is the purpose of Bootstrap's grid system?",
          options: [
            { id: 0, ans: "To handle form submissions in Angular", isCorrect: false },
            { id: 1, ans: "To define the layout and alignment of elements on the page", isCorrect: true },
            { id: 2, ans: "To handle HTTP requests and responses", isCorrect: false },
            { id: 3, ans: "To create interfaces for API responses", isCorrect: false },
          ],
        },
        // Question 5
        {
          question: "Which class is used to create a full-width container in Bootstrap?",
          options: [
            { id: 0, ans: ".container-fluid", isCorrect: true },
            { id: 1, ans: ".container-full", isCorrect: false },
            { id: 2, ans: ".container-width", isCorrect: false },
            { id: 3, ans: ".container-fullwidth", isCorrect: false },
          ],
        },
        // Question 6
        {
          question: "How do you create a button in Bootstrap?",
          options: [
            { id: 0, ans: '<button class="btn">Click Me</button>', isCorrect: true },
            { id: 1, ans: "<btn>Click Me</btn>", isCorrect: false },
            { id: 2, ans: '<div class="button">Click Me</div>', isCorrect: false },
            { id: 3, ans: '<a href="#" class="button">Click Me</a>', isCorrect: false },
          ],
        },
        // Question 7
        {
          question: "What is the purpose of the .navbar class in Bootstrap?",
          options: [
            { id: 0, ans: "To create a fixed navigation bar at the top of the page", isCorrect: true },
            { id: 1, ans: "To apply styles to a footer section", isCorrect: false },
            { id: 2, ans: "To define the font size for text elements", isCorrect: false },
            { id: 3, ans: "To handle user interactions and events", isCorrect: false },
          ],
        },
        // Question 8
        {
          question: "How do you create a responsive image in Bootstrap?",
          options: [
            { id: 0, ans: '<img src="image.jpg" class="responsive-img">', isCorrect: false },
            { id: 1, ans: '<img src="image.jpg" class="img-fluid">', isCorrect: true },
            { id: 2, ans: '<img src="image.jpg" class="img-responsive">', isCorrect: false },
            { id: 3, ans: '<img src="image.jpg" class="fluid-img">', isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "What is the purpose of Bootstrap's .modal class?",
          options: [
            { id: 0, ans: "To handle form submissions in Angular", isCorrect: false },
            { id: 1, ans: "To create a loading spinner for AJAX requests", isCorrect: false },
            { id: 2, ans: "To define the styling for a modal dialog box", isCorrect: true },
            { id: 3, ans: "To handle HTTP requests and responses", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "How do you create a card component in Bootstrap?",
          options: [
            { id: 0, ans: '<div class="card">Card Content</div>', isCorrect: true },
            { id: 1, ans: "<card>Card Content</card>", isCorrect: false },
            { id: 2, ans: '<div class="panel">Card Content</div>', isCorrect: false },
            { id: 3, ans: '<a href="#" class="card">Card Content</a>', isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "What is the purpose of Bootstrap's .badge class?",
          options: [
            { id: 0, ans: "To add a badge to a navigation menu item", isCorrect: true },
            { id: 1, ans: "To define the font size for text elements", isCorrect: false },
            { id: 2, ans: "To handle user interactions and events", isCorrect: false },
            { id: 3, ans: "To apply styles to a footer section", isCorrect: false },
          ],
        },
        // Question 12
        {
          question: "How do you create a dropdown menu in Bootstrap?",
          options: [
            { id: 0, ans: '<div class="dropdown">...</div>', isCorrect: true },
            { id: 1, ans: "<dropdown>...</dropdown>", isCorrect: false },
            { id: 2, ans: '<ul class="dropdown">...</ul>', isCorrect: false },
            { id: 3, ans: '<a href="#" class="dropdown">...</a>', isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "What is the purpose of Bootstrap's .carousel component?",
          options: [
            { id: 0, ans: "To handle asynchronous operations", isCorrect: false },
            { id: 1, ans: "To create a slideshow of images or content", isCorrect: true },
            { id: 2, ans: "To define the font size for text elements", isCorrect: false },
            { id: 3, ans: "To handle form submissions in Angular", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "How do you add a responsive navigation bar in Bootstrap?",
          options: [
            { id: 0, ans: '<nav class="navbar">...</nav>', isCorrect: true },
            { id: 1, ans: '<div class="navbar">...</div>', isCorrect: false },
            { id: 2, ans: '<ul class="navbar">...</ul>', isCorrect: false },
            { id: 3, ans: '<header class="navbar">...</header>', isCorrect: false },
          ],
        },
        // Question 15
        {
          question: "What is the purpose of the .collapse class in Bootstrap?",
          options: [
            { id: 0, ans: "To define the styling for a collapsible element", isCorrect: true },
            { id: 1, ans: "To create a fixed navigation bar at the top of the page", isCorrect: false },
            { id: 2, ans: "To handle user interactions and events", isCorrect: false },
            { id: 3, ans: "To apply styles to a footer section", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "How do you create a form with Bootstrap styling?",
          options: [
            { id: 0, ans: '<form class="form">...</form>', isCorrect: false },
            { id: 1, ans: '<div class="form">...</div>', isCorrect: false },
            { id: 2, ans: '<form class="form-group">...</form>', isCorrect: true },
            { id: 3, ans: '<fieldset class="form">...</fieldset>', isCorrect: false },
          ],
        },
        // Question 17
        {
          question: "What is the purpose of Bootstrap's .alert component?",
          options: [
            { id: 0, ans: "To create a loading spinner for AJAX requests", isCorrect: false },
            { id: 1, ans: "To handle HTTP requests and responses", isCorrect: false },
            { id: 2, ans: "To define the styling for an alert message", isCorrect: true },
            { id: 3, ans: "To handle form submissions in Angular", isCorrect: false },
          ],
        },
      ] 
      
]

const frontend_advanced_quiz=[

// ChakraUI 

    [
        // Question 1
        {
          question: "What is Chakra UI?",
          options: [
            { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: true },
            { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
            { id: 2, ans: "A database management system for storing data", isCorrect: false },
            { id: 3, ans: "A programming language for building mobile apps", isCorrect: false },
          ],
        },
        // Question 2
        {
          question: "Which CSS-in-JS library does Chakra UI use by default?",
          options: [
            { id: 0, ans: "Styled Components", isCorrect: false },
            { id: 1, ans: "Emotion", isCorrect: true },
            { id: 2, ans: "Tailwind CSS", isCorrect: false },
            { id: 3, ans: "Material-UI", isCorrect: false },
          ],
        },
        // Question 3
        {
          question: "How do you install Chakra UI in a React project?",
          options: [
            { id: 0, ans: "npm install @chakra-ui/react", isCorrect: true },
            { id: 1, ans: "npm install chakra-ui", isCorrect: false },
            { id: 2, ans: "yarn add chakra-ui-react", isCorrect: false },
            { id: 3, ans: "yarn install @chakra-ui/react", isCorrect: false },
          ],
        },
        // Question 4
        {
          question: "What is the Chakra UI Box component used for?",
          options: [
            { id: 0, ans: "To display images and videos", isCorrect: false },
            { id: 1, ans: "To create buttons and form elements", isCorrect: false },
            { id: 2, ans: "To handle user interactions and events", isCorrect: false },
            { id: 3, ans: "To create layout and styling for components", isCorrect: true },
          ],
        },
        // Question 5
        {
          question: "Which Chakra UI component is used to create a responsive navigation menu?",
          options: [
            { id: 0, ans: "NavMenu", isCorrect: false },
            { id: 1, ans: "Menu", isCorrect: true },
            { id: 2, ans: "Navbar", isCorrect: false },
            { id: 3, ans: "Navigation", isCorrect: false },
          ],
        },
        // Question 6
        {
          question: "How do you apply custom styles to a Chakra UI component?",
          options: [
            { id: 0, ans: 'By using inline styles like style={{ color: "blue" }}', isCorrect: false },
            { id: 1, ans: "By importing the component's CSS file", isCorrect: false },
            { id: 2, ans: "By passing a style prop to the component", isCorrect: false },
            { id: 3, ans: "By using the css prop or sx prop", isCorrect: true },
          ],
        },
        // Question 7
        {
          question: "What is the purpose of Chakra UI's ThemeProvider component?",
          options: [
            { id: 0, ans: "To define the theme and global styles for the app", isCorrect: true },
            { id: 1, ans: "To handle form submissions in Chakra UI", isCorrect: false },
            { id: 2, ans: "To create a context for managing state", isCorrect: false },
            { id: 3, ans: "To define the layout and alignment of elements", isCorrect: false },
          ],
        },
        // Question 8
        {
          question: "Which Chakra UI component is used to create a modal dialog?",
          options: [
            { id: 0, ans: "ModalDialog", isCorrect: false },
            { id: 1, ans: "Dialog", isCorrect: false },
            { id: 2, ans: "Modal", isCorrect: true },
            { id: 3, ans: "Popup", isCorrect: false },
          ],
        },
        // Question 9
        {
          question: "How do you use Chakra UI's IconButton component?",
          options: [
            { id: 0, ans: '<Button icon={<Icon />} />', isCorrect: false },
            { id: 1, ans: "<IconButton icon={<Icon />} />", isCorrect: true },
            { id: 2, ans: "<Button><Icon /></Button>", isCorrect: false },
            { id: 3, ans: "<IconButton><Icon /></IconButton>", isCorrect: false },
          ],
        },
        // Question 10
        {
          question: "What is the purpose of Chakra UI's useDisclosure hook?",
          options: [
            { id: 0, ans: "To handle asynchronous operations", isCorrect: false },
            { id: 1, ans: "To create a responsive layout for mobile devices", isCorrect: false },
            { id: 2, ans: "To manage the open/close state of a component (e.g., a modal)", isCorrect: true },
            { id: 3, ans: "To handle user interactions and events", isCorrect: false },
          ],
        },
        // Question 11
        {
          question: "Which Chakra UI component is used to create a responsive grid layout?",
          options: [
            { id: 0, ans: "Container", isCorrect: false },
            { id: 1, ans: "Grid", isCorrect: true },
            { id: 2, ans: "Row", isCorrect: false },
            { id: 3, ans: "Col", isCorrect: false },
          ],
        },
        // Question 12
        {
          question: "What is the Chakra UI Text component used for?",
          options: [
            { id: 0, ans: "To create buttons and form elements", isCorrect: false },
            { id: 1, ans: "To display text and typography", isCorrect: true },
            { id: 2, ans: "To handle user interactions and events", isCorrect: false },
            { id: 3, ans: "To create layout and styling for components", isCorrect: false },
          ],
        },
        // Question 13
        {
          question: "How do you apply responsive styles using Chakra UI?",
          options: [
            { id: 0, ans: 'By using media queries like @media (min-width: 768px) { ... }', isCorrect: true },
            { id: 1, ans: "By adding responsive attribute to the component", isCorrect: false },
            { id: 2, ans: "By importing a responsive CSS file", isCorrect: false },
            { id: 3, ans: "By using the useMediaQuery hook", isCorrect: false },
          ],
        },
        // Question 14
        {
          question: "What is the purpose of Chakra UI's useToast hook?",
          options: [
            { id: 0, ans: "To display notifications and toasts", isCorrect: true },
            { id: 1, ans: "To handle form submissions in Chakra UI", isCorrect: false },
            { id: 2, ans: "To manage state in a component", isCorrect: false },
            { id: 3, ans: "To create animations and transitions", isCorrect: false },
          ],
        },
        // Question 15
        {
          question: "How do you use Chakra UI's Drawer component?",
          options: [
            { id: 0, ans: "<Drawer><Content /></Drawer>", isCorrect: false },
            { id: 1, ans: "<DrawerContent><Content /></DrawerContent>", isCorrect: true },
            { id: 2, ans: "<Content><Drawer /></Content>", isCorrect: false },
            { id: 3, ans: "<DrawerContent><Drawer /></DrawerContent>", isCorrect: false },
          ],
        },
        // Question 16
        {
          question: "What is the purpose of Chakra UI's Tabs component?",
          options: [
            { id: 0, ans: "To create a sidebar navigation", isCorrect: false },
            { id: 1, ans: "To handle form submissions in Chakra UI", isCorrect: false },
            { id: 2, ans: "To define the font size for text elements", isCorrect: false },
            { id: 3, ans: "To manage tabbed content and navigation", isCorrect: true },
          ],
        },
        // Question 17
        {
          question: "How do you use Chakra UI's Slider component?",
          options: [
            { id: 0, ans: "<Slider><SliderTrack /><SliderThumb /></Slider>", isCorrect: false },
            { id: 1, ans: "<Slider><SliderHandle /><SliderTrack /></Slider>", isCorrect: false },
            { id: 2, ans: "<Slider><SliderTrack /><SliderHandle /></Slider>", isCorrect: true },
            { id: 3, ans: "<Slider><SliderThumb /><SliderTrack /></Slider>", isCorrect: false },
          ],
        },
      ],

//VueJS
[
    // Question 1
    {
      question: "What is Vue.js?",
      options: [
        { id: 0, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 1, ans: "A front-end JavaScript library for building user interfaces", isCorrect: true },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "A programming language for building mobile apps", isCorrect: false },
      ],
    },
    // Question 2
    {
      question: "How do you include Vue.js in an HTML file?",
      options: [
        { id: 0, ans: '<script src="vue.js"></script>', isCorrect: false },
        { id: 1, ans: '<script src="vue.min.js"></script>', isCorrect: true },
        { id: 2, ans: '<link rel="vue.js">', isCorrect: false },
        { id: 3, ans: '<link href="vue.js">', isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "What is the main building block of a Vue.js application?",
      options: [
        { id: 0, ans: "Components", isCorrect: true },
        { id: 1, ans: "Directives", isCorrect: false },
        { id: 2, ans: "Filters", isCorrect: false },
        { id: 3, ans: "Services", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "Which Vue.js directive is used to bind data to an element?",
      options: [
        { id: 0, ans: "v-if", isCorrect: false },
        { id: 1, ans: "v-for", isCorrect: false },
        { id: 2, ans: "v-bind", isCorrect: true },
        { id: 3, ans: "v-on", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "How do you define a data property in a Vue.js component?",
      options: [
        { id: 0, ans: "data: { propertyName: value }", isCorrect: true },
        { id: 1, ans: "this.data.propertyName = value", isCorrect: false },
        { id: 2, ans: "this.data = { propertyName: value }", isCorrect: false },
        { id: 3, ans: "propertyName: value", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "What is the purpose of Vue.js' v-for directive?",
      options: [
        { id: 0, ans: "To conditionally render elements based on a condition", isCorrect: false },
        { id: 1, ans: "To loop through an array and render a list of elements", isCorrect: true },
        { id: 2, ans: "To handle user interactions and events", isCorrect: false },
        { id: 3, ans: "To create animations and transitions", isCorrect: false },
      ],
    },
    // Question 7
    {
      question: "How do you handle user input and events in Vue.js?",
      options: [
        { id: 0, ans: "v-click", isCorrect: false },
        { id: 1, ans: "v-input", isCorrect: false },
        { id: 2, ans: "v-on", isCorrect: true },
        { id: 3, ans: "v-event", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "What is the purpose of Vue.js' v-if directive?",
      options: [
        { id: 0, ans: "To conditionally render elements based on a condition", isCorrect: true },
        { id: 1, ans: "To create animations and transitions", isCorrect: false },
        { id: 2, ans: "To loop through an array and render a list of elements", isCorrect: false },
        { id: 3, ans: "To handle user interactions and events", isCorrect: false },
      ],
    },
    // Question 9
    {
      question: "How do you define a method in a Vue.js component?",
      options: [
        { id: 0, ans: "methods: { methodName() { ... } }", isCorrect: true },
        { id: 1, ans: "function methodName() { ... }", isCorrect: false },
        { id: 2, ans: "this.methodName = function() { ... }", isCorrect: false },
        { id: 3, ans: "methodName: function() { ... }", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "Which Vue.js lifecycle hook is called after a component is mounted on the DOM?",
      options: [
        { id: 0, ans: "mounted", isCorrect: true },
        { id: 1, ans: "created", isCorrect: false },
        { id: 2, ans: "updated", isCorrect: false },
        { id: 3, ans: "beforeMount", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "What is the purpose of Vue.js' v-model directive?",
      options: [
        { id: 0, ans: "To create two-way data binding between form elements and data", isCorrect: true },
        { id: 1, ans: "To conditionally render elements based on a condition", isCorrect: false },
        { id: 2, ans: "To handle user interactions and events", isCorrect: false },
        { id: 3, ans: "To loop through an array and render a list of elements", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "How do you import and use a Vue.js single-file component?",
      options: [
        { id: 0, ans: '<script src="MyComponent.vue"></script>', isCorrect: false },
        { id: 1, ans: '<component src="MyComponent.vue"></component>', isCorrect: false },
        { id: 2, ans: "<MyComponent></MyComponent>", isCorrect: true },
        { id: 3, ans: '<script import="MyComponent.vue"></script>', isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "What is the purpose of Vue.js' computed property?",
      options: [
        { id: 0, ans: "To define methods for handling user interactions", isCorrect: false },
        { id: 1, ans: "To calculate and cache a value based on the component's data", isCorrect: true },
        { id: 2, ans: "To loop through an array and render a list of elements", isCorrect: false },
        { id: 3, ans: "To create animations and transitions", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "How do you pass data from a parent component to a child component in Vue.js?",
      options: [
        { id: 0, ans: "By using props", isCorrect: true },
        { id: 1, ans: "By using the v-on directive", isCorrect: false },
        { id: 2, ans: "By using the v-bind directive", isCorrect: false },
        { id: 3, ans: "By using the v-model directive", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "What is the purpose of Vue.js' watch property?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To create animations and transitions", isCorrect: false },
        { id: 2, ans: "To loop through an array and render a list of elements", isCorrect: false },
        { id: 3, ans: "To perform actions in response to data changes", isCorrect: true },
      ],
    },
    // Question 16
    {
      question: "How do you conditionally apply CSS classes in Vue.js?",
      options: [
        { id: 0, ans: '<div v-class="{"my-class": condition}"></div>', isCorrect: false },
        { id: 1, ans: '<div :class="{"my-class": condition}"></div>', isCorrect: true },
        { id: 2, ans: '<div :className="{"my-class": condition}"></div>', isCorrect: false },
        { id: 3, ans: '<div class="{"my-class": condition}"></div>', isCorrect: false },
      ],
    },
    // Question 17
    {
      question: "How do you emit a custom event from a child component to a parent component in Vue.js?",
      options: [
        { id: 0, ans: "this.$emit('custom-event', eventData)", isCorrect: true },
        { id: 1, ans: "this.emit('custom-event', eventData)", isCorrect: false },
        { id: 2, ans: "emit('custom-event', eventData)", isCorrect: false },
        { id: 3, ans: "@emit('custom-event', eventData)", isCorrect: false },
      ],
    },
  ],

  //NextJS
  [
    // Question 1
    {
      question: "What is NEXT.js 13?",
      options: [
        { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: false },
        { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "The latest version of NEXT.js framework", isCorrect: true },
      ],
    },
    // Question 2
    {
      question: "Which feature was introduced in NEXT.js 13 for faster development and better performance?",
      options: [
        { id: 0, ans: "Automatic code splitting", isCorrect: false },
        { id: 1, ans: "Incremental Static Regeneration (ISR)", isCorrect: true },
        { id: 2, ans: "Client-Side Rendering (CSR)", isCorrect: false },
        { id: 3, ans: "NEXT.js Image Optimization", isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "How do you create a new NEXT.js 13 project?",
      options: [
        { id: 0, ans: "npx create-next-app@13 my-app", isCorrect: true },
        { id: 1, ans: "npx create-next-app my-app", isCorrect: false },
        { id: 2, ans: "npm init next-app@13 my-app", isCorrect: false },
        { id: 3, ans: "npm init next-app my-app", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "What is the purpose of the Image component introduced in NEXT.js 13?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To create layout and styling for components", isCorrect: false },
        { id: 2, ans: "To display optimized images with built-in lazy loading", isCorrect: true },
        { id: 3, ans: "To define the overall layout for all pages", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "How do you enable Next.js 13's Image Optimization?",
      options: [
        { id: 0, ans: "By importing the Image component from next/image", isCorrect: false },
        { id: 1, ans: "By enabling image: true in next.config.js", isCorrect: true },
        { id: 2, ans: "By using the next/image package and specifying optimize: true", isCorrect: false },
        { id: 3, ans: "By defining a next/image rule in .eslintrc file", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "What is the purpose of the Head component in NEXT.js 13?",
      options: [
        { id: 0, ans: "To create layout and styling for components", isCorrect: false },
        { id: 1, ans: "To handle user interactions and events", isCorrect: false },
        { id: 2, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 3, ans: "To modify the document's head element (e.g., add meta tags)", isCorrect: true },
      ],
    },
    // Question 7
    {
      question: "How do you import the Head component in NEXT.js 13?",
      options: [
        { id: 0, ans: "import Head from 'next/head'", isCorrect: true },
        { id: 1, ans: "import { Head } from 'next'", isCorrect: false },
        { id: 2, ans: "import NextHead from 'next/head'", isCorrect: false },
        { id: 3, ans: "import Head from 'next'", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "What is the purpose of the useEffect hook in NEXT.js 13?",
      options: [
        { id: 0, ans: "To fetch data on the server side for each request", isCorrect: false },
        { id: 1, ans: "To define methods for handling user interactions", isCorrect: false },
        { id: 2, ans: "To loop through an array and render a list of elements", isCorrect: false },
        { id: 3, ans: "To perform side effects in functional components (e.g., data fetching)", isCorrect: true },
      ],
    },
    // Question 9
    {
      question: "How do you create a custom 404 error page in NEXT.js 13?",
      options: [
        { id: 0, ans: "By defining a file 404.js in the pages directory", isCorrect: false },
        { id: 1, ans: "By using the Error component from next/error", isCorrect: false },
        { id: 2, ans: "By defining a file _error.js in the pages directory", isCorrect: true },
        { id: 3, ans: "By using the NextErrorPage component from next/error", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "What is the purpose of the Error component from next/error in NEXT.js 13?",
      options: [
        { id: 0, ans: "To create layout and styling for the 404 error page", isCorrect: false },
        { id: 1, ans: "To handle user interactions and events", isCorrect: false },
        { id: 2, ans: "To display a custom error page with error details", isCorrect: true },
        { id: 3, ans: "To define the overall layout for all error pages", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "How do you configure the automatic TypeScript setup in NEXT.js 13?",
      options: [
        { id: 0, ans: "By running npm install typescript and adding a tsconfig.json file", isCorrect: false },
        { id: 1, ans: "By running npm install typescript and enabling typescript: true in next.config.js", isCorrect: false },
        { id: 2, ans: "By running npm init next-app@13 --typescript my-app", isCorrect: false },
        { id: 3, ans: "By running npx create-next-app@13 --typescript my-app", isCorrect: true },
      ],
    },
    // Question 12
    {
      question: "What is the purpose of the next/link package in NEXT.js 13?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 2, ans: "To create links for client-side navigation in NEXT.js", isCorrect: true },
        { id: 3, ans: "To create a dropdown menu", isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "What is the purpose of NEXT.js 13's optimizeFonts option in next.config.js?",
      options: [
        { id: 0, ans: "To optimize the loading of web fonts for better performance", isCorrect: true },
        { id: 1, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 2, ans: "To handle user interactions and events", isCorrect: false },
        { id: 3, ans: "To create a responsive layout for mobile devices", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "How do you enable NEXT.js 13's Image Optimization with the loading attribute?",
      options: [
        { id: 0, ans: "By using the loading attribute on the img tag", isCorrect: false },
        { id: 1, ans: "By using the Image component and specifying loading='lazy'", isCorrect: true },
        { id: 2, ans: "By using the img tag with loading='eager'", isCorrect: false },
        { id: 3, ans: "By enabling lazy: true in next.config.js", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "How do you enable server-side rendering for a specific page in NEXT.js 13?",
      options: [
        { id: 0, ans: "By defining the getServerSideProps function in the page component", isCorrect: true },
        { id: 1, ans: "By using the getStaticProps function in the page component", isCorrect: false },
        { id: 2, ans: "By setting ssr: true in the next.config.js for the specific page", isCorrect: false },
        { id: 3, ans: "By using the useSSR hook in the component", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "What is the purpose of NEXT.js 13's basePath option in next.config.js?",
      options: [
        { id: 0, ans: "To define the base URL for API endpoints", isCorrect: false },
        { id: 1, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 2, ans: "To handle user interactions and events", isCorrect: false },
        { id: 3, ans: "To set a base path for deployment on a specific subdirectory", isCorrect: true },
      ],
    },
    // Question 17
    {
      question: "How do you configure the asset prefix for a NEXT.js 13 app?",
      options: [
        { id: 0, ans: "By setting assetPrefix: '/my-app' in next.config.js", isCorrect: true },
        { id: 1, ans: "By defining the asset prefix in the package.json file", isCorrect: false },
        { id: 2, ans: "By setting baseURL: '/my-app' in next.config.js", isCorrect: false },
        { id: 3, ans: "By defining the asset prefix in the _app.js file", isCorrect: false },
      ],
    },
  ],

  //Gatsby
  [
    // Question 1
    {
      question: "What is Gatsby?",
      options: [
        { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: false },
        { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "A static site generator for building fast and optimized websites", isCorrect: true },
      ],
    },
    // Question 2
    {
      question: "Which language is primarily used for developing Gatsby websites?",
      options: [
        { id: 0, ans: "JavaScript", isCorrect: true },
        { id: 1, ans: "Python", isCorrect: false },
        { id: 2, ans: "PHP", isCorrect: false },
        { id: 3, ans: "Java", isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "How do you create a new Gatsby project?",
      options: [
        { id: 0, ans: "gatsby new my-project", isCorrect: false },
        { id: 1, ans: "gatsby create my-project", isCorrect: true },
        { id: 2, ans: "gatsby init my-project", isCorrect: false },
        { id: 3, ans: "gatsby start my-project", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "What is the purpose of the gatsby-config.js file in a Gatsby project?",
      options: [
        { id: 0, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 1, ans: "To handle user interactions and events", isCorrect: false },
        { id: 2, ans: "To configure Gatsby plugins and site metadata", isCorrect: true },
        { id: 3, ans: "To manage state and data fetching for pages", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "How do you start a development server for your Gatsby project?",
      options: [
        { id: 0, ans: "npm start", isCorrect: false },
        { id: 1, ans: "npm run dev", isCorrect: false },
        { id: 2, ans: "gatsby develop", isCorrect: true },
        { id: 3, ans: "gatsby start", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "What is the purpose of Gatsby's GraphQL data layer?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To create layout and styling for components", isCorrect: false },
        { id: 2, ans: "To manage state and data fetching for pages", isCorrect: true },
        { id: 3, ans: "To define the overall layout for all pages", isCorrect: false },
      ],
    },
    // Question 7
    {
      question: "How do you query data using GraphQL in Gatsby?",
      options: [
        { id: 0, ans: "By using the fetch API in the component", isCorrect: false },
        { id: 1, ans: "By importing the data directly into the component", isCorrect: false },
        { id: 2, ans: "By using the useQuery hook from @apollo/client", isCorrect: false },
        { id: 3, ans: "By creating GraphQL queries in .graphql files and using the useStaticQuery hook", isCorrect: true },
      ],
    },
    // Question 8
    {
      question: "What is the purpose of Gatsby's gatsby-node.js file?",
      options: [
        { id: 0, ans: "To create a custom layout for a specific page", isCorrect: false },
        { id: 1, ans: "To handle user interactions and events", isCorrect: false },
        { id: 2, ans: "To modify the Webpack configuration for the Gatsby project", isCorrect: false },
        { id: 3, ans: "To create dynamic pages during the build process", isCorrect: true },
      ],
    },
    // Question 9
    {
      question: "How do you create a new page in Gatsby?",
      options: [
        { id: 0, ans: "By creating a new component in the src/pages directory", isCorrect: false },
        { id: 1, ans: "By defining a route in the gatsby-config.js file", isCorrect: false },
        { id: 2, ans: "By using the createPage function in the gatsby-node.js file", isCorrect: true },
        { id: 3, ans: "By using the gatsby create-page command in the terminal", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "What is the purpose of Gatsby's gatsby-image plugin?",
      options: [
        { id: 0, ans: "To create responsive images with built-in lazy loading", isCorrect: true },
        { id: 1, ans: "To handle user interactions and events", isCorrect: false },
        { id: 2, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 3, ans: "To manage state and data fetching for pages", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "How do you install and configure Gatsby plugins?",
      options: [
        { id: 0, ans: "By running npm install plugin-name and adding the plugin to the gatsby-config.js file", isCorrect: true },
        { id: 1, ans: "By importing the plugin directly into the component", isCorrect: false },
        { id: 2, ans: "By defining the plugin in the package.json file", isCorrect: false },
        { id: 3, ans: "By using the gatsby install command in the terminal", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "What is the purpose of Gatsby's gatsby-browser.js and gatsby-ssr.js files?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To define the overall layout for all pages", isCorrect: false },
        { id: 2, ans: "To modify the Webpack configuration for the Gatsby project", isCorrect: false },
        { id: 3, ans: "To customize behavior for the browser and server-side rendering (SSR)", isCorrect: true },
      ],
    },
    // Question 13
    {
      question: "How do you add a CSS module to a Gatsby project?",
      options: [
        { id: 0, ans: "By importing the CSS file directly into the component", isCorrect: false },
        { id: 1, ans: "By using the gatsby add-module command in the terminal", isCorrect: false },
        { id: 2, ans: "By using the gatsby-module package and specifying the CSS file", isCorrect: false },
        { id: 3, ans: "By creating a .module.css file and importing it into the component", isCorrect: true },
      ],
    },
    // Question 14
    {
      question: "What is the purpose of Gatsby's Link component?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To create layout and styling for components", isCorrect: false },
        { id: 2, ans: "To create links for client-side navigation in Gatsby", isCorrect: true },
        { id: 3, ans: "To create a dropdown menu", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "How do you add metadata (e.g., title and description) to a Gatsby page?",
      options: [
        { id: 0, ans: "By importing the metadata directly into the component", isCorrect: false },
        { id: 1, ans: "By using the Helmet component from react-helmet", isCorrect: true },
        { id: 2, ans: "By defining the metadata in the gatsby-node.js file", isCorrect: false },
        { id: 3, ans: "By using the createMetadata function in the gatsby-config.js file", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "What is the purpose of Gatsby's useStaticQuery hook?",
      options: [
        { id: 0, ans: "To handle user interactions and events", isCorrect: false },
        { id: 1, ans: "To create layout and styling for components", isCorrect: false },
        { id: 2, ans: "To query data using GraphQL in a functional component", isCorrect: true },
        { id: 3, ans: "To create animations and transitions", isCorrect: false },
      ],
    },
    // Question 17
    {
      question: "How do you deploy a Gatsby website?",
      options: [
        { id: 0, ans: "By running npm run build and hosting the public directory", isCorrect: true },
        { id: 1, ans: "By running npm run deploy from the project root", isCorrect: false },
        { id: 2, ans: "By using the gatsby deploy command", isCorrect: false },
        { id: 3, ans: "By using the Netlify or Vercel platform for deployment", isCorrect: false },
      ],
    },
  ],

  //TailwindCSS
  [
    // Question 1
    {
      question: "What is Tailwind CSS?",
      options: [
        { id: 0, ans: "A JavaScript library for building user interfaces", isCorrect: false },
        { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "A utility-first CSS framework for building modern web designs", isCorrect: true },
      ],
    },
    // Question 2
    {
      question: "How do you install Tailwind CSS in a project?",
      options: [
        { id: 0, ans: "npm install tailwind", isCorrect: false },
        { id: 1, ans: "npm install tailwindcss", isCorrect: false },
        { id: 2, ans: "npm install tailwind-css", isCorrect: false },
        { id: 3, ans: "npm install tailwindcss", isCorrect: true },
      ],
    },
    // Question 3
    {
      question: "What is the main advantage of using utility classes in Tailwind CSS?",
      options: [
        { id: 0, ans: "Smaller file size", isCorrect: false },
        { id: 1, ans: "Faster load times", isCorrect: false },
        { id: 2, ans: "Easier maintenance", isCorrect: false },
        { id: 3, ans: "All of the above", isCorrect: true },
      ],
    },
    // Question 4
    {
      question: "How do you apply a margin of 4 units to the top of an element using Tailwind CSS?",
      options: [
        { id: 0, ans: "mt-4", isCorrect: true },
        { id: 1, ans: "m-top-4", isCorrect: false },
        { id: 2, ans: "margin-top: 4", isCorrect: false },
        { id: 3, ans: "m-4", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "What is the purpose of the @apply directive in Tailwind CSS?",
      options: [
        { id: 0, ans: "To include external CSS stylesheets", isCorrect: false },
        { id: 1, ans: "To define custom utility classes", isCorrect: true },
        { id: 2, ans: "To apply styles to elements with a specific class", isCorrect: false },
        { id: 3, ans: "To import Tailwind CSS in the project", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "How do you customize the default color palette in Tailwind CSS?",
      options: [
        { id: 0, ans: "By modifying the colors object in the tailwind.config.js file", isCorrect: true },
        { id: 1, ans: "By overriding the colors CSS class in a separate stylesheet", isCorrect: false },
        { id: 2, ans: "By using the @colors directive in the HTML file", isCorrect: false },
        { id: 3, ans: "By modifying the tailwind.css file directly", isCorrect: false },
      ],
    },
    // Question 7
    {
      question: "How do you enable dark mode in a Tailwind CSS project?",
      options: [
        { id: 0, ans: "By adding a dark class to the HTML body tag", isCorrect: true },
        { id: 1, ans: "By setting dark: true in the tailwind.config.js file", isCorrect: false },
        { id: 2, ans: "By adding a dark attribute to the HTML body tag", isCorrect: false },
        { id: 3, ans: "By using the dark utility class in the HTML elements", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "What is the purpose of the @screen directive in Tailwind CSS?",
      options: [
        { id: 0, ans: "To define custom utility classes for specific screen sizes", isCorrect: true },
        { id: 1, ans: "To import stylesheets based on the screen size", isCorrect: false },
        { id: 2, ans: "To create animations and transitions for specific screen sizes", isCorrect: false },
        { id: 3, ans: "To handle user interactions and events for specific screen sizes", isCorrect: false },
      ],
    },
    // Question 9
    {
      question: "How do you add a background image to an element in Tailwind CSS?",
      options: [
        { id: 0, ans: "bg-image: url('image.jpg')", isCorrect: false },
        { id: 1, ans: "background-image: url('image.jpg')", isCorrect: true },
        { id: 2, ans: "bg-image(url('image.jpg'))", isCorrect: false },
        { id: 3, ans: "bg-image(url='image.jpg')", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "What is the purpose of the @variants directive in Tailwind CSS?",
      options: [
        { id: 0, ans: "To define custom variants for utility classes", isCorrect: true },
        { id: 1, ans: "To create responsive variants for utility classes", isCorrect: false },
        { id: 2, ans: "To import specific variants of Tailwind CSS in the project", isCorrect: false },
        { id: 3, ans: "To handle user interactions and events for specific variants", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "How do you add rounded corners to an element in Tailwind CSS?",
      options: [
        { id: 0, ans: "rounded: 4", isCorrect: false },
        { id: 1, ans: "rounded: true", isCorrect: false },
        { id: 2, ans: "rounded-lg", isCorrect: true },
        { id: 3, ans: "rounded-4", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "How do you create a full-width container in Tailwind CSS?",
      options: [
        { id: 0, ans: "container: full", isCorrect: false },
        { id: 1, ans: "container: 100%", isCorrect: false },
        { id: 2, ans: "container-full", isCorrect: true },
        { id: 3, ans: "container-ful-width", isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "How do you create a flex container in Tailwind CSS?",
      options: [
        { id: 0, ans: "flex", isCorrect: false },
        { id: 1, ans: "display: flex", isCorrect: true },
        { id: 2, ans: "flex-container", isCorrect: false },
        { id: 3, ans: "flex-box", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "How do you add padding to all sides of an element in Tailwind CSS?",
      options: [
        { id: 0, ans: "padding: 4", isCorrect: false },
        { id: 1, ans: "p-4", isCorrect: true },
        { id: 2, ans: "padding-all: 4", isCorrect: false },
        { id: 3, ans: "pad: 4", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "How do you add a shadow to an element in Tailwind CSS?",
      options: [
        { id: 0, ans: "shadow: true", isCorrect: false },
        { id: 1, ans: "shadow: 4", isCorrect: false },
        { id: 2, ans: "shadow-md", isCorrect: true },
        { id: 3, ans: "box-shadow: 4", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "What is the purpose of the @font-face directive in Tailwind CSS?",
      options: [
        { id: 0, ans: "To import external fonts into the project", isCorrect: true },
        { id: 1, ans: "To apply custom fonts to specific elements", isCorrect: false },
        { id: 2, ans: "To define custom font styles for utility classes", isCorrect: false },
        { id: 3, ans: "To create font animations and transitions", isCorrect: false },
      ],
    },
    // Question 17
    {
      question: "How do you use the @layer directive in Tailwind CSS?",
      options: [
        { id: 0, ans: "To create animations and transitions for specific layers", isCorrect: false },
        { id: 1, ans: "To handle user interactions and events for specific layers", isCorrect: false },
        { id: 2, ans: "To define custom styles for utility classes in specific layers", isCorrect: true },
        { id: 3, ans: "To import stylesheets based on the layer", isCorrect: false },
      ],
    },
  ],

  //ThreeJS
  [
    // Question 1
    {
      question: "What is Three.js?",
      options: [
        { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: false },
        { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "A 3D graphics library for creating interactive 3D content in the browser", isCorrect: true },
      ],
    },
    // Question 2
    {
      question: "How do you include Three.js in your HTML file?",
      options: [
        { id: 0, ans: "<script src='three.js'></script>", isCorrect: false },
        { id: 1, ans: "<script src='three.min.js'></script>", isCorrect: true },
        { id: 2, ans: "<script src='three.js'></script>", isCorrect: false },
        { id: 3, ans: "<script src='three.min.js'></script>", isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "What is a Scene in Three.js?",
      options: [
        { id: 0, ans: "A container that holds all 3D objects and cameras", isCorrect: true },
        { id: 1, ans: "A camera that defines the view of the 3D scene", isCorrect: false },
        { id: 2, ans: "A light source used for illuminating the scene", isCorrect: false },
        { id: 3, ans: "A material used for applying textures to 3D objects", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "How do you create a PerspectiveCamera in Three.js?",
      options: [
        { id: 0, ans: "new Camera.PerspectiveCamera(fov, aspect, near, far);", isCorrect: false },
        { id: 1, ans: "new PerspectiveCamera(fov, aspect, near, far);", isCorrect: true },
        { id: 2, ans: "new Camera.Perspective(fov, aspect, near, far);", isCorrect: false },
        { id: 3, ans: "new PerspectiveCamera(fov, near, far);", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "What is a Mesh in Three.js?",
      options: [
        { id: 0, ans: "A 3D object used for defining cameras in the scene", isCorrect: false },
        { id: 1, ans: "A container used for grouping multiple 3D objects together", isCorrect: false },
        { id: 2, ans: "A primitive geometry used for creating 3D shapes", isCorrect: true },
        { id: 3, ans: "A material used for applying textures to 3D objects", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "How do you create a BoxGeometry in Three.js?",
      options: [
        { id: 0, ans: "new BoxGeometry(width, height, depth);", isCorrect: true },
        { id: 1, ans: "new Geometry.Box(width, height, depth);", isCorrect: false },
        { id: 2, ans: "new Box(width, height, depth);", isCorrect: false },
        { id: 3, ans: "new Geometry.BoxGeometry(width, height, depth);", isCorrect: false },
      ],
    },
    // Question 7
    {
      question: "How do you apply a Material to a Mesh in Three.js?",
      options: [
        { id: 0, ans: "mesh.add(material);", isCorrect: false },
        { id: 1, ans: "mesh.applyMaterial(material);", isCorrect: false },
        { id: 2, ans: "mesh.material = material;", isCorrect: true },
        { id: 3, ans: "mesh.attachMaterial(material);", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "What is a Renderer in Three.js?",
      options: [
        { id: 0, ans: "A camera that defines the view of the 3D scene", isCorrect: false },
        { id: 1, ans: "A container that holds all 3D objects and cameras", isCorrect: false },
        { id: 2, ans: "A light source used for illuminating the scene", isCorrect: false },
        { id: 3, ans: "An engine used for rendering the 3D scene to the browser", isCorrect: true },
      ],
    },
    // Question 9
    {
      question: "How do you create a WebGLRenderer in Three.js?",
      options: [
        { id: 0, ans: "new WebGLRenderer();", isCorrect: true },
        { id: 1, ans: "new Renderer.WebGL();", isCorrect: false },
        { id: 2, ans: "new WebGL();", isCorrect: false },
        { id: 3, ans: "new Renderer.WebGLRenderer();", isCorrect: false },
      ],
    },
    // Question 10
    {
      question: "How do you add the renderer to the HTML page in Three.js?",
      options: [
        { id: 0, ans: "document.body.add(renderer.domElement);", isCorrect: false },
        { id: 1, ans: "document.body.appendChild(renderer.domElement);", isCorrect: true },
        { id: 2, ans: "document.add(renderer.domElement);", isCorrect: false },
        { id: 3, ans: "document.append(renderer.domElement);", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "What is a Texture in Three.js?",
      options: [
        { id: 0, ans: "A 3D object used for defining cameras in the scene", isCorrect: false },
        { id: 1, ans: "An image used for applying to 3D objects to create surface details", isCorrect: true },
        { id: 2, ans: "A container used for grouping multiple 3D objects together", isCorrect: false },
        { id: 3, ans: "A material used for applying textures to 3D objects", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "How do you create a Texture in Three.js?",
      options: [
        { id: 0, ans: "new Texture(image);", isCorrect: false },
        { id: 1, ans: "new ImageTexture(image);", isCorrect: false },
        { id: 2, ans: "new TextureLoader(image);", isCorrect: true },
        { id: 3, ans: "new ImageLoader(image);", isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "How do you animate a Mesh in Three.js?",
      options: [
        { id: 0, ans: "By applying CSS animations to the mesh", isCorrect: false },
        { id: 1, ans: "By using the requestAnimationFrame function in JavaScript", isCorrect: true },
        { id: 2, ans: "By using the animate method provided by Three.js", isCorrect: false },
        { id: 3, ans: "By using the setTimeout function in JavaScript", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "What is a Light in Three.js?",
      options: [
        { id: 0, ans: "A 3D object used for defining cameras in the scene", isCorrect: false },
        { id: 1, ans: "A camera that defines the view of the 3D scene", isCorrect: false },
        { id: 2, ans: "A container used for grouping multiple 3D objects together", isCorrect: false },
        { id: 3, ans: "A light source used for illuminating the scene", isCorrect: true },
      ],
    },
    // Question 15
    {
      question: "How do you create an AmbientLight in Three.js?",
      options: [
        { id: 0, ans: "new Light.AmbientLight(color);", isCorrect: false },
        { id: 1, ans: "new Light(color);", isCorrect: false },
        { id: 2, ans: "new AmbientLight(color);", isCorrect: true },
        { id: 3, ans: "new AmbientLight(color, intensity);", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "How do you load an external 3D model in Three.js?",
      options: [
        { id: 0, ans: "By using the loadModel function provided by Three.js", isCorrect: false },
        { id: 1, ans: "By importing the model directly into the HTML file", isCorrect: false },
        { id: 2, ans: "By using the GLTFLoader to load the model asynchronously", isCorrect: true },
        { id: 3, ans: "By using the loadModel function from the three-model-loader package", isCorrect: false },
      ],
    },
    // Question 17
    {
      question: "How do you add mouse interactivity to a Three.js scene?",
      options: [
        { id: 0, ans: "By using the mouseInteraction method provided by Three.js", isCorrect: false },
        { id: 1, ans: "By importing the three-interaction package and using its methods", isCorrect: true },
        { id: 2, ans: "By using the addEventListener function in JavaScript to handle mouse events", isCorrect: false },
        { id: 3, ans: "By creating a custom event listener for mouse interactions in the HTML file", isCorrect: false },
      ],
    },
  ],

  //MaterialUI
  [
    // Question 1
    {
      question: "What is Material-UI?",
      options: [
        { id: 0, ans: "A front-end JavaScript library for building user interfaces", isCorrect: false },
        { id: 1, ans: "A back-end framework for handling server-side logic", isCorrect: false },
        { id: 2, ans: "A database management system for storing data", isCorrect: false },
        { id: 3, ans: "A popular React UI framework based on Google's Material Design", isCorrect: true },
      ],
    },
    // Question 2
    {
      question: "How do you install Material-UI in a React project?",
      options: [
        { id: 0, ans: "npm install material-ui", isCorrect: false },
        { id: 1, ans: "npm install @material-ui/core", isCorrect: true },
        { id: 2, ans: "npm install material-design", isCorrect: false },
        { id: 3, ans: "npm install @material-ui/react", isCorrect: false },
      ],
    },
    // Question 3
    {
      question: "What is the primary color palette used in Material-UI?",
      options: [
        { id: 0, ans: "Red, Green, Blue", isCorrect: false },
        { id: 1, ans: "Pink, Purple, Indigo", isCorrect: true },
        { id: 2, ans: "Blue, Green, Yellow", isCorrect: false },
        { id: 3, ans: "Red, Amber, Teal", isCorrect: false },
      ],
    },
    // Question 4
    {
      question: "How do you use the Button component in Material-UI?",
      options: [
        { id: 0, ans: "<Button>Click Me</Button>", isCorrect: true },
        { id: 1, ans: "<Button label='Click Me' />", isCorrect: false },
        { id: 2, ans: "<Button text='Click Me' />", isCorrect: false },
        { id: 3, ans: "<Button buttonText='Click Me' />", isCorrect: false },
      ],
    },
    // Question 5
    {
      question: "What is the purpose of the Grid component in Material-UI?",
      options: [
        { id: 0, ans: "To create responsive layouts with a grid-based system", isCorrect: true },
        { id: 1, ans: "To style individual grid items in a Material-UI form", isCorrect: false },
        { id: 2, ans: "To apply background colors to sections of a Material-UI page", isCorrect: false },
        { id: 3, ans: "To create a grid layout for Material-UI data tables", isCorrect: false },
      ],
    },
    // Question 6
    {
      question: "How do you import Material-UI icons for use in a React component?",
      options: [
        { id: 0, ans: "import { Icons } from '@material-ui/icons';", isCorrect: false },
        { id: 1, ans: "import { Icons } from '@material-ui/core';", isCorrect: false },
        { id: 2, ans: "import { Icon } from '@material-ui/icons';", isCorrect: false },
        { id: 3, ans: "import { Icon } from '@material-ui/core';", isCorrect: true },
      ],
    },
    // Question 7
    {
      question: "What is the purpose of the AppBar component in Material-UI?",
      options: [
        { id: 0, ans: "To display a navigation menu at the top of a Material-UI page", isCorrect: true },
        { id: 1, ans: "To create a search bar for filtering data in a Material-UI table", isCorrect: false },
        { id: 2, ans: "To apply a custom background color to the Material-UI toolbar", isCorrect: false },
        { id: 3, ans: "To create a footer at the bottom of a Material-UI page", isCorrect: false },
      ],
    },
    // Question 8
    {
      question: "How do you use the Typography component in Material-UI?",
      options: [
        { id: 0, ans: "<Typography>Text Here</Typography>", isCorrect: false },
        { id: 1, ans: "<Typography.Text>Text Here</Typography.Text>", isCorrect: false },
        { id: 2, ans: "<Typography variant='body1'>Text Here</Typography>", isCorrect: true },
        { id: 3, ans: "<Typography variant='text'>Text Here</Typography>", isCorrect: false },
      ],
    },
    // Question 9
    {
      question: "What is the purpose of the TextField component in Material-UI?",
      options: [
        { id: 0, ans: "To create a field for entering a date in a specific format", isCorrect: false },
        { id: 1, ans: "To style individual grid items in a Material-UI form", isCorrect: false },
        { id: 2, ans: "To apply background colors to sections of a Material-UI page", isCorrect: false },
        { id: 3, ans: "To create an input field for textual data entry in a Material-UI form", isCorrect: true },
      ],
    },
    // Question 10
    {
      question: "How do you apply styling to a Material-UI component using CSS-in-JS?",
      options: [
        { id: 0, ans: "By writing inline CSS within the component JSX", isCorrect: false },
        { id: 1, ans: "By using external CSS stylesheets and importing them in the component", isCorrect: false },
        { id: 2, ans: "By using the makeStyles or withStyles API provided by Material-UI", isCorrect: true },
        { id: 3, ans: "By defining CSS classes in a separate CSS file and linking it to the component", isCorrect: false },
      ],
    },
    // Question 11
    {
      question: "What is the purpose of the ThemeProvider component in Material-UI?",
      options: [
        { id: 0, ans: "To apply a custom theme to the entire Material-UI app", isCorrect: true },
        { id: 1, ans: "To define custom styles for Material-UI components", isCorrect: false },
        { id: 2, ans: "To create a Material-UI theme for different screen sizes", isCorrect: false },
        { id: 3, ans: "To apply a specific color scheme to a Material-UI page", isCorrect: false },
      ],
    },
    // Question 12
    {
      question: "How do you create a custom theme in Material-UI?",
      options: [
        { id: 0, ans: "By modifying the theme object directly in the @material-ui/core package", isCorrect: false },
        { id: 1, ans: "By importing the createTheme function from @material-ui/styles", isCorrect: false },
        { id: 2, ans: "By defining a theme.js file and exporting the custom theme object", isCorrect: true },
        { id: 3, ans: "By using the makeStyles function and passing custom styles to it", isCorrect: false },
      ],
    },
    // Question 13
    {
      question: "What is the purpose of the Dialog component in Material-UI?",
      options: [
        { id: 0, ans: "To create a custom modal or popup dialog in a Material-UI app", isCorrect: true },
        { id: 1, ans: "To apply a custom background color to a Material-UI page", isCorrect: false },
        { id: 2, ans: "To create a dialog box for displaying error messages in a Material-UI form", isCorrect: false },
        { id: 3, ans: "To display a confirmation dialog before performing a critical action", isCorrect: false },
      ],
    },
    // Question 14
    {
      question: "How do you handle form submissions in a Material-UI app?",
      options: [
        { id: 0, ans: "By using the onSubmit event on the form element and handling it with JavaScript", isCorrect: false },
        { id: 1, ans: "By creating a custom submit function and attaching it to the onSubmit prop of the Button component", isCorrect: false },
        { id: 2, ans: "By using the handleSubmit function provided by Material-UI's useForm hook", isCorrect: true },
        { id: 3, ans: "By using the form.submit() method directly in the JSX code", isCorrect: false },
      ],
    },
    // Question 15
    {
      question: "What is the purpose of the useTheme hook in Material-UI?",
      options: [
        { id: 0, ans: "To apply a custom theme to a specific component", isCorrect: false },
        { id: 1, ans: "To define custom styles for Material-UI components", isCorrect: false },
        { id: 2, ans: "To access the current theme object within a component", isCorrect: true },
        { id: 3, ans: "To create a Material-UI theme for different screen sizes", isCorrect: false },
      ],
    },
    // Question 16
    {
      question: "How do you create a responsive layout in Material-UI?",
      options: [
        { id: 0, ans: "By using CSS media queries directly in the component JSX", isCorrect: false },
        { id: 1, ans: "By defining separate components for different screen sizes and using them conditionally", isCorrect: false },
        { id: 2, ans: "By using the withWidth higher-order component provided by Material-UI", isCorrect: false },
        { id: 3, ans: "By using the useMediaQuery hook provided by Material-UI", isCorrect: true },
      ],
    },
    // Question 17
    {
      question: "What is the purpose of the useStyles function in Material-UI?",
      options: [
        { id: 0, ans: "To define custom styles for Material-UI components", isCorrect: true },
        { id: 1, ans: "To create a Material-UI theme for different screen sizes", isCorrect: false },
        { id: 2, ans: "To apply a custom theme to a specific component", isCorrect: false },
        { id: 3, ans: "To access the current theme object within a component", isCorrect: false },
      ],
    },
  ]


]
// -----------------------------

//  ::::::::::::Backend ------

const backend_basic_quiz = [

// MySQL
[
  {
    question: "What does SQL stand for?",
    options: [
      { id: 0, ans: "Structured Query Language", isCorrect: true },
      { id: 1, ans: "Standard Query Language", isCorrect: false },
      { id: 2, ans: "Simple Query Language", isCorrect: false },
      { id: 3, ans: "System Query Language", isCorrect: false },
    ],
  },
  {
    question: "Which SQL keyword is used to retrieve data from a database?",
    options: [
      { id: 0, ans: "FETCH", isCorrect: false },
      { id: 1, ans: "EXTRACT", isCorrect: false },
      { id: 2, ans: "SELECT", isCorrect: true },
      { id: 3, ans: "GET", isCorrect: false },
    ],
  },
  {
    question: "Which SQL clause is used to filter data based on a specified condition?",
    options: [
      { id: 0, ans: "FILTER BY", isCorrect: false },
      { id: 1, ans: "HAVING", isCorrect: false },
      { id: 2, ans: "WHERE", isCorrect: true },
      { id: 3, ans: "CONDITION", isCorrect: false },
    ],
  },
  {
    question: "In SQL, which statement is used to insert new data into a table?",
    options: [
      { id: 0, ans: "UPDATE", isCorrect: false },
      { id: 1, ans: "INSERT INTO", isCorrect: true },
      { id: 2, ans: "ADD NEW", isCorrect: false },
      { id: 3, ans: "CREATE", isCorrect: false },
    ],
  },
  {
    question: "What is the primary key used for in a database table?",
    options: [
      { id: 0, ans: "To establish a relationship with other tables", isCorrect: false },
      { id: 1, ans: "To enforce uniqueness for each record in the table", isCorrect: true },
      { id: 2, ans: "To order the records in the table", isCorrect: false },
      { id: 3, ans: "To define the number of columns in the table", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the ORDER BY clause in SQL?",
    options: [
      { id: 0, ans: "To group rows based on a specified column", isCorrect: false },
      { id: 1, ans: "To filter the results of a query based on a condition", isCorrect: false },
      { id: 2, ans: "To sort the results of a query in ascending or descending order", isCorrect: true },
      { id: 3, ans: "To combine rows from different tables", isCorrect: false },
    ],
  },
  {
    question: "Which SQL statement is used to delete data from a database table?",
    options: [
      { id: 0, ans: "DELETE", isCorrect: true },
      { id: 1, ans: "ERASE", isCorrect: false },
      { id: 2, ans: "DROP", isCorrect: false },
      { id: 3, ans: "REMOVE", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the JOIN clause in SQL?",
    options: [
      { id: 0, ans: "To concatenate two strings", isCorrect: false },
      { id: 1, ans: "To combine rows from different tables based on a related column", isCorrect: true },
      { id: 2, ans: "To perform mathematical operations on numeric data", isCorrect: false },
      { id: 3, ans: "To create a new table by merging existing tables", isCorrect: false },
    ],
  },
  {
    question: "Which SQL statement is used to modify existing data in a database table?",
    options: [
      { id: 0, ans: "UPDATE", isCorrect: true },
      { id: 1, ans: "ALTER", isCorrect: false },
      { id: 2, ans: "MODIFY", isCorrect: false },
      { id: 3, ans: "CHANGE", isCorrect: false },
    ],
  },
  {
    question: "In a relational database, what is a foreign key?",
    options: [
      { id: 0, ans: "A key that uniquely identifies each record in a table", isCorrect: false },
      { id: 1, ans: "A key that is used to link two or more tables together", isCorrect: true },
      { id: 2, ans: "A key that is automatically generated for each record", isCorrect: false },
      { id: 3, ans: "A key that is used to sort the records in a table", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the GROUP BY clause in SQL?",
    options: [
      { id: 0, ans: "To sort the results of a query in ascending order", isCorrect: false },
      { id: 1, ans: "To filter the results of a query based on a specified condition", isCorrect: false },
      { id: 2, ans: "To group rows that have the same values into summary rows", isCorrect: true },
      { id: 3, ans: "To limit the number of rows returned by a query", isCorrect: false },
    ],
  },
  {
    question: "Which SQL function is used to find the maximum value in a column?",
    options: [
      { id: 0, ans: "MAX()", isCorrect: true },
      { id: 1, ans: "LARGEST()", isCorrect: false },
      { id: 2, ans: "TOP()", isCorrect: false },
      { id: 3, ans: "HIGHEST()", isCorrect: false },
    ],
  },
  {
    question: "What is a subquery in SQL?",
    options: [
      { id: 0, ans: "A query used to retrieve data from multiple tables", isCorrect: false },
      { id: 1, ans: "A query used to create a new table", isCorrect: false },
      { id: 2, ans: "A query used to filter data based on a condition", isCorrect: false },
      { id: 3, ans: "A query used inside another query", isCorrect: true },
    ],
  },
  {
    question: "Which SQL statement is used to add a new column to an existing table?",
    options: [
      { id: 0, ans: "ALTER TABLE", isCorrect: false },
      { id: 1, ans: "ADD COLUMN", isCorrect: true },
      { id: 2, ans: "INSERT COLUMN", isCorrect: false },
      { id: 3, ans: "MODIFY TABLE", isCorrect: false },
    ],
  },
  {
    question: "In SQL, which operator is used to check if a value is not equal to another value?",
    options: [
      { id: 0, ans: "!=", isCorrect: false },
      { id: 1, ans: "<>", isCorrect: true },
      { id: 2, ans: "NOT", isCorrect: false },
      { id: 3, ans: "IS NOT", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the COMMIT statement in SQL?",
    options: [
      { id: 0, ans: "To save the changes made to the database permanently", isCorrect: true },
      { id: 1, ans: "To cancel the changes made to the database", isCorrect: false },
      { id: 2, ans: "To create a new transaction", isCorrect: false },
      { id: 3, ans: "To delete all records from a table", isCorrect: false },
    ],
  },
  {
    question: "Which SQL function is used to count the number of rows in a table?",
    options: [
      { id: 0, ans: "COUNT()", isCorrect: true },
      { id: 1, ans: "SUM()", isCorrect: false },
      { id: 2, ans: "AVG()", isCorrect: false },
      { id: 3, ans: "TOTAL()", isCorrect: false },
    ],
  },
],

// Python
[
  {
    question: "What is Python?",
    options: [
      { id: 0, ans: "A snake", isCorrect: false },
      { id: 1, ans: "A programming language", isCorrect: true },
      { id: 2, ans: "A software development company", isCorrect: false },
      { id: 3, ans: "A type of food", isCorrect: false },
    ],
  },
  {
    question: "How do you print \"Hello, World!\" in Python?",
    options: [
      { id: 0, ans: "print(\"Hello, World!\")", isCorrect: true },
      { id: 1, ans: "echo(\"Hello, World!\")", isCorrect: false },
      { id: 2, ans: "printf(\"Hello, World!\")", isCorrect: false },
      { id: 3, ans: "console.log(\"Hello, World!\")", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to declare a variable in Python?",
    options: [
      { id: 0, ans: "variable_name = value", isCorrect: true },
      { id: 1, ans: "value = variable_name", isCorrect: false },
      { id: 2, ans: "var = value", isCorrect: false },
      { id: 3, ans: "Value(variable_name)", isCorrect: false },
    ],
  },
  {
    question: "How do you check the data type of a variable in Python?",
    options: [
      { id: 0, ans: "typeOf(variable)", isCorrect: false },
      { id: 1, ans: "typeof(variable)", isCorrect: false },
      { id: 2, ans: "type(variable)", isCorrect: true },
      { id: 3, ans: "typeof variable", isCorrect: false },
    ],
  },
  {
    question: "What is the output of 3 + 2 * 4 in Python?",
    options: [
      { id: 0, ans: "20", isCorrect: false },
      { id: 1, ans: "15", isCorrect: true },
      { id: 2, ans: "11", isCorrect: false },
      { id: 3, ans: "14", isCorrect: false },
    ],
  },
  {
    question: "How do you define a function in Python?",
    options: [
      { id: 0, ans: "func myFunction():", isCorrect: false },
      { id: 1, ans: "function myFunction()", isCorrect: false },
      { id: 2, ans: "def myFunction():", isCorrect: true },
      { id: 3, ans: "define myFunction():", isCorrect: false },
    ],
  },
  {
    question: "What does the len() function do in Python?",
    options: [
      { id: 0, ans: "Calculates logarithm", isCorrect: false },
      { id: 1, ans: "Finds the largest element in a list", isCorrect: false },
      { id: 2, ans: "Returns the length of a string or list", isCorrect: true },
      { id: 3, ans: "Checks for equality", isCorrect: false },
    ],
  },
  {
    question: "How do you get user input in Python?",
    options: [
      { id: 0, ans: "userInput()", isCorrect: false },
      { id: 1, ans: "input()", isCorrect: true },
      { id: 2, ans: "read()", isCorrect: false },
      { id: 3, ans: "get_input()", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a valid Python comment?",
    options: [
      { id: 0, ans: "/* This is a comment */", isCorrect: false },
      { id: 1, ans: "<!-- This is a comment -->", isCorrect: false },
      { id: 2, ans: "# This is a comment", isCorrect: true },
      { id: 3, ans: "// This is a comment", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to open a file in Python for reading?",
    options: [
      { id: 0, ans: "open(\"file.txt\", \"read\")", isCorrect: false },
      { id: 1, ans: "open(\"file.txt\", \"r\")", isCorrect: true },
      { id: 2, ans: "open(\"file.txt\", \"w\")", isCorrect: false },
      { id: 3, ans: "open(\"file.txt\", \"write\")", isCorrect: false },
    ],
  },
  {
    question: "Which statement is used to exit from a loop prematurely?",
    options: [
      { id: 0, ans: "end", isCorrect: false },
      { id: 1, ans: "stop", isCorrect: false },
      { id: 2, ans: "exit", isCorrect: false },
      { id: 3, ans: "break", isCorrect: true },
    ],
  },
  {
    question: "How do you add items to a list in Python?",
    options: [
      { id: 0, ans: "add()", isCorrect: false },
      { id: 1, ans: "insert()", isCorrect: false },
      { id: 2, ans: "append()", isCorrect: true },
      { id: 3, ans: "push()", isCorrect: false },
    ],
  },
  {
    question: "What is the output of the following expression: bool(0)?",
    options: [
      { id: 0, ans: "True", isCorrect: false },
      { id: 1, ans: "False", isCorrect: true },
      { id: 2, ans: "0", isCorrect: false },
      { id: 3, ans: "Error", isCorrect: false },
    ],
  },
  {
    question: "How do you create a copy of a list named \"original_list\"?",
    options: [
      { id: 0, ans: "new_list = copy(original_list)", isCorrect: false },
      { id: 1, ans: "new_list = original_list.copy()", isCorrect: true },
      { id: 2, ans: "new_list = original_list[:]", isCorrect: false },
      { id: 3, ans: "new_list = clone(original_list)", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to handle an exception in Python?",
    options: [
      { id: 0, ans: "try-catch", isCorrect: false },
      { id: 1, ans: "try-except", isCorrect: true },
      { id: 2, ans: "catch-try", isCorrect: false },
      { id: 3, ans: "handle-except", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the enumerate() function in Python?",
    options: [
      { id: 0, ans: "To get the size of an object.", isCorrect: false },
      { id: 1, ans: "To iterate over items in a list.", isCorrect: true },
      { id: 2, ans: "To generate random numbers.", isCorrect: false },
      { id: 3, ans: "To associate an index with each element in an iterable.", isCorrect: false },
    ],
  },
  {
    question: "How do you import a module named \"math\" in Python?",
    options: [
      { id: 0, ans: "use math", isCorrect: false },
      { id: 1, ans: "require math", isCorrect: false },
      { id: 2, ans: "import math", isCorrect: true },
      { id: 3, ans: "include math", isCorrect: false },
    ],
  },
],

//JAVA
[
  {
    question: "What is Java?",
    options: [
      { id: 0, ans: "A programming language", isCorrect: true },
      { id: 1, ans: "A coffee brand", isCorrect: false },
      { id: 2, ans: "An operating system", isCorrect: false },
      { id: 3, ans: "A type of car", isCorrect: false },
    ],
  },
  {
    question: "How do you declare a variable in Java?",
    options: [
      { id: 0, ans: "variableName = value;", isCorrect: false },
      { id: 1, ans: "var variableName = value;", isCorrect: false },
      { id: 2, ans: "int variableName = value;", isCorrect: true },
      { id: 3, ans: "variableName := value;", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to print \"Hello, World!\" in Java?",
    options: [
      { id: 0, ans: "System.print(\"Hello, World!\");", isCorrect: false },
      { id: 1, ans: "System.log(\"Hello, World!\");", isCorrect: false },
      { id: 2, ans: "print(\"Hello, World!\");", isCorrect: false },
      { id: 3, ans: "System.out.println(\"Hello, World!\");", isCorrect: true },
    ],
  },
  {
    question: "What is the output of 5 + 3 * 2 in Java?",
    options: [
      { id: 0, ans: "16", isCorrect: false },
      { id: 1, ans: "11", isCorrect: true },
      { id: 2, ans: "10", isCorrect: false },
      { id: 3, ans: "13", isCorrect: false },
    ],
  },
  {
    question: "How do you create a new instance of an object in Java?",
    options: [
      { id: 0, ans: "new Object();", isCorrect: true },
      { id: 1, ans: "create Object();", isCorrect: false },
      { id: 2, ans: "Object.newInstance();", isCorrect: false },
      { id: 3, ans: "Object.create();", isCorrect: false },
    ],
  },
  {
    question: "What does the public keyword mean in Java?",
    options: [
      { id: 0, ans: "It signifies that the method can be called from anywhere", isCorrect: true },
      { id: 1, ans: "It specifies that the class can only be accessed by other classes in the same package", isCorrect: false },
      { id: 2, ans: "It indicates that the method is accessible within the same class", isCorrect: false },
      { id: 3, ans: "It makes the method private and can only be accessed within the same class", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to write a single-line comment in Java?",
    options: [
      { id: 0, ans: "// This is a comment", isCorrect: true },
      { id: 1, ans: "/* This is a comment */", isCorrect: false },
      { id: 2, ans: "# This is a comment", isCorrect: false },
      { id: 3, ans: "<!-- This is a comment -->", isCorrect: false },
    ],
  },
  {
    question: "How do you read user input in Java?",
    options: [
      { id: 0, ans: "readLine()", isCorrect: false },
      { id: 1, ans: "read()", isCorrect: false },
      { id: 2, ans: "System.in.read()", isCorrect: false },
      { id: 3, ans: "scanner.next()", isCorrect: true },
    ],
  },
  {
    question: "What is the result of 10 % 3 in Java?",
    options: [
      { id: 0, ans: "1", isCorrect: true },
      { id: 1, ans: "3", isCorrect: false },
      { id: 2, ans: "0", isCorrect: false },
      { id: 3, ans: "10", isCorrect: false },
    ],
  },
  {
    question: "How do you declare a constant in Java?",
    options: [
      { id: 0, ans: "const int CONSTANT_NAME = value;", isCorrect: false },
      { id: 1, ans: "final int CONSTANT_NAME = value;", isCorrect: true },
      { id: 2, ans: "var CONSTANT_NAME = value;", isCorrect: false },
      { id: 3, ans: "constant int CONSTANT_NAME = value;", isCorrect: false },
    ],
  },
  {
    question: "What does the static keyword mean in Java?",
    options: [
      { id: 0, ans: "It is used to specify that the method cannot be overridden.", isCorrect: false },
      { id: 1, ans: "It indicates that the method belongs to the class, not the instance of the class.", isCorrect: true },
      { id: 2, ans: "It is used to create a new instance of a class.", isCorrect: false },
      { id: 3, ans: "It specifies that the method can only be accessed within the same package.", isCorrect: false },
    ],
  },
  {
    question: "How do you define a method in Java?",
    options: [
      { id: 0, ans: "method myMethod() {}", isCorrect: false },
      { id: 1, ans: "function myMethod() {}", isCorrect: false },
      { id: 2, ans: "def myMethod() {}", isCorrect: false },
      { id: 3, ans: "void myMethod() {}", isCorrect: true },
    ],
  },
  {
    question: "Which of the following is true about Java constructors?",
    options: [
      { id: 0, ans: "Constructors can have any return type.", isCorrect: false },
      { id: 1, ans: "Constructors can be inherited from the superclass.", isCorrect: false },
      { id: 2, ans: "If a class does not have a constructor, the compiler adds a default constructor.", isCorrect: true },
      { id: 3, ans: "Constructors cannot be overloaded.", isCorrect: false },
    ],
  },
  {
    question: "How do you convert a string variable named numString to an integer in Java?",
    options: [
      { id: 0, ans: "(int)numString;", isCorrect: false },
      { id: 1, ans: "Integer.parseInt(numString);", isCorrect: true },
      { id: 2, ans: "numString.parseInt();", isCorrect: false },
      { id: 3, ans: "Integer.valueOf(numString);", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to create a two-dimensional array in Java?",
    options: [
      { id: 0, ans: "int[][] arr = new int[][];", isCorrect: false },
      { id: 1, ans: "int[][] arr = new int[rows][columns];", isCorrect: true },
      { id: 2, ans: "int arr[][] = new int[rows, columns];", isCorrect: false },
      { id: 3, ans: "int arr = new int[rows][columns];", isCorrect: false },
    ],
  },
  {
    question: "What does the this keyword refer to in Java?",
    options: [
      { id: 0, ans: "It refers to the current class.", isCorrect: false },
      { id: 1, ans: "It refers to the superclass.", isCorrect: false },
      { id: 2, ans: "It refers to the parent class.", isCorrect: false },
      { id: 3, ans: "It refers to the instance of the class.", isCorrect: true },
    ],
  },
  {
    question: "What is the correct way to write a multi-line comment in Java?",
    options: [
      { id: 0, ans: "/* This is a comment /", isCorrect: false },
      { id: 1, ans: "<!-- This is a comment -->", isCorrect: false },
      { id: 2, ans: "// This is a comment", isCorrect: false },
      { id: 3, ans: "/ This is a multi-line comment /", isCorrect: true },
    ],
  },
],

//PHP
[
  {
    question: "What is PHP?",
    options: [
      { id: 0, ans: "A programming language", isCorrect: true },
      { id: 1, ans: "A markup language", isCorrect: false },
      { id: 2, ans: "A database management system", isCorrect: false },
      { id: 3, ans: "A software development company", isCorrect: false },
    ],
  },
  {
    question: "How do you display \"Hello, World!\" in PHP?",
    options: [
      { id: 0, ans: "print(\"Hello, World!\");", isCorrect: false },
      { id: 1, ans: "echo \"Hello, World!\";", isCorrect: true },
      { id: 2, ans: "printf(\"Hello, World!\");", isCorrect: false },
      { id: 3, ans: "console.log(\"Hello, World!\");", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to declare a variable in PHP?",
    options: [
      { id: 0, ans: "$variable_name = value;", isCorrect: true },
      { id: 1, ans: "value = $variable_name;", isCorrect: false },
      { id: 2, ans: "var variable_name = value;", isCorrect: false },
      { id: 3, ans: "variable_name := value;", isCorrect: false },
    ],
  },
  {
    question: "How do you check the data type of a variable in PHP?",
    options: [
      { id: 0, ans: "typeof(variable)", isCorrect: false },
      { id: 1, ans: "getType(variable)", isCorrect: false },
      { id: 2, ans: "type(variable)", isCorrect: false },
      { id: 3, ans: "gettype(variable)", isCorrect: true },
    ],
  },
  {
    question: "What is the output of 5 + 3 * 2 in PHP?",
    options: [
      { id: 0, ans: "16", isCorrect: false },
      { id: 1, ans: "11", isCorrect: true },
      { id: 2, ans: "10", isCorrect: false },
      { id: 3, ans: "13", isCorrect: false },
    ],
  },
  {
    question: "How do you define a function in PHP?",
    options: [
      { id: 0, ans: "func myFunction() {}", isCorrect: false },
      { id: 1, ans: "function myFunction() {}", isCorrect: true },
      { id: 2, ans: "def myFunction() {}", isCorrect: false },
      { id: 3, ans: "define myFunction() {}", isCorrect: false },
    ],
  },
  {
    question: "What does the count() function do in PHP?",
    options: [
      { id: 0, ans: "Returns the number of characters in a string", isCorrect: false },
      { id: 1, ans: "Counts the elements in an array", isCorrect: true },
      { id: 2, ans: "Checks if a file exists", isCorrect: false },
      { id: 3, ans: "Calculates the average of a list of numbers", isCorrect: false },
    ],
  },
  {
    question: "How do you get user input in PHP?",
    options: [
      { id: 0, ans: "readLine()", isCorrect: false },
      { id: 1, ans: "read()", isCorrect: false },
      { id: 2, ans: "$_GET", isCorrect: true },
      { id: 3, ans: "$input", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a valid PHP comment?",
    options: [
      { id: 0, ans: "/* This is a comment */", isCorrect: false },
      { id: 1, ans: "<!-- This is a comment -->", isCorrect: false },
      { id: 2, ans: "# This is a comment", isCorrect: false },
      { id: 3, ans: "// This is a comment", isCorrect: true },
    ],
  },
  {
    question: "What is the correct way to check if a file exists in PHP?",
    options: [
      { id: 0, ans: "file_exists(\"file.txt\")", isCorrect: true },
      { id: 1, ans: "exists_file(\"file.txt\")", isCorrect: false },
      { id: 2, ans: "check_file(\"file.txt\")", isCorrect: false },
      { id: 3, ans: "is_file(\"file.txt\")", isCorrect: false },
    ],
  },
  {
    question: "What does the require statement do in PHP?",
    options: [
      { id: 0, ans: "It includes and evaluates a specified file.", isCorrect: true },
      { id: 1, ans: "It sends an HTTP request to a specified URL.", isCorrect: false },
      { id: 2, ans: "It checks if a variable is set.", isCorrect: false },
      { id: 3, ans: "It declares a constant.", isCorrect: false },
    ],
  },
  {
    question: "How do you concatenate two strings in PHP?",
    options: [
      { id: 0, ans: "str_combine()", isCorrect: false },
      { id: 1, ans: "concat()", isCorrect: false },
      { id: 2, ans: "str_concat()", isCorrect: false },
      { id: 3, ans: ".", isCorrect: true },
    ],
  },
  {
    question: "What is the output of the following expression: bool(0) in PHP?",
    options: [
      { id: 0, ans: "True", isCorrect: false },
      { id: 1, ans: "False", isCorrect: true },
      { id: 2, ans: "0", isCorrect: false },
      { id: 3, ans: "Error", isCorrect: false },
    ],
  },
  {
    question: "How do you define a constant in PHP?",
    options: [
      { id: 0, ans: "const CONSTANT_NAME = value;", isCorrect: false },
      { id: 1, ans: "define CONSTANT_NAME = value;", isCorrect: false },
      { id: 2, ans: "constant CONSTANT_NAME = value;", isCorrect: false },
      { id: 3, ans: "define(\"CONSTANT_NAME\", value);", isCorrect: true },
    ],
  },
  {
    question: "What is the correct way to handle an exception in PHP?",
    options: [
      { id: 0, ans: "try-catch", isCorrect: true },
      { id: 1, ans: "try-except", isCorrect: false },
      { id: 2, ans: "catch-try", isCorrect: false },
      { id: 3, ans: "handle-except", isCorrect: false },
    ],
  },
  {
    question: "How do you create an array in PHP?",
    options: [
      { id: 0, ans: "array(1, 2, 3)", isCorrect: false },
      { id: 1, ans: "[1, 2, 3]", isCorrect: true },
      { id: 2, ans: "{1, 2, 3}", isCorrect: false },
      { id: 3, ans: "(1, 2, 3)", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the count() function in PHP?",
    options: [
      { id: 0, ans: "Returns the number of elements in an array", isCorrect: true },
      { id: 1, ans: "Counts the occurrences of a substring in a string", isCorrect: false },
      { id: 2, ans: "Checks if a variable is set and is not NULL", isCorrect: false },
      { id: 3, ans: "Calculates the average of a list of numbers", isCorrect: false },
    ],
  },
],

//Firebase
[
  {
    question: "What is Firebase?",
    options: [
      { id: 0, ans: "A cloud storage service", isCorrect: false },
      { id: 1, ans: "A database management system", isCorrect: false },
      { id: 2, ans: "A mobile and web application development platform", isCorrect: true },
      { id: 3, ans: "An email service provider", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a feature provided by Firebase Authentication?",
    options: [
      { id: 0, ans: "Realtime database", isCorrect: false },
      { id: 1, ans: "Cloud Functions", isCorrect: false },
      { id: 2, ans: "Analytics", isCorrect: false },
      { id: 3, ans: "User authentication and authorization", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of Firebase Cloud Firestore?",
    options: [
      { id: 0, ans: "To store user authentication information", isCorrect: false },
      { id: 1, ans: "To manage real-time data synchronization", isCorrect: false },
      { id: 2, ans: "To handle serverless functions", isCorrect: false },
      { id: 3, ans: "To store and synchronize data in real-time", isCorrect: true },
    ],
  },
  {
    question: "How do you add Firebase to a web application?",
    options: [
      { id: 0, ans: "By importing the Firebase SDK in HTML", isCorrect: true },
      { id: 1, ans: "By installing Firebase using npm", isCorrect: false },
      { id: 2, ans: "By downloading and linking Firebase libraries", isCorrect: false },
      { id: 3, ans: "By enabling Firebase in the browser settings", isCorrect: false },
    ],
  },
  {
    question: "What is Firebase Cloud Functions used for?",
    options: [
      { id: 0, ans: "To handle server-side logic and run code in response to events", isCorrect: true },
      { id: 1, ans: "To manage user authentication", isCorrect: false },
      { id: 2, ans: "To store user data securely", isCorrect: false },
      { id: 3, ans: "To handle real-time data synchronization", isCorrect: false },
    ],
  },
  {
    question: "How do you retrieve data from Firebase Cloud Firestore?",
    options: [
      { id: 0, ans: "Using the get() method", isCorrect: true },
      { id: 1, ans: "Sending an HTTP request", isCorrect: false },
      { id: 2, ans: "Accessing the data directly from the Firestore database", isCorrect: false },
      { id: 3, ans: "Using the onSnapshot() method", isCorrect: false },
    ],
  },
  {
    question: "What is Firebase Cloud Storage used for?",
    options: [
      { id: 0, ans: "To store and retrieve user authentication data", isCorrect: false },
      { id: 1, ans: "To store user files, such as images and videos", isCorrect: true },
      { id: 2, ans: "To handle user authentication", isCorrect: false },
      { id: 3, ans: "To perform real-time data synchronization", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is true about Firebase Realtime Database?",
    options: [
      { id: 0, ans: "It stores data in a document-based structure", isCorrect: false },
      { id: 1, ans: "It is a NoSQL database", isCorrect: true },
      { id: 2, ans: "It is not suitable for real-time applications", isCorrect: false },
      { id: 3, ans: "It is used for user authentication only", isCorrect: false },
    ],
  },
  {
    question: "How do you deploy a Firebase Cloud Function?",
    options: [
      { id: 0, ans: "By using the Firebase CLI and running firebase deploy", isCorrect: true },
      { id: 1, ans: "By exporting the function and importing it in the main application", isCorrect: false },
      { id: 2, ans: "By manually copying and pasting the code into the Firebase console", isCorrect: false },
      { id: 3, ans: "By sending a POST request to Firebase server", isCorrect: false },
    ],
  },
  {
    question: "What is Firebase Remote Config used for?",
    options: [
      { id: 0, ans: "To send push notifications to users", isCorrect: false },
      { id: 1, ans: "To manage real-time data synchronization", isCorrect: false },
      { id: 2, ans: "To remotely change the behavior and appearance of your app", isCorrect: true },
      { id: 3, ans: "To store user data securely", isCorrect: false },
    ],
  },
  {
    question: "How do you track user interactions and app usage in Firebase?",
    options: [
      { id: 0, ans: "By using Firebase Authentication", isCorrect: false },
      { id: 1, ans: "By implementing Firebase Realtime Database", isCorrect: false },
      { id: 2, ans: "By integrating Firebase Cloud Functions", isCorrect: false },
      { id: 3, ans: "By using Firebase Analytics", isCorrect: true },
    ],
  },
  {
    question: "What is Firebase Cloud Messaging (FCM) used for?",
    options: [
      { id: 0, ans: "To handle real-time data synchronization", isCorrect: false },
      { id: 1, ans: "To store and retrieve user authentication data", isCorrect: false },
      { id: 2, ans: "To send push notifications to users", isCorrect: true },
      { id: 3, ans: "To manage user files, such as images and videos", isCorrect: false },
    ],
  },
  {
    question: "How do you secure access to Firebase services and resources?",
    options: [
      { id: 0, ans: "By creating strong passwords for Firebase Authentication", isCorrect: false },
      { id: 1, ans: "By restricting access using IP addresses", isCorrect: false },
      { id: 2, ans: "By implementing Firebase Security Rules", isCorrect: true },
      { id: 3, ans: "By encrypting data stored in Firebase Cloud Firestore", isCorrect: false },
    ],
  },
  {
    question: "What is Firebase Performance Monitoring used for?",
    options: [
      { id: 0, ans: "To optimize cloud functions", isCorrect: false },
      { id: 1, ans: "To monitor the performance of your app and identify slow parts", isCorrect: true },
      { id: 2, ans: "To manage user authentication", isCorrect: false },
      { id: 3, ans: "To track user interactions and app usage", isCorrect: false },
    ],
  },
  {
    question: "How do you authenticate users using Firebase Authentication in a mobile app?",
    options: [
      { id: 0, ans: "By sending an HTTP request to Firebase server", isCorrect: false },
      { id: 1, ans: "By calling the login() method from Firebase SDK", isCorrect: false },
      { id: 2, ans: "By integrating Firebase Cloud Functions", isCorrect: false },
      { id: 3, ans: "By using FirebaseUI Authentication library", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of Firebase Test Lab?",
    options: [
      { id: 0, ans: "To test the security of your Firebase services", isCorrect: false },
      { id: 1, ans: "To test your app on various physical and virtual devices", isCorrect: true },
      { id: 2, ans: "To monitor the performance of your app in real-time", isCorrect: false },
      { id: 3, ans: "To test Firebase Cloud Functions", isCorrect: false },
    ],
  },
  {
    question: "How do you handle authentication state changes in a Firebase web app?",
    options: [
      { id: 0, ans: "By using Firebase Realtime Database", isCorrect: false },
      { id: 1, ans: "By checking the user's authentication status in JavaScript code", isCorrect: true },
      { id: 2, ans: "By implementing Firebase Remote Config", isCorrect: false },
      { id: 3, ans: "By using Firebase Cloud Functions", isCorrect: false },
    ],
  },
],

// Advanced JavaScript
[
  {
    question: "What is a closure in JavaScript?",
    options: [
      { id: 0, ans: "A data structure for storing multiple values", isCorrect: false },
      { id: 1, ans: "A function that takes another function as an argument", isCorrect: false },
      { id: 2, ans: "A way to encapsulate and preserve the state of a function's scope", isCorrect: true },
      { id: 3, ans: "A type of loop that repeats a block of code a specific number of times", isCorrect: false },
    ],
  },
  {
    question: "What is the difference between var, let, and const in JavaScript?",
    options: [
      { id: 0, ans: "They are all used for the same purpose and can be used interchangeably", isCorrect: false },
      { id: 1, ans: "var has function scope, let has block scope, and const is used for constants", isCorrect: true },
      { id: 2, ans: "var is used for constants, let has block scope, and const has function scope", isCorrect: false },
      { id: 3, ans: "var is used for variables that can't be reassigned, let is used for variables that can be reassigned, and const has block scope", isCorrect: false },
    ],
  },
  {
    question: "What is the this keyword in JavaScript?",
    options: [
      { id: 0, ans: "It refers to the current function being executed", isCorrect: false },
      { id: 1, ans: "It refers to the global object (window in browsers)", isCorrect: false },
      { id: 2, ans: "It refers to the object on which the current method is being called", isCorrect: true },
      { id: 3, ans: "It refers to the parent function of the current function", isCorrect: false },
    ],
  },
  {
    question: "What are Promises in JavaScript?",
    options: [
      { id: 0, ans: "A way to define function prototypes", isCorrect: false },
      { id: 1, ans: "A design pattern used for object-oriented programming", isCorrect: false },
      { id: 2, ans: "A pattern for handling asynchronous operations and avoiding callback hell", isCorrect: true },
      { id: 3, ans: "A data structure for storing multiple values", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the async and await keywords in JavaScript?",
    options: [
      { id: 0, ans: "To declare a function as asynchronous and wait for a promise to resolve", isCorrect: true },
      { id: 1, ans: "To create a new object from a constructor function", isCorrect: false },
      { id: 2, ans: "To handle errors and exceptions in asynchronous code", isCorrect: false },
      { id: 3, ans: "To define a callback function for a promise", isCorrect: false },
    ],
  },
  {
    question: "What is the difference between null and undefined in JavaScript?",
    options: [
      { id: 0, ans: "They are the same and can be used interchangeably", isCorrect: false },
      { id: 1, ans: "null represents a variable with an unknown value, while undefined represents a variable with no value assigned", isCorrect: true },
      { id: 2, ans: "null represents a variable with no value assigned, while undefined represents a variable with an unknown value", isCorrect: false },
      { id: 3, ans: "null is used for objects, while undefined is used for primitive data types", isCorrect: false },
    ],
  },
  {
    question: "What is the bind method in JavaScript used for?",
    options: [
      { id: 0, ans: "To bind an event handler to a DOM element", isCorrect: false },
      { id: 1, ans: "To create a shallow copy of an object", isCorrect: false },
      { id: 2, ans: "To concatenate two or more arrays", isCorrect: false },
      { id: 3, ans: "To create a new function with a specified context and arguments", isCorrect: true },
    ],
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      { id: 0, ans: "They are both used for strict equality comparison", isCorrect: false },
      { id: 1, ans: "== is used for loose equality comparison, while === is used for strict equality comparison", isCorrect: true },
      { id: 2, ans: "== is used for strict equality comparison, while === is used for loose equality comparison", isCorrect: false },
      { id: 3, ans: "They are both used for loose equality comparison", isCorrect: false },
    ],
  },
  {
    question: "What are arrow functions in JavaScript?",
    options: [
      { id: 0, ans: "A way to declare functions with a concise syntax and without function keyword", isCorrect: true },
      { id: 1, ans: "A type of function that can only be called once", isCorrect: false },
      { id: 2, ans: "A way to declare functions with dynamic context", isCorrect: false },
      { id: 3, ans: "A pattern for handling asynchronous operations and avoiding callback hell", isCorrect: false },
    ],
  },
  {
    question: "What is the map method in JavaScript used for?",
    options: [
      { id: 0, ans: "To create a new array with the results of calling a function on every element in the original array", isCorrect: true },
      { id: 1, ans: "To modify the original array by adding new elements at the beginning", isCorrect: false },
      { id: 2, ans: "To remove elements from an array based on a condition", isCorrect: false },
      { id: 3, ans: "To sort the elements of an array in ascending order", isCorrect: false },
    ],
  },
  {
    question: "What are the rest parameters in JavaScript?",
    options: [
      { id: 0, ans: "A way to declare multiple variables in a single statement", isCorrect: false },
      { id: 1, ans: "A way to concatenate strings", isCorrect: false },
      { id: 2, ans: "A way to define optional parameters in a function", isCorrect: false },
      { id: 3, ans: "A way to represent an indefinite number of arguments as an array", isCorrect: true },
    ],
  },
  {
    question: "What is the Object.assign method in JavaScript used for?",
    options: [
      { id: 0, ans: "To concatenate two or more objects into a new object", isCorrect: false },
      { id: 1, ans: "To create a new object with the same prototype as the original object", isCorrect: false },
      { id: 2, ans: "To copy the values of all enumerable properties from one or more source objects to a target object", isCorrect: true },
      { id: 3, ans: "To merge two or more arrays into a new array", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the Set object in JavaScript?",
    options: [
      { id: 0, ans: "To store unique values of any type", isCorrect: true },
      { id: 1, ans: "To perform mathematical operations on numbers", isCorrect: false },
      { id: 2, ans: "To handle events in the DOM", isCorrect: false },
      { id: 3, ans: "To represent a collection of elements with a specific order", isCorrect: false },
    ],
  },
  {
    question: "What is the difference between forEach and map methods in JavaScript?",
    options: [
      { id: 0, ans: "They both perform the same operation, but forEach returns a new array, while map modifies the original array", isCorrect: false },
      { id: 1, ans: "forEach is used for iterating over an array, while map is used for transforming the elements of an array", isCorrect: true },
      { id: 2, ans: "forEach is used for mapping elements of an array to a new array, while map is used for iterating over an array", isCorrect: false },
      { id: 3, ans: "They are the same and can be used interchangeably", isCorrect: false },
    ],
  },
  {
    question: "What is the Symbol data type in JavaScript used for?",
    options: [
      { id: 0, ans: "To represent unique identifiers for object properties", isCorrect: true },
      { id: 1, ans: "To perform bitwise operations on numbers", isCorrect: false },
      { id: 2, ans: "To handle asynchronous operations", isCorrect: false },
      { id: 3, ans: "To create dynamic regular expressions", isCorrect: false },
    ],
  },
  {
    question: "What are generators in JavaScript?",
    options: [
      { id: 0, ans: "A way to create objects with a constructor function", isCorrect: false },
      { id: 1, ans: "A pattern for handling asynchronous operations and avoiding callback hell", isCorrect: false },
      { id: 2, ans: "A special type of function that can be paused and resumed", isCorrect: true },
      { id: 3, ans: "A data structure for storing key-value pairs", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the Proxy object in JavaScript?",
    options: [
      { id: 0, ans: "To handle errors and exceptions in JavaScript", isCorrect: false },
      { id: 1, ans: "To perform mathematical operations on numbers", isCorrect: false },
      { id: 2, ans: "To create dynamic regular expressions", isCorrect: false },
      { id: 3, ans: "To define custom behavior for fundamental operations on objects", isCorrect: true },
    ],
  },
],

//MongoDB
[
  {
    question: "What is MongoDB?",
    options: [
      { id: 0, ans: "A relational database management system", isCorrect: false },
      { id: 1, ans: "A NoSQL database management system", isCorrect: true },
      { id: 2, ans: "A programming language", isCorrect: false },
      { id: 3, ans: "A cloud storage service", isCorrect: false },
    ],
  },
  {
    question: "How do you start the MongoDB server?",
    options: [
      { id: 0, ans: "mongod start", isCorrect: false },
      { id: 1, ans: "mongodb server", isCorrect: false },
      { id: 2, ans: "mongo start", isCorrect: false },
      { id: 3, ans: "mongod", isCorrect: true },
    ],
  },
  {
    question: "What is a document in MongoDB?",
    options: [
      { id: 0, ans: "A row in a table", isCorrect: false },
      { id: 1, ans: "A column in a table", isCorrect: false },
      { id: 2, ans: "A record in a collection", isCorrect: true },
      { id: 3, ans: "A table in a database", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is used to query documents in MongoDB?",
    options: [
      { id: 0, ans: "SQL", isCorrect: false },
      { id: 1, ans: "JSON", isCorrect: true },
      { id: 2, ans: "GraphQL", isCorrect: false },
      { id: 3, ans: "MongoDB Query Language (MQL)", isCorrect: false },
    ],
  },
  {
    question: "How do you insert a new document into a collection in MongoDB?",
    options: [
      { id: 0, ans: "mongo insert", isCorrect: false },
      { id: 1, ans: "db.collection.insertOne()", isCorrect: true },
      { id: 2, ans: "db.insert()", isCorrect: false },
      { id: 3, ans: "insert(document)", isCorrect: false },
    ],
  },
  {
    question: "What is the primary key in MongoDB called?",
    options: [
      { id: 0, ans: "_id", isCorrect: true },
      { id: 1, ans: "_key", isCorrect: false },
      { id: 2, ans: "_primary", isCorrect: false },
      { id: 3, ans: "key", isCorrect: false },
    ],
  },
  {
    question: "How do you find documents that match a specific condition in MongoDB?",
    options: [
      { id: 0, ans: "db.collection.find({condition})", isCorrect: true },
      { id: 1, ans: "db.collection.search({condition})", isCorrect: false },
      { id: 2, ans: "db.collection.query({condition})", isCorrect: false },
      { id: 3, ans: "db.find({condition})", isCorrect: false },
    ],
  },
  {
    question: "How do you update a document in MongoDB?",
    options: [
      { id: 0, ans: "db.collection.modify()", isCorrect: false },
      { id: 1, ans: "db.collection.updateOne()", isCorrect: true },
      { id: 2, ans: "db.update()", isCorrect: false },
      { id: 3, ans: "update(document)", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of an index in MongoDB?",
    options: [
      { id: 0, ans: "To store documents", isCorrect: false },
      { id: 1, ans: "To provide a unique identifier for each document", isCorrect: false },
      { id: 2, ans: "To speed up the process of querying and searching documents", isCorrect: true },
      { id: 3, ans: "To sort documents in a collection", isCorrect: false },
    ],
  },
  {
    question: "How do you remove a document from a collection in MongoDB?",
    options: [
      { id: 0, ans: "db.collection.removeOne()", isCorrect: false },
      { id: 1, ans: "db.collection.delete()", isCorrect: false },
      { id: 2, ans: "db.delete()", isCorrect: false },
      { id: 3, ans: "db.collection.deleteOne()", isCorrect: true },
    ],
  },
  {
    question: "Which of the following is true about MongoDB transactions?",
    options: [
      { id: 0, ans: "MongoDB does not support transactions", isCorrect: false },
      { id: 1, ans: "MongoDB supports only single-document transactions", isCorrect: false },
      { id: 2, ans: "MongoDB supports multi-document transactions across multiple collections", isCorrect: true },
      { id: 3, ans: "MongoDB transactions can only be executed from the MongoDB shell", isCorrect: false },
    ],
  },
  {
    question: "How do you limit the number of documents returned in a MongoDB query?",
    options: [
      { id: 0, ans: "db.collection.limit()", isCorrect: false },
      { id: 1, ans: "db.collection.find({}).limit()", isCorrect: true },
      { id: 2, ans: "db.limit(10)", isCorrect: false },
      { id: 3, ans: "db.find({}).limit(10)", isCorrect: false },
    ],
  },
  {
    question: "What is sharding in MongoDB?",
    options: [
      { id: 0, ans: "A way to sort documents in a collection", isCorrect: false },
      { id: 1, ans: "A process of splitting data across multiple servers to distribute the load", isCorrect: true },
      { id: 2, ans: "A way to encrypt data in a collection", isCorrect: false },
      { id: 3, ans: "A process of compressing data in a collection", isCorrect: false },
    ],
  },
  {
    question: "How do you create a backup of a MongoDB database?",
    options: [
      { id: 0, ans: "mongo backup", isCorrect: false },
      { id: 1, ans: "mongodump", isCorrect: true },
      { id: 2, ans: "db.collection.backup()", isCorrect: false },
      { id: 3, ans: "db.backup()", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the $in operator in MongoDB?",
    options: [
      { id: 0, ans: "To filter documents based on a range of values", isCorrect: false },
      { id: 1, ans: "To filter documents based on a specific value", isCorrect: false },
      { id: 2, ans: "To filter documents based on multiple values", isCorrect: true },
      { id: 3, ans: "To filter documents based on a regular expression", isCorrect: false },
    ],
  },
  {
    question: "How do you sort the results of a MongoDB query?",
    options: [
      { id: 0, ans: "db.collection.sort()", isCorrect: false },
      { id: 1, ans: "db.collection.find({}).sort()", isCorrect: false },
      { id: 2, ans: "db.sort({field: 1})", isCorrect: false },
      { id: 3, ans: "db.find({}).sort({field: 1})", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of the $addToSet operator in MongoDB?",
    options: [
      { id: 0, ans: "To add a new field to a document", isCorrect: false },
      { id: 1, ans: "To add an element to an array only if it does not already exist", isCorrect: true },
      { id: 2, ans: "To remove an element from an array", isCorrect: false },
      { id: 3, ans: "To add an element to an array", isCorrect: false },
    ],
  },
]


    
]

const backend_advanced_quiz = [


  // Django
  [
    {
      question: "What is Django?",
      options: [
        { id: 0, ans: "A server-side scripting language", isCorrect: false },
        { id: 1, ans: "A front-end JavaScript library", isCorrect: false },
        { id: 2, ans: "A web development framework for Python", isCorrect: true },
        { id: 3, ans: "A database management system", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new Django project?",
      options: [
        { id: 0, ans: "django startproject project_name", isCorrect: true },
        { id: 1, ans: "django create project_name", isCorrect: false },
        { id: 2, ans: "django new project_name", isCorrect: false },
        { id: 3, ans: "django init project_name", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of a Django app?",
      options: [
        { id: 0, ans: "To define the database schema", isCorrect: false },
        { id: 1, ans: "To manage user authentication", isCorrect: false },
        { id: 2, ans: "To handle URL routing and view logic", isCorrect: true },
        { id: 3, ans: "To serve static files", isCorrect: false }
      ]
    },
    {
      question: "How do you define a model in Django?",
      options: [
        { id: 0, ans: "By creating a new database table", isCorrect: false },
        { id: 1, ans: "By defining a Python class that inherits from models.Model", isCorrect: true },
        { id: 2, ans: "By adding a new entry in the settings.py file", isCorrect: false },
        { id: 3, ans: "By creating a new file with the model definition", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Django's admin site?",
      options: [
        { id: 0, ans: "To manage user authentication and authorization", isCorrect: false },
        { id: 1, ans: "To handle URL routing and view logic", isCorrect: false },
        { id: 2, ans: "To serve static files", isCorrect: false },
        { id: 3, ans: "To provide an interface for managing data in the database", isCorrect: true }
      ]
    },
    {
      question: "How do you create a superuser for the Django admin site?",
      options: [
        { id: 0, ans: "python manage.py createsuperuser", isCorrect: true },
        { id: 1, ans: "python create_superuser.py", isCorrect: false },
        { id: 2, ans: "python manage.py superuser", isCorrect: false },
        { id: 3, ans: "python superuser.py", isCorrect: false }
      ]
    },
    {
      question: "How do you define a URL pattern in Django?",
      options: [
        { id: 0, ans: "By adding a new entry in the urls.py file", isCorrect: true },
        { id: 1, ans: "By creating a new Python function with the URL pattern", isCorrect: false },
        { id: 2, ans: "By defining a Python class that inherits from urls.UrlPattern", isCorrect: false },
        { id: 3, ans: "By using the url() function in the views.py file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Django's template engine?",
      options: [
        { id: 0, ans: "To handle URL routing and view logic", isCorrect: false },
        { id: 1, ans: "To provide an interface for managing data in the database", isCorrect: false },
        { id: 2, ans: "To serve static files", isCorrect: false },
        { id: 3, ans: "To define the structure and layout of the HTML pages", isCorrect: true }
      ]
    },
    {
      question: "How do you pass data from a view to a template in Django?",
      options: [
        { id: 0, ans: "By using the render() function and passing a dictionary as context", isCorrect: true },
        { id: 1, ans: "By including the data directly in the template file", isCorrect: false },
        { id: 2, ans: "By using the request.POST object in the template", isCorrect: false },
        { id: 3, ans: "By passing the data as a URL parameter", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Django's ORM (Object-Relational Mapping)?",
      options: [
        { id: 0, ans: "To handle URL routing and view logic", isCorrect: false },
        { id: 1, ans: "To provide an interface for managing data in the database", isCorrect: true },
        { id: 2, ans: "To define the structure and layout of the HTML pages", isCorrect: false },
        { id: 3, ans: "To manage user authentication and authorization", isCorrect: false }
      ]
    },
    {
      question: "How do you perform database queries in Django?",
      options: [
        { id: 0, ans: "By writing raw SQL queries", isCorrect: false },
        { id: 1, ans: "By using Django's ORM methods like filter() and get()", isCorrect: true },
        { id: 2, ans: "By creating a new Python class for each query", isCorrect: false },
        { id: 3, ans: "By defining the queries in the settings.py file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Django's migration system?",
      options: [
        { id: 0, ans: "To handle URL routing and view logic", isCorrect: false },
        { id: 1, ans: "To provide an interface for managing data in the database", isCorrect: true },
        { id: 2, ans: "To serve static files", isCorrect: false },
        { id: 3, ans: "To manage changes to the database schema over time", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new migration in Django?",
      options: [
        { id: 0, ans: "python manage.py new_migration", isCorrect: false },
        { id: 1, ans: "python new_migration.py", isCorrect: false },
        { id: 2, ans: "python manage.py make_migration", isCorrect: true },
        { id: 3, ans: "python make_migration.py", isCorrect: false }
      ]
    },
    {
      question: "How do you apply migrations to the database in Django?",
      options: [
        { id: 0, ans: "python manage.py apply_migrations", isCorrect: false },
        { id: 1, ans: "python apply_migrations.py", isCorrect: false },
        { id: 2, ans: "python manage.py migrate", isCorrect: true },
        { id: 3, ans: "python migrate.py", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Django's authentication system?",
      options: [
        { id: 0, ans: "To handle URL routing and view logic", isCorrect: false },
        { id: 1, ans: "To provide an interface for managing data in the database", isCorrect: false },
        { id: 2, ans: "To manage user authentication and authorization", isCorrect: true },
        { id: 3, ans: "To serve static files", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new user in Django's authentication system?",
      options: [
        { id: 0, ans: "python manage.py create_user", isCorrect: true },
        { id: 1, ans: "python create_user.py", isCorrect: false },
        { id: 2, ans: "python manage.py add_user", isCorrect: false },
        { id: 3, ans: "python add_user.py", isCorrect: false }
      ]
    },
    {
      question: "How do you log out a user in Django?",
      options: [
        { id: 0, ans: "By redirecting the user to the login page", isCorrect: false },
        { id: 1, ans: "By calling the logout() function in the view", isCorrect: true },
        { id: 2, ans: "By deleting the user's session data", isCorrect: false },
        { id: 3, ans: "By clearing the user's cookies", isCorrect: false }
      ]
    }
  ],

  //Ruby
   [
    {
      question: "What is Ruby?",
      options: [
        { id: 0, ans: "A web development framework", isCorrect: false },
        { id: 1, ans: "A programming language known for its simplicity and productivity", isCorrect: true },
        { id: 2, ans: "A database management system", isCorrect: false },
        { id: 3, ans: "A front-end JavaScript library", isCorrect: false },
      ],
    },
    {
      question: "How do you define a variable in Ruby?",
      options: [
        { id: 0, ans: "var variable_name = value;", isCorrect: false },
        { id: 1, ans: "variable_name = value;", isCorrect: true },
        { id: 2, ans: "let variable_name = value;", isCorrect: false },
        { id: 3, ans: "def variable_name = value;", isCorrect: false },
      ],
    },
    {
      question: "What is the output of puts \"Hello, #{name}\" if name = \"John\"?",
      options: [
        { id: 0, ans: "Hello, name", isCorrect: false },
        { id: 1, ans: "Hello, \"name\"", isCorrect: false },
        { id: 2, ans: "Hello, #{name}", isCorrect: false },
        { id: 3, ans: "Hello, John", isCorrect: true },
      ],
    },
    {
      question: "How do you create a new array in Ruby?",
      options: [
        { id: 0, ans: "array = new Array()", isCorrect: false },
        { id: 1, ans: "array = []", isCorrect: true },
        { id: 2, ans: "array = Array.new()", isCorrect: false },
        { id: 3, ans: "array = new []", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of the each method in Ruby?",
      options: [
        { id: 0, ans: "To iterate over elements in an array or hash", isCorrect: true },
        { id: 1, ans: "To add elements to an array", isCorrect: false },
        { id: 2, ans: "To sort elements in an array", isCorrect: false },
        { id: 3, ans: "To remove elements from an array", isCorrect: false },
      ],
    },
    {
      question: "How do you define a method in Ruby?",
      options: [
        { id: 0, ans: "method my_method { }", isCorrect: false },
        { id: 1, ans: "def my_method { }", isCorrect: false },
        { id: 2, ans: "function my_method { }", isCorrect: false },
        { id: 3, ans: "def my_method; end", isCorrect: true },
      ],
    },
    {
      question: "What does the attr_accessor method do in a Ruby class?",
      options: [
        { id: 0, ans: "It creates getter and setter methods for instance variables", isCorrect: true },
        { id: 1, ans: "It creates private methods for instance variables", isCorrect: false },
        { id: 2, ans: "It defines class-level variables", isCorrect: false },
        { id: 3, ans: "It declares a constant variable", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of the times method in Ruby?",
      options: [
        { id: 0, ans: "To multiply two numbers", isCorrect: false },
        { id: 1, ans: "To perform a block of code a specified number of times", isCorrect: true },
        { id: 2, ans: "To add elements to an array", isCorrect: false },
        { id: 3, ans: "To subtract two numbers", isCorrect: false },
      ],
    },
    {
      question: "What is the difference between puts and print in Ruby?",
      options: [
        { id: 0, ans: "There is no difference, they can be used interchangeably", isCorrect: false },
        { id: 1, ans: "puts prints a new line after the output, while print does not", isCorrect: true },
        { id: 2, ans: "print prints a new line after the output, while puts does not", isCorrect: false },
        { id: 3, ans: "print prints the output as a string, while puts converts it to an integer", isCorrect: false },
      ],
    },
    {
      question: "How do you add elements to an array in Ruby?",
      options: [
        { id: 0, ans: "array.add(element)", isCorrect: false },
        { id: 1, ans: "array.insert(element)", isCorrect: false },
        { id: 2, ans: "array.push(element)", isCorrect: true },
        { id: 3, ans: "array.append(element)", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of the select method in Ruby?",
      options: [
        { id: 0, ans: "To perform a block of code a specified number of times", isCorrect: false },
        { id: 1, ans: "To filter elements in an array or hash based on a condition", isCorrect: true },
        { id: 2, ans: "To add elements to an array", isCorrect: false },
        { id: 3, ans: "To iterate over elements in an array or hash", isCorrect: false },
      ],
    },
    {
      question: "What is a symbol in Ruby?",
      options: [
        { id: 0, ans: "A unique identifier for a method", isCorrect: true },
        { id: 1, ans: "A data type used to store text", isCorrect: false },
        { id: 2, ans: "A block of code that can be assigned to a variable", isCorrect: false },
        { id: 3, ans: "A constant variable", isCorrect: false },
      ],
    },
    {
      question: "How do you define a class in Ruby?",
      options: [
        { id: 0, ans: "class MyClass { }", isCorrect: false },
        { id: 1, ans: "def class MyClass; end", isCorrect: false },
        { id: 2, ans: "class MyClass; end", isCorrect: true },
        { id: 3, ans: "def MyClass { }", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of the each_key method in Ruby?",
      options: [
        { id: 0, ans: "To iterate over keys in a hash", isCorrect: true },
        { id: 1, ans: "To iterate over values in a hash", isCorrect: false },
        { id: 2, ans: "To iterate over both keys and values in a hash", isCorrect: false },
        { id: 3, ans: "To add keys to a hash", isCorrect: false },
      ],
    },
    {
      question: "How do you check if a key exists in a hash in Ruby?",
      options: [
        { id: 0, ans: "hash.contains?(key)", isCorrect: false },
        { id: 1, ans: "hash.key?(key)", isCorrect: true },
        { id: 2, ans: "hash.exists?(key)", isCorrect: false },
        { id: 3, ans: "hash.include?(key)", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of the module keyword in Ruby?",
      options: [
        { id: 0, ans: "To define a class with specific behavior", isCorrect: false },
        { id: 1, ans: "To define a constant variable", isCorrect: false },
        { id: 2, ans: "To define a data structure", isCorrect: false },
        { id: 3, ans: "To create a namespace for methods and constants", isCorrect: true },
      ],
    },
    {
      question: "What is the output of the following expression: \"hello\" + 5.to_s?",
      options: [
        { id: 0, ans: "hello5", isCorrect: true },
        { id: 1, ans: "hello 5", isCorrect: false },
        { id: 2, ans: "hello5.0", isCorrect: false },
        { id: 3, ans: "Error: cannot convert Fixnum to String", isCorrect: false },
      ],
    },
  ],

  //Supabase
  [
    {
      question: "What is Supabase?",
      options: [
        { id: 0, ans: "A front-end JavaScript library", isCorrect: false },
        { id: 1, ans: "A cloud-based database management system", isCorrect: false },
        { id: 2, ans: "A web development framework", isCorrect: false },
        { id: 3, ans: "An open-source alternative to Firebase", isCorrect: true }
      ]
    },
    {
      question: "Which database does Supabase use by default?",
      options: [
        { id: 0, ans: "MySQL", isCorrect: false },
        { id: 1, ans: "PostgreSQL", isCorrect: true },
        { id: 2, ans: "MongoDB", isCorrect: false },
        { id: 3, ans: "SQLite", isCorrect: false }
      ]
    },
    {
      question: "What is the primary authentication method provided by Supabase?",
      options: [
        { id: 0, ans: "OAuth", isCorrect: false },
        { id: 1, ans: "API keys", isCorrect: false },
        { id: 2, ans: "JWT (JSON Web Tokens)", isCorrect: true },
        { id: 3, ans: "Username and password", isCorrect: false }
      ]
    },
    {
      question: "How do you interact with Supabase database using API?",
      options: [
        { id: 0, ans: "Using GraphQL queries", isCorrect: false },
        { id: 1, ans: "Using SQL queries", isCorrect: false },
        { id: 2, ans: "Using RESTful endpoints", isCorrect: true },
        { id: 3, ans: "Using WebSocket connections", isCorrect: false }
      ]
    },
    {
      question: "What is Supabase Realtime subscription?",
      options: [
        { id: 0, ans: "A way to receive real-time updates via WebSocket connections", isCorrect: true },
        { id: 1, ans: "A method for subscribing to external data sources", isCorrect: false },
        { id: 2, ans: "A feature for caching data on the client-side", isCorrect: false },
        { id: 3, ans: "A service for managing scheduled tasks", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Supabase Realtime?",
      options: [
        { id: 0, ans: "To provide real-time chat functionality", isCorrect: false },
        { id: 1, ans: "To send real-time notifications to users", isCorrect: false },
        { id: 2, ans: "To synchronize data changes with connected clients in real-time", isCorrect: true },
        { id: 3, ans: "To create real-time analytics dashboards", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new table in a Supabase database?",
      options: [
        { id: 0, ans: "Using the Supabase dashboard only", isCorrect: false },
        { id: 1, ans: "Using SQL queries only", isCorrect: false },
        { id: 2, ans: "Using RESTful API only", isCorrect: false },
        { id: 3, ans: "Using either the Supabase dashboard or SQL queries", isCorrect: true }
      ]
    },
    {
      question: "What is the purpose of the Supabase Storage feature?",
      options: [
        { id: 0, ans: "To store files and media in the cloud", isCorrect: true },
        { id: 1, ans: "To provide additional database storage", isCorrect: false },
        { id: 2, ans: "To compress and optimize data storage", isCorrect: false },
        { id: 3, ans: "To encrypt data in the database", isCorrect: false }
      ]
    },
    {
      question: "How do you perform user authentication using Supabase Auth?",
      options: [
        { id: 0, ans: "By directly querying the database for user credentials", isCorrect: false },
        { id: 1, ans: "By sending authentication requests to the Supabase API", isCorrect: true },
        { id: 2, ans: "By using OAuth tokens from external providers", isCorrect: false },
        { id: 3, ans: "By creating user profiles in the Supabase dashboard", isCorrect: false }
      ]
    },
    {
      question: "What is Supabase Client?",
      options: [
        { id: 0, ans: "A command-line tool for managing Supabase resources", isCorrect: false },
        { id: 1, ans: "A browser-based interface to access the Supabase database", isCorrect: false },
        { id: 2, ans: "A JavaScript library for interacting with Supabase services on the client-side", isCorrect: true },
        { id: 3, ans: "A mobile app for monitoring Supabase database performance", isCorrect: false }
      ]
    },
    {
      question: "How do you query the database using Supabase Client?",
      options: [
        { id: 0, ans: "Using GraphQL queries", isCorrect: false },
        { id: 1, ans: "Using RESTful endpoints", isCorrect: false },
        { id: 2, ans: "Using SQL queries", isCorrect: true },
        { id: 3, ans: "Using WebSocket connections", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the Supabase on method in Supabase Realtime?",
      options: [
        { id: 0, ans: "To trigger events when a user logs in", isCorrect: false },
        { id: 1, ans: "To listen for real-time updates from the database", isCorrect: true },
        { id: 2, ans: "To perform server-side actions in response to a client request", isCorrect: false },
        { id: 3, ans: "To generate a custom API endpoint", isCorrect: false }
      ]
    },
    {
      question: "How do you perform a JOIN operation in a Supabase query?",
      options: [
        { id: 0, ans: "Supabase does not support JOIN operations", isCorrect: false },
        { id: 1, ans: "Using the join method in Supabase Client", isCorrect: false },
        { id: 2, ans: "By executing raw SQL queries with JOIN clauses", isCorrect: true },
        { id: 3, ans: "By performing multiple queries and merging the results in the client", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the Supabase upsert method in Supabase Client?",
      options: [
        { id: 0, ans: "To update existing records in the database", isCorrect: false },
        { id: 1, ans: "To insert new records into the database", isCorrect: false },
        { id: 2, ans: "To perform an atomic 'upsert' operation (insert or update if already exists)", isCorrect: true },
        { id: 3, ans: "To delete records from the database", isCorrect: false }
      ]
    },
    {
      question: "How do you handle errors when making requests to Supabase API?",
      options: [
        { id: 0, ans: "Supabase API automatically handles errors and retries failed requests", isCorrect: false },
        { id: 1, ans: "By using try-catch blocks to handle exceptions in your code", isCorrect: true },
        { id: 2, ans: "By using the error event listener in Supabase Client", isCorrect: false },
        { id: 3, ans: "By sending an error report to Supabase support", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the onAuthStateChange method in Supabase Client?",
      options: [
        { id: 0, ans: "To handle changes in the database schema", isCorrect: false },
        { id: 1, ans: "To listen for changes in user authentication state", isCorrect: true },
        { id: 2, ans: "To synchronize data with external authentication providers", isCorrect: false },
        { id: 3, ans: "To manage authentication tokens for secure API calls", isCorrect: false }
      ]
    },
    {
      question: "How do you perform a transaction in Supabase?",
      options: [
        { id: 0, ans: "Supabase does not support transactions", isCorrect: false },
        { id: 1, ans: "By using the transaction method in Supabase Client", isCorrect: true },
        { id: 2, ans: "By sending multiple API requests in sequence", isCorrect: false },
        { id: 3, ans: "By creating a custom stored procedure in the database", isCorrect: false }
      ]
    },
    {
      question: "What is Supabase Realtime subscription?",
      options: [
        { id: 0, ans: "A way to receive real-time updates via WebSocket connections", isCorrect: true },
        { id: 1, ans: "A method for subscribing to external data sources", isCorrect: false },
        { id: 2, ans: "A feature for caching data on the client-side", isCorrect: false },
        { id: 3, ans: "A service for managing scheduled tasks", isCorrect: false }
      ]
    }
  ],

  //CockroachDB
  [
    {
      question: "What is CockroachDB?",
      options: [
        { id: 0, ans: "A cloud-based database management system", isCorrect: false },
        { id: 1, ans: "A relational database management system", isCorrect: false },
        { id: 2, ans: "A distributed SQL database", isCorrect: true },
        { id: 3, ans: "A NoSQL database", isCorrect: false }
      ]
    },
    {
      question: "What is the architecture of CockroachDB?",
      options: [
        { id: 0, ans: "Master-slave replication", isCorrect: false },
        { id: 1, ans: "Sharded architecture", isCorrect: false },
        { id: 2, ans: "Single-node architecture", isCorrect: false },
        { id: 3, ans: "Peer-to-peer replication", isCorrect: true }
      ]
    },
    {
      question: "How does CockroachDB achieve high availability and fault tolerance?",
      options: [
        { id: 0, ans: "Using RAID storage", isCorrect: false },
        { id: 1, ans: "By replicating data across multiple nodes", isCorrect: true },
        { id: 2, ans: "By compressing data in the database", isCorrect: false },
        { id: 3, ans: "By using in-memory caching", isCorrect: false }
      ]
    },
    {
      question: "Which SQL dialect does CockroachDB support?",
      options: [
        { id: 0, ans: "Only MySQL", isCorrect: false },
        { id: 1, ans: "Only PostgreSQL", isCorrect: true },
        { id: 2, ans: "Only Oracle", isCorrect: false },
        { id: 3, ans: "PostgreSQL and MySQL", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the SERIAL data type in CockroachDB?",
      options: [
        { id: 0, ans: "To store large binary data", isCorrect: false },
        { id: 1, ans: "To store a sequence number that increments automatically", isCorrect: true },
        { id: 2, ans: "To store geospatial data", isCorrect: false },
        { id: 3, ans: "To store date and time values", isCorrect: false }
      ]
    },
    {
      question: "How do you perform a JOIN operation in CockroachDB?",
      options: [
        { id: 0, ans: "CockroachDB does not support JOIN operations", isCorrect: false },
        { id: 1, ans: "By using the JOIN keyword in SQL queries", isCorrect: true },
        { id: 2, ans: "By using the link method in CockroachDB", isCorrect: false },
        { id: 3, ans: "By performing multiple queries and combining the results in the client", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the INDEX in CockroachDB?",
      options: [
        { id: 0, ans: "To enforce constraints on data integrity", isCorrect: false },
        { id: 1, ans: "To organize data in a specific order", isCorrect: false },
        { id: 2, ans: "To encrypt data in the database", isCorrect: false },
        { id: 3, ans: "To speed up data retrieval by creating a data structure for faster access", isCorrect: true }
      ]
    },
    {
      question: "How do you create a new database in CockroachDB?",
      options: [
        { id: 0, ans: "Using the CockroachDB dashboard only", isCorrect: false },
        { id: 1, ans: "By executing a SQL query with the CREATE DATABASE statement", isCorrect: true },
        { id: 2, ans: "By sending a POST request to the CockroachDB API", isCorrect: false },
        { id: 3, ans: "By using the CockroachDB CLI tool", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the UPSERT statement in CockroachDB?",
      options: [
        { id: 0, ans: "To update an existing row in a table", isCorrect: false },
        { id: 1, ans: "To insert a new row into a table", isCorrect: false },
        { id: 2, ans: "To insert a new row or update if it already exists (insert or update)", isCorrect: true },
        { id: 3, ans: "To delete a row from a table", isCorrect: false }
      ]
    },
    {
      question: "How do you perform data backups in CockroachDB?",
      options: [
        { id: 0, ans: "CockroachDB automatically takes regular backups", isCorrect: true },
        { id: 1, ans: "By using the BACKUP statement in SQL queries", isCorrect: false },
        { id: 2, ans: "By creating a cron job to take periodic backups", isCorrect: false },
        { id: 3, ans: "By exporting data to a CSV file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the DISTINCT keyword in CockroachDB?",
      options: [
        { id: 0, ans: "To remove duplicate rows from the result set", isCorrect: true },
        { id: 1, ans: "To sort the result set in ascending order", isCorrect: false },
        { id: 2, ans: "To filter the result set based on a condition", isCorrect: false },
        { id: 3, ans: "To count the number of rows in the result set", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new user in CockroachDB?",
      options: [
        { id: 0, ans: "By executing a SQL query with the CREATE USER statement", isCorrect: true },
        { id: 1, ans: "By using the CockroachDB dashboard only", isCorrect: false },
        { id: 2, ans: "By sending a POST request to the CockroachDB API", isCorrect: false },
        { id: 3, ans: "By using the CockroachDB CLI tool", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the REVOKE statement in CockroachDB?",
      options: [
        { id: 0, ans: "To remove a user's access privileges", isCorrect: true },
        { id: 1, ans: "To add a user to a role", isCorrect: false },
        { id: 2, ans: "To create a new role in the database", isCorrect: false },
        { id: 3, ans: "To grant additional privileges to a user", isCorrect: false }
      ]
    },
    {
      question: "How do you perform data encryption in CockroachDB?",
      options: [
        { id: 0, ans: "CockroachDB automatically encrypts all data by default", isCorrect: false },
        { id: 1, ans: "By using the ENCRYPT keyword in SQL queries", isCorrect: false },
        { id: 2, ans: "By enabling encryption settings in the CockroachDB configuration", isCorrect: true },
        { id: 3, ans: "By using external encryption tools on top of CockroachDB", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the LIMIT clause in CockroachDB?",
      options: [
        { id: 0, ans: "To specify the number of nodes in the CockroachDB cluster", isCorrect: false },
        { id: 1, ans: "To limit the number of rows returned by a SQL query", isCorrect: true },
        { id: 2, ans: "To define the maximum size of a CockroachDB table", isCorrect: false },
        { id: 3, ans: "To restrict the number of queries that can be executed concurrently", isCorrect: false }
      ]
    },
    {
      question: "How do you perform data updates in CockroachDB?",
      options: [
        { id: 0, ans: "Using the CockroachDB dashboard only", isCorrect: false },
        { id: 1, ans: "By executing SQL queries with the UPDATE statement", isCorrect: true },
        { id: 2, ans: "By sending a POST request to the CockroachDB API", isCorrect: false },
        { id: 3, ans: "By using the CockroachDB CLI tool", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the TRANSACTION keyword in CockroachDB?",
      options: [
        { id: 0, ans: "To start a new transaction block in a SQL query", isCorrect: true },
        { id: 1, ans: "To execute a query as a single, atomic operation", isCorrect: false },
        { id: 2, ans: "To manage the configuration settings of a CockroachDB cluster", isCorrect: false },
        { id: 3, ans: "To control the replication factor of data in CockroachDB", isCorrect: false }
      ]
    }
  ],

  //PostgreSQL
  [
    {
      question: "What is PostgreSQL?",
      options: [
        { id: 0, ans: "A cloud-based database management system", isCorrect: false },
        { id: 1, ans: "A NoSQL database", isCorrect: false },
        { id: 2, ans: "An open-source relational database management system", isCorrect: true },
        { id: 3, ans: "A front-end JavaScript library", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new database in PostgreSQL?",
      options: [
        { id: 0, ans: "CREATE DATABASE new_database;", isCorrect: true },
        { id: 1, ans: "new_database = CREATE DATABASE;", isCorrect: false },
        { id: 2, ans: "DATABASE new_database;", isCorrect: false },
        { id: 3, ans: "DATABASE = new_database;", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the SELECT statement in PostgreSQL?",
      options: [
        { id: 0, ans: "To insert new data into a table", isCorrect: false },
        { id: 1, ans: "To update existing data in a table", isCorrect: false },
        { id: 2, ans: "To query and retrieve data from a table", isCorrect: true },
        { id: 3, ans: "To delete data from a table", isCorrect: false }
      ]
    },
    {
      question: "How do you insert data into a table in PostgreSQL?",
      options: [
        { id: 0, ans: "INSERT INTO table_name (column1, column2) VALUES (value1, value2);", isCorrect: true },
        { id: 1, ans: "INSERT VALUES (table_name, column1, column2, value1, value2);", isCorrect: false },
        { id: 2, ans: "ADD INTO table_name (column1, column2) VALUES (value1, value2);", isCorrect: false },
        { id: 3, ans: "ADD VALUES (table_name, column1, column2, value1, value2);", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the WHERE clause in PostgreSQL?",
      options: [
        { id: 0, ans: "To specify the order of the result set", isCorrect: false },
        { id: 1, ans: "To group rows based on a condition", isCorrect: false },
        { id: 2, ans: "To filter rows based on a condition", isCorrect: true },
        { id: 3, ans: "To perform mathematical calculations on columns", isCorrect: false }
      ]
    },
    {
      question: "How do you update existing data in a table in PostgreSQL?",
      options: [
        { id: 0, ans: "UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;", isCorrect: true },
        { id: 1, ans: "SET table_name (column1 = value1, column2 = value2) WHERE condition;", isCorrect: false },
        { id: 2, ans: "ALTER table_name UPDATE column1 = value1, column2 = value2 WHERE condition;", isCorrect: false },
        { id: 3, ans: "UPDATE table_name WHERE column1 = value1, column2 = value2;", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the ORDER BY clause in PostgreSQL?",
      options: [
        { id: 0, ans: "To specify the columns to be indexed for faster access", isCorrect: false },
        { id: 1, ans: "To group rows based on a condition", isCorrect: false },
        { id: 2, ans: "To specify the order of the result set", isCorrect: true },
        { id: 3, ans: "To filter rows based on a condition", isCorrect: false }
      ]
    },
    {
      question: "How do you delete data from a table in PostgreSQL?",
      options: [
        { id: 0, ans: "DELETE FROM table_name WHERE condition;", isCorrect: true },
        { id: 1, ans: "REMOVE FROM table_name WHERE condition;", isCorrect: false },
        { id: 2, ans: "ERASE FROM table_name WHERE condition;", isCorrect: false },
        { id: 3, ans: "CLEAR FROM table_name WHERE condition;", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the GROUP BY clause in PostgreSQL?",
      options: [
        { id: 0, ans: "To filter rows based on a condition", isCorrect: false },
        { id: 1, ans: "To specify the order of the result set", isCorrect: false },
        { id: 2, ans: "To group rows based on a condition", isCorrect: true },
        { id: 3, ans: "To perform mathematical calculations on columns", isCorrect: false }
      ]
    },
    {
      question: "How do you perform a JOIN operation in PostgreSQL?",
      options: [
        { id: 0, ans: "JOIN table1, table2 ON condition;", isCorrect: false },
        { id: 1, ans: "SELECT FROM table1 JOIN table2 ON condition;", isCorrect: true },
        { id: 2, ans: "FROM table1, table2 JOIN condition;", isCorrect: false },
        { id: 3, ans: "SELECT FROM table1, table2 WHERE condition;", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the COUNT function in PostgreSQL?",
      options: [
        { id: 0, ans: "To calculate the average value of a column", isCorrect: false },
        { id: 1, ans: "To count the total number of rows in a table", isCorrect: true },
        { id: 2, ans: "To sum up the values of a column", isCorrect: false },
        { id: 3, ans: "To find the highest value in a column", isCorrect: false }
      ]
    },
    {
      question: "How do you create an index on a column in PostgreSQL?",
      options: [
        { id: 0, ans: "INDEX column_name ON table_name;", isCorrect: false },
        { id: 1, ans: "CREATE INDEX index_name ON table_name (column_name);", isCorrect: true },
        { id: 2, ans: "ADD INDEX index_name ON table_name (column_name);", isCorrect: false },
        { id: 3, ans: "CREATE INDEX ON table_name (column_name);", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the DISTINCT keyword in PostgreSQL?",
      options: [
        { id: 0, ans: "To remove duplicate rows from the result set", isCorrect: true },
        { id: 1, ans: "To filter the result set based on a condition", isCorrect: false },
        { id: 2, ans: "To perform a JOIN operation on two tables", isCorrect: false },
        { id: 3, ans: "To perform mathematical calculations on columns", isCorrect: false }
      ]
    },
    {
      question: "How do you add a new column to an existing table in PostgreSQL?",
      options: [
        { id: 0, ans: "ALTER TABLE table_name ADD COLUMN new_column_name datatype;", isCorrect: true },
        { id: 1, ans: "ADD COLUMN new_column_name datatype TO table_name;", isCorrect: false },
        { id: 2, ans: "ALTER table_name ADD new_column_name datatype;", isCorrect: false },
        { id: 3, ans: "ADD new_column_name datatype TO table_name;", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the HAVING clause in PostgreSQL?",
      options: [
        { id: 0, ans: "To group rows based on a condition", isCorrect: false },
        { id: 1, ans: "To filter rows based on a condition", isCorrect: true },
        { id: 2, ans: "To specify the order of the result set", isCorrect: false },
        { id: 3, ans: "To filter the result set based on a condition after the GROUP BY clause", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new user in PostgreSQL?",
      options: [
        { id: 0, ans: "CREATE USER new_user WITH PASSWORD 'password';", isCorrect: true },
        { id: 1, ans: "ADD USER new_user PASSWORD 'password';", isCorrect: false },
        { id: 2, ans: "CREATE new_user USER WITH PASSWORD 'password';", isCorrect: false },
        { id: 3, ans: "ADD new_user USER PASSWORD 'password';", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the TRUNCATE statement in PostgreSQL?",
      options: [
        { id: 0, ans: "To remove a column from a table", isCorrect: false },
        { id: 1, ans: "To delete all data from a table", isCorrect: true },
        { id: 2, ans: "To update existing data in a table", isCorrect: false },
        { id: 3, ans: "To add a new column to a table", isCorrect: false }
      ]
    }
  ],

  // Laravel
  [
    {
      question: "What is Laravel?",
      options: [
        { id: 0, ans: "A front-end JavaScript library", isCorrect: false },
        { id: 1, ans: "A cloud-based database management system", isCorrect: false },
        { id: 2, ans: "A web development framework for PHP", isCorrect: true },
        { id: 3, ans: "A NoSQL database", isCorrect: false }
      ]
    },
    {
      question: "Which command is used to create a new Laravel project?",
      options: [
        { id: 0, ans: "laravel new project_name", isCorrect: true },
        { id: 1, ans: "php artisan new project_name", isCorrect: false },
        { id: 2, ans: "create laravel project_name", isCorrect: false },
        { id: 3, ans: "new laravel project_name", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Composer in Laravel?",
      options: [
        { id: 0, ans: "To manage front-end assets", isCorrect: false },
        { id: 1, ans: "To manage database migrations", isCorrect: false },
        { id: 2, ans: "To manage PHP dependencies and packages", isCorrect: true },
        { id: 3, ans: "To handle authentication", isCorrect: false }
      ]
    },
    {
      question: "How do you define a route in Laravel?",
      options: [
        { id: 0, ans: "Route::add('url', 'Controller@method');", isCorrect: false },
        { id: 1, ans: "add_route('url', 'Controller@method');", isCorrect: false },
        { id: 2, ans: "Route::get('url', 'Controller@method');", isCorrect: true },
        { id: 3, ans: "url('url', 'Controller@method');", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of Eloquent in Laravel?",
      options: [
        { id: 0, ans: "To handle user authentication", isCorrect: false },
        { id: 1, ans: "To manage front-end assets", isCorrect: false },
        { id: 2, ans: "To interact with the database using ActiveRecord", isCorrect: true },
        { id: 3, ans: "To manage PHP dependencies and packages", isCorrect: false }
      ]
    },
    {
      question: "How do you define a migration in Laravel?",
      options: [
        { id: 0, ans: "create_migration('table_name');", isCorrect: false },
        { id: 1, ans: "Migration::add('table_name');", isCorrect: false },
        { id: 2, ans: "php artisan make:migration create_table_name", isCorrect: true },
        { id: 3, ans: "Migration::create('table_name');", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the artisan command in Laravel?",
      options: [
        { id: 0, ans: "To run unit tests", isCorrect: false },
        { id: 1, ans: "To generate boilerplate code for various components", isCorrect: true },
        { id: 2, ans: "To compile front-end assets", isCorrect: false },
        { id: 3, ans: "To interact with the Laravel console", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new controller in Laravel?",
      options: [
        { id: 0, ans: "php artisan make:controller MyController", isCorrect: true },
        { id: 1, ans: "php artisan new:controller MyController", isCorrect: false },
        { id: 2, ans: "make:controller MyController", isCorrect: false },
        { id: 3, ans: "new:controller MyController", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the CSRF protection in Laravel?",
      options: [
        { id: 0, ans: "To protect against SQL injection attacks", isCorrect: false },
        { id: 1, ans: "To prevent cross-site scripting (XSS) attacks", isCorrect: false },
        { id: 2, ans: "To prevent cross-site request forgery (CSRF) attacks", isCorrect: true },
        { id: 3, ans: "To secure database migrations", isCorrect: false }
      ]
    },
    {
      question: "How do you define a one-to-many relationship in Eloquent?",
      options: [
        { id: 0, ans: "belongsToMany()", isCorrect: false },
        { id: 1, ans: "hasOne()", isCorrect: false },
        { id: 2, ans: "hasMany()", isCorrect: true },
        { id: 3, ans: "belongsTo()", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the with method in Eloquent?",
      options: [
        { id: 0, ans: "To filter the result set", isCorrect: false },
        { id: 1, ans: "To eager load relationships", isCorrect: true },
        { id: 2, ans: "To sort the result set", isCorrect: false },
        { id: 3, ans: "To update records in the database", isCorrect: false }
      ]
    },
    {
      question: "How do you define a named route in Laravel?",
      options: [
        { id: 0, ans: "Route::url('name', 'Controller@method');", isCorrect: false },
        { id: 1, ans: "Route::named('name', 'Controller@method');", isCorrect: false },
        { id: 2, ans: "Route::get('name', 'Controller@method')->name('route_name');", isCorrect: true },
        { id: 3, ans: "Route::define('name', 'Controller@method');", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the middleware in Laravel routes?",
      options: [
        { id: 0, ans: "To handle errors and exceptions in the application", isCorrect: false },
        { id: 1, ans: "To handle authentication for specific routes", isCorrect: true },
        { id: 2, ans: "To compress and optimize front-end assets", isCorrect: false },
        { id: 3, ans: "To create custom routes for different HTTP methods", isCorrect: false }
      ]
    },
    {
      question: "How do you define a global middleware in Laravel?",
      options: [
        { id: 0, ans: "Add the middleware to the Kernel.php file", isCorrect: true },
        { id: 1, ans: "Register the middleware in the config/app.php file", isCorrect: false },
        { id: 2, ans: "Define the middleware in the .env file", isCorrect: false },
        { id: 3, ans: "Use the middleware method in the route definition", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the Blade template engine in Laravel?",
      options: [
        { id: 0, ans: "To handle authentication and user roles", isCorrect: false },
        { id: 1, ans: "To manage front-end assets", isCorrect: false },
        { id: 2, ans: "To define database migrations", isCorrect: false },
        { id: 3, ans: "To provide a simple and expressive syntax for creating views", isCorrect: true }
      ]
    },
    {
      question: "How do you access the current authenticated user in Laravel?",
      options: [
        { id: 0, ans: "Auth::current()", isCorrect: false },
        { id: 1, ans: "auth()->user()", isCorrect: true },
        { id: 2, ans: "User::current()", isCorrect: false },
        { id: 3, ans: "current_user()", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the request object in Laravel?",
      options: [
        { id: 0, ans: "To interact with the database using Eloquent", isCorrect: false },
        { id: 1, ans: "To handle HTTP requests and retrieve input data", isCorrect: true },
        { id: 2, ans: "To define routes and controllers", isCorrect: false },
        { id: 3, ans: "To manage front-end assets", isCorrect: false }
      ]
    }
  ],

  //Spring
  [
    {
      question: "What is Spring Framework?",
      options: [
        { id: 0, ans: "A cloud-based development platform", isCorrect: false },
        { id: 1, ans: "An open-source web development framework for PHP", isCorrect: false },
        { id: 2, ans: "A framework for building enterprise Java applications", isCorrect: true },
        { id: 3, ans: "A front-end JavaScript library", isCorrect: false }
      ]
    },
    {
      question: "What is the core container module in Spring Framework?",
      options: [
        { id: 0, ans: "Spring Boot", isCorrect: false },
        { id: 1, ans: "Spring Data", isCorrect: false },
        { id: 2, ans: "Spring MVC", isCorrect: false },
        { id: 3, ans: "Spring IoC (Inversion of Control) Container", isCorrect: true }
      ]
    },
    {
      question: "What is dependency injection in Spring?",
      options: [
        { id: 0, ans: "A design pattern used in frontend development", isCorrect: false },
        { id: 1, ans: "A technique to manage database connections in Spring applications", isCorrect: false },
        { id: 2, ans: "A way to inject dependencies into an object, reducing its responsibilities", isCorrect: true },
        { id: 3, ans: "A feature to handle authentication in Spring applications", isCorrect: false }
      ]
    },
    {
      question: "How do you define a bean in Spring?",
      options: [
        { id: 0, ans: "By using the @Bean annotation on a method in a @Configuration class", isCorrect: true },
        { id: 1, ans: "By using the @Component annotation on a class", isCorrect: false },
        { id: 2, ans: "By using the @Bean annotation on a class", isCorrect: false },
        { id: 3, ans: "By defining it in the application.properties file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the @Autowired annotation in Spring?",
      options: [
        { id: 0, ans: "To create a new instance of a bean", isCorrect: false },
        { id: 1, ans: "To define the constructor of a class", isCorrect: false },
        { id: 2, ans: "To inject dependencies automatically", isCorrect: true },
        { id: 3, ans: "To manage transactions in a Spring application", isCorrect: false }
      ]
    },
    {
      question: "What is the default scope of a Spring bean?",
      options: [
        { id: 0, ans: "Singleton", isCorrect: true },
        { id: 1, ans: "Prototype", isCorrect: false },
        { id: 2, ans: "Request", isCorrect: false },
        { id: 3, ans: "Session", isCorrect: false }
      ]
    },
    {
      question: "How do you enable component scanning in Spring?",
      options: [
        { id: 0, ans: "By using the @ComponentScan annotation on a method", isCorrect: false },
        { id: 1, ans: "By using the @ComponentScan annotation on a class", isCorrect: false },
        { id: 2, ans: "By using the @ComponentScan annotation on a package", isCorrect: true },
        { id: 3, ans: "By defining it in the application.properties file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the @Qualifier annotation in Spring?",
      options: [
        { id: 0, ans: "To specify the name of a bean", isCorrect: true },
        { id: 1, ans: "To specify the scope of a bean", isCorrect: false },
        { id: 2, ans: "To specify the type of a bean", isCorrect: false },
        { id: 3, ans: "To specify the constructor of a class", isCorrect: false }
      ]
    },
    {
      question: "What is the Spring Boot framework?",
      options: [
        { id: 0, ans: "A microservices framework based on Spring", isCorrect: false },
        { id: 1, ans: "A module for building web applications in Spring", isCorrect: false },
        { id: 2, ans: "A lightweight version of Spring for mobile applications", isCorrect: false },
        { id: 3, ans: "A framework for building standalone Spring applications with minimal configuration", isCorrect: true }
      ]
    },
    {
      question: "How do you enable auto-configuration in Spring Boot?",
      options: [
        { id: 0, ans: "By using the @AutoConfigure annotation on a class", isCorrect: false },
        { id: 1, ans: "By using the @EnableAutoConfiguration annotation on a class", isCorrect: true },
        { id: 2, ans: "By defining it in the application.properties file", isCorrect: false },
        { id: 3, ans: "By using the @Configuration annotation on a class", isCorrect: false }
      ]
    },
    {
      question: "What is Spring Data JPA?",
      options: [
        { id: 0, ans: "A library for handling front-end data in Spring applications", isCorrect: false },
        { id: 1, ans: "A module for building microservices in Spring", isCorrect: false },
        { id: 2, ans: "A data access framework that provides an abstraction over JPA (Java Persistence API)", isCorrect: true },
        { id: 3, ans: "A module for handling XML data in Spring applications", isCorrect: false }
      ]
    },
    {
      question: "How do you define a JPA repository interface in Spring Data JPA?",
      options: [
        { id: 0, ans: "By using the @Repository annotation on an interface", isCorrect: false },
        { id: 1, ans: "By using the @Repository annotation on a class", isCorrect: false },
        { id: 2, ans: "By using the @JpaRepository annotation on an interface", isCorrect: true },
        { id: 3, ans: "By using the @JpaRepository annotation on a class", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the @Transactional annotation in Spring?",
      options: [
        { id: 0, ans: "To specify the transaction isolation level", isCorrect: false },
        { id: 1, ans: "To enable auto-configuration of transactions", isCorrect: true },
        { id: 2, ans: "To define the transaction propagation behavior", isCorrect: false },
        { id: 3, ans: "To specify the rollback rules for transactions", isCorrect: false }
      ]
    },
    {
      question: "How do you handle exceptions in Spring?",
      options: [
        { id: 0, ans: "By using the try-catch block in the controller methods", isCorrect: false },
        { id: 1, ans: "By using the @ExceptionHandler annotation on a method", isCorrect: true },
        { id: 2, ans: "By defining it in the application.properties file", isCorrect: false },
        { id: 3, ans: "By using the @ControllerAdvice annotation on a class", isCorrect: false }
      ]
    },
    {
      question: "What is Spring Security?",
      options: [
        { id: 0, ans: "A module for handling front-end security in Spring applications", isCorrect: false },
        { id: 1, ans: "A microservices framework based on Spring", isCorrect: false },
        { id: 2, ans: "A framework for building standalone Spring applications with minimal configuration", isCorrect: false },
        { id: 3, ans: "A module for handling security and authentication in Spring applications", isCorrect: true }
      ]
    },
    {
      question: "How do you define a custom authentication provider in Spring Security?",
      options: [
        { id: 0, ans: "By using the @AuthenticationProvider annotation on a method", isCorrect: false },
        { id: 1, ans: "By defining it in the application.properties file", isCorrect: false },
        { id: 2, ans: "By using the @Configuration annotation on a class", isCorrect: false },
        { id: 3, ans: "By implementing the AuthenticationProvider interface", isCorrect: true }
      ]
    },
    {
      question: "What is the purpose of the @Secured annotation in Spring Security?",
      options: [
        { id: 0, ans: "To specify the security roles required to access a method", isCorrect: true },
        { id: 1, ans: "To define the security constraints in the application.properties file", isCorrect: false },
        { id: 2, ans: "To enable security auto-configuration", isCorrect: false },
        { id: 3, ans: "To manage user roles in the application", isCorrect: false }
      ]
    }
  ],

  //NodeJS
  [
    {
      question: "What is Node.js?",
      options: [
        { id: 0, ans: "A front-end JavaScript library", isCorrect: false },
        { id: 1, ans: "A cloud-based development platform", isCorrect: false },
        { id: 2, ans: "A runtime environment for executing JavaScript code outside the browser", isCorrect: true },
        { id: 3, ans: "A NoSQL database", isCorrect: false }
      ]
    },
    {
      question: "How do you initialize a new Node.js project?",
      options: [
        { id: 0, ans: "node init", isCorrect: false },
        { id: 1, ans: "npm init", isCorrect: true },
        { id: 2, ans: "init node", isCorrect: false },
        { id: 3, ans: "new node project", isCorrect: false }
      ]
    },
    {
      question: "What is the Node Package Manager (npm)?",
      options: [
        { id: 0, ans: "A package manager for front-end assets", isCorrect: false },
        { id: 1, ans: "A cloud-based database management system", isCorrect: false },
        { id: 2, ans: "A tool for managing and sharing Node.js packages", isCorrect: true },
        { id: 3, ans: "A framework for building web applications in Node.js", isCorrect: false }
      ]
    },
    {
      question: "How do you install a Node.js package globally?",
      options: [
        { id: 0, ans: "npm install package_name", isCorrect: false },
        { id: 1, ans: "npm install -g package_name", isCorrect: true },
        { id: 2, ans: "npm -g package_name", isCorrect: false },
        { id: 3, ans: "install -g package_name", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the require function in Node.js?",
      options: [
        { id: 0, ans: "To create a new instance of a class", isCorrect: false },
        { id: 1, ans: "To include external modules and files", isCorrect: true },
        { id: 2, ans: "To define the main entry point of the application", isCorrect: false },
        { id: 3, ans: "To handle HTTP requests and responses", isCorrect: false }
      ]
    },
    {
      question: "How do you create a new HTTP server in Node.js?",
      options: [
        { id: 0, ans: "http.createServer((req, res) => {}).listen(3000);", isCorrect: true },
        { id: 1, ans: "createServer().listen(3000);", isCorrect: false },
        { id: 2, ans: "http.newServer((req, res) => {}).listen(3000);", isCorrect: false },
        { id: 3, ans: "new Server().listen(3000);", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the fs module in Node.js?",
      options: [
        { id: 0, ans: "To handle front-end assets", isCorrect: false },
        { id: 1, ans: "To create and manage databases", isCorrect: false },
        { id: 2, ans: "To handle file system operations", isCorrect: true },
        { id: 3, ans: "To manage HTTP requests and responses", isCorrect: false }
      ]
    },
    {
      question: "How do you read a file asynchronously in Node.js?",
      options: [
        { id: 0, ans: "fs.readFile('file.txt', 'utf8', (err, data) => {});", isCorrect: true },
        { id: 1, ans: "readFile('file.txt', 'utf8', (err, data) => {});", isCorrect: false },
        { id: 2, ans: "fs.read('file.txt', 'utf8', (err, data) => {});", isCorrect: false },
        { id: 3, ans: "read('file.txt', 'utf8', (err, data) => {});", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the path module in Node.js?",
      options: [
        { id: 0, ans: "To handle URL routing in web applications", isCorrect: false },
        { id: 1, ans: "To manage database connections", isCorrect: false },
        { id: 2, ans: "To handle and manipulate file paths", isCorrect: true },
        { id: 3, ans: "To perform mathematical calculations", isCorrect: false }
      ]
    },
    {
      question: "How do you install all the dependencies of a Node.js project listed in the package.json file?",
      options: [
        { id: 0, ans: "npm install", isCorrect: true },
        { id: 1, ans: "npm install dependencies", isCorrect: false },
        { id: 2, ans: "npm install package.json", isCorrect: false },
        { id: 3, ans: "npm init", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the process object in Node.js?",
      options: [
        { id: 0, ans: "To manage and execute JavaScript code", isCorrect: false },
        { id: 1, ans: "To handle HTTP requests and responses", isCorrect: false },
        { id: 2, ans: "To interact with the file system", isCorrect: false },
        { id: 3, ans: "To provide information about the current Node.js process", isCorrect: true }
      ]
    },
    {
      question: "How do you handle errors in Node.js?",
      options: [
        { id: 0, ans: "By using the try-catch block in the application code", isCorrect: true },
        { id: 1, ans: "By using the error event in the HTTP server", isCorrect: false },
        { id: 2, ans: "By defining error-handling middleware in Express.js", isCorrect: false },
        { id: 3, ans: "By configuring the onerror setting in the application.properties file", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the os module in Node.js?",
      options: [
        { id: 0, ans: "To handle operating system tasks", isCorrect: true },
        { id: 1, ans: "To manage HTTP requests and responses", isCorrect: false },
        { id: 2, ans: "To interact with the file system", isCorrect: false },
        { id: 3, ans: "To perform mathematical calculations", isCorrect: false }
      ]
    },
    {
      question: "How do you make an HTTP request to an external server in Node.js?",
      options: [
        { id: 0, ans: "http.request('http://example.com', (res) => {}).end();", isCorrect: false },
        { id: 1, ans: "request('http://example.com', (res) => {}).send();", isCorrect: false },
        { id: 2, ans: "http.get('http://example.com', (res) => {});", isCorrect: true },
        { id: 3, ans: "get('http://example.com', (res) => {}).end();", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the cluster module in Node.js?",
      options: [
        { id: 0, ans: "To create child processes", isCorrect: true },
        { id: 1, ans: "To manage database connections", isCorrect: false },
        { id: 2, ans: "To handle front-end assets", isCorrect: false },
        { id: 3, ans: "To perform cryptographic operations", isCorrect: false }
      ]
    },
    {
      question: "How do you install a specific version of a Node.js package using npm?",
      options: [
        { id: 0, ans: "npm install package_name@version", isCorrect: true },
        { id: 1, ans: "npm package_name@version install", isCorrect: false },
        { id: 2, ans: "npm package_name@version", isCorrect: false },
        { id: 3, ans: "install package_name@version", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the Buffer class in Node.js?",
      options: [
        { id: 0, ans: "To handle binary data", isCorrect: true },
        { id: 1, ans: "To manage front-end assets", isCorrect: false },
        { id: 2, ans: "To create and manage databases", isCorrect: false },
        { id: 3, ans: "To perform mathematical calculations", isCorrect: false }
      ]
    }
  ]




]

// ---------------------------


export function getQuizData_current(head: string) {

    switch (head) {

        // (~~~~~~~~~~~~~~~~~~~~~~) Web Developement ~~~~~~~~~~~~~~~~~~~~~~)


// ::::::::Frontend:::::::::::

        // Cases for frontend_basic_quiz

        case "HTML":
             return (frontend_basic_quiz[0]); 
             break;
        case "CSS":
             return (frontend_basic_quiz[1]);
              break;
        case "JavaScript":
             return (frontend_basic_quiz[2]); 
             break;
       
        // Cases for frontend_basic_quiz


        // Cases for frontend_intermediate_quiz

        case "ReactJS":
            return(frontend_intermediate_quiz[0]);
            break;
        case "Angular":
            return(frontend_intermediate_quiz[1]);
            break;
        case "jQuery":
            return(frontend_intermediate_quiz[2]);
            break;
        case "TypeScript":
            return(frontend_intermediate_quiz[3]);
            break;
        case "Bootstrap":
            return(frontend_intermediate_quiz[4]);
            break;

        // Cases for frontend_intermediate_quiz


         // Cases for frontend_advanced_quiz 
         
         case "ChakraUI":
            return (frontend_advanced_quiz[0]);
            break;
         case "VueJS":
            return (frontend_advanced_quiz[1]);
            break;
         case "NextJS":
            return (frontend_advanced_quiz[2]);
            break;
         case "Gatsby":
            return (frontend_advanced_quiz[3]);
            break;
         case "TailwindCSS":
            return (frontend_advanced_quiz[4]);
            break;
         case "ThreeJS":
            return (frontend_advanced_quiz[5]);
            break;
         case "MaterialUI":
            return (frontend_advanced_quiz[6]);
            break;


         // Cases for frontend_advanced_quiz



// ::::::::Backend:::::::::::

      // Cases for backend_basic_quiz
  
  case "MySQL":
    return (backend_basic_quiz[0]);
    break;
  case "Python":
    return (backend_basic_quiz[1]);
    break;
  case "JAVA":
    return (backend_basic_quiz[2]);
    break;
  case "PHP":
    return (backend_basic_quiz[3]);
    break;
  case "Firebase":
    return (backend_basic_quiz[4]);
    break;
  case "AdvancedJavaScript":
    return (backend_basic_quiz[5]);
    break;
  case "MongoDB":
    return (backend_basic_quiz[6]);
    break;
  // Cases for backend_basic_quiz
  

  // Cases for backend_advanced_quiz

  case "Django":
    return(backend_advanced_quiz[0]);
    break;
    case "Ruby":
    return(backend_advanced_quiz[1])
    break;
    case "Supabase":
    return(backend_advanced_quiz[2]);
    break;
    case "CockroachDB":
    return(backend_advanced_quiz[3]);
    break;
    case "PostgreSQL":
    return(backend_advanced_quiz[4]);
    break;
    case "Laravel":
    return(backend_advanced_quiz[5]);
    break;
    case "Spring":
    return(backend_advanced_quiz[6]);
    break;
    case "NodeJS":
    return(backend_advanced_quiz[7]);
    break;
  // Cases for backend_advanced_quiz
  
    }
}

