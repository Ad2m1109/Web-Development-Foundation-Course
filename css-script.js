document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.practice-exercise').forEach(function(exercise) {
        const btn = exercise.querySelector('.preview-btn');
        const textarea = exercise.querySelector('.code-editor');
        const iframe = exercise.querySelector('.preview-area iframe');
        let defaultHTML = '';
        // Detect which section and set the default HTML for preview
        if (exercise.closest('section')?.id === 'selectors') {
            defaultHTML = `
<h1 id="main-title">Hello CSS!</h1>
<p>This is a <span class="highlight">highlighted</span> paragraph.</p>
            `;
        } else if (exercise.closest('section')?.id === 'colors') {
            defaultHTML = `
<h2>Color Example</h2>
<p>Try changing my colors!</p>
            `;
        } else if (exercise.closest('section')?.id === 'text') {
            defaultHTML = `
<h2>Text Example</h2>
<p>Style me with CSS!</p>
            `;
        } else if (exercise.closest('section')?.id === 'box-model') {
            defaultHTML = `
<div class="box">This is a box!</div>
            `;
        } else if (exercise.closest('section')?.id === 'layout') {
            const h3 = exercise.parentElement.querySelector('h3');
            if (h3 && h3.textContent.includes('Flexbox')) {
                defaultHTML = `
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
                `;
            } else {
                defaultHTML = `
<div class="grid-container">
  <div class="grid-item">A</div>
  <div class="grid-item">B</div>
  <div class="grid-item">C</div>
</div>
                `;
            }
        } else if (exercise.closest('section')?.id === 'responsive') {
            defaultHTML = `
<div class="box">Resize the window!</div>
            `;
        } else if (exercise.closest('section')?.id === 'transitions-animations') {
            const h3 = exercise.parentElement.querySelector('h3');
            if (h3 && h3.textContent.includes('Transitions')) {
                defaultHTML = `
<button class="button">Hover me!</button>
                `;
            } else {
                defaultHTML = `
<div class="animated-box"></div>
                `;
            }
        }
        btn.addEventListener('click', function() {
            const css = textarea.value;
            iframe.srcdoc = `<html><head><style>${css}</style></head><body>${defaultHTML}</body></html>`;
        });
        // Show the default preview on load
        iframe.srcdoc = `<html><head><style>${textarea.value}</style></head><body>${defaultHTML}</body></html>`;
    });
});
