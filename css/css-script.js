document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('../data/css-course.json');
        if (!response.ok) throw new Error('Failed to load course data');
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
        showError();
    }
});

function loadSection(sectionId) {
    const section = window.courseData.sections.find(s => s.id === sectionId);
    if (!section) {
        showError();
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

function highlightCurrentNav(sectionId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function showError() {
    document.getElementById('main-content').innerHTML = `
        <div style="color: #ff6b6b; padding: 20px; text-align: center;">
            <h2>Error Loading Course Content</h2>
            <p>Please try refreshing the page.</p>
        </div>
    `;
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
                <pre class="code-example">${section.content.codeExample}</pre>
                <div class="practice-exercise">
                    <h3>Practice Exercise</h3>
                    <p>${section.content.exercise.instructions}</p>
                    <div class="exercise-hint">
                        <strong>Hint:</strong> The default HTML contains:
                        <ul>
                            ${section.content.exercise.hint.elements.map(elem => 
                                `<li><code>${elem}</code></li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="exercise-workspace">
                        <textarea class="code-editor" rows="6" placeholder="Write your CSS here..."></textarea>
                        <button class="preview-btn">Preview Result</button>
                        <div class="preview-area">
                            <iframe style="width:100%;min-height:240px;border:none;" sandbox="allow-scripts allow-same-origin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function setupPracticeExercises(courseData) {
    document.querySelectorAll('.practice-exercise').forEach(function(exercise) {
        const section = exercise.closest('section');
        const sectionData = courseData.sections.find(s => s.id === section.id);
        if (!sectionData) return;

        const btn = exercise.querySelector('.preview-btn');
        const textarea = exercise.querySelector('.code-editor');
        const iframe = exercise.querySelector('.preview-area iframe');
        const defaultHTML = sectionData.content.exercise.defaultHtml;

        btn.addEventListener('click', function() {
            const css = textarea.value;
            iframe.srcdoc = `<html><head><style>${css}</style></head><body>${defaultHTML}</body></html>`;
        });

        // Show default preview
        iframe.srcdoc = `<html><head><style>${textarea.value}</style></head><body>${defaultHTML}</body></html>`;
    });
}
