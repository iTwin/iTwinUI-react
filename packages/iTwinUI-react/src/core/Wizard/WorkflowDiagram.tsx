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
};

/**
 * A workflow diagram displays a sequence of logical steps.
 *
 * @example
 * <WorkflowDiagram
 *  steps=[{title: "Step One"}, {title: "Step Two"}, {title: "Step Three"}]
 *  />
 */
export const WorkflowDiagram = React.forwardRef<
  HTMLOListElement,
  WorkflowDiagramProps
>((props, ref) => {
  const { steps, ...rest } = props;

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
          description={s.description}
        />
      ))}
    </ol>
  );
});

export default WorkflowDiagram;
