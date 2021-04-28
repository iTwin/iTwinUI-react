/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import Svg401 from '@itwin/itwinui-illustrations-react/cjs/illustrations/401';
import Svg403 from '@itwin/itwinui-illustrations-react/cjs/illustrations/403';
import Svg404 from '@itwin/itwinui-illustrations-react/cjs/illustrations/404';
import Svg500 from '@itwin/itwinui-illustrations-react/cjs/illustrations/500';
import Svg502 from '@itwin/itwinui-illustrations-react/cjs/illustrations/502';
import Svg503 from '@itwin/itwinui-illustrations-react/cjs/illustrations/503';
import SvgError from '@itwin/itwinui-illustrations-react/cjs/illustrations/Error';
import React from 'react';
import { Button } from '../Buttons/Button';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/non-ideal-state.css';

export type ErrorPageType =
  | '401'
  | '403'
  | '404'
  | '500'
  | '502'
  | '503'
  | 'generic';

export type ErrorTypeTranslations = {
  badGateway: string;
  error: string;
  forbidden: string;
  internalServerError: string;
  pageNotFound: string;
  serviceUnavailable: string;
  unauthorized: string;
};

export type ErrorPageProps = {
  /**
   * Type of error controls image and default text
   */
  errorType: ErrorPageType;

  /**
   * Primary heading for the error page
   */
  errorName?: string;

  /**
   * Secondary text to explain the error
   * Can include html in order to provide a hyperlink
   * E.g. `Please visit <a href="https://www.bentley.com/help">our support page</a> for help.`
   */
  errorMessage?: React.ReactNode;

  /**
   * On click handler for primary button, if left out no primary button will be displayed
   */
  primaryButtonHandle?: () => void;

  /**
   * Text for primary button, if left out no primary button will be displayed
   */
  primaryButtonLabel?: string;

  /**
   * On click handler for secondary button, if left out no secondary button will be displayed
   */
  secondaryButtonHandle?: () => void;

  /**
   * Text for secondary button, if left out no secondary button will be displayed
   */
  secondaryButtonLabel?: string;

  /**
   * Used to translate default error messages, if no specific @errorName passed in
   */
  translatedErrorMessages?: ErrorTypeTranslations;
};

/**
 * A stylized display to communicate common http errors.
 * @example
 * <ErrorPage errorType='401' />
 */
export const ErrorPage = ({
  errorType,
  errorName,
  errorMessage,
  primaryButtonHandle,
  primaryButtonLabel,
  secondaryButtonHandle,
  secondaryButtonLabel,
  translatedErrorMessages,
  ...rest
}: ErrorPageProps): JSX.Element => {
  useTheme();

  const defaultErrorMessages = {
    badGateway: 'Bad gateway',
    error: 'Error',
    forbidden: 'Forbidden',
    internalServerError: 'Internal server error',
    pageNotFound: 'Page not found',
    serviceUnavailable: 'Service unavailable',
    unauthorized: 'Unauthorized',
    ...translatedErrorMessages,
  } as ErrorTypeTranslations;

  function getErrorIcon(): JSX.Element {
    switch (errorType) {
      case '401': {
        return (
          <Svg401
            className='iui-non-ideal-state-illustration'
            data-testid='error-401'
          />
        );
      }
      case '403': {
        return (
          <Svg403
            className='iui-non-ideal-state-illustration'
            data-testid='error-403'
          />
        );
      }
      case '404': {
        return (
          <Svg404
            className='iui-non-ideal-state-illustration'
            data-testid='error-404'
          />
        );
      }
      case '500': {
        return (
          <Svg500
            className='iui-non-ideal-state-illustration'
            data-testid='error-500'
          />
        );
      }
      case '502': {
        return (
          <Svg502
            className='iui-non-ideal-state-illustration'
            data-testid='error-502'
          />
        );
      }
      case '503': {
        return (
          <Svg503
            className='iui-non-ideal-state-illustration'
            data-testid='error-503'
          />
        );
      }
      case 'generic':
      default: {
        return (
          <SvgError
            className='iui-non-ideal-state-illustration'
            data-testid='error-generic'
          />
        );
      }
    }
  }

  function getHeadingMessage(): string {
    if (errorName) {
      return errorName;
    }

    switch (errorType) {
      case '401': {
        return defaultErrorMessages.unauthorized;
      }
      case '403': {
        return defaultErrorMessages.forbidden;
      }
      case '404': {
        return defaultErrorMessages.pageNotFound;
      }
      case '500': {
        return defaultErrorMessages.internalServerError;
      }
      case '502': {
        return defaultErrorMessages.badGateway;
      }
      case '503': {
        return defaultErrorMessages.serviceUnavailable;
      }
      case 'generic':
      default: {
        return defaultErrorMessages.error;
      }
    }
  }

  function getPrimaryButton(): JSX.Element | undefined {
    if (!primaryButtonHandle || !primaryButtonLabel) {
      return undefined;
    }
    return (
      <Button styleType='high-visibility' onClick={primaryButtonHandle}>
        {primaryButtonLabel}
      </Button>
    );
  }

  function getSecondaryButton(): JSX.Element | undefined {
    if (!secondaryButtonHandle || !secondaryButtonLabel) {
      return undefined;
    }
    return (
      <Button styleType='default' onClick={secondaryButtonHandle}>
        {secondaryButtonLabel}
      </Button>
    );
  }

  function getActions(): JSX.Element | undefined {
    const primaryButton = getPrimaryButton();
    const secondaryButton = getSecondaryButton();

    if (!primaryButton && !secondaryButton) {
      return undefined;
    }

    return (
      <div className='iui-non-ideal-state-actions'>
        {primaryButton}
        {secondaryButton}
      </div>
    );
  }

  return (
    <div className='iui-non-ideal-state' {...rest}>
      {getErrorIcon()}
      <div className='iui-non-ideal-state-title'>{getHeadingMessage()}</div>
      {errorMessage && (
        <div className='iui-non-ideal-state-description'>{errorMessage}</div>
      )}
      {getActions()}
    </div>
  );
};

export default ErrorPage;
