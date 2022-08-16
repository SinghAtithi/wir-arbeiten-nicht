let questions = [
    {
    numb: 1,
    question: "What is correct HTML for creating a hyperlink?",
    answer: "<a href='http://www.google.com'>Google</a>",
    options: [
      "&lta name='http://www.google.com'>Google&lt/a>",
      "&lta url='http://www.google.com'>Google&lt/a>",
      "&lta 'http://www.google.com'&lt/a>",
      "&lta href='http://www.google.com'>Google&lt/a>"
    ]
  },
  {
    numb: 2,
    question: "Which of these are all <table> elements?",
    answer: "<table><tr><td>",
    options: [
      "&lttable>&lttr>&lttt>",
      "&lttable>&lttr>&lttd>",
      "&ltthead>&ltbody>&lttr>",
      "&lttable>&lthead>&lttfoot>"
    ]
  },
  {
    numb: 3,
    question: "The HTML global attribute, \"cotenteditable\" is used to:",
    answer: "Specify whether the content of the string should be editable or not",
    options: [
      "Update content from the server",
      "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
      "Return the position of the first round occurrence of content inside a string",
      "Specify whether the content of the string should be editable or not"
    ]
  },
  {
    numb: 4,
    question: "What input type defines a slider control?",
    answer: "range",
    options: [
      "slider",
      "controls",
      "range",
      "search"
    ]
  },
  {
    numb: 5,
    question: "Which of the following property is used to control the repetition of an image in the background?",
    answer: "background-repeat",
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ]
  },
  {
    numb: 6,
    question: "Which of the following property of a table element controls the placement of the table caption?",
    answer: "caption-side",
    options: [
      "border-collapse",
      "border-spacing",
      "caption-side",
      "empty-cells"
    ]
  },
  {
    numb: 7,
    question: "Which of the following defines a measurement as percentage relative to another value, typically an enclosing element?",
    answer: "%",
    options: [
      "%",
      "cm",
      "em",
      "ex"
    ]
  },
  {
    numb: 8,
    question: "Which of the following property is used to underline, overline and strikethrough text?",
    answer: "text-decoration",
    options: [
      "text-indent",
      "text-align",
      "text-decoration",
      "text-transform"
    ]
  },
  {
    numb: 9,
    question: "Inside which HTML element do we put the Javascript?",
    answer: "<script>",
    options: [
      "&ltscript>",
      "&ltjs>",
      "&ltjavascript>",
      "&ltscripting>"
    ]
  },
  {
    numb: 10,
    question: "What is correct JavaScript syntax to change the content of the HTML element below?\n<p id=\"demo\">This is a demonstration.</p>",
    answer: "documents.getElementById(\"demo\").innerHTML = \"Hello World!\";",
    options: [
      "documents.getElementByName(\"p\").innerHTML = \"Hello World!\";",
      "documents.getElementById(\"demo\").innerHTML = \"Hello World!\";",
      "#demo.innerHTML = \"Hello World!\";",
      "documents.getElement(\"p\").innerHTML = \"Hello World!\";"
    ]
  },
  {
    numb: 11,
    question: "What is the correct way to write a JavaScript array?",
    answer: "var colors = [\"red\",\"green\",\"blue\"]",
    options: [
      "var colors = (1:\"red\",2:\"green\",3:\"blue\")",
      "var colors = \"red\",\"green\",\"blue\"",
      "var colors = [\"red\",\"green\",\"blue\"]",
      "var colors = 1=(\"red\"),2=(\"green\"),3=(\"blue\")"
    ]
  },
  {
    numb: 12,
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "onclick",
    options: [
      "onclick",
      "onchange",
      "onmouseclick",
      "ontap"
    ]
  },
  {
    numb: 13,
    question: "In which of the following React.js components are saved?",
    answer: "Inside the js/components/",
    options: [
      "Inside the js/components/",
      "Inside the vendor/components/",
      "Inside the external/components/",
      "Inside the vendor/"
    ]
  },
  {
    numb: 14,
    question: "What are the two ways to handle data in React?",
    answer: "State & Props",
    options: [
      "State & Props",
      "Services & Components",
      "State & Services",
      "State & Component"
    ]
  },
  {
    numb: 15,
    question: "Which of the following commands remove a single document that matches the condition that Author is Rajesh?",
    answer: "Both B & C",
    options: [
      "db.posts.removeOne({Author: \"Rajesh\"}, 1)",
      "db.posts.remove({Author: \"Rajesh\"}, 1)",
      "db.posts.remove({Author: \"Rajesh\"}, {justOne: true})",
      "Both B & C"
    ]
  },
  {
    numb: 16,
    question: "We can insert multiple documents in bulk using which of the following operations?",
    answer: "initializeUnorderedBulkOp",
    options: [
      "initializeUnorderedBulkOp",
      "initializeBulkOp",
      "initializeBulk",
      "initializeUnorderedBulk"
    ]
  },
  {
    numb: 17,
    question: "Which of the following is true about EventEmitter.on property?",
    answer: "on property is used to bind a function with the event",
    options: [
      "on property is used to fire event",
      "on property is used to bind a function with the event",
      "on property is used to locate an event handler",
      "None of the above"
    ]
  },
  {
    numb: 18,
    question: "Which of the following module is required for network specific operations?",
    answer: "net module",
    options: [
      "os module",
      "fs module",
      "net module",
      "None of the above"
    ]
  },
  {
    numb: 19,
    question: "Which of the following code can create a web server?",
    answer: "http.createServer(callback)",
    options: [
      "http.createServer(callback)",
      "http.createWebServer(callback)",
      "http.createHTTPServer(callback)",
      "None of the above"
    ]
  },
  {
    numb: 20,
    question: "How can we create a chainable route handlers for a route path in ExpressJs?",
    answer: "Using app.route()",
    options: [
      "Using app.route()",
      "Using app.routes()",
      "Using app.router()",
      "Using app.routing()"
    ]
  },
];
