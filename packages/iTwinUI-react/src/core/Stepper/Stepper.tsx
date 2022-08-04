/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Step, StepCustomProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/stepper.css';

export type StepperLocalization = {
  stepsCountLabel: (currentStep: number, totalSteps: number) => string;
};

export type StepperProps = {
  /**
   * Current step index, 0 - based.
   */
  currentStep?: number;
  /**
   * An array of step objects.
   */
  steps: StepCustomProps[];
  /**
   *  The type of Stepper to display.
   *  @default 'default'
   */
  type?: 'default' | 'long';
  /**
   *  Option to provide localized strings.
   */
  localization?: StepperLocalization;
  /**
   *  Click handler on completed step.
   */
  onStepClick?: (clickedIndex: number) => void;
};

const defaultStepperLocalization: StepperLocalization = {
  stepsCountLabel: (currentStep, totalSteps) =>
    `Step ${currentStep} of ${totalSteps}:`,
};

/**
 * A stepper displays progress through a sequence of logical and numbered steps.
 * It may also be used for navigation.
 *
 * The `type` can be set to 'long' to show labels under steps.
 *
 * @example
 * <Stepper
 *  steps=[{name: "Step One"}, {name: "Step Two"}, {name: "Step Three"}]
 *  currentStep={0}
 *  type='long'
 *  />
 */
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
              title={type === 'long' ? '' : s.title}
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
            <span className='iui-steps-count'>
              {localization.stepsCountLabel(
                boundedCurrentStep + 1,
                steps.length,
              )}
            </span>
            {steps[boundedCurrentStep].title}
          </div>
        )}
      </div>
    );
  },
);

export default Stepper;
