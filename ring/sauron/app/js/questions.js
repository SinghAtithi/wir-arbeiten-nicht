// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: " Explain android activity life cycle?",
    answer: "OnCreate() −> onStart() −>onResume() −> onPause() −> onStop() −> onRestart() −> onDestroy()",
    options: [
      "onCreate() −> onStart() −> onActivityStarted() −> onResume() −> onPause() −> onStop() −> onActivityDistroy() −> onDestroy()",
      "OnCreate() −> onStart() −>onResume() −> onPause() −> onStop() −> onRestart() −> onDestroy()",
      "OnCreate() −> onStart() −> onPause() −> onResume() −> onStop() −> onDestroy()",
      "−>onResume()"
    ]
  },
  {
    numb: 2,
    question: "What is the difference between margin and padding in android layout?",
    answer: "Both A and B are correct",
    options: [
      "Margin is specifying the extra space left on all four sides in layout",
      "Padding is used to offset the content of a view by specific px or dp",
      "Both A and B are correct",
      "None of the above"
    ]
  },
  {
    numb: 3,
    question: "What is log message in android?",
    answer: "Log message is used to debug a program.",
    options: [
      "Log message is used to debug a program.",
      "Same as printf()",
      "Same as Toast()",
      "None of the above."
    ]
  },
  {
    numb: 4,
    question: "APK stands for -",
    answer: "Android Package Kit",
    options: [
      "Android Phone Kit",
      "Android Page Kit",
      "Android Package Kit",
      "None of the above"
    ]
  },
  {
    numb: 5,
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: [
      "Application Programming Interface",
      "Android Programming Interface",
      "Android Page Interface",
      "Application Page Interface"
    ]
  },
  {
    numb: 6,
    question: "Which of the following is the first callback method that is invoked by the system during an activity life-cycle?",
    answer: "onCreate() method",
    options: [
      "onClick() method",
      "onCreate() method",
      "onStart() method",
      "onRestart() method"
    ]
  },
  {
    numb: 7,
    question: "In which of the following tab an error is shown?",
    answer: "Logcat",
    options: [
      "CPU",
      "Memory",
      "ADB Logs",
      "Logcat"
    ]
  },
  {
    numb: 8,
    question: "What is contained in manifest.xml?",
    answer: "Permission that the application requires",
    options: [
      "Source code",
      "List of strings used in the app",
      "Permission that the application requires",
      "None of the above"
    ]
  },
  {
    numb: 9,
    question: "Which term is used to define testing?",
    answer: "Evaluating deliverable to find errors",
    options: [
      "Evaluating deliverable to find errors",
      "Finding broken code",
      "A stage of all projects",
      "None of the above"
    ]
  },
  {
    numb: 10,
    question: "Unit testing is",
    answer: "testing changes made in an existing or a new program",
    options: [
      "running the system with line data by the actual user",
      "making sure that the new programs do in fact process certain transactions according to Specifications",
      "is checking the logic of one or more programs in the candidate system",
      "testing changes made in an existing or a new program"
    ]
  },
  {
    numb: 11,
    question: "The required android environment for development is called",
    answer: "SDK",
    options: [
      "SDK",
      "IDE",
      "APK",
      "JDK"
    ]
  },
  {
    numb: 12,
    question: "Which programming languages can be used for app development",
    answer: "All of the above",
    options: [
      "Dart, C#",
      "Swift, C",
      "Java, Kotlin, Python",
      "All of the above"
    ]
  },
  {
    numb: 13,
    question: "Which programming languages are used in twitter backend?",
    answer: "A and C",
    options: [
      "C++",
      "Javascript",
      "Scala",
      "A and C"
    ]
  },
  {
    numb: 14,
    question: "What is ADB in android?",
    answer: "Android Debug Bridge",
    options: [
      "Application Development Base",
      "Android Developer Base",
      "Android Development Base",
      "Android Debug Bridge"
    ]
  },
  {
    numb: 15,
    question: "A ____ status code indicates that the client’s request was accepted successfully.",
    answer: "2xx",
    options: [
      "2xx",
      "3xx",
      "4xx",
      "1xx"
    ]
  },
  {
    numb: 16,
    question: "WebSockets with Socket.io can be used to?",
    answer: "All of these.",
    options: [
      "Send messages from one client to another.",
      "Send messages from the client to the server.",
      "Send messages from the server to the client.",
      "All of these."
    ]
  },
  {
    numb: 17,
    question: "What is the full form of RDBMS ?",
    answer: "Relational Database Management system",
    options: [
      "Right Database Management System",
      "Relational Database Management system",
      "Rapid Database Management System",
      "Route Database Management System"
    ]
  },
  {
    numb: 18,
    question: "Which is not an Activity lifecycle call-back method of the following?",
    answer: "onBackPressed",
    options: [
      "onStart",
      "onCreate",
      "Both A and B",
      "onBackPressed"
    ]
  },
  {
    numb: 19,
    question: "Which of the following command is used to install the Node.js express module?",
    answer: "$ npm install express",
    options: [
      "$ npm install express",
      "$ node install express",
      "$ install express",
      "None of the above",
    ]
  },
  {
    numb: 20,
    question: "What is Callback?",
    answer: "The callback is an asynchronous equivalent for a function.",
    options: [
      "The callback is a technique in which a method calls back the caller method.",
      "The callback is an asynchronous equivalent for a function.",
      "Both of the above.",
      "None of the above",
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];