        const socialMediaShare = document.querySelector('.share-hidden');
        const share = document.querySelector('.share');
        const iconShares = document.querySelectorAll('.icon-share');

        iconShares.forEach((icon) => {
            icon.addEventListener('click', () => { 
                const computedStyle = window.getComputedStyle(socialMediaShare);
                
                if (computedStyle.display === 'none') {
                    socialMediaShare.style.display = 'flex';
                    share.style.display = 'none';
                } else if (computedStyle.display === 'flex') {
                    socialMediaShare.style.display = 'none';
                    share.style.display = 'flex';
                }
            });
        });