/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { Tooltip } from '../Tooltip';
import { WizardType } from './Wizard';

export type StepProps = {
  /**
   * The title/label of the step.
   */
  title: string;
  /**
   * the index of this step, 0-based.
   */
  index: number;
  /**
   * the Wizard's current step number, 0-based.
   */
  currentStepNumber: number;
  /**
   * number of total steps in the wizard.
   */
  totalSteps: number;
  /**
   * Wizard type.
   */
  type: WizardType;
  /**
   *  Click handler on completed step.
   */
  onClick?: (clickedIndex: number) => void;
  /**
   * A tooltip giving detailed description to this step.
   */
  description?: string;
};

export const Step = (props: StepProps) => {
  const {
    title,
    index,
    currentStepNumber,
    totalSteps,
    type,
    onClick,
    description,
    ...rest
  } = props;

  const isLast = totalSteps === index + 1;
  const isPast = currentStepNumber > index;
  const isActive = currentStepNumber === index;

  const onCompletedClick = () => {
    if (isPast && !!onClick) {
      onClick(index);
    }
  };

  const stepShape = (
    <span
      className={cx('iui-wizards-step', {
        'iui-wizards-step-completed': isPast,
        'iui-wizards-step-current': isActive,
        'iui-clickable': !!onClick && isPast,
      })}
      style={{ width: `${100 / totalSteps}%` }}
      onClick={onCompletedClick}
      {...rest}
    >
      {index !== 0 && (
        <span
          className={cx(
            'iui-wizards-step-track',
            'iui-wizards-step-track-before',
          )}
        />
      )}

      {type !== 'workflow' && (
        <span className='iui-wizards-step-title'>{title}</span>
      )}
      {!isLast && (
        <span
          className={cx(
            'iui-wizards-step-track',
            'iui-wizards-step-track-after',
          )}
        />
      )}
      <span className='iui-wizards-step-circle'>
        {type === 'workflow' ? title : index + 1}
      </span>
    </span>
  );

  return (
    <>
      {description ? (
        <Tooltip content={description}>{stepShape}</Tooltip>
      ) : (
        stepShape
      )}
      {!isLast && (
        <span
          className={cx(
            'iui-wizards-step-track',
            'iui-wizards-step-track-main',
            {
              'iui-wizards-step-track-filled': type !== 'workflow' && isPast,
            },
          )}
        />
      )}
    </>
  );
};
