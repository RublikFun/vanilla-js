'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function borderRadiusRange() {
    var container = document.getElementById('border-radius-app');
    var htmlBox = document.getElementById('html-box');
    var ranges = document.querySelectorAll('input');
    var vlu = 0,
        vpu = 0,
        nlu = 0,
        npu = 0;

    function changeValue() {
        var _this = this;

        var parent = this.parentElement;
        var spans = parent.querySelectorAll('span');

        [].concat(_toConsumableArray(spans)).map(function (item) {

            var elem = item.innerHTML = _this.value;

            if (item.className == 'vlu') {
                vlu = elem;
            } else if (item.className == 'vpu') {
                vpu = elem;
            } else if (item.className == 'nlu') {
                nlu = elem;
            } else {
                npu = elem;
            }
        });

        setRadius(vlu, vpu, nlu, npu);
        generateHTML(vlu, vpu, nlu, npu);
    }

    function setRadius() {
        var btlr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
        var btrr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
        var bblt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
        var bbrr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';

        document.getElementById('rectangle').style.borderRadius = btlr + '% ' + btrr + '% ' + bbrr + '% ' + bblt + '%';
    }

    function generateHTML() {
        var btlr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
        var btrr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
        var bblt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
        var bbrr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';

        htmlBox.innerHTML = 'border-radius: ' + btlr + '% ' + btrr + '% ' + bbrr + '% ' + bblt + '%;';
    }

    [].concat(_toConsumableArray(ranges)).map(function (range) {
        range.addEventListener('input', changeValue);
    });
}

borderRadiusRange();

new Clipboard('.btn');