import checkPropTypes from 'check-prop-types';

export const appAttr = (component,attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propCheck = checkPropTypes(component.propTypes, expectedProps, 'props');
    return propCheck;
}