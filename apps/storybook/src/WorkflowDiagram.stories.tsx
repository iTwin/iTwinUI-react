/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { WorkflowDiagram, WorkflowDiagramProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/WorkflowDiagram',
  component: WorkflowDiagram,
  argTypes: {
    localization: { control: { disable: true } },
    onStepClick: { control: { disable: true } },
  },
} as Meta<WorkflowDiagramProps>;

export const Basic: Story<WorkflowDiagramProps> = (args) => {
  const {
    steps = [
      { title: 'Start' },
      { title: 'Set parameters' },
      { title: 'Invite collaborators' },
      { title: 'Review & Approve' },
      { title: 'Complete' },
    ],
    ...rest
  } = args;
  return <WorkflowDiagram steps={steps} {...rest} />;
};

Basic.args = {
  steps: [
    { title: 'Start' },
    { title: 'Set parameters' },
    { title: 'Invite collaborators' },
    { title: 'Review & Approve' },
    { title: 'Complete' },
  ],
};

export const WithTooltips: Story<WorkflowDiagramProps> = (args) => {
  const {
    steps = [
      { title: 'First Step', description: 'First Tooltip' },
      { title: 'Completed Step', description: 'Completed Tooltip' },
      { title: 'Current Step', description: 'Current Tooltip' },
      { title: 'Next Step', description: 'Next Tooltip' },
      { title: 'Last Step', description: 'Last Tooltip' },
    ],
    ...rest
  } = args;

  return <WorkflowDiagram steps={steps} {...rest} />;
};

WithTooltips.args = {
  steps: [
    { title: 'First Step', description: 'First Step Description' },
    { title: 'Completed Step', description: 'Completed Step Description' },
    { title: 'Current Step', description: 'Current Step Description' },
    { title: 'Next Step', description: 'Next Step Description' },
    { title: 'Last Step', description: 'Last Step Description' },
  ],
};
