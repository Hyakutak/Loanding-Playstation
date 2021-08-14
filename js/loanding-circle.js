var bar = new ProgressBar.Circle(container, {
    color: '#0072ce',
    traiColor: '#EEE',
    traiWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#0072CE', a:0},
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
    }
});

bar.animate(1.0);