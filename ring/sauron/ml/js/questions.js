// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is Machine Learning?",
    answer: "Both A and B",
    options: [
      "Machine learning is the science of getting computers to act without being explicitly programmed",
      "Machine learning is a type of artificial intelligence that extracts patterns out of raw data by using an algorithm or method",
      "Both A and B",               
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: "When performing regression or classification, which of the following is the correct way to preprocess the data?",
    answer: "Normalize the data -> PCA -> training",
    options: [
      "Normalize the data -> PCA -> training",
      "PCA -> normalize PCA output -> training",
      "Normalize the data -> PCA -> normalize PCA output -> training",
      "None of the above"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is a widely used and effective machine learning algorithm based on the idea of bagging?",
    answer: "Random Forest",
    options: [
      "Decision Tree",
      "Regression",
      "Classification",
      "Random Forest"
    ]
  },          
    {
    numb: 4,
    question: "High entropy means that the partitions in classification are",
    answer: "not pure",
    options: [
      "pure",
      "not pure",
      "useful",
      "useless"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is FALSE about PCA and Autoencoders?",
    answer: "PCA works well with non-linear data while Autoencoders are best suited for linear data",
    options: [
      "Both PCA and Autoencoders are dimensionality reduction techniques",
      "PCA works well with non-linear data while Autoencoders are best suited for linear data",
      "Output of both PCA and Autoencoders is lossy",
      "None of the above"
    ]
  },
    {
    numb: 6,
    question: "Machine Learning technique that helps in detecting the outliers in data",
    answer: "Anamoly Detection",
    options: [
      "Clustering",
      "Classification",
      "Anamoly Detection",
      "All of the above"
    ]
  },
    {
    numb: 7,
    question: "Which of the following is a type of object detection task in which each pixel of an image can be categorized into specific classes?",
    answer: "Semantic segmentation",
    options: [
      "Regression learning",
      "Sequence classification",
      "Pixel segmentation",
      "Semantic segmentation"
    ]
  },
    {
    numb: 8,
    question: "What does a gradient descent algorithm do?",
    answer: "Both A and B",
    options: [
      "Tries to find the parameters of a model that minimizes the cost function",
      "Adjusts the weights at the input layers",
      "Both A and B",
      "None"
    ]
  },
    {
    numb: 9,
    question: "Which of the following makes a neural network non-linear?",
    answer: "Rectified linear unit",
    options: [
      "Convolution function",
      "Batch gradient descent",
      "Rectified linear unit",
      "All of the above"
    ]
  },
    {
    numb: 10,
    question: "Which of the following frameworks can be used as backend in Keras?",
    answer: "Theano",
    options: [
      "Theano",
      "Sonnet",
      "Chainer",
      "Caffe"
    ]
  },
    {
    numb: 11,
    question: "In which of the following situations, you should NOT prefer Keras over TensorFlow?",
    answer: "When you are doing a critical and intensive research on any field",
    options: [
      "When you want to quickly build prototype using neural networks",
      "When you want to implement simple neural networks in your initial learning phase",
      "When you are doing a critical and intensive research on any field",
      "When you want to create beginner friendly tutorials"
    ]
  },  
    {
    numb: 12,
    question: "Which of the following SGD variants is momentum based?",
    answer: "Nesterov",
    options: [
      "Nesterov",
      "Adagrad",
      "RMSprop",
      "All of the above"
    ]
  },
  {
    numb: 13,
    question: "Which of the following networks is commonly associated with synthetic image generation?",
    answer: "Generative adversarial networks",
    options: [
      "Long short-term memory networks",
      "YOLO-v3 networks",
      "Generative adversarial networks",
      "Super resolution networks"
    ]
  },
    {
    numb: 14,
    question: "Which of the following functions can be used as an activation function in the output layer if we wish to predict the probabilities of n classes (p1, p2..pk) such that sum of p over all n equals to 1?",
    answer: "Softmax",
    options: [
      "ReLu",
      "Sigmoid",
      "Tanh",
      "Softmax",
    ]
  },
    {
    numb: 15,
    question: "Which of the following neural network model has a shared weight structure?",
    answer: "Both A and B",
    options: [
      "Recurrent Neural Network",
      "Convolution Neural Network",
      "Both A and B",
      "None"
    ]
  },
  {
    numb: 16,
    question: "Which of the following types of RNN is also called Vanilla Neural Network?",
    answer: "One to One",
    options: [
      "One to One",
      "One to Many",
      "Many to One",
      "Many to Many"
    ]
  },
  {
    numb: 17,
    question: "What consists of Boltzmann machine?",
    answer: "Fully connected network with both hidden and visible units",
    options: [
      "Fully connected network with both hidden and visible units",
      "Asynchronous operation",
      "Stochastic update",
      "All of the mentioned"
    ]
  },
  {
    numb: 18,
    question: "Which of the following methods is used as a model fitting method for edge detection?",
    answer: "RANSAC",
    options: [
      "SIFT",
      "Difference of Gaussian detector",
      "RANSAC",
      "None of the above"
    ]
  },
  {
    numb: 19,
    question: "Word2vec is used to",
    answer: "Generate vectors out of words",
    options: [
      "Generate vectors out of words",
      "Represent a document numerically",
      "Make a set of vocabularies",
      "None"
    ]
  },
  {
    numb: 20,
    question: "The multi-armed bandit problem is a generalized use case for",
    answer: "Reinforcement learning",
    options: [
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning",
      "All of the above"
    ]
  },
];