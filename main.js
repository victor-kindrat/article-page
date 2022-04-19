let styleSheme = localStorage.getItem('styleSheme');
let custom = localStorage.getItem('custom') || 'false';
let setStyleScheme = (styleSheme) => {
    custom = false;
    localStorage.setItem('custom', 'false')
    switch (styleSheme) {
        case 'default':
            $('#header').css('background', 'linear-gradient(180deg, #5668f056 0%, #ffffff00 90%)');
            $('.wrap *, .txt, .txt *').css('fontFamily', "'Epilogue', Montserrat, sans-serif");
            $('option[value="Epilogue"]').attr('selected', 'true');
            $('body').css('background', "#ffffff");
            $('.text').css('color', '#141414');
            $('.headline').css('color', '#141414');
            $('.logo__text').css('color', '#333333');
            $('.settings').css('background', '#5668f0c4');
            $('.selected').css('outline', '4px solid #4D4DFF');
            localStorage.setItem('backgroundColor', '#ffffff');
            localStorage.setItem('textColor', '#141414');
            localStorage.setItem('fontFamily', 'Epilogue');        
            break;
        case 'style':
            $('#header').css('background', 'linear-gradient(180deg, rgba(240, 169, 86, 0.5) 0%, rgba(196, 196, 196, 0) 100%)');
            $('.wrap *, .txt, .txt *').css('fontFamily', "'Bodoni Moda', sans-serif");
            $('option[value="Bodoni Moda"]').attr('selected', 'true');
            $('body').css('background', "#F4E7C3");
            $('.text').css('color', '#333333');
            $('.headline').css('color', '#333333');
            $('.logo__text').css('color', '#333333');
            $('.settings').css('background', '#F0A956c4');
            $('.selected').css('outline', '4px solid #DA9544');
            localStorage.setItem('backgroundColor', '#F4E7C3');
            localStorage.setItem('textColor', '#333333');
            localStorage.setItem('fontFamily', 'Bodoni Moda');     
            break;
        case 'monster':
            $('#header').css('background', 'linear-gradient(180deg, rgba(86, 240, 222, 0.25) 0%, rgba(196, 196, 196, 0) 100%)');
            $('.wrap *, .txt, .txt *').css('fontFamily', "'Viaoda Libre', sans-serif");
            $('option[value="Viaoda Libre"]').attr('selected', 'true');
            $('body').css('background', "#333333");
            $('.text').css('color', '#ffffff');
            $('.headline').css('color', '#ffffff');
            $('.logo__text').css('color', '#ffffff');
            $('.settings').css('background', '#333333c4');
            $('.selected').css('outline', '4px solid rgba(86, 240, 222, 1)');
            localStorage.setItem('backgroundColor', '#333333');
            localStorage.setItem('textColor', '#ffffff');
            localStorage.setItem('fontFamily', 'Viaoda Libre');  
            break;
        case 'letter':
            $('#header').css('background', 'linear-gradient(180deg, rgba(86, 157, 240, 0.25) 0%, rgba(196, 196, 196, 0) 100%)');
            $('.wrap *, .txt, .txt *').css('fontFamily', "'My Soul', sans-serif");
            $('option[value="My Soul"]').attr('selected', 'true');
            $('body').css('background', "#CBD1FE");
            $('.text').css('color', '#141414');
            $('.headline').css('color', '#141414');
            $('.logo__text').css('color', '#141414');
            $('.settings').css('background', '#569DF0c4');
            $('.selected').css('outline', '4px solid rgba(86, 240, 222, 1)');
            localStorage.setItem('backgroundColor', '#CBD1FE');
            localStorage.setItem('textColor', '#141414');
            localStorage.setItem('fontFamily', 'My Soul');  
            break;
        case 'modern':
            $('#header').css('background', 'linear-gradient(180deg, rgba(240, 86, 123, 0.25) 0%, rgba(196, 196, 196, 0) 71.15%)');
            $('.wrap *, .txt, .txt *').css('fontFamily', "'Montserrat', sans-serif");
            $('option[value="Montserrat"]').attr('selected', 'true');
            $('body').css('background', "#F5DCDC");
            $('.text').css('color', '#333333');
            $('.headline').css('color', '#141414');
            $('.logo__text').css('color', '#333333');
            $('.settings').css('background', '#F0567Bc4');
            $('.selected').css('outline', '4px solid #F5DCDC');
            localStorage.setItem('backgroundColor', '#F5DCDC');
            localStorage.setItem('textColor', '#333333');
            localStorage.setItem('fontFamily', 'Montserrat');  
            break;
    }
}

