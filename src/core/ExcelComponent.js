import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, option= {}) {
    super($root, option.listeners);
    this.name = option.name
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
}
