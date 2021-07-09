document.addEventListener("DOMContentLoaded", () => {
    $('#heroButtonText').tilt({
        scale: 1.2,
        perspective: 500,
        easing: 'cubic-bezier(0.21, 0.83, 0, 0.99)'
    })
    $('#heroImage, #contactButton').tilt({
        perspective: 500,
        easing: 'cubic-bezier(0.21, 0.83, 0, 0.99)'
    })
    $('.card').tilt({
        perspective: 1000,
        easing: 'cubic-bezier(0.21, 0.83, 0, 0.99)'
    })
    // HERO //
    let heroHeading = document.querySelector('#heroHeading');
    
    // H1 Heading //
    anime({
        targets: heroHeading,
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        opacity: [0, 1],
        duration: 1500,
    })

    // Button //
    anime({
        targets: '#heroButton',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 600,
    })

    // Image //
    anime({
        targets: '#heroImage',
        translateX: [50, 0],
        easing: 'easeOutExpo',
        opacity: [0, 1],
        delay: 500,
    })

    // Nav Button //
    anime({
        targets: '#navButton',
        translateX: [50, 0],
        easing: 'easeOutExpo',
        opacity: [0, 1],
        delay: 1000
    })

    // Nav Socials //
    anime({
        targets: '#navSocials',
        translateY: [20, 0],
        easing: 'easeOutExpo',
        opacity: [0, 1],
        delay: 1000
    })
})


