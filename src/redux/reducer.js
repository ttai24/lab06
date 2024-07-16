const initState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put JavaScript?",
      answers: [
        {
          id: 1,
          text: "javascript",
          correct: false,
        },
        { id: 2, text: "script", correct: true },
        { id: 3, text: "scripting", correct: false },
        { id: 4, text: "js", correct: false },
      ],
      userAnswer: "",
    },
    {
      id: 2,
      question: "What a variables use for in JavaScript Programs?",
      answers: [
        {
          id: 1,
          text: "Storing numbers, datas, or other values.",
          correct: true,
          isChecked: false,
        },
        { id: 2, text: "Varying randomly", correct: false, isChecked: false },
        {
          id: 3,
          text: "Causing high-school algebra flashbacks",
          correct: false,
          isChecked: false,
        },
        { id: 4, text: "None of the above", correct: false, isChecked: false },
      ],
      userAnswer: "",
    },
    {
      id: 3,
      question: "What is the capital city of France?",
      answers: [
        {
          id: 1,
          text: "London",
          correct: false,
          isChecked: false,
        },
        {
          id: 2,
          text: "Berlin",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "Tokyo",
          correct: false,
          isChecked: false,
        },
        { id: 4, text: "Paris", correct: true, isChecked: false },
      ],
      userAnswer: "",
    },
    {
      id: 4,
      question: "Who painted the 'Mona Lisa'?",
      answers: [
        { id: 1, text: "Leonardo da Vinci", correct: true, isChecked: false },
        {
          id: 2,
          text: "Vincent van Gogh",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "Pablo Picasso",
          correct: false,
          isChecked: false,
        },
        { id: 4, text: "Claude Monet", correct: false, isChecked: false },
      ],
      userAnswer: "",
    },
    {
      id: 5,
      question: "Which country is known for inventing pizza?",
      answers: [
        {
          id: 1,
          text: "India",
          correct: false,
          isChecked: false,
        },
        { id: 2, text: "China", correct: false, isChecked: false },
        {
          id: 3,
          text: "Italy",
          correct: true,
          isChecked: false,
        },
        { id: 4, text: "USA", correct: false, isChecked: false },
      ],
      userAnswer: "",
    },
    {
      id: 6,
      question: "What is HTML?",
      answers: [
        {
          id: 1,
          text: " HTML is the standard markup language for creating Web pages",
          correct: true,
          isChecked: false,
        },
        {
          id: 2,
          text: " A database management system",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "An operating system",
          correct: false,
          isChecked: false,
        },
        {
          id: 4,
          text: "A styling language for web pages",
          correct: false,
          isChecked: false,
        },
      ],
      userAnswer: "",
    },
    {
      id: 7,
      question: "What is Git?",
      answers: [
        {
          id: 1,
          text: "A version control system.",
          correct: true,
          isChecked: false,
        },
        {
          id: 2,
          text: "A programming language.",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "A database management system.",
          correct: false,
          isChecked: false,
        },
        {
          id: 4,
          text: "A markup language for creating web pages.",
          correct: false,
          isChecked: false,
        },
      ],
      userAnswer: "",
    },
    {
      id: 8,
      question: "What is the useState hook in React?",
      answers: [
        {
          id: 1,
          text: "A hook used to add state to functional components.",
          correct: true,
          isChecked: false,
        },
        {
          id: 2,
          text: "A hook for managing side effects in React components.",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "A hook for fetching data from an API in React components.",
          correct: false,
          isChecked: false,
        },
        {
          id: 4,
          text: "A hook for handling events in React components.",
          correct: false,
          isChecked: false,
        },
      ],
      userAnswer: "",
    },
    {
      id: 9,
      question: "What is the useEffect hook in React?",
      answers: [
        {
          id: 1,
          text: "A hook used to perform side effects in functional components.",
          correct: true,
          isChecked: false,
        },
        {
          id: 2,
          text: "A hook for managing state in React components.",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "A hook for handling events in React components.",
          correct: false,
          isChecked: false,
        },
        {
          id: 4,
          text: "A hook for fetching data from an API in React components.",
          correct: false,
          isChecked: false,
        },
      ],
      userAnswer: "",
    },
    {
      id: 10,
      question: "What is Redux?",
      answers: [
        {
          id: 1,
          text: "A predictable state container for JavaScript applications.",
          correct: true,
          isChecked: false,
        },
        {
          id: 2,
          text: "A programming language.",
          correct: false,
          isChecked: false,
        },
        {
          id: 3,
          text: "A build tool for React applications.",
          correct: false,
          isChecked: false,
        },
        {
          id: 4,
          text: "A styling language for web pages.",
          correct: false,
          isChecked: false,
        },
      ],
      userAnswer: "",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "completedQuestion": {
      const updatedQuestions = [...state.questions];
      updatedQuestions[action.payload.id].userAnswer =
        action.payload.userAnswerID;
      return {
        ...state,
        questions: updatedQuestions,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
