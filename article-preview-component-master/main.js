/* Selectors */
const avatar = document.querySelector(".avatar")
const avatarInfo = avatar.querySelector(".avatar-info")
const share = avatar.querySelector(".share")
const shareButton = avatar.querySelector("button")

/* Event Handlers */
function toggleVisibility() {
  const isExpanded = shareButton.getAttribute("aria-expanded") === "true"
  const shouldExpand = !isExpanded

  shareButton.setAttribute("aria-expanded", String(shouldExpand))

  avatar.classList.toggle("visible", shouldExpand)
  avatarInfo.classList.toggle("visible", shouldExpand)
  share.classList.toggle("visible", shouldExpand)
  shareButton.classList.toggle("visible", shouldExpand)
}

/* Event Listeners */
shareButton.addEventListener("click", toggleVisibility)