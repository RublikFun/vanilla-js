function borderRadiusRange() {
    let container = document.getElementById('border-radius-app');
    let htmlBox   = document.getElementById('html-box');
    let ranges    = document.querySelectorAll('input');
    let vlu = 0 , vpu = 0, nlu = 0, npu = 0;

    function changeValue() {
        let parent  = this.parentElement;
        const spans = parent.querySelectorAll('span');

        [...spans].map((item) => {

            let elem = item.innerHTML = this.value;

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

    function setRadius(btlr ='0', btrr ='0', bblt ='0', bbrr ='0') {
        document.getElementById('rectangle').style.borderRadius = btlr + '% ' + btrr + '% ' + bbrr + '% ' + bblt + '%';
    }

    function generateHTML(btlr ='0', btrr ='0', bblt ='0', bbrr ='0') {
            htmlBox.innerHTML = 'border-radius: ' + btlr + '% ' + btrr + '% ' + bbrr + '% ' + bblt + '%;';
    }

    [...ranges].map((range) => {
	    range.addEventListener('input', changeValue);
    });
}

borderRadiusRange();

new Clipboard('.btn');
