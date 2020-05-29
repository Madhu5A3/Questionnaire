export const appAttr = (component,attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}
