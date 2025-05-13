document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지가 성공적으로 로드되었습니다.");
});
\v2\read\-1\1668

function toggleProject(id) {
    // 모든 project-detail을 숨기기
    const all = document.querySelectorAll(".project-detail");
    all.forEach(div => div.style.display = "none");
  
    // 선택한 id만 보이게 하기
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
    }
  }