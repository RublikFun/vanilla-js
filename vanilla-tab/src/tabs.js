function Tabs() {
    let tabs = document.querySelectorAll('[data-tab]');

        tabs.forEach((tab) => {
            let tabItems   = tab.querySelectorAll('.tabs__item');
            let tabContent = tab.querySelectorAll('.tabs__content');

            // Show only active tabContent (init())
            (function init() {
                tabItems.forEach((item, index) => {
                    tabContent[index].classList.add('tabs__content_hide');
                    tabContent[index].classList.remove('tabs__content_show');
                    if (item.className == 'tabs__item tabs__item_active') {
                        tabContent[item.childElementCount].classList.remove('tabs__content_hide');
                        tabContent[item.childElementCount].classList.add('tabs__content_show');
                    }
                });
            })();

            //Bind click event
            tab.onclick = function(event) {
                let target = event.target;
                let index = [].indexOf.call(this.children, (event ? target : event.srcElement) );

                if (target.className == 'tabs__item') {
                    tabItems.forEach((item, index) => {
                        tabContent[index].classList.add('tabs__content_hide');
                        tabContent[index].classList.remove('tabs__content_show');
                        item.classList.remove('tabs__item_active');
                        target.classList.add('tabs__item_active');
                    });
                    tabContent[index].classList.remove('tabs__content_hide');
                    tabContent[index].classList.add('tabs__content_show');
                }
            }
        });
}

Tabs();
