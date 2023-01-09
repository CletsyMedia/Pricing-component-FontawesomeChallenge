const toggle = document.getElementById('pricing');
const anually = document.querySelectorAll('.anually');
const monthly = document.querySelectorAll('.monthly');

// Switching between annually and monthly
toggle.addEventListener("change", handleToggle);

function handleToggle(event){
  if(event.target.checked){
    anually.forEach(e => e.setAttribute("hidden", true));
    monthly.forEach(e => e.removeAttribute("hidden"));
  }else{
    anually.forEach(e => e.removeAttribute("hidden"))
    monthly.forEach(e => e.setAttribute("hidden", true))
  }
}