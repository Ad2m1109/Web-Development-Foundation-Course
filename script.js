// Function to setup exercise previews
function setupPracticeExercises() {
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const workspace = this.closest('.exercise-workspace');
            const codeEditor = workspace.querySelector('.code-editor');
            const previewArea = workspace.querySelector('.preview-area');
            
            if (previewArea && !previewArea.querySelector('iframe')) {
                previewArea.innerHTML = codeEditor.value;
            }
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
