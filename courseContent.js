const courseStructure = {
    introduction: {
        id: 'introduction',
        title: 'Introduction',
        icon: '📚',
        content: {
            title: 'HTML Course Introduction',
            description: 'Learn the fundamentals of HTML to build modern web pages.',
            sections: [{
                type: 'overview',
                content: generateOverviewSection()
            }],
            nextPage: 'document-structure'
        }
    },
    'document-structure': {
        id: 'document-structure',
        title: 'Document Structure',
        icon: '📄',
        content: {
            title: 'HTML Document Structure',
            description: 'Learn how to create the basic structure of an HTML document.',
            sections: [{
                type: 'example',
                code: getDocumentStructureExample(),
                practice: {
                    instructions: 'Create a basic HTML document with a title and heading'
                }
            }],
            prevPage: 'introduction',
            nextPage: 'text-elements'
        }
    },
    'text-elements': {
        id: 'text-elements',
        title: 'Text Elements',
        icon: '📝',
        content: {
            title: 'Working with Text Elements',
            description: 'Understand how to use various text elements in HTML.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Text Elements Overview</h2>
                            <p>In this section, we will cover the different text elements available in HTML and how to use them effectively.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Using Headings and Paragraphs',
                    code: `<h1>Main Title</h1>
<h2>Sub Title</h2>
<p>This is a paragraph of text in the body of the document.</p>`,
                    practice: {
                        instructions: 'Add headings and paragraphs to your document:',
                        requirements: [
                            'Create a main title for your page',
                            'Add at least two sub-titles',
                            'Write a paragraph for each sub-title'
                        ]
                    }
                }
            ],
            prevPage: 'document-structure',
            nextPage: 'links-images'
        }
    },
    'links-images': {
        id: 'links-images',
        title: 'Links & Images',
        icon: '🔗',
        content: {
            title: 'Adding Links and Images',
            description: 'Learn how to add links and images to your web pages.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Links and Images Overview</h2>
                            <p>Links and images are essential parts of web pages. This section will teach you how to include them in your HTML documents.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Inserting Links and Images',
                    code: `<a href="https://www.example.com">This is a link</a>
<img src="image.jpg" alt="Description of image">`,
                    practice: {
                        instructions: 'Add links and images to your document:',
                        requirements: [
                            'Insert a link to your favorite website',
                            'Add an image from your computer',
                            'Provide alternative text for the image'
                        ]
                    }
                }
            ],
            prevPage: 'text-elements',
            nextPage: 'lists'
        }
    },
    'lists': {
        id: 'lists',
        title: 'Lists',
        icon: '📋',
        content: {
            title: 'Creating Lists',
            description: 'Understand how to create and style lists in HTML.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Lists Overview</h2>
                            <p>Lists are used to group related items together. In this section, you will learn how to create different types of lists in HTML.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Making Ordered and Unordered Lists',
                    code: `<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<ol>
<li>First item</li>
<li>Second item</li>
</ol>`,
                    practice: {
                        instructions: 'Create your own lists:',
                        requirements: [
                            'Make an unordered list of your hobbies',
                            'Create an ordered list of your favorite foods'
                        ]
                    }
                }
            ],
            prevPage: 'links-images',
            nextPage: 'tables'
        }
    },
    'tables': {
        id: 'tables',
        title: 'Tables',
        icon: '📊',
        content: {
            title: 'Working with Tables',
            description: 'Learn how to create and manipulate tables in HTML.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Tables Overview</h2>
                            <p>Tables are used to display data in a structured format. This section will teach you how to create and style tables in HTML.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Creating a Simple Table',
                    code: `<table>
<tr>
<th>Header 1</th>
<th>Header 2</th>
</tr>
<tr>
<td>Data 1</td>
<td>Data 2</td>
</tr>
</table>`,
                    practice: {
                        instructions: 'Build your own table:',
                        requirements: [
                            'Create a table with at least two rows and two columns',
                            'Add a header row to your table',
                            'Include some sample data in the table cells'
                        ]
                    }
                }
            ],
            prevPage: 'lists',
            nextPage: 'forms'
        }
    },
    'forms': {
        id: 'forms',
        title: 'Forms',
        icon: '📋',
        content: {
            title: 'Creating Forms',
            description: 'Understand how to create interactive forms in HTML.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Forms Overview</h2>
                            <p>Forms are used to collect user input. In this section, you will learn how to create and manage forms in HTML.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Building a Simple Form',
                    code: `<form>
<label for="name">Name:</label>
<input type="text" id="name" name="name">
<input type="submit" value="Submit">
</form>`,
                    practice: {
                        instructions: 'Create your own form:',
                        requirements: [
                            'Add fields for name, email, and message',
                            'Include a submit button',
                            'Label each field appropriately'
                        ]
                    }
                }
            ],
            prevPage: 'tables',
            nextPage: 'semantic-html'
        }
    },
    'semantic-html': {
        id: 'semantic-html',
        title: 'Semantic HTML',
        icon: '🔍',
        content: {
            title: 'Writing Semantic HTML',
            description: 'Learn the importance of semantic HTML and how to write meaningful markup.',
            sections: [
                {
                    type: 'overview',
                    content: `
                        <div class="lesson-overview">
                            <h2 class="app-h2">Semantic HTML Overview</h2>
                            <p>Semantic HTML is about using HTML markup that conveys meaning. This section will teach you how to write semantic HTML.</p>
                        </div>`
                },
                {
                    type: 'example',
                    title: 'Using Semantic Elements',
                    code: `<article>
<h2>Article Title</h2>
<p>This is an article about something interesting.</p>
</article>`,
                    practice: {
                        instructions: 'Write semantic HTML for an article:',
                        requirements: [
                            'Use an <article> element for the main content',
                            'Include a <header> and <footer> for the article',
                            'Add a <section> for each major part of the article'
                        ]
                    }
                }
            ],
            prevPage: 'forms',
            nextPage: null
        }
    }
};

