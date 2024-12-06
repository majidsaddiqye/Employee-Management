const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    fname: "Ahmed",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Complete project report",
        taskDescription: "Prepare the final project report for Q1",
        taskDate: "2024-12-08",
        taskCategory: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client meeting preparation",
        taskDescription: "Gather materials for the client presentation",
        taskDate: "2024-12-10",
        taskCategory: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review the latest PRs for the backend team",
        taskDate: "2024-12-06",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    fname: "Ali",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Data analysis",
        taskDescription: "Analyze user engagement trends for November",
        taskDate: "2024-12-05",
        taskCategory: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Update website content",
        taskDescription: "Add new articles to the blog section",
        taskDate: "2024-12-09",
        taskCategory: "Content Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Server maintenance",
        taskDescription: "Schedule downtime for routine server checks",
        taskDate: "2024-12-12",
        taskCategory: "IT Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "password123",
    fname: "Fatima",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Market research",
        taskDescription: "Compile competitor pricing strategies",
        taskDate: "2024-12-07",
        taskCategory: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team feedback session",
        taskDescription: "Organize a meeting for feedback on the Q1 roadmap",
        taskDate: "2024-12-14",
        taskCategory: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug fixing",
        taskDescription: "Fix login page validation issues",
        taskDate: "2024-12-06",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare holiday campaign",
        taskDescription: "Design banners for the year-end sale",
        taskDate: "2024-12-20",
        taskCategory: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// export a setlocalstorage function
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// export a getlocalstorage function
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
