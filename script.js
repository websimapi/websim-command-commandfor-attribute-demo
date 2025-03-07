document.addEventListener('DOMContentLoaded', () => {
    // Handle custom commands for the image rotation demo
    const demoImage = document.getElementById('demo-image');
    
    demoImage.addEventListener('command', (event) => {
        if (event.command === '--rotate-landscape') {
            demoImage.style.transform = 'rotate(-90deg)';
        } else if (event.command === '--rotate-portrait') {
            demoImage.style.transform = 'rotate(0deg)';
        }
    });

    // Listen for dialog close events to show the selected action
    const confirmDialog = document.getElementById('confirm-dialog');
    
    confirmDialog.addEventListener('close', (event) => {
        const action = event.target.returnValue;
        
        if (action && action !== 'close') {
            // Create a toast notification
            const toast = document.createElement('div');
            toast.textContent = `Dialog closed with action: ${action}`;
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = '#333';
            toast.style.color = 'white';
            toast.style.padding = '10px 20px';
            toast.style.borderRadius = '4px';
            toast.style.zIndex = '1000';
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            
            document.body.appendChild(toast);
            
            // Fade in
            setTimeout(() => {
                toast.style.opacity = '1';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }
    });
});