function generateOverviewSection() {
    return `
        <div class="course-overview">
            <h2 class="app-h2">Course Topics</h2>
            <ul class="features">
                <li>Document Structure - Learn the basic building blocks</li>
                <li>Text Elements - Master text formatting</li>
                <li>Links & Images - Add navigation and media</li>
                <li>Lists - Organize content effectively</li>
                <li>Tables - Present data in structured format</li>
                <li>Forms - Create interactive elements</li>
                <li>Semantic HTML - Write meaningful markup</li>
            </ul>
        </div>`;
}

function getDocumentStructureExample() {
    return `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to my page</h1>
    <p>This is my first HTML page!</p>
</body>
</html>`;
}

// Function to load course content - move this before any usage
function loadCourseContent(pageId = 'introduction') {
    const page = courseStructure[pageId];
    if (!page) return;

    // Update URL hash without triggering the hashchange event
    if (window.location.hash !== `#${pageId}`) {
        window.history.pushState(null, '', `#${pageId}`);
    }

    updateNavigation(pageId);
    document.getElementById('courseContent').innerHTML = generatePageContent(page);
    setupPracticeExercises(); // Call the now-global function
}

function updateNavigation(currentPageId) {
    const nav = document.getElementById('courseNav');
    nav.innerHTML = Object.values(courseStructure)
        .map(page => `
            <li>
                <a href="#${page.id}" 
                   class="${currentPageId === page.id ? 'active' : ''}"
                   onclick="loadCourseContent('${page.id}')">
                    <span>${page.icon}</span> ${page.title}
                </a>
            </li>
        `).join('');
}

function generatePageContent(page) {
    const content = page.content;
    let html = `
        <h1 class="app-h1">${content.title}</h1>
        <p class="app-p">${content.description}</p>
        ${generateSections(content.sections)}
        ${generateNavigation(content)}`;
    return html;
}

function generateSections(sections) {
    return sections.map(section => {
        switch(section.type) {
            case 'overview':
                return section.content;
            case 'example':
                return generateExampleSection(section);
            default:
                return '';
        }
    }).join('');
}

function generateExampleSection(section) {
    return `
        <div class="lesson-content">
            <pre class="code-example">${section.code}</pre>
            ${section.practice ? generatePracticeExercise(section.practice) : ''}
        </div>`;
}

function generatePracticeExercise(practice) {
    return `
        <div class="practice-exercise">
            <h3>Practice Exercise</h3>
            <p>${practice.instructions}</p>
            <div class="exercise-workspace">
                <textarea class="code-editor" rows="10" placeholder="Write your HTML here..."></textarea>
                <button class="preview-btn">Preview Result</button>
                <div class="preview-area"></div>
            </div>
        </div>`;
}

function generateNavigation(content) {
    let nav = '<div class="navigation-buttons">';
    if (content.prevPage) {
        nav += `<a class="nav-button prev" onclick="loadCourseContent('${content.prevPage}')" href="#${content.prevPage}">← Previous</a>`;
    }
    if (content.nextPage) {
        nav += `<a class="nav-button next" onclick="loadCourseContent('${content.nextPage}')" href="#${content.nextPage}">Next →</a>`;
    }
    nav += '</div>';
    return nav;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.slice(1) || 'introduction';
    loadCourseContent(hash);
});
