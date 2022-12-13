import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn."
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.It is used for:web development (server-side),software development,mathematics,system scripting."
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.C# is used to develop web apps, desktop apps, mobile apps, games and much more."
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a popular programming language.Java is used to develop mobile apps, web apps, desktop apps, games and much more."
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP."
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML is the standard markup language for Web pages.With HTML you can create your own Website."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google, and other companies."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed."
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an open source server environment.Node.js allows you to run JavaScript on the server."
    }]

  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tag makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
