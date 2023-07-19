/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable max-len */
const mobileoption = document.getElementById('mobileoption');
const body = document.querySelector('body');
const barClick = document.getElementById('barClick');
const popupWindow = document.getElementById('popupmenu');
const popClient = document.getElementById('popclient');
const popPicture = document.getElementById('poppicture');
const popTag = document.getElementById('poptag');
const popMobileDetail = document.getElementById('popmobiledetail');
const popDesktopDetail = document.getElementById('popdesktopdetail');
const worksCard = document.querySelector('.workscard');
const popName = document.getElementById('popname');
const seeLive = document.getElementById('seelive');
const seeSource = document.getElementById('seesource');
const inputName = document.getElementById('inputname');
mobileoption.style.display = 'none';
const projectData = [
  {
    desktopName: 'EventConnect',
    mobileName: 'EventConnect',
    desktopClient: ['CAPSTONE', '&#x2022 Full Stack Dev', '&#x2022 2023'],
    mobileClient: ['CAPSTONE', '&#x2022 Full Stack Dev', '&#x2022 2023'],
    desktopTag: ['html', 'css', 'javascript', 'Github', 'Ruby on Rails', 'React'],
    mobileTag: ['Rails', 'React', 'PostgreSQL'],
    desktopPicture: './images/evecon_dek.png',
    mobilePicture: './images/evecon_dek.png',
    desktopAlt: 'EventConnect',
    mobileAlt: 'EventConnect',
    desktopdetail: 'Event Connect is an application which allows users to create,delete and reserve event.',
    mobiledetail: 'Event Connect is an application which allows users to create,delete and reserve event.',
    desktopmainTag: ['Ruby on Rails', 'React', 'PostgreSQL'],
    popmobiledetail: 'Event Connect is an application which allows users to create,delete and reserve event. A user also can reserve available event.',
    popdesktopdetail: 'Event Connect is an application which allows users to create,delete and reserve event. A user also can reserve available event.',
    seelive: 'See live',
    seesource: 'See Source',
    liveLink: 'https://event-connect-capstone.web.app/',
    liveSource: 'https://github.com/jugosack/event_connect_client',
  },
  {
    desktopName: 'Fake Shop',
    mobileName: 'Fake Shop',
    desktopClient: ['CAPSTONE', '&#x2022 Front End Dev', '&#x2022 2023'],
    mobileClient: ['CAPSTONE', '&#x2022 Front End Dev', '&#x2022 2023'],
    desktopTag: ['html', 'css', 'javascript', 'Github', 'API', 'React'],
    mobileTag: ['React', 'css', 'javascript'],
    desktopPicture: './images/fakestore.png',
    mobilePicture: './images/fakestore_mob.png',
    desktopAlt: 'Fake Shop',
    mobileAlt: 'Fake Shop',
    desktopdetail: 'Simple clothing, electronics and jewelry e-commerce consuming the Fake Store API, using JavaScript, Styled Components, Context API, axios and more.',
    mobiledetail: 'Simple clothing, electronics and jewelry e-commerce consuming the Fake Store API, using JavaScript, Styled Components, Context API, axios and more.',
    desktopmainTag: ['html', 'React', 'css', 'javascript'],
    popmobiledetail: 'Simple clothing, electronics and jewelry e-commerce consuming the Fake Store API, using JavaScript, Styled Components, Context API, axios and more.',
    popdesktopdetail: 'Simple clothing, electronics and jewelry e-commerce consuming the Fake Store API, using JavaScript, Styled Components, Context API, axios and more.',
    seelive: 'See live',
    seesource: 'See Source',
    liveLink: 'https://fakestoreapi-898e.onrender.com/',
    liveSource: 'https://github.com/jugosack/react-capstone-fakestore',
  },

  {
    desktopName: 'Budget Application',
    mobileName: 'Budget Application',
    desktopClient: ['CAPSTONE', '&#x2022 Full Stack Dev', '&#x2022 2023'],
    mobileClient: ['CAPSTONE', '&#x2022 Full Stack Dev', '&#x2022 2023'],
    desktopTag: ['html', 'css', 'Ruby on Rails', 'Github'],
    mobileTag: ['html', 'css', 'Ruby on Rails'],
    desktopPicture: './images/fambud_dek.png',
    mobilePicture: './images/fambud_mob.png',
    desktopAlt: 'Budget Application',
    mobileAlt: 'Budget Application',
    desktopdetail: 'This mobile web app allows users to create categories and add transactions to each category. The app will show the total amount spent on each category. The app is built with Ruby on Rails. The app is deployed on Render.',
    mobiledetail: 'This mobile web app allows users to create categories and add transactions to each category.',
    desktopmainTag: ['html', 'Ruby on Rails', 'css'],
    popmobiledetail: 'This mobile web app allows users to create categories and add transactions to each category. The app will show the total amount spent on each category.',
    popdesktopdetail: 'This mobile web app allows users to create categories and add transactions to each category. The app will show the total amount spent on each category. The app is built with Ruby on Rails. The app is deployed on Render.',
    seelive: 'See live',
    seesource: 'See Source',
    liveLink: 'https://budgetapprails.onrender.com/',
    liveSource: 'https://github.com/jugosack/BudgetAppRails',
  },
  {
    desktopName: 'MILCON 2023',
    mobileName: 'MILCON 2023',
    desktopClient: ['2IDRJA', '&#x2022 Lead Developer', '&#x2022 2022'],
    mobileClient: ['2IDRJA', '&#x2022 Lead Developer', '&#x2022 2022'],
    desktopTag: ['html', 'css', 'javascript', 'Github'],
    mobileTag: ['html', 'css', 'javascript'],
    desktopPicture: './images/conference_dek.png',
    mobilePicture: './images/conference_mob.png',
    desktopAlt: 'MILCON 2023',
    mobileAlt: 'MILCON 2023',
    desktopdetail: 'The "MILCON 2023" Capstone project is a website redesign for a conference of the same name. The website was built using HTML, CSS, and JavaScript, and it features a sleek and modern design that reflects the brand aesthetic. The website includes information about the conference, including location, dates and featured speakers.',
    mobiledetail: 'The "MILCON 2023" Capstone project is a website redesign for a conference of the same name.',
    desktopmainTag: ['html', 'Github', 'css', 'javascript'],
    popmobiledetail: 'The "MILCON 2023" Capstone project is a website redesign for a conference of the same name. The website was built using HTML, CSS, and JavaScript, and it features a sleek and modern design that reflects the brand aesthetic. The website includes information about the conference, including location, dates and featured speakers.',
    popdesktopdetail: 'The "MILCON 2023" Capstone project is a website redesign for a conference of the same name. The website was built using HTML, CSS, and JavaScript, and it features a sleek and modern design that reflects the brand aesthetic. The website includes information about the conference, including location, dates and featured speakers.',
    seelive: 'See live',
    seesource: 'See Source',
    liveLink: 'https://jugosack.github.io/HTML-CSS-JavaScript-capstone-project---Conference-page/',
    liveSource: 'https://github.com/jugosack/HTML-CSS-JavaScript-capstone-project---Conference-page',
  },
];

