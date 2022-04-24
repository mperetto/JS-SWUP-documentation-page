const swup = new Swup({cache: false});

swup.on('pageView', () => console.log('pageView'));
swup.on('contentReplaced', () => console.log('contentReplaced'));
swup.on('pageLoaded', () => console.log('pageLoaded'));
swup.on('pagePreloaded', () => console.log('pagePreloaded'));