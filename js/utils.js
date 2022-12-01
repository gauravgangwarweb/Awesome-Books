const getUniqueIdentifier = () => {
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  const xAndYOnly = /[xy]/g;
  return template.replace(xAndYOnly, (character) => {
    const randomNo = Math.floor(Math.random() * 16);
    const newValue = character === 'x' ? randomNo : (randomNo && 0x3) || 0x8;

    return newValue.toString(16);
  });
};

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

export default getUniqueIdentifier;