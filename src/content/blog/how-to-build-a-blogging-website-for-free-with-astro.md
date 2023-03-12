---
title: "How to Build a Blogging Website for Free: A Step-by-Step Guide by using Astro and Vercel"
subtitle: "Yaps, it's totally free!"
tags: ["How To", "Dev"]
image: "/images/contents/free-website-astro.png"
published_date: '12-03-2023'
headline: true
---

As I mentioned before, you can build a website by using astro only with static website. This blog made by Astro and doesn't have any backend services so you can put your static file inside free hosting such as github pages or vercel. 


## What is Astro?
Astro is a modern static site builder built for the modern web. It's designed to help developers build fast, modern websites and web applications using the latest web technologies like JavaScript, React, and Vue. It offers a developer-friendly approach to building static websites that is both flexible and performant.

With Astro, you can write your site in plain HTML, CSS, and JavaScript, or you can use a popular frontend framework like React or Vue. Astro also has built-in support for popular markdown-based content formats like MDX and Markdown, which allows you to easily create and manage content for your site.

Astro's key features include:

* A component-driven approach to building sites
* Support for popular frontend frameworks like React and Vue
* Built-in support for popular content formats like MDX and Markdown
* Server-side rendering for improved performance and SEO
* Optimized builds with minimal HTML, CSS, and JavaScript for fast load times


![Astro Comparision - stackdiary.com](https://stackdiary.com/wp-content/uploads/2023/03/Astro-real-world-performance.png)

Personally I prefer to using Astro because it has amazing performance and you don't have to require server-side rendering. You can publish your site as Static pages. You can learn more about astro at https://astro.build/.

## What is Vercel?
Vercel is a cloud platform for developing and deploying serverless functions and static websites. It was previously known as ZEIT and is popular for its ability to easily deploy web projects using a command-line interface or integrations with popular development tools like Git. Vercel provides hosting and deployment services for a wide range of web applications, including React, Vue, Angular, and more. It also offers additional services such as edge caching, serverless functions, and integrations with third-party services.

Vercel has a free tier that allows you to deploy and host projects at no cost. The free tier includes a limited amount of serverless functions, bandwidth, and storage, but is often sufficient for small to medium-sized projects. Vercel also offers paid plans with additional features and capacity for larger projects.

## Building a Blog with Astro
This tutorial only covers to create a simple blog by downloading a starter template. For advance tutorial I'll cover that later. 
First you need install astro globally by using Node.JS. You can download Node.JS in here if you don't have any. https://nodejs.org/en/download/

1. Open your terminal

```bash
npm install -g astro
```

2. Next, create a new Astro project using the starter template by running the following command:
```bash
astro create my-blog --template astro-starter-blog
```
This will create a new Astro project in the my-blog directory, based on the Astro starter template for a blog.

3. Change into the my-blog directory by running the following command:
```bash
cd my-blog
```
4. Start the development server by running the following command:
```bash
npm run start
```
5. Open your browser and go to http://localhost:3000 to see your new blog.
You should see a basic blog with a home page, a blog post page, and a few example posts.

6. To add new posts, create a new markdown file in the src/pages/posts directory.<br>
The filename should be in the format `YYYY-MM-DD-title-of-post.md`, where `YYYY-MM-DD` is the date of the post and title-of-post is the title of your post.<br> 
For example, if you wanted to create a post called "My First Post" on March 1st, 2023, you would create a file called `2023-03-01-my-first-post.md`.

7. In the markdown file, add the content of your blog post using standard markdown syntax.
You can include images, videos, and other media in your posts by referencing them using their file path or URL. You can check the tutorial if you don't have any experiences with Markdown https://commonmark.org/help/tutorial/

8. Add metadata to your post by including a YAML frontmatter section at the top of your markdown file.
This section should be enclosed in two sets of three dashes, like this:

```yaml
---
title: My First Post
author: John Doe
date: 2023-03-01
---
```
You can include any metadata you like in this section, such as the post's title, author, date, tags, or any other information you want to display on your blog.

9. Save your markdown file, and the new post should automatically appear on your blog's home page and on its individual post page.
You can customize the appearance of your blog using CSS, by modifying the existing template, or by adding new components to your Astro project.

That's it! You now have a basic blogging website up and running using Astro.


## Deploying to your site with Vercel
Now it's time to deploy your site to vercel for FREE!

1. You need a github account. You can register in here https://github.com.
2. Once you done to register, you can create Repository first.
3. Initialization your project directory by using `git init` and then `git remote add origin <repository link>`
4. Push your changes to git 
    ```
    git add .
    git commit -m "Init" 
    git push origin master
    ```

After that, you need Sign up to Vercel https://vercel.com. I personally sign up by using github account. 
At the first page, vercel will guide you to deploy your application, make sure your repository already listed in Github and select the repository you want to deploy. Once you done, you can access your url publicly. The url will given after vercel deployed your application. 

Everytime you want to create a blog by creating a markdown and push to repository, vercel will build automatically. Boom! Now you have a free website. You can also setup the domain by access the `Domain` page in vercel. 

