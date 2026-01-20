const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{threshold:0.15});

document.querySelectorAll(".section, .project, .skill, .edu-card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  observer.observe(el);
});
