# 🤖 Chatbot Design with React + Vite + ShadcnUI

Welcome to the Chatbot UI project built using **React**, **Vite**, and **ShadcnUI**. This project is structured to guide you through building a chatbot frontend with modern tools and clean architecture.

📺 **Video Tutorial Repository**: [Link]

---

## 📝 Note

Currently, this is the **UI layer** of the chatbot application. To make it fully functional as an application, you'll need to integrate it with a backend API. Stay tuned for the upcoming **Gemini API + MongoDB** video tutorial, where we'll integrate this UI with an API and database to handle real-time chat interactions and data persistence.

---

## 🚀 Getting Started

To get started with the project, you can either:

- **Create your own repository** by copying the template, or
- **Clone this repository** and start working on it right away:

```bash
git clone https://github.com/KyneLaggui/gdg-shadcn-tutorial.git

cd gdg-shadcn-tutorial

npm install

npm run dev
```

Make sure to follow along with the steps in the video tutorial to understand how the project is structured, how the chatbot is implemented, and how to debug common issues.

---

## 🧩 Troubleshooting Common Issues

### ❌ Problem: Can't click anywhere after adding a model?

This issue is due to a version incompatibility with some Shadcn packages.

✅ **Solution: Install specific versions of the required packages**

```bash/powershell
npm install @radix-ui/react-alert-dialog@1.1.10 @radix-ui/react-dialog@1.1.7
```

Then, clear and reinstall your dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 🗂 Folder Structure

```
gdg-shadcn-tutorial/
├── components/                  # All reusable components live here
│   ├── Chat/                    # Components related to the chatbot interface
│   │   └── ChatArea.jsx
│   │   └── ChatMessage.jsx
│   ├── Navigations/            # Sidebar and navigation components
│   │   └── AddModalDialog.jsx
        └── EditModalDialog.jsx
        └── MobileNav.jsx
        └── ModelItem.jsx
        └── Sidebar.jsx
│   └── ui/                     # UI components generated/used from ShadcnUI
├── hooks/                      # Custom React hooks for shared logic
│   └── use-media-query.jsx
│
├── App.jsx                     # Main application component
├── main.jsx                    # Vite entry point
├── index.html                  # HTML entry template
├── package.json
└── jsconfig.json
```

### 📌 Folder Descriptions

- **components/**: All UI building blocks are kept here.

  - **Chat/**: Contains components specifically used in the chatbot UI (e.g., message list, input box).
  - **Navigations/**: Sidebar and other navigation-related components.
  - **ui/**: ShadcnUI and other general-purpose UI components.

- **hooks/**: Contains custom hooks like `use-media-query.jsx` for handling viewport state.

---

## 📚 Features You'll Learn

- Component-based architecture in React
- Setting up a Vite project from scratch
- Using ShadcnUI for building modern UIs
- Creating and managing reusable UI components
- Sidebar navigation design
- Custom React hooks for logic abstraction
- Debugging and managing package versions

---

## 🧠 Tips

- Always check Shadcn component versions when facing UI-related bugs.
- Maintain component modularity to keep code manageable.
- Use hooks for managing state or side effects cleanly.
- Commit early and often while building along with the video!
