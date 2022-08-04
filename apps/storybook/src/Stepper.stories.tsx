/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Stepper,
  StepperLocalization,
  StepperProps,
} from '@itwin/itwinui-react';

export default {
  title: 'Core/Stepper',
  component: Stepper,
  argTypes: {
    localization: { control: { disable: true } },
    onStepClick: { control: { disable: true } },
  },
} as Meta<StepperProps>;

export const Basic: Story<StepperProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { title: 'First Step' },
      { title: 'Completed Step' },
      { title: 'Current Step' },
      { title: 'Next Step' },
      { title: 'Last Step' },
    ],
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(`Clicked index: ${index}`)();
  };
  return (
    <Stepper
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

Basic.args = {
  currentStep: 2,
  steps: [
    { title: 'First Step' },
    { title: 'Completed Step' },
    { title: 'Current Step' },
    { title: 'Next Step' },
    { title: 'Last Step' },
  ],
};

export const Long: Story<StepperProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { title: 'First Step' },
      { title: 'Completed Step' },
      { title: 'Current Step' },
      { title: 'Next Step' },
      { title: 'Last Step' },
    ],
    type = 'long',
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(`Clicked index: ${index}`)();
  };
  return (
    <Stepper
      type={type}
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

Long.args = {
  currentStep: 2,
  steps: [
    { title: 'First Step' },
    { title: 'Completed Step' },
    { title: 'Current Step' },
    { title: 'Next Step' },
    { title: 'Last Step' },
  ],
  type: 'long',
};

export const LocalizedLong: Story<StepperProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { title: 'First Step' },
      { title: 'Completed Step' },
      { title: 'Current Step' },
      { title: 'Next Step' },
      { title: 'Last Step' },
    ],
    type = 'long',
    ...rest
  } = args;
  const localization: StepperLocalization = {
    stepsCountLabel: (currentStep, totalSteps) =>
      `Localized step ${currentStep} of ${totalSteps}:`,
  };
  const onStepClick = (index: number) => {
    action(`Clicked index: ${index}`)();
  };
  return (
    <Stepper
      type={type}
      currentStep={currentStep}
      steps={steps}
      localization={localization}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

LocalizedLong.args = {
  currentStep: 2,
  steps: [
    { title: 'First Step' },
    { title: 'Completed Step' },
    { title: 'Current Step' },
    { title: 'Next Step' },
    { title: 'Last Step' },
  ],
  type: 'long',
};

export const WithTooltips: Story<StepperProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { title: 'First Step', description: 'First Tooltip' },
      { title: 'Completed Step', description: 'Completed Tooltip' },
      { title: 'Current Step', description: 'Current Tooltip' },
      { title: 'Next Step', description: 'Next Tooltip' },
      { title: 'Last Step', description: 'Last Tooltip' },
    ],
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(`Clicked index: ${index}`)();
  };
  return (
    <Stepper
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

WithTooltips.args = {
  currentStep: 2,
  steps: [
    { title: 'First Step', description: 'First Step Description' },
    { title: 'Completed Step', description: 'Completed Step Description' },
    { title: 'Current Step', description: 'Current Step Description' },
    { title: 'Next Step', description: 'Next Step Description' },
    { title: 'Last Step', description: 'Last Step Description' },
  ],
};
