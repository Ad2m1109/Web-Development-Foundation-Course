document.addEventListener('DOMContentLoaded', function() {
    const workspaces = document.querySelectorAll('.exercise-workspace');
    workspaces.forEach(workspace => {
        const previewArea = workspace.querySelector('.preview-area');
        // Save the initial HTML for the preview area
        const defaultHTML = previewArea.innerHTML;
        previewArea.setAttribute('data-default-html', defaultHTML);
    });

    const previewBtns = document.querySelectorAll('.preview-btn');
    previewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const workspace = this.closest('.exercise-workspace');
            const codeEditor = workspace.querySelector('.code-editor');
            const previewArea = workspace.querySelector('.preview-area');
            const defaultHTML = previewArea.getAttribute('data-default-html');
            // Create or reuse iframe
            let iframe = previewArea.querySelector('iframe');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.style.width = '100%';
                iframe.style.height = '180px';
                iframe.style.border = 'none';
                previewArea.innerHTML = '';
                previewArea.appendChild(iframe);
            }
            // Write the user's CSS and the default HTML into the iframe
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write(`
                <html>
                <head>
                    <style>
                    ${codeEditor.value}
                    </style>
                </head>
                <body>
                    ${defaultHTML}
                </body>
                </html>
            `);
            doc.close();
        });
    });
});
