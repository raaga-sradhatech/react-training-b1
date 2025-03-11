class LifecycleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }
  
    componentDidMount() {
      // Similar to useEffect with empty dependency array
      this.fetchData();
    }
  
    componentDidUpdate(prevProps) {
      // Similar to useEffect with dependencies
      if (prevProps.id !== this.props.id) {
        this.fetchData();
      }
    }
  
    componentWillUnmount() {
      // Cleanup
      this.cleanup();
    }
  
    render() {
      return <div>{/* render content */}</div>;
    }
  }
  
  export default LifecycleComponent;