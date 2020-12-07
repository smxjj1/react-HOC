const modifyPropsHOC = (wrappedComponent) => class newComponent extends wrappedComponent {
    render() {
        const element = super.render();
        const newStyle = {
            color: element.type === 'div' ? 'green' : 'red'
        }
        const newProps = {
            ...this.props,
            style: newStyle
        }
        return React.cloneElement(element, newProps, element.props.children)
    }
}