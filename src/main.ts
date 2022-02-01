// NAVIGATION
const nav = document.querySelector('.primary-navigation') as HTMLUListElement;
const navBtn = document.querySelector(
  '.btn--mobile-toggle'
) as HTMLButtonElement;

navBtn.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')!;

  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true');
    navBtn.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('data-visible', 'false');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});

// const categories = data.destinations.reduce((names, destination) => {
//   if (!names.includes(destination.name)) {
//     names.push(destination.name);
//   }
//   return names;
// }, [] as string[]);

// console.log(categories);

// TABS
const tabList = document.querySelector('[role="tablist"]')! as HTMLDivElement;
const tabs = [
  ...tabList.querySelectorAll('[role="tab"]'),
]! as HTMLButtonElement[];

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
tabList.addEventListener('keydown', changeTabFocus);

function changeTabFocus(e: KeyboardEvent) {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute('tabindex', '-1');
  }

  if (e.keyCode === keyDownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) tabFocus = 0;
  }

  if (e.keyCode === keyDownLeft) {
    tabFocus--;
    if (tabFocus < 0) tabFocus = tabs.length - 1;
  }

  tabs[tabFocus].setAttribute('tabindex', '0');
  tabs[tabFocus].focus();
}

function changeTabPanel(e: MouseEvent) {
  const targetTab = e.target as HTMLButtonElement;
  const targetPanel = targetTab.getAttribute('aria-controls')!;
  const targetImage = targetTab.getAttribute('data-image')!;

  console.log(targetImage);

  const tabContainer = targetTab.parentElement!;
  const mainContainer = tabContainer.parentElement!;

  mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
    panel.setAttribute('hidden', 'true');
  });
  mainContainer.querySelector(`#${targetPanel}`)!.removeAttribute('hidden');

  mainContainer.querySelectorAll('picture').forEach((picture) => {
    console.log(picture);

    picture.setAttribute('hidden', 'true');
  });
  mainContainer.querySelector(`#${targetImage}`)!.removeAttribute('hidden');
}