// add event listener to click barclick
barClick.addEventListener('click', () => {
  mobileoption.style.display = 'block';
  body.style.overflow = 'hidden';
});

// add event listener to mobile option
mobileoption.addEventListener('click', () => {
  mobileoption.style.display = 'none';
  body.style.overflow = 'auto';
});
// check screen size and turned off mobile option in desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileoption.style.display = 'none';
    body.style.overflow = 'auto';
    inputName.placeholder = 'Lorem Ipsum Dolor';
  } else {
    inputName.placeholder = 'Lorem Ipsum';
  }
});
if (window.innerWidth < 768) {
  inputName.placeholder = 'Lorem Ipsum';
}
// close button on popup menu;
function closePopupMenu() {
  popupWindow.style.display = 'none';
  body.style.overflow = 'auto';
  window.addEventListener('resize', () => {
    popupWindow.style.display = 'none';
    body.style.overflow = 'auto';
  });
}
closePopupMenu();

// clone cards to display
for (let i = 0; i <= 2; i += 1) {
  const clone = worksCard.cloneNode(true);
  worksCard.after(clone);
}

const seeProject = Array.from(document.querySelectorAll('.projectbutton'));
const generateCard = document.getElementsByClassName('workscard');

for (let i = 0; i <= 3; i += 1) {
  generateCard[i].getElementsByClassName('mobilepic')[0].src = projectData[i].mobilePicture;
  generateCard[i].getElementsByClassName('desktoppic')[0].src = projectData[i].desktopPicture;
  generateCard[i].getElementsByClassName('projecttitle')[0].style.display = 'block';
  generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML = projectData[i].desktopName;
  while (generateCard[i].getElementsByClassName('client')[0].firstChild) { generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild); }
  projectData[i].desktopClient.forEach((item, index) => {
    const li = document.createElement('li');
    const classname = ['type', 'tech', 'year'];
    li.innerHTML = item;
    li.classList.add(classname[index]);

    generateCard[i].getElementsByClassName('client')[0].appendChild(li);
  });
  generateCard[i].getElementsByClassName('projectdetail')[0].style.display = 'block';
  generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML = projectData[i].desktopdetail;

  while (generateCard[i].getElementsByClassName('tags')[0].firstChild) { generateCard[i].getElementsByClassName('tags')[0].removeChild(generateCard[i].getElementsByClassName('tags')[0].firstChild); }
  projectData[i].desktopmainTag.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    generateCard[i].getElementsByClassName('tags')[0].appendChild(li);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML = projectData[i].mobileName;
      while (generateCard[i].getElementsByClassName('client')[0].firstChild) { generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild); }
      projectData[i].mobileClient.forEach((item, index) => {
        const li = document.createElement('li');
        const classname = ['type', 'tech', 'year'];
        li.innerHTML = item;
        li.classList.add(classname[index]);
        generateCard[i].getElementsByClassName('client')[0].appendChild(li);
      });
      generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML = projectData[i].mobiledetail;
    } else {
      generateCard[i].getElementsByClassName('projecttitle')[0].innerHTML = projectData[i].desktopName;
      while (generateCard[i].getElementsByClassName('client')[0].firstChild) { generateCard[i].getElementsByClassName('client')[0].removeChild(generateCard[i].getElementsByClassName('client')[0].firstChild); }
      projectData[i].desktopClient.forEach((item, index) => {
        const li = document.createElement('li');
        const classname = ['type', 'tech', 'year'];
        li.innerHTML = item;
        li.classList.add(classname[index]);

        generateCard[i].getElementsByClassName('client')[0].appendChild(li);
      });
      generateCard[i].getElementsByClassName('projectdetail')[0].innerHTML = projectData[i].desktopdetail;
    }
  });
}
// popup windows data populate
for (let i = 0; i <= 3; i += 1) {
  seeProject[i].addEventListener('click', () => {
    popupWindow.style.display = 'block';
    body.style.overflow = 'hidden';
    document.getElementById('popname').innerHTML = projectData[i].desktopName;
    while (popClient.firstChild)popClient.removeChild(popClient.firstChild);
    projectData[i].desktopClient.forEach((item, index) => {
      const li = document.createElement('li');
      const classname = ['type', 'tech', 'year'];
      li.innerHTML = item;
      li.classList.add(classname[index]);
      popClient.appendChild(li);
    });
    popDesktopDetail.innerHTML = projectData[i].popdesktopdetail;
    seeLive.innerHTML = ''; // Clear the inner HTML of the "See Live" button
    const liveLink = document.createElement('a'); // Create an anchor element
    liveLink.href = projectData[i].liveLink; // Use the liveLink property from projectData
    liveLink.target = '_blank'; // Open the link in a new tab/window
    liveLink.textContent = projectData[i].seelive; // Set the text content of the link
    liveLink.style.textDecoration = 'none';
    seeLive.appendChild(liveLink); // Append the link to the "See Live" button

    seeSource.innerHTML = '<i class="fa-brands fa-github"></i> ';

    const liveSource = document.createElement('a'); // Create an anchor element
    liveSource.href = projectData[i].liveSource; // Use the liveLink property from projectData
    liveSource.target = '_blank'; // Open the link in a new tab/window
    liveSource.textContent = projectData[i].seesource; // Set the text content of the link
    liveSource.style.textDecoration = 'none';
    seeSource.appendChild(liveSource); // Append the link to the "See Live" button

    popPicture.src = projectData[i].desktopPicture;
    popPicture.alt = projectData[i].desktopAlt;
    while (popTag.firstChild)popTag.removeChild(popTag.firstChild);
    projectData[i].desktopTag.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item;
      popTag.appendChild(li);
    });
    popMobileDetail.style.display = 'none';
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        popName.style.fontSize = '24px';
        popMobileDetail.style.display = 'block';
        popupWindow.style.display = 'block';
        popupWindow.style.width = '375px';
        body.style.overflow = 'hidden';
        document.getElementById('popname').innerHTML = projectData[i].mobileName;
        while (popClient.firstChild)popClient.removeChild(popClient.firstChild);
        projectData[i].mobileClient.forEach((item, index) => {
          const li = document.createElement('li');
          const classname = ['type', 'tech', 'year'];
          li.innerHTML = item;
          li.classList.add(classname[index]);
          popClient.appendChild(li);
        });
        popMobileDetail.innerHTML = projectData[i].popmobiledetail;
        popPicture.src = projectData[i].mobilePicture;
        popPicture.alt = projectData[i].mobileAlt;
        while (popTag.firstChild)popTag.removeChild(popTag.firstChild);
        projectData[i].mobileTag.forEach((item) => {
          const li = document.createElement('li');
          li.innerHTML = item;
          popTag.appendChild(li);
        });
      } else {
        popupWindow.style.width = '100%';
        popupWindow.style.display = 'block';
        body.style.overflow = 'hidden';
        document.getElementById('popname').innerHTML = projectData[i].desktopName;
        while (popClient.firstChild)popClient.removeChild(popClient.firstChild);
        projectData[i].desktopClient.forEach((item, index) => {
          const li = document.createElement('li');
          const classname = ['type', 'tech', 'year'];
          li.innerHTML = item;
          li.classList.add(classname[index]);
          popClient.appendChild(li);
        });
        popPicture.src = projectData[i].desktopPicture;
        popPicture.alt = projectData[i].desktopAlt;
        while (popTag.firstChild)popTag.removeChild(popTag.firstChild);
        projectData[i].desktopTag.forEach((item) => {
          const li = document.createElement('li');
          li.innerHTML = item;
          popTag.appendChild(li);
        });
        popMobileDetail.style.display = 'none';
      }
    });
    if (window.innerWidth < 768) {
      popName.style.fontSize = '24px';
      popupWindow.style.width = '375px';
      popMobileDetail.style.display = 'block';
      popupWindow.style.display = 'block';
      body.style.overflow = 'hidden';
      document.getElementById('popname').innerHTML = projectData[i].mobileName;
      while (popClient.firstChild)popClient.removeChild(popClient.firstChild);
      projectData[i].mobileClient.forEach((item, index) => {
        const li = document.createElement('li');
        const classname = ['type', 'tech', 'year'];
        li.innerHTML = item;
        li.classList.add(classname[index]);
        popClient.appendChild(li);
      });
      popPicture.src = projectData[i].mobilePicture;
      popPicture.alt = projectData[i].mobileAlt;
      while (popTag.firstChild)popTag.removeChild(popTag.firstChild);
      projectData[i].mobileTag.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        popTag.appendChild(li);
      });
    }
  });
}
// form validation starting here.
const email = document.getElementById('email');
const errorMessage = document.getElementById('errormessage');
const form = document.getElementById('form');

