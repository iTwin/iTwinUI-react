/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/workflow-diagram.css';
import { StepProperties } from './Wizard';
import { Step } from './Step';

export type WorkflowDiagramProps = {
  /**
   * An array of step objects.
   */
  steps: StepProperties[];
  /**
   *  Click handler on completed step.
   */
  onStepClick?: (clickedIndex: number) => void;
};

export const WorkflowDiagram = React.forwardRef<
  HTMLOListElement,
  WorkflowDiagramProps
>((props, ref) => {
  const { steps, onStepClick, ...rest } = props;

  useTheme();

  return (
    <ol className={'iui-workflow-diagram'} ref={ref} {...rest}>
      {steps.map((s, index) => (
        <Step
          key={index}
          index={index}
          title={s.name}
          totalSteps={steps.length}
          type={'workflow'}
          onClick={onStepClick}
          description={s.description}
        />
      ))}
    </ol>
  );
});

export default WorkflowDiagram;
