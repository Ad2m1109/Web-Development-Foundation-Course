// Function to setup exercise previews
function setupPracticeExercises() {
    const previewButtons = document.querySelectorAll('.preview-btn');
    
    previewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const workspace = this.closest('.exercise-workspace');
            const editor = workspace.querySelector('.code-editor');
            const preview = workspace.querySelector('.preview-area');
            
            // Create iframe for safe preview
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '200px';
            iframe.style.border = 'none';
            
            // Clear previous preview
            preview.innerHTML = '';
            preview.appendChild(iframe);
            
            // Write content to iframe
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write(editor.value);
            doc.close();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize course content from hash or default to introduction
    const hash = window.location.hash.slice(1) || 'introduction';
    loadCourseContent(hash);

    // Handle hash changes for browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'introduction';
        loadCourseContent(hash);
    });
});

// Initialize when hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'introduction';
    loadCourseContent(hash);
});

function loadCourseContent(pageId = 'introduction') {
    const page = courseStructure[pageId];
    if (!page) {
        showError('Page not found');
        return;
    }

    try {
        updateNavigation(pageId);
        document.getElementById('courseContent').innerHTML = generatePageContent(page);
        setupPracticeExercises();
    } catch (error) {
        showError('Error loading content');
        console.error(error);
    }
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}
