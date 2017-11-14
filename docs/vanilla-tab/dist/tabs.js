'use strict';

function Tabs() {
    var tabs = document.querySelectorAll('[data-tab]');

    tabs.forEach(function (tab) {
        var tabItems = tab.querySelectorAll('.tabs__item');
        var tabContent = tab.querySelectorAll('.tabs__content');

        // Show only active tabContent (init())
        (function init() {
            tabItems.forEach(function (item, index) {
                tabContent[index].classList.add('tabs__content_hide');
                tabContent[index].classList.remove('tabs__content_show');
                if (item.className == 'tabs__item tabs__item_active') {
                    tabContent[item.childElementCount].classList.remove('tabs__content_hide');
                    tabContent[item.childElementCount].classList.add('tabs__content_show');
                }
            });
        })();

        //Bind click event
        tab.onclick = function (event) {
            var target = event.target;
            var index = [].indexOf.call(this.children, event ? target : event.srcElement);

            if (target.className == 'tabs__item') {
                tabItems.forEach(function (item, index) {
                    tabContent[index].classList.add('tabs__content_hide');
                    tabContent[index].classList.remove('tabs__content_show');
                    item.classList.remove('tabs__item_active');
                    target.classList.add('tabs__item_active');
                });
                tabContent[index].classList.remove('tabs__content_hide');
                tabContent[index].classList.add('tabs__content_show');
            }
        };
    });
}

Tabs();