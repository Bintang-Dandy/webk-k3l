document.addEventListener("DOMContentLoaded", () => {
  const checklist = document.querySelector(".checklist");
  const count = document.querySelector("#progress-count");
  const fill = document.querySelector("#progress-fill");
  const bar = document.querySelector("#progress-bar");

  function updateProgress() {
    if (!checklist || !count || !fill || !bar) return;
    const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    const completed = checklist.querySelectorAll('input[type="checkbox"]:checked').length;
    
    count.textContent = `${completed} dari ${total}`;
    const percent = total > 0 ? (completed / total) * 100 : 0;
    fill.style.width = `${percent}%`;
    bar.setAttribute("aria-valuenow", completed);
    bar.setAttribute("aria-valuemax", total);

    const feedbackEl = document.querySelector("#checklist-feedback");
    if (feedbackEl) {
      if (completed === total && total > 0) {
        feedbackEl.textContent = "✓ Sempurna! Seluruh protokol kesiapan K3 telah terpenuhi.";
        feedbackEl.style.color = "var(--green)";
      } else {
        feedbackEl.textContent = "Lengkapi semua item sebelum memulai kegiatan praktikum atau kerja.";
        feedbackEl.style.color = "var(--muted)";
      }
    }
  }

  if (checklist) {
    checklist.addEventListener("change", updateProgress);
    updateProgress();
  }
});