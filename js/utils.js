const getUniqueIdentifier = () => {
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  const xAndYOnly = /[xy]/g;
  return template.replace(xAndYOnly, (character) => {
    const randomNo = Math.floor(Math.random() * 16);
    const newValue = character === 'x' ? randomNo : (randomNo && 0x3) || 0x8;

    return newValue.toString(16);
  });
};

export const displaySeection = (sectionName, displayType) => {
  sectionName.style.display = `${displayType}`;
  return true;
};

export const handleTitleChange = (selector, text) => {
  selector.style.innerText = `${text}`;
  return true;
};

export default getUniqueIdentifier;