// check email validation  of  lower cases
const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
// check email address and submit form
form.addEventListener('submit', (event) => {
  errorMessage.innerHTML = '';
  if (emailValidation(email.value)) {
    errorMessage.innerHTML = '';
  } else {
    event.preventDefault();
    errorMessage.innerHTML = 'please change your email address to lower case';
  }
});

// const expandFrameIcons = document.querySelectorAll('.frameicon');
// const expandSkillIcons = document.querySelectorAll('.skillicon');
// const sectionSpacing = document.getElementById('About');
// const contactFooter = document.getElementById('Contact');

// let isFrameExpanded = false;
// let isSkillExpanded = false;

// expandFrameIcons.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     isFrameExpanded = !isFrameExpanded;
//     sectionSpacing.classList.toggle('marginFrameBottom', isFrameExpanded);
//     updateSectionHeight();
//     updateContactMargin();
//   });
// });

// expandSkillIcons.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     isSkillExpanded = !isSkillExpanded;
//     sectionSpacing.classList.toggle('white-background', isSkillExpanded);
//     updateSectionHeight();
//     updateContactMargin();
//   });
// });

// function updateSectionHeight() {
//   if (isSkillExpanded && isFrameExpanded) {
//     sectionSpacing.style.height = '1300px';
//   } else if (isSkillExpanded || isFrameExpanded) {
//     sectionSpacing.style.height = '1000px';
//   } else {
//     sectionSpacing.style.height = ''; // Reset to default height
//   }
// }

