export const getComponentPath = (component: string) => {
  const folder = getFolder(component);
  return `@itwin/itwinui-react/cjs/core/${folder}/${component}.d.ts`
}

const getFolder = (component: string) => {
  if (['Button', 'DropdownButton', 'IconButton', 'IdeasButton', 'SplitButton'].includes(component)) {
    return `Buttons/${component}`;
  } else if (['Anchor', 'Blockquote', 'Body', 'Code', 'Headline', 'Kbd', 'Leading', 'Small', 'Subheading', 'Text', 'Title'].includes(component)) {
    return `Typography/${component}`;
  }  else if (['Thumb', 'Track'].includes(component)) {
    return 'Slider';
  } else if (component.includes('Information')) {
    return 'InformationPanel';
  } else if (component.includes('Color')) {
    return 'ColorPicker';
  } else if (component.includes('FileUpload')) {
    return 'FileUpload';
  } else if (component.includes('Header')) {
    return 'Header';
  } else if (component.includes('Menu')) {
    return 'Menu';
  } else if (component.includes('Modal')) {
    return 'Modal';
  } else if (component.includes('RadioTile')) {
    return 'RadioTiles';
  } else if (component.includes('Side')) {
    return 'SideNavigation';
  } else if (component.includes('Tab')) {
    return 'Tab';
  } else if (component.includes('Tag')) {
    return 'Tag';
  } else if (component.includes('Toast')) {
    return 'Toast';
  } else if (component.includes('Tree')) {
    return 'Tree';
  } else if (component.includes('Step')) {
    return 'Wizard';
  } else {
    return component;
  }
}