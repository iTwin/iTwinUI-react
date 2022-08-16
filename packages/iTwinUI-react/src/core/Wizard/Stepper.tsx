/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/stepper.css';
import { WizardProps } from './Wizard';
import { Step } from './Step';

export type StepperLocalization = {
  stepsCountLabel: (currentStep: number, totalSteps: number) => string;
};

export type StepperProps = {
  /**
   *  The type of Stepper to display.
   *  @default 'default'
   */
  type?: 'default' | 'long';
} & WizardProps;

const defaultStepperLocalization: StepperLocalization = {
  stepsCountLabel: (currentStep, totalSteps) =>
    `Step ${currentStep} of ${totalSteps}:`,
};

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const {
      currentStep,
      steps,
      type = 'default',
      localization = defaultStepperLocalization,
      onStepClick,
      ...rest
    } = props;

    const boundedCurrentStep = Math.min(
      Math.max(0, currentStep ?? 0),
      steps.length - 1,
    );

    useTheme();

    return (
      <div className={'iui-stepper'} ref={ref} {...rest}>
        <ol>
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
    );
  },
);

export default Stepper;
