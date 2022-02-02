import { getElement, hideContent, showContent } from './utils';

const tabList = getElement('[role="tablist"]', document) as HTMLDivElement;
const tabs = getElement('[role="tab"]', tabList, true) as HTMLButtonElement[];

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;

enum Pointer {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

function changeTabFocus(e: KeyboardEvent) {
  if (e.code === Pointer.LEFT || e.code === Pointer.RIGHT) {
    tabs[tabFocus].setAttribute('tabindex', '-1');
  }

  if (e.code === Pointer.RIGHT) {
    tabFocus++;
    if (tabFocus >= tabs.length) tabFocus = 0;
  }

  if (e.code === Pointer.LEFT) {
    tabFocus--;
    if (tabFocus < 0) tabFocus = tabs.length - 1;
  }

  tabs[tabFocus].setAttribute('tabindex', '0');
  tabs[tabFocus].focus();
}

function changeTabPanel(e: MouseEvent) {
  // used currentTarget to get the Button itself and not the child spans
  const targetTab = e.currentTarget as HTMLButtonElement;
  const targetPanel = targetTab.getAttribute('aria-controls')!;
  const targetImage = targetTab.getAttribute('data-image')!;

  const tabContainer = targetTab.parentElement!;
  const mainContainer = tabContainer.parentElement!;

  tabContainer
    .querySelector('[aria-selected="true"]')!
    .setAttribute('aria-selected', 'false');

  targetTab.setAttribute('aria-selected', 'true');

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, `#${targetPanel}`);

  hideContent(mainContainer, 'picture');
  showContent(mainContainer, `#${targetImage}`);
}
