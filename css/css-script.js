// Add event listener for when DOM is fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('../data/css-course.json');
        if (!response.ok) {
            throw new Error(`Failed to load course data: ${response.status} ${response.statusText}`);
        }
        window.courseData = await response.json();
        
        // Populate navigation
        const navLinks = document.getElementById('nav-links');
        navLinks.innerHTML = courseData.sections.map(section => `
            <li><a href="#${section.id}"><span>${section.icon}</span> ${section.title}</a></li>
        `).join('');

        // Load initial section based on hash or first section
        const initialSection = window.location.hash.slice(1) || courseData.sections[0].id;
        loadSection(initialSection);

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            const sectionId = window.location.hash.slice(1);
            loadSection(sectionId);
        });
    } catch (error) {
        console.error('Error loading course:', error);
        showError(error.message);
    }
});

function showError(message) {
    document.getElementById('main-content').innerHTML = `
        <div style="color: #ff6b6b; padding: 20px; text-align: center;">
            <h2>Error Loading Course Content</h2>
            <p>${message}</p>
            <p>Please check that the data/css-course.json file exists and try refreshing the page.</p>
        </div>
    `;
}

function loadSection(sectionId) {
    const section = window.courseData.sections.find(s => s.id === sectionId);
    if (!section) {
        showError('Section not found');
        return;
    }

    const currentIndex = window.courseData.sections.findIndex(s => s.id === sectionId);
    const prevSection = currentIndex > 0 ? window.courseData.sections[currentIndex - 1] : null;
    const nextSection = currentIndex < window.courseData.sections.length - 1 ? window.courseData.sections[currentIndex + 1] : null;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h1 class="app-h1">${section.title}</h1>
        ${generateSectionHTML(section)}
        <div class="navigation-buttons">
            ${prevSection ? `<a href="#${prevSection.id}" class="nav-button prev">← ${prevSection.title}</a>` : ''}
            ${nextSection ? `<a href="#${nextSection.id}" class="nav-button next">${nextSection.title} →</a>` : ''}
        </div>
    `;

    setupPracticeExercises({ sections: [section] });
    highlightCurrentNav(sectionId);
}

function generateSectionHTML(section) {
    return `
        <section id="${section.id}">
            <div class="lesson-intro">
                <h2 class="app-h2">${section.title}</h2>
                <p class="app-p">${section.description}</p>
            </div>
            <div class="lesson-content">
                <h3 class="app-h3">${section.content.title}</h3>
                <pre class="code-example"><code>${escapeHtml(section.content.codeExample)}</code></pre>
                <div class="practice-exercise">
                    <h3>Practice Exercise</h3>
                    <p>${section.content.exercise.instructions}</p>
                    <div class="exercise-hint">
                        <strong>Hint:</strong> Try these CSS properties:
                        <ul>
                            ${section.content.exercise.hint.elements.map(elem => 
                                `<li><code>${escapeHtml(elem)}</code></li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="exercise-workspace">
                        <div class="editor-tabs">
                            <button class="tab-button active" data-tab="css">CSS</button>
                            <button class="tab-button" data-tab="html">HTML</button>
                        </div>
                        <div class="editor-content">
                            <textarea class="code-editor active" id="css-editor" rows="8" placeholder="Write your CSS here..."></textarea>
                            <textarea class="code-editor" id="html-editor" rows="8" placeholder="HTML structure (read-only)" readonly>${section.content.exercise.defaultHtml || ''}</textarea>
                        </div>
                        <button class="preview-btn">Preview Result</button>
                        <div class="preview-area">
                            <iframe style="width:100%;min-height:300px;border:1px solid #ddd;" sandbox="allow-scripts allow-same-origin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Add this helper function to escape HTML characters
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function setupPracticeExercises(courseData) {
    document.querySelectorAll('.practice-exercise').forEach(function(exercise) {
        const section = exercise.closest('section');
        const sectionData = courseData.sections.find(s => s.id === section.id);
        if (!sectionData) return;

        const btn = exercise.querySelector('.preview-btn');
        const cssEditor = exercise.querySelector('#css-editor');
        const htmlEditor = exercise.querySelector('#html-editor');
        const iframe = exercise.querySelector('.preview-area iframe');
        const defaultHTML = sectionData.content.exercise.defaultHtml || '<div>No HTML provided</div>';
        
        // Set up tab switching
        const tabButtons = exercise.querySelectorAll('.tab-button');
        const editors = exercise.querySelectorAll('.code-editor');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabType = button.dataset.tab;
                
                // Remove active class from all tabs and editors
                tabButtons.forEach(tab => tab.classList.remove('active'));
                editors.forEach(editor => editor.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding editor
                button.classList.add('active');
                const targetEditor = exercise.querySelector(`#${tabType}-editor`);
                if (targetEditor) {
                    targetEditor.classList.add('active');
                }
            });
        });

        // Set up the HTML editor with default content
        htmlEditor.value = defaultHTML;

        // Preview functionality
        btn.addEventListener('click', function() {
            const css = cssEditor.value;
            const html = htmlEditor.value;
            
            // Create complete HTML document with CSS
            const fullHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        /* Reset some default styles for better preview */
                        body { 
                            margin: 20px; 
                            font-family: Arial, sans-serif; 
                            line-height: 1.6;
                        }
                        /* User CSS */
                        ${css}
                    </style>
                </head>
                <body>
                    ${html}
                </body>
                </html>
            `;
            
            iframe.srcdoc = fullHTML;
        });

        // Show default preview on load
        const initialHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { 
                        margin: 20px; 
                        font-family: Arial, sans-serif; 
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                ${defaultHTML}
            </body>
            </html>
        `;
        iframe.srcdoc = initialHTML;

        // Auto-preview on typing (with debounce)
        let timeout;
        function autoPreview() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                btn.click();
            }, 1000); // 1 second delay after typing stops
        }

        cssEditor.addEventListener('input', autoPreview);
        htmlEditor.addEventListener('input', autoPreview);
    });
}

function highlightCurrentNav(sectionId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Add CSS for tab styling if not already in main.css
function addTabStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .editor-tabs {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
        }
        
        .tab-button {
            padding: 8px 16px;
            border: none;
            background: #f5f5f5;
            cursor: pointer;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            margin-right: 2px;
        }
        
        .tab-button.active {
            background: #50FA7B;
            color: white;
            font-weight: bold;
        }
        
        .tab-button:hover:not(.active) {
            background: #e0e0e0;
        }
        
        .editor-content {
            position: relative;
        }
        
        .code-editor {
            display: none;
            width: 100%;
            padding: 10px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;
            resize: vertical;
        }
        
        .code-editor.active {
            display: block;
        }
        
        .code-editor[readonly] {
            background-color: #f8f8f8;
            color: #666;
        }
        
        .preview-area {
            margin-top: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .preview-area iframe {
            border: none;
            width: 100%;
            min-height: 300px;
            background: white;
        }
    `;
    document.head.appendChild(style);
}

// Add the tab styles when the page loads
document.addEventListener('DOMContentLoaded', addTabStyles);