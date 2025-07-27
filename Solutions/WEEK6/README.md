# 📘 React Hands-On Labs – Week 6 Project Series

This repository contains five structured hands-on ReactJS labs completed as part of Week 6 coursework. Each lab progressively builds foundational knowledge of React, from component creation to lifecycle methods and styling.

📁 Folder Structure:
WEEK6/
├── REACTJS_HOL_1/ → Class Components (Home, About, Contact)
├── REACTJS_HOL_2/ → Functional Component with Props (Score Calculator)
├── REACTJS_HOL_3/ → Lifecycle Methods (Blog Post Fetch)
├── REACTJS_HOL_4/ → Styling with CSS Modules and Inline Styling
├── REACTJS_HOL_5/ → Cohort Dashboard with Conditional Styling


> ✅ **Output screenshots are attached in each folder.**

---

## ✅ REACTJS_HOL_1 – Class-Based Components

**Objective**:  
Understand and implement React class components to build modular UI sections.

**Highlights**:
- Created a React app named `studentapp`
- Built three class components: `Home`, `About`, and `Contact`
- Rendered all components through `App.js`

**Outcome**:  
Each page displayed a welcome message as a React component.

---

## ✅ REACTJS_HOL_2 – Functional Component with Props

**Objective**:  
Create function components and pass props to compute and display student scores.

**Highlights**:
- Built `CalculateScore` functional component inside `scorecalculatorapp`
- Accepted props like `Name`, `School`, `Total`, and `Goal`
- Displayed computed average and details
- Applied basic styling via `mystyle.css`

**Outcome**:  
Successfully rendered student scores with dynamic data and external CSS.

---

## ✅ REACTJS_HOL_3 – Lifecycle Methods & Data Fetch

**Objective**:  
Use React lifecycle methods (`componentDidMount`, `componentDidCatch`) to fetch and display API data.

**Highlights**:
- Created a class component `Posts`
- Used `fetch()` to retrieve post data from JSONPlaceholder API
- Rendered `title` and `body` fields
- Implemented error handling using `componentDidCatch`

**Outcome**:  
Posts were dynamically fetched and displayed using React lifecycle methods.

---

## ✅ REACTJS_HOL_4 – Styling Components with CSS Modules

**Objective**:  
Apply component-scoped styles using CSS Modules and inline styling.

**Highlights**:
- Added `CohortDetails.module.css`
- Styled container using scoped `box` class
- Used inline styles for dynamic color: `green` for ongoing, `blue` for others
- Applied styling via `className` and `style` attributes

**Outcome**:  
Cohort cards displayed with proper spacing, border radius, and color-based status.

---

## ✅ REACTJS_HOL_5 – Final Styling Dashboard

**Objective**:  
Refine the React dashboard with well-structured, styled cohort components.

**Highlights**:
- Reused styling principles from HOL_4
- Organized the layout for completed and ongoing cohorts
- Styled with a mix of CSS Module and conditionals

**Outcome**:  
The final dashboard looked clean and user-friendly with distinct cohort status indication.

---

## 🎓 What I Learned

- How to set up a React development environment using `create-react-app`
- Difference between class and functional components
- Passing and handling props
- Fetching and rendering API data
- React lifecycle methods and error boundaries
- Styling with scoped CSS Modules and inline styles
- Folder structure and component reusability

---

📌 **All five labs are organized under `WEEK6/` with output screenshots attached inside each respective folder for clarity and visual validation.**