// function updateContactMargin() {
//   contactFooter.style.marginTop = isFrameExpanded || isSkillExpanded ? '0px' : '';
// }
const expandFrameIcons = document.querySelectorAll('.frameicon');
const expandSkillIcons = document.querySelectorAll('.skillicon');
const sectionSpacing = document.getElementById('About');
const contactFooter = document.getElementById('Contact');

let isFrameExpanded = false;
let isSkillExpanded = false;

expandFrameIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    isFrameExpanded = !isFrameExpanded;
    sectionSpacing.classList.toggle('marginFrameBottom', isFrameExpanded);
    updateSectionHeight();
    updateContactMargin();
  });
});

expandSkillIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    isSkillExpanded = !isSkillExpanded;
    sectionSpacing.classList.toggle('white-background', isSkillExpanded);
    updateSectionHeight();
    updateContactMargin();
  });
});

function updateSectionHeight() {
  if (isSkillExpanded && isFrameExpanded) {
    sectionSpacing.style.height = '2310px';
  } else if (isSkillExpanded) {
    sectionSpacing.style.height = '1700px';
  } else if (isFrameExpanded) {
    sectionSpacing.style.height = '1900px';
  } else {
    sectionSpacing.style.height = ''; // Reset to default height
  }
}

function updateContactMargin() {
  contactFooter.style.marginTop = isFrameExpanded || isSkillExpanded ? '0px' : '';
}

