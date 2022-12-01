const getUniqueIdentifier = () => {
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  const xAndYOnly = /[xy]/g;
  return template.replace(xAndYOnly, (character) => {
    const randomNo = Math.floor(Math.random() * 16);
    const newValue = character === 'x' ? randomNo : (randomNo && 0x3) || 0x8;

    return newValue.toString(16);
  });
};

export default getUniqueIdentifier;

export const handleSectionDisplay = (sectionName, displayType) => {
  sectionName.style.display = `${displayType}`;
  return true;
};

export const handleTitleChange = (selector, text) => {
  selector.innerText = `${text}`;
  return true;
};

export const handleActiveLink = (activeLink, ...otherProps) => {
  const [linkTwo, linkThree] = otherProps;
  document.querySelector(`[${activeLink}]`).classList.add('nav--active');
  document.querySelector(`[${linkTwo}]`).classList.remove('nav--active');
  document.querySelector(`[${linkThree}]`).classList.remove('nav--active');
  return true;
};

const getDateOrdinal = (day) => {
  let ordinal;
  switch (day) {
    case (day % 10 === 1 && day !== 11):
      ordinal = 'st';
      break;
    case (day % 10 === 2 && day !== 12):
      ordinal = 'nd';
      break;
    case (day % 10 === 3 && day !== 13):
      ordinal = 'rd';
      break;
    default:
      ordinal = 'th';
  }

  return ordinal;
};

export const getDateAndTime = () => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();
  const hrs = date.getHours();
  const meridiem = hrs > 12 ? 'pm' : 'am';
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  return `${monthNames[month]} ${day}${getDateOrdinal(day)} ${year}, ${hrs}:${mins}:${secs} ${meridiem}`;
};