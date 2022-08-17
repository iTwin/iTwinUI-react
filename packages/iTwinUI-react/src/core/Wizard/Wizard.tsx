/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Stepper, StepperProps, WizardLocalization } from './Stepper';
import { WorkflowDiagram } from './WorkflowDiagram';

export type WizardType = 'default' | 'long' | 'workflow';

export type WizardProps = {
  /**
   *  The type of Wizard to display.
   *  @default 'default'
   */
  type?: WizardType;
} & Omit<StepperProps, 'type'>;

const defaultWizardLocalization: WizardLocalization = {
  stepsCountLabel: (currentStep, totalSteps) =>
    `Step ${currentStep} of ${totalSteps}:`,
};

/**
 * A wizard displays progress through a sequence of logical and numbered steps.
 * It may also be used for navigation.
 *
 * The `type` can be set to 'long' to show labels under steps.
 *
 * @example
 * <Wizard
 *  steps=[{name: "Step One"}, {name: "Step Two"}, {name: "Step Three"}]
 *  currentStep={0}
 *  type='long'
 *  />
 */
export const Wizard = (props: WizardProps) => {
  const {
    currentStep,
    steps,
    type = 'default',
    localization = defaultWizardLocalization,
    onStepClick,
    ...rest
  } = props;

  return type !== 'workflow' ? (
    <Stepper
      type={type}
      currentStep={currentStep}
      steps={steps}
      localization={localization}
      onStepClick={onStepClick}
      {...rest}
    />
  ) : (
    <WorkflowDiagram steps={steps} {...rest} />
  );
};

export default Wizard;
