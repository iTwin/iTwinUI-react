/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Stepper } from './Stepper';
import { WorkflowDiagram } from './WorkflowDiagram';

export type WizardLocalization = {
  stepsCountLabel: (currentStep: number, totalSteps: number) => string;
};

export type WizardType = 'default' | 'long' | 'workflow';

export type StepProperties = {
  /**
   * The title/label of the step.
   */
  name: string;
  /**
   * A tooltip giving detailed description to this step.
   */
  description?: string;
};

export type WizardProps = {
  /**
   * Current step index, 0 - based.
   */
  currentStep?: number;
  /**
   * An array of step objects.
   */
  steps: StepProperties[];
  /**
   *  The type of Wizard to display.
   *  @default 'default'
   */
  type?: WizardType;
  /**
   *  Option to provide localized strings.
   */
  localization?: WizardLocalization;
  /**
   *  Click handler on completed step.
   */
  onStepClick?: (clickedIndex: number) => void;
};

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
