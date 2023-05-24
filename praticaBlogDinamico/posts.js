const post = document.getElementById("posts");

const elements = [
  {
    title: "Angular",
    content:
      "A front-end web framework that specializes in single-page applications, Angular uses HTML and TypeScript. The code's readability also allows for easier, faster testing and code review.Angular is an open-source web framework. Since Google developed Angular, users have confidence that they will get long-term support and future versions.",
  },
  {
    title: "jQuery",
    content:
      "jQuery helps developers use JavaScript and document object model (DOM) manipulations more easily. The open-source and tested library reduces the amount of code writing needed to manage animations, APIs, and event handling across browsers. This framework can reduce complex operations and functions into single lines of code for leaner and more lightweight development. jQuery can also help enhance a site's search engine optimization and interactivity. You can incorporate jQuery into websites and applications that use older code to improve and maintain various components without redoing the entire application.",
  },
  {
    title: "React",
    content:
      "React is an open-source front-end web framework that excels in creating mobile and single-page applications. The extensive user interface library features a reliable support system and comprehensive resources, along with a huge component library. Developers can also access powerful third-party developer tools and plugins. React allows developers to save time in various ways, including using reusable code and virtual DOM. This system tests proposed changes and determines the most effective way to apply them ahead of time, getting rid of possible mistakes and performance downgrades.",
  },  
];

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];

  const article = document.createElement("article");
  article.classList.add("article");

  const articleTitle = document.createElement("h2");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = element.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("article-paragraph");
  paragraph.textContent = element.content;

  article.appendChild(articleTitle);
  article.appendChild(paragraph);

  post.appendChild(article);
}
