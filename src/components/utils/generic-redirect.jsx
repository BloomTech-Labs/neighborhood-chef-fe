import { useHistory, useParams } from "react-router-dom";
import ls from "local-storage";

function GenericRedirect(props) {
  const { push } = useHistory();
  const { redirect_path } = useParams();

  if (!ls.get("access_token")) {
    push(`/generic-redirect/${redirect_path}`);
  } else {
    push(`/${redirect_path}`);
  }

  return null;
}

export default GenericRedirect;
