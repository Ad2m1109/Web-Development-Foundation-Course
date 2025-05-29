document.addEventListener('DOMContentLoaded', function() {
    const previewBtns = document.querySelectorAll('.preview-btn');
    
    previewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const workspace = this.closest('.exercise-workspace');
            const codeEditor = workspace.querySelector('.code-editor');
            const previewArea = workspace.querySelector('.preview-area');
            
            previewArea.innerHTML = codeEditor.value;
        });
    });
});
