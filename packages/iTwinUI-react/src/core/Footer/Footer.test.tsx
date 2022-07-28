/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Footer, FooterProps, FooterElement } from './Footer';

const renderComponent = (props?: Partial<FooterProps>) => {
  return render(<Footer {...props} />);
};

const urls: FooterElement[] = [
  {
    title: `© ${new Date().getFullYear()} Bentley Systems, Incorporated`,
  },
  {
    title: 'Terms of service',
    url:
      'https://connect-agreementportal.bentley.com/AgreementApp/Home/Eula/view/readonly/BentleyConnect',
  },
  {
    title: 'Privacy',
    url: 'https://www.bentley.com/en/privacy-policy',
  },
  {
    title: 'Terms of use',
    url: 'https://www.bentley.com/en/terms-of-use-and-select-online-agreement',
  },
  {
    title: 'Cookies',
    url: 'https://www.bentley.com/en/cookie-policy',
  },
  {
    title: 'Legal notices',
    url: 'https://connect.bentley.com/Legal',
  },
];

const customUrls: FooterElement[] = [
  {
    title: 'Custom link',
    url: 'https://www.bentley.com/',
  },
  {
    title: 'Products link',
  },
];

const assertFooterItems = (
  items: NodeListOf<HTMLLIElement>,
  data: FooterElement[],
) => {
  items.forEach((element, i) => {
    // Every second item is a separator
    if (i % 2 !== 0) {
      expect(element).toHaveClass('iui-legal-footer-separator');
      return;
    }

    const dataIndex = Math.floor(i / 2);
    expect(element.textContent).toBe(data[dataIndex].title);
    if (data[dataIndex].url) {
      expect((element.firstChild as HTMLAnchorElement).href).toBe(
        data[dataIndex].url,
      );
    }
  });
};

it('should show all default footer elements', () => {
  const { container } = renderComponent();
  const allLi = container.querySelectorAll<HTMLLIElement>('li');
  assertFooterItems(allLi, urls);
});

it('should show all default and custom footer elements', () => {
  const { container } = renderComponent({ customElements: customUrls });
  const allData = [...urls, ...customUrls];
  const allLi = container.querySelectorAll<HTMLLIElement>('li');
  assertFooterItems(allLi, allData);
});

it('should not show default footer elements', () => {
  const { container } = renderComponent({
    customElements: () => customUrls,
  });
  const allLi = container.querySelectorAll<HTMLLIElement>('li');
  assertFooterItems(allLi, customUrls);
});

it('should propagate className and style props correctly', () => {
  const { container } = renderComponent({
    className: 'custom-class',
    style: { position: 'fixed', bottom: 0 },
  });

  const footer = container.querySelector(
    '.iui-legal-footer.custom-class',
  ) as HTMLElement;

  expect(footer).toBeTruthy();
  expect(footer.style.position).toEqual('fixed');
  expect(footer.style.bottom).toEqual('0px');
});

it('should render custom children items', () => {
  const { container } = renderComponent({
    children: [
      <Footer.Item
        key='custom-1'
        title='Custom link 1'
        url='https://www.bentley.com/'
      />,
      <Footer.Separator key='separator-1' />,
      <Footer.Item
        key='custom-2'
        title='Custom link 2'
        url='https://itwin.github.io/iTwinUI-react/'
      />,
    ],
  });

  const footer = container.querySelector('.iui-legal-footer') as HTMLElement;
  expect(footer).toBeTruthy();

  const allLi = container.querySelectorAll<HTMLLIElement>('li');
  assertFooterItems(allLi, [
    { title: 'Custom link 1', url: 'https://www.bentley.com/' },
    { title: 'Custom link 2', url: 'https://itwin.github.io/iTwinUI-react/' },
  ]);
});

it('should render default and custom children items', () => {
  const { container } = renderComponent({
    children: (elements) => (
      <>
        <Footer.Item
          key='custom-1'
          title='Custom link 1'
          url='https://www.bentley.com/'
        />
        {elements.map((element, i) => (
          <React.Fragment key={i}>
            <Footer.Separator />
            <Footer.Item title={element.title} url={element.url} />
          </React.Fragment>
        ))}
      </>
    ),
  });

  const footer = container.querySelector('.iui-legal-footer') as HTMLElement;
  expect(footer).toBeTruthy();

  const allLi = container.querySelectorAll<HTMLLIElement>('li');
  assertFooterItems(allLi, [
    { title: 'Custom link 1', url: 'https://www.bentley.com/' },
    ...urls,
  ]);
});
