/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/stepper.css';
import '@itwin/itwinui-css/css/workflow-diagram.css';
import { Step } from './Step';

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
export const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
  (props, ref) => {
    const {
      currentStep,
      steps,
      type = 'default',
      localization = defaultWizardLocalization,
      onStepClick,
      ...rest
    } = props;

    const boundedCurrentStep = Math.min(
      Math.max(0, currentStep ?? 0),
      steps.length - 1,
    );

    useTheme();

    const allSteps = (
      <ol className={type === 'workflow' ? 'iui-workflow-diagram' : undefined}>
        {steps.map((s, index) => (
          <Step
            key={index}
            index={index}
            title={type === 'long' ? '' : s.name}
            currentStepNumber={boundedCurrentStep}
            totalSteps={steps.length}
            type={type}
            onClick={onStepClick}
            description={s.description}
          />
        ))}
      </ol>
    );

    return type !== 'workflow' ? (
      <div className='iui-stepper' ref={ref} {...rest}>
        {allSteps}
        {type === 'long' && (
          <div className='iui-stepper-steps-label'>
            <span className='iui-stepper-steps-label-count'>
              {localization.stepsCountLabel(
                boundedCurrentStep + 1,
                steps.length,
              )}
            </span>
            {steps[boundedCurrentStep].name}
          </div>
        )}
      </div>
    ) : (
      allSteps
    );
  },
);

export default Wizard;
