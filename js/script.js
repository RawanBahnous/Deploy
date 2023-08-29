
        function showBackend() {
          let frontWind = document.querySelector(".frontend");
          let backWind = document.querySelector(".backend");
          let jsWind = document.querySelector(".backend");
          let linkText = document.getElementById("show-projects");
          if (backWind.classList.contains("d-none")) {
            backWind.classList.remove("d-none");
            frontWind.classList.add("d-none");
            linkText.innerHTML = "Show Frontend Projects";
          } else {
            backWind.classList.add("d-none");
            frontWind.classList.remove("d-none");
            linkText.innerHTML = "Show Backend Projects";
          }
        }
  
        function light() {
          let container = document.querySelector(".container");
          container.classList.toggle("light-theme");
        }
  
        let drawlink = document.getElementById("draws");
        let art = document.querySelector(".contain-arts");
        function toggleArtVisibility() {
          art.classList.toggle("d-none");
        }
        drawlink.addEventListener("click", toggleArtVisibility);
  
  
        const aboutWindo = document.getElementById("about-windo");
        const projectsWindo = document.getElementById("projects-windo");
        const contactWindo = document.getElementById("contact");
  
        function showContactWindo() {
          contactWindo.style.display = "block";
        }
    
        function showAboutWindo() {
          aboutWindo.style.display = "block";
          aboutWindo.style.width = "85%"; 
          aboutWindo.style.transform = `scale(1.09)`; 
        }
    
        function hideAboutWindo() {
          aboutWindo.style.display = "none";
        }
    
        function showProjectsWindo() {
          projectsWindo.style.display = "block";
          projectsWindo.style.width = "85%"; 
          projectsWindo.style.transform = `scale(1.04)`; 
        }
    
        function hideProjectsWindo() {
          projectsWindo.style.display = "none";
        }
    
        function handleScroll() {
          const oneSection = document.getElementById("one");
          const projectsSection = document.getElementById("projects");
          const interstsSection = document.getElementById("intersts");
          
          const oneSectionBottom = oneSection.offsetTop + oneSection.offsetHeight;
          const projectsSectionTop = projectsSection.offsetTop;
          const interstsSecBottom = interstsSection.offsetTop + interstsSection.offsetHeight;
    
          if (window.pageYOffset > oneSectionBottom && window.pageYOffset < projectsSectionTop) {
            showAboutWindo();
            //hideProjectsWindo();
          } else if (window.pageYOffset >= projectsSectionTop) {
            //hideAboutWindo();
            showProjectsWindo();
          } else {
            hideAboutWindo();
            hideProjectsWindo();
          }
          if(window.pageYOffset > interstsSecBottom){
              showContactWindo();
          }
        }
    
        window.addEventListener("scroll", handleScroll);
  