if (custom === 'false') {
    setStyleScheme(styleSheme);
}
let textSize = localStorage.getItem('textFontSize') || 16;
$('.text').css('fontSize', textSize + 'px');
$('#setFZ').val(textSize)
let fontWeight = localStorage.getItem('textFontWeight') || 400;
$('.text').css('fontWeight', fontWeight);
$('#setFW').val(fontWeight)
let bgColor = localStorage.getItem('backgroundColor') || '#ffffff';
$('body').css('background', bgColor)
let textColor = localStorage.getItem('textColor') || '#141414';
$('.wrap *').css('color', textColor);
let fontFamily = localStorage.getItem('fontFamily') || 'Epilogue';
$('.wrap *, .txt, .txt *').css('fontFamily', fontFamily);
$('select').val(fontFamily);

$('#openStyleSelect').click(() => {
    $('.settings__row').fadeOut(300);
    setTimeout(() => {
        $('.settings__style-scheme').css('display', 'flex');
        $('.settings__style-scheme').fadeIn(300);
    }, 300);
})

$('.settings__headline').click(() => {
    $('.settings__style-scheme').fadeOut(300);
    setTimeout(() => {
        $('.settings__row').fadeIn(300);
    }, 300);
})

$('.settings__column').click(function () {
    let style = $(this).children('p').html() + " ";
    style = style.slice(0, style.indexOf(' ')).toLowerCase();
    setStyleScheme(style);
    localStorage.setItem('styleSheme', style);
    $('.settings__column').css('outline', '0px solid #000000');
    $('.settings__column.selected').attr('class', 'settings__column');
    $(this).attr('class', 'settings__column selected');
});

$('#settingsOpen').click(function () {
    $('.settings').slideToggle(300);
    $('#wrap').css('filter', 'blur(3px)');
    $('.header').fadeToggle(0)
})

$('body').dblclick(function () {
    $('.settings').slideUp(300);
    $('#wrap').css('filter', '');
    $('.header').fadeIn(300);
    $('.settings__style-scheme').fadeOut(300);
    $('.settings__row').fadeIn(300);
})

document.getElementById('setFZ').oninput = function () {
    let fz = document.getElementById('setFZ').value;
    $('.text').css('fontSize', fz + 'px');
    localStorage.setItem('textFontSize', fz);
}
document.getElementById('setFW').oninput = function () {
    let fw = document.getElementById('setFW').value;
    $('.text').css('fontWeight', fw)
    localStorage.setItem('textFontWeight', fw);
}
document.getElementById('bgColorChange').oninput = function () {
    let bgc = document.getElementById('bgColorChange').value;
    $('body').css('background', bgc)
    localStorage.setItem('backgroundColor', bgc);
    custom = true;
    localStorage.setItem('custom', 'true')
}
document.getElementById('txtColorChange').oninput = function () {
    let txtc = document.getElementById('txtColorChange').value;
    $('.wrap *').css('color', txtc);
    localStorage.setItem('textColor', txtc);
    custom = true;
    localStorage.setItem('custom', 'true')
}
document.getElementById('ffamily').oninput = function () {
    let val = document.getElementById('ffamily').value;
    $('.wrap *, .txt, .txt *').css('fontFamily', val);
    localStorage.setItem('fontFamily', val);
    custom = true;
    localStorage.setItem('custom', 'true')
}
$('#reset').click(function () {
    localStorage.clear();
    setStyleScheme('default');
    $('.text').css('fontSize', '16px');
    $('#setFZ').val(16)
    $('.text').css('fontWeight', 400);
    $('#setFW').val(400);
})