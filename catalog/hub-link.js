(() => {
  "use strict";

  document.querySelectorAll('a[href$="_zh.html"]').forEach(link => link.remove());

  if (document.querySelector(".mw3-hub-return")) return;
  const link = document.createElement("a");
  link.className = "mw3-hub-return";
  link.href = "../../index.html#course-library";
  link.textContent = "← Learning Hub";
  link.setAttribute("aria-label", "Return to the MooseWeb3 Learning Hub");
  Object.assign(link.style, {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    zIndex: "9999",
    padding: "10px 14px",
    color: "#ffffff",
    background: "#10213f",
    border: "1px solid rgba(255,255,255,.24)",
    borderRadius: "999px",
    boxShadow: "0 10px 30px rgba(16,33,63,.24)",
    font: "700 13px/1.2 system-ui, sans-serif",
    textDecoration: "none"
  });
  document.body.appendChild(link);
})();
