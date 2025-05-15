# Assignment-4

# Part 0: Make the github repository a web page

#### Step 1: Create a New Github Repository
- Name it: `wdpweek5homework`
- Choose: **Public**
- Do not need to check `Add a README file`
- Click **Create repository**

#### Step 2: Upload dummy html file 
- Upload `index.html` to this repository
- Click **Commit changes**

#### Step 3: Enable GitHub Pages
- Go to the **Settings** tab of your repository
- Scroll down to the **Pages** section (left sidebar or scroll to bottom)
- Under **"Source"**, choose:
  - **Branch**: `main`
  - **Folder**: `/ (root)`
- Click **Save**

- After a few minutes, GitHub will give you a URL:
It will look like this (XXXX is your username):
```
Your site is live at https://XXXX.github.io/wdpweek5homework/
```
---

# Part 1: Host Your Quote Generator with GitHub Pages

## Objective
You will create a web page that displays a random quote from a local `quotes.json` file and publish it online using GitHub Pages.

## What You Need to Prepare
- `index.html` file (provided, but need to modify javascript code)
- `quotes.json` file (you will create)


## Folder Structure
Inside the `wdpweek5homework` repository, your project folder should contain:
```
part1/
 ├── index.html
 └── quotes.json
```



## Requirements

### HTML (index.html)
- Use the provided `index.html` file.

### JavaScript (script.js)
- Use the provided `script.js` file.
- Modify some part inside the code to make the code work

## 🏅 Bonus (Optional)
- Style your page using CSS
- Add a loading animation or message
- Animate quotes or change colors each time

## Reminder
- Always commit both files (`index.html`, `quotes.json`)
- The entire project is inside `part1` folder
- Use `fetch("quotes.json")` — it works because both files are served from the same domain


### Submission Instructions
1. Confirm that your site is live and working from your own browser.
2. Submit the GitHub Pages link, URL including index.html (not the repo link) in the Teams assignment page .
   - Example: `https://am000001-peeraya-sripian.github.io/wdpweek5homework/part1/index.html`

---

# Part 2: Build an Interactive Quiz App with JavaScript

## Objective
Create an interactive quiz application using JavaScript and the DOM. Your app should display one multiple-choice question at a time, allow users to select an answer, and show the final score at the end. The quiz data (questions and choices) will be provided in a prebuilt file called `quizquestion.json`.

## Folder Structure 
Inside the `wdpweek5homework` repository, your project folder should contain:
```
part2/
├── index.html
├── quizquestion.json
└── script.js
```

## Requirements

- Use the provided `script.js` file.
- Modify some part inside the code to make the code work

## Bonus (Optional)
- Add a countdown timer for each question
- Randomize the question order
- Add a progress bar


## Reminder
- Always commit all files in your folder
- The entire project is inside `part2` folder


### Submission Instructions
1. Confirm that your site is live and working from your own browser.
2. Submit the GitHub Pages link, URL including index.html (not the repo link) in the Teams assignment page .
   - Example: `https://am000001-peeraya-sripian.github.io/wdpweek5homework/part2/index.html`
---
