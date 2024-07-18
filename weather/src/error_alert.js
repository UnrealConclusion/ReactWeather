import Alert from 'react-bootstrap/Alert';

/**
 * Alert window for displaying error messages 
 */
export default function ErrorAlert({show, setShow, message}) {
  if (show) {
    return (
      <Alert style={{position: "absolute", top:"50", left:"50"}} className='error-alert' variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    );
  }
  return"";
}
