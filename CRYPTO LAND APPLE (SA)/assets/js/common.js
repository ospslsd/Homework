$('.js-range-slider').ionRangeSlider({
    skin: "round",
    min: 2000,
    max: 25000,
    from: 2000,
    hide_from_to: true,
    hide_min_max: true,
    onStart: function (data) {
        $('#count').text('R' + numeral(data.from).format());
        $('#day').text('R' + numeral(data.from * 2.13 / 30).format().replace('.', ','));
        $('#month').text('R' + numeral(data.from * 2.13).format().replace('.', ','));
        $('#year').text('R' + numeral(data.from * 2.13 * 12).format().replace('.', ','));
    },
    onChange: function (data) {
        $('#count').text('R' + numeral(data.from).format());
        if (data.from < 3000 ) {
            $('#day').text('R' + numeral(data.from * 2.13 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 2.13).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 2.13 * 12).format().replace('.', ','));
            $('.phone__bottom-wrapper').each(function() {
            });
        } else if (data.from < 5000) {
            $('#day').text('R' + numeral(data.from * 3.5 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 3.5).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 3.5 * 12).format().replace('.', ','));
            $('.phone__bottom-wrapper').each(function() {
            });
        } else if (data.from < 10000) {
            $('#day').text('R' + numeral(data.from * 4.8 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 4.8).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 4.8 * 12).format().replace('.', ','));
        } else if (data.from < 15000) {
            $('#day').text('R' + numeral(data.from * 5.21 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 5.21).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 5.21 * 12).format().replace('.', ','));
        } else if (data.from < 20000) {
            $('#day').text('R' + numeral(data.from * 6.007 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 6.007).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 6.007 * 12).format().replace('.', ','));
        } else if (data.from < 25000) {
            $('#day').text('R' + numeral(data.from * 8.137 / 30).format().replace('.', ','));
            $('#month').text('R' + numeral(data.from * 8.137).format().replace('.', ','));
            $('#year').text('R' + numeral(data.from * 8.137 * 12).format().replace('.', ','));
        }
    }
});

const mySlider = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pagination: false,
    gap: 100,
    breakpoints: {
        1100: {
            arrows: false,
            pagination: true
        }
    }
});

mySlider.mount();