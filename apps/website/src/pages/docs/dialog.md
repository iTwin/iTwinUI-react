---
title: Dialog
description: Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
layout: ../../layouts/MainLayout.astro
setup: |
  import PropsTable from '/src/components/PropsTable.astro';
  import LiveExample from '/src/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/Modal/Modal.d.ts'
exampleCode1: |
  import * as React from 'react'; 
  import { Modal, Button, ModalContent, ModalButtonBar } from '@itwin/itwinui-react';

  export default function App() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

      const closeModal = () => {
        setIsModalOpen(false);
      };

      const onClose = (event: React.SyntheticEvent<Element, Event>) => {
        closeModal();
      };

      const primaryButtonHandle = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      ) => {
        closeModal();
      };

      const secondaryButtonHandle = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      ) => {
        closeModal();
      };

      return (
        <>
          <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            isOpen={isModalOpen}
            title={"Dialog"}
            onClose={onClose}
          >
            <ModalContent>
              A dialog informs users about a task and can contain critical information, require decisions, or involve multiple tasks. Dialogs appear in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
            </ModalContent>
            <ModalButtonBar>
              <Button styleType='high-visibility' onClick={primaryButtonHandle}>
                Primary
              </Button>
              <Button onClick={secondaryButtonHandle}>Secondary</Button>
            </ModalButtonBar>
          </Modal>
        </>
      );
      }
---

<p>{frontmatter.description}</p>

<LiveExample code={frontmatter.exampleCode1} />

A dialog informs users about a task and can contain critical information, require decisions, or involve multiple tasks. Dialogs appear in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

## Anatomy

- Title: must be descriptive of the task at hand. The user must understand the context because they went from the main window to a dialog.
- Close button: only allowed in dismissible dialogs.
- Content
- Actions: see Button standard for best practices.
- Box & shadow
- Overlay: Dialog appears above all other UI elements and casts a black overlay as well as a drop shadow on all other content, creating a strong visual focus on the dialog.

The dialog should be located in the upper half of the screen, because on smaller screens it may get lost. A dialog’s maximum width is 50% of the screen width & the minimum width is 400px. If your content can not fit inside the dialog without scrollbars, you should consider alternative ways to display the information.

When the 400px minimum width conflicts with the 50% maximum of the screen width, then the dialog spans the entire width of the device. This mobile dialog can span the entire height of the screen but should not use scroll bars.

### Informational

Default style when there is no defined status for the alert. Inform users about events that they should be aware of, but that are not disruptive to their work.

## Props

<PropsTable path={frontmatter.propsPath} />

## Related resources