document.addEventListener('DOMContentLoaded', () => {
  const langIcons = document.querySelectorAll('.langicon');
  const techStackLang = document.querySelector('.techstacklang');
  const techStackLangOne = document.querySelector('.techstacklang_1');

  techStackLang.classList.add('show');
  techStackLangOne.classList.add('show');

  langIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('rotate');
      if (icon.classList.toggle('show')) {
        techStackLang.classList.remove('show');
        techStackLangOne.classList.remove('show');
      } else {
        techStackLang.classList.add('show');
        techStackLangOne.classList.add('show');
      }
    });
  });

  const frameIcon = document.querySelector('.frameicon');
  const techStackFrame = document.querySelector('.techstackframe');
  const techStackFrameOne = document.querySelector('.techstackframe_1');

  frameIcon.addEventListener('click', () => {
    techStackFrame.classList.toggle('show');
    techStackFrameOne.classList.toggle('show');
    frameIcon.classList.toggle('rotate');
  });

  const skillIcon = document.querySelector('.skillicon');
  const techStackSkill = document.querySelector('.techstackskill');
  const techStackSkillOne = document.querySelector('.techstackskill_1');

  skillIcon.addEventListener('click', () => {
    techStackSkill.classList.toggle('show');
    techStackSkillOne.classList.toggle('show');
    skillIcon.classList.toggle('rotate');
  });
});
