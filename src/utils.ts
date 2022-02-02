function hideContent(parent: ParentNode, content: string) {
  parent
    .querySelectorAll(content)!
    .forEach((item) => item.setAttribute('hidden', 'true'));
}

function showContent(parent: ParentNode, content: string) {
  parent.querySelector(content)!.removeAttribute('hidden');
}

/**
 * @author pHoeniX-svg
 * @example
 * getElement<HTMLButtonElement>('.tabBtn', '.container')
 * getElement<HTMLButtonElement>('.tabBtn', '.container', false)
 * getElement<HTMLButtonElement>('.tabBtn', '.container', true)
 */

function getElement<T extends Element>(
  selector: string,
  scope: ParentNode | Document
): T;
function getElement<T extends Element>(
  selector: string,
  scope: ParentNode | Document,
  isElementArray: true
): T[];
function getElement<T extends Element>(
  selector: string,
  scope: ParentNode | Document,
  isElementArray: false
): T;
function getElement<T extends Element>(
  selector: string,
  scope: ParentNode | Document,
  isElementArray?: boolean
): T | T[] {
  try {
    if (isElementArray) {
      const element = [...scope.querySelectorAll(selector)] as T[];
      if (element.length < 1) throw Error;
      return element;
    } else {
      const element = scope.querySelector(selector) as T;
      if (!element) throw Error;
      return element;
    }
  } catch (e) {
    throw new Error(
      `There is an error. Please check if your selector: ${selector} is correct`
    );
  }
}

export { getElement, showContent, hideContent };
