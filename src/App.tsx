import { useTranslation } from "react-i18next";

import HeaderContainer from "./containers/user/heder-contener";
import LoGoContainer from "./containers/user/logo-container";
import TeamContainer from "./containers/user/team-container";
import UserContainer from "./containers/user/users-comtainer";


function App() {

  const {t} = useTranslation();

  return (
    <div className="flex justify-center items-center" >
      <HeaderContainer/>
      <LoGoContainer/>
      < TeamContainer/>
      <UserContainer/>
    </div>
  );
}

export default App;
