'use client';
import classNames from 'classnames';
import React, { createContext } from 'react';

import { prefixCls } from '../../utils';
import './_index.scss';
import { BreadcrumbItemProps } from './breadcrumb-item';

export interface BreadcrumbProps {
  /**
   * @description 分隔符 "v0.0.7"
   * @default "/"
   */
  separator?: string;
  /**
   * @description 未激活字体颜色
   */
  inactiveColor?: string;
  /**
   * @description 激活字体颜色
   */
  activeColor?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选择事件
   */
  onSelect?: (selectIndex: number) => void;
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
}

interface IBreadcrumbContext {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}

export const BreadcrumbContext = createContext<IBreadcrumbContext>({
  length: 0,
});

export const BreadcrumbPrefixCls = prefixCls + '-breadcrmb';

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {
    separator = '/',
    children,
    inactiveColor,
    activeColor,
    onSelect,
  } = props;

  const handleSelect = (index: number) => {
    onSelect && onSelect(index);
  };

  const breadcrmbContextContent: IBreadcrumbContext = {
    length: (children as [])?.length,
    separator,
    inactiveColor,
    activeColor,
    onSelect: handleSelect,
  };
  const classes = classNames(BreadcrumbPrefixCls);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<BreadcrumbItemProps>;
      if (childElement.type.displayName === 'BreadcrumbItem') {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          'Warning: Breadcrumb has a child which is not BreadcrumbItem',
        );
      }
    });
  };
  return (
    <ul className={classes}>
      <BreadcrumbContext.Provider value={breadcrmbContextContent}>
        {renderChildren()}
      </BreadcrumbContext.Provider>
    </ul>
  );
};

export default Breadcrumb;
