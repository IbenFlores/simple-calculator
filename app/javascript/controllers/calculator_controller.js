import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calculator"
export default class extends Controller {
  static targets = ["expression", "firstValue", "operator", "secondValue", "result"]

  connect() {
    console.log("hewwo")
  }

  updateValues() {
    if (this.operatorTarget.innerText !== "") {
      this.secondValueTarget.innerText = this.expressionTarget.value
    } else {
      this.firstValueTarget.innerText = this.expressionTarget.value
    }
  }

  placeNumber(e) {
    if (this.resultTarget.innerText !== "") {
      this.firstValueTarget.innerText = "";
      this.operatorTarget.innerText = "";
      this.secondValueTarget.innerText = "";
      this.resultTarget.innerText = "";
    }
    this.expressionTarget.value += e.target.innerText;
    if (this.operatorTarget.innerText !== "") {
      this.secondValueTarget.innerText = this.expressionTarget.value
    } else {
      this.firstValueTarget.innerText = this.expressionTarget.value
    }
  }

  placeOperator(e) {
    if (this.resultTarget.innerText !== "") {
      this.firstValueTarget.innerText = this.resultTarget.innerText
      this.operatorTarget.innerText = e.target.innerText
      this.secondValueTarget.innerText = ""
      this.resultTarget.innerText = ""
    } else if (this.firstValueTarget.innerText !== "" && this.operatorTarget.innerText == "") {
        this.firstValueTarget.innerText = this.expressionTarget.value;
        this.expressionTarget.value = "";
        this.operatorTarget.innerText = e.target.innerText
    }
  }

  getResult(e) {
    this.secondValueTarget.innerText = this.expressionTarget.value
    this.expressionTarget.value = ""

    const firstNumber = this.firstValueTarget.innerText
    const operator = this.operatorTarget.innerText
    const secondNumber = this.secondValueTarget.innerText

    this.resultTarget.innerText = eval(`${firstNumber} ${operator} ${secondNumber}`)
  }

  clearCalc() {
    this.expressionTarget.value = "";
    this.firstValueTarget.innerText = "";
    this.operatorTarget.innerText = "";
    this.secondValueTarget.innerText = "";
    this.resultTarget.innerText = "";
  }
}
