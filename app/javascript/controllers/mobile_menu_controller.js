import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "toggle"]
  
  connect() {
    // Initialize mobile menu state
    this.menuHidden = true
    this.updateMenuVisibility()
  }
  
  toggle() {
    this.menuHidden = !this.menuHidden
    this.updateMenuVisibility()
  }
  
  updateMenuVisibility() {
    if (this.menuHidden) {
      this.menuTarget.classList.add("hidden")
      this.toggleTarget.setAttribute("aria-expanded", "false")
    } else {
      this.menuTarget.classList.remove("hidden")
      this.toggleTarget.setAttribute("aria-expanded", "true")
    }
  }
  
  close() {
    this.menuHidden = true
    this.updateMenuVisibility()
  }
}