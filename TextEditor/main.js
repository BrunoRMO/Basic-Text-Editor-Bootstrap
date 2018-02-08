$(document).ready(function () {
    /* font */
    $('#Arial').click(function () {
        document.execCommand('fontName', false, 'Arial, Helvetica, sans-serif');
    });
    $('#Comic').click(function () {
        document.execCommand('fontName', false, '"Comic Sans MS", cursive, sans-serif');
    });
    $('#Courier').click(function () {
        document.execCommand('fontName', false, '"Courier New", Courier, monospace');
    });
    $('#Georgia').click(function () {
        document.execCommand('fontName', false, 'Georgia, serif');
    });
    $('#Impact').click(function () {
        document.execCommand('fontName', false, 'Impact, Charcoal, sans-serif');
    });
    $('#Lucida').click(function () {
        document.execCommand('fontName', false, '"Lucida Console", Monaco, monospace');
    });
    $('#Times').click(function () {
        document.execCommand('fontName', false, '"Times New Roman", Times, serif');
    });
    $('#Trebuchet').click(function () {
        document.execCommand('fontName', false, '"Trebuchet MS", Helvetica, sans-serif');
    });

    /*font size*/
    $('#parag').click(function () {
        document.execCommand('FormatBlock', null, '<p>');
    });
    $('#heading').click(function () {
        document.execCommand('FormatBlock', null, '<H1>');
    });
    $('#smal').click(function () {
        document.execCommand('decreaseFontSize');
    });
    $('#head2').click(function () {
        document.execCommand('FormatBlock', null, '<H2>');
    });
    $('#head3').click(function () {
        document.execCommand('FormatBlock', null, '<H3>');
    });
    $('#head4').click(function () {
        document.execCommand('FormatBlock', null, '<H4>');
    });
    $('#head5').click(function () {
        document.execCommand('FormatBlock', null, '<H5>');
    });
    $('#head6').click(function () {
        document.execCommand('FormatBlock', null, '<H6>');
    });

    /**/
    $('#bold').click(function () {
        document.execCommand('bold');
    });
    $('#italic').click(function () {
        document.execCommand('italic');
    });
    $('#underline').click(function () {
        document.execCommand('underline');
    });

    /*color*/
    $('#cBlack').click(function () {
        document.execCommand('foreColor', null, 'black');
    });
    $('#cFirebrick').click(function () {
        document.execCommand('foreColor', null, 'Firebrick');
    });
    $('#cOrange').click(function () {
        document.execCommand('foreColor', null, 'Orange');
    });
    $('#cGreen').click(function () {
        document.execCommand('foreColor', null, 'Green');
    });
    $('#cNavy').click(function () {
        document.execCommand('foreColor', null, 'Navy');
    });
    $('#cPurple').click(function () {
        document.execCommand('foreColor', null, 'Purple');
    });
    $('#cGray').click(function () {
        document.execCommand('foreColor', null, 'Gray');
    });
    $('#cCrimson').click(function () {
        document.execCommand('foreColor', null, 'Crimson');
    });
    $('#cGold').click(function () {
        document.execCommand('foreColor', null, 'Gold');
    });
    $('#cLime').click(function () {
        document.execCommand('foreColor', null, 'Lime');
    });
    $('#cDodgerBlue').click(function () {
        document.execCommand('foreColor', null, 'DodgerBlue');
    });
    $('#cDarkOrchid').click(function () {
        document.execCommand('foreColor', null, 'DarkOrchid');
    });
    $('#cWhite').click(function () {
        document.execCommand('foreColor', null, 'White');
    });
    $('#cTomato').click(function () {
        document.execCommand('foreColor', null, 'Tomato');
    });
    $('#cYellow').click(function () {
        document.execCommand('foreColor', null, 'Yellow');
    });
    $('#cGreenYellow').click(function () {
        document.execCommand('foreColor', null, 'GreenYellow');
    });
    $('#cAqua').click(function () {
        document.execCommand('foreColor', null, 'Aqua');
    });
    $('#cViolet').click(function () {
        document.execCommand('foreColor', null, 'Violet');
    });

    /*justify*/
    $('#aLeft').click(function () {
        document.execCommand('justifyLeft');
    });
    $('#aCenter').click(function () {
        document.execCommand('justifyCenter');
    });
    $('#aRight').click(function () {
        document.execCommand('justifyRight');
    });
    $('#ajustify').click(function () {
        document.execCommand('justifyFull');
    });

    /* ident */
    $('#indent').click(function () {
        document.execCommand('indent');
    });
    $('#outdent').click(function () {
        document.execCommand('outdent');
    });

    /*list*/
    $('#lOrder').click(function () {
        document.execCommand('insertUnorderedList');
        var divtext = window.getSelection().focusNode.parentNode;
        divtext.style['list-style-type'] = "circle";
    });
    $('#lOrder1').click(function () {
        document.execCommand('insertOrderedList');
    });
    $('#lOrderA').click(function () {
        document.execCommand('insertOrderedList');
        var divtext = window.getSelection().focusNode.parentNode;
        divtext.type = "A";
    });
    $('#lOrderI').click(function () {
        document.execCommand('insertOrderedList');
        var divtext = window.getSelection().focusNode.parentNode;
        divtext.type = "I";
    });

    /*table*/
    $('#bTable').click(function () {

        var table = $('<table style="width:100%" border="1">');
        var cTable = $('<div>');

        for (i = 0; i < $('#iRow').val(); i++) {
            var row = $('<tr>');
            for (z = 0; z < $('#iColums').val(); z++) {
                var column = $('<td></td>');
                $(row).append(column);
            }
            $(table).append(row);
        }
        $(cTable).append(table);
        var out = $(cTable).html();

        document.execCommand('insertHTML', false, out);
    });

    /*emoticons*/
    $('#happy').click(function () {
        document.execCommand('insertText', false, '\u{1F642}');
    });
    $('#joy').click(function () {
        document.execCommand('insertText', false, '\u{1F602}');
    });
    $('#glass').click(function () {
        document.execCommand('insertText', false, '\u{1F60E}');
    });
    $('#love').click(function () {
        document.execCommand('insertText', false, '\u{1F60D}');
    });
    $('#think').click(function () {
        document.execCommand('insertText', false, '\u{1F914}');
    });
    $('#sleep').click(function () {
        document.execCommand('insertText', false, '\u{1F634}');
    });
    $('#nerd').click(function () {
        document.execCommand('insertText', false, '\u{1F913}');
    });
    $('#distr').click(function () {
        document.execCommand('insertText', false, '\u{1F644}');
    });
    $('#sad').click(function () {
        document.execCommand('insertText', false, '\u{1F641}');
    });
    $('#neutral').click(function () {
        document.execCommand('insertText', false, '\u{1F636}');
    });
    $('#unamu').click(function () {
        document.execCommand('insertText', false, '\u{1F612}');
    });
    $('#pensive').click(function () {
        document.execCommand('insertText', false, '\u{1F614}');
    });
    $('#confuse').click(function () {
        document.execCommand('insertText', false, '\u{1F615}');
    });
    $('#astonis').click(function () {
        document.execCommand('insertText', false, '\u{1F632}');
    });
    $('#angry').click(function () {
        document.execCommand('insertText', false, '\u{1F621}');
    });
    $('#fear').click(function () {
        document.execCommand('insertText', false, '\u{1F631}');
    });
    $('#cry').click(function () {
        document.execCommand('insertText', false, '\u{1F622}');
    });
    $('#nause').click(function () {
        document.execCommand('insertText', false, '\u{1F922}');
    });

    /* link */
    $('#bLink').click(function () {

        if ($('#iLink').val().substring(0, 8) == 'https://') {
            var linkURL = $('#iLink').val();
        } else {
            var linkURL = "https://" + $('#iLink').val();
        }

        var sText = window.getSelection();

        document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');

    });

    /*video*/
    $('#bVideo').click(function () {
        if ($('#iVideo').val().substring(0, 8) == 'https://') {
            var linkp = $('#iVideo').val().replace("watch?v=", "embed/");
        } else {
            var linkp = "https://" + $('#iVideo').val().replace("watch?v=", "embed/");
        }
        var embed = '<iframe title="YouTube video player" src="' + linkp + '" allowfullscreen="true" width="480" frameborder="0" height="390">';

        document.execCommand("Inserthtml", false, embed);

    });

    /*images*/
    $('#bImg').click(function () {
        if ($('#iLink').val().substring(0, 8) == 'https://') {
            document.execCommand('insertImage', null, $('#iImg').val());
        } else {
            document.execCommand('insertImage', null, "https://" + $('#iImg').val());
        }
    });

});