import 'react-toastify/dist/ReactToastify.css';
import notify from './useNotification';

const checkInternet = () => {
  if(!navigator.onLine)
      {
        notify("NO Internet Please Try Again","warn")
        console.log('add sub')
        return
      }
}

export default checkInternet;