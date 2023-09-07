var loading = document.getElementById("pre-loading")
window.addEventListener("load", function(){
  loading.style.display = "none";
})

document.addEventListener('DOMContentLoaded', function() {
    const moreAboutBtn = document.getElementById('more-about-btn');
    const socialIcons = document.getElementById('social-icons');
    const navbarToggle = document.querySelector('.navbar-toggle i');
    const navbar = document.querySelector('.navbar');
    
    moreAboutBtn.addEventListener('click', () => {
      socialIcons.classList.toggle('active');
    });
  
    navbarToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navbar.style.display = 'block';
      navbar.style.overflow = 'hidden'
    });
  
    function handleWindowResize() {
      const windowWidth = window.innerWidth;
  
      if (windowWidth <= 932) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }
  
    handleWindowResize();
  
    window.addEventListener('resize', handleWindowResize);
  
    document.addEventListener('click', (event) => {
      const targetElement = event.target;
  
      if (!socialIcons.contains(targetElement) && targetElement !== moreAboutBtn) {
        socialIcons.classList.remove('active');
      }
  
      if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
          handleWindowResize()
      }
    });
  });
  function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "e1215024govardan.n.a.cse@gmail.com",
        Password: "mpceevmldcvdsxcg",
        To: "e1215024govardancse@gmail.com",
        // From : "e1215024govardancse@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone: " + document.getElementById("phone").value +
            "<br> Message: " + document.getElementById("message").value 
    }).then(
        message => {
            alert("Message Sent Successfully");
            resetForm();
        }
    );
  }
  
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  }
  
  console.log(loading)
  
  // const text = document.querySelector(".sec-text");
  // const textLoad = ()=>{
  //   setTimeout(()=>{
  //     text.textContent = "Software Engineer";
  //   }, 0);
  
  //   setTimeout(()=>{
  //     text.textContent = "Web Developer";
  //   }, 4000);
  
  //   setTimeout(()=>{
  //     text.textContent = "Python Developer";
  //   }, 8000);
  
  
  // }
  // textLoad();
  // setInterval(textLoad,8000);
  
  
  const text = document.querySelector(".sec-text");
  const textOptions = ["Software Engineer", "Web Developer", "Python Developer"];
  let currentIndex = 0;
  
  const updateText = () => {
    text.textContent = textOptions[currentIndex];
    currentIndex = (currentIndex + 1) % textOptions.length;
  };
  
  updateText(); // Set initial text
  
  const textInterval = setInterval(updateText, 4020);
  
  const popup = document.getElementById("popup")
  
  function openPopup(){
    popup.classList.add("open-popup")
  }
  function closePopup(){
    popup.classList.remove("close-popup")
  }
  